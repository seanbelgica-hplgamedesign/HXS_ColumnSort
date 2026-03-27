using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TutorialManager : MonoBehaviour
{
    [Header("Basic Info")]
    public bool IntroAnim;
    [SerializeField] CanvasGroup tutorialPanel;
    [SerializeField] RectTransform tutorialText;
    [SerializeField] RectTransform tutorialTiles;
    public GameObject handTool;
    [SerializeField] RectTransform dropTarget;
    [SerializeField] Vector2 oldStarter;
    [SerializeField] Vector2 starterPos;
    [SerializeField] Vector2 baseP;
    [SerializeField] HexGroup dragger;
    [SerializeField] List<RectTransform> dragPos;
    [SerializeField] List<RectTransform> basePos;
    [SerializeField] GameObject sparklePrefab;

    [Header("Idle Timer")]
    [SerializeField] float currentTimer;
    [SerializeField] float maxTimer = 3;
    [SerializeField] bool timerCalled;

    #region Instance Calling
    public static TutorialManager Instance;
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(this.gameObject);
        }
    }
    #endregion
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(DoIntro());
    }

    private void Update()
    {
        if (LevelManager.Instance.levelPicking) { currentTimer = 3; return; }
        foreach (HexGroup h in GameManager.Instance.currentMixers) { if (h.isEmptying) { currentTimer = 3; return; } if (h.isTransferring) { currentTimer = 3; return; } }

        if (!IntroAnim && !CTAManager.Instance.GameOver)
        {
            currentTimer -= Time.deltaTime;
            if (currentTimer < 0)
            {
                if (!timerCalled)
                {
                    if (GameManager.Instance.currentHexDrag)
                    {
                        ImmediateFreeBase();                        
                    }
                    else
                    {
                        DraggerToFreeBase(true);
                    }
                    timerCalled = true;
                }
                else
                {
                    if (currentTimer < -4f)
                    {
                        currentTimer = 1.5f;
                        handTool.GetComponent<CanvasGroup>().DOFade(0, 0.5f).OnComplete(() =>
                        {
                            timerCalled = false;
                        });
                    }
                }
            }
            if (Input.GetMouseButtonDown(0))
            {
                if (dragger != GameManager.Instance.currentHexDrag) { GetStarterPos(); }
                ResetTimer();
            }
            if (Input.GetMouseButtonUp(0)) dragger = null;
        }
    }

    public void ResetTimer()
    {
        currentTimer = 3; handTool.GetComponent<CanvasGroup>().alpha = 0; timerCalled = false;
        handTool.GetComponent<RectTransform>().DOKill();
    }

    private IEnumerator DoIntro()
    {
        yield return new WaitUntil(() => !CameraInfo.Instance.IntroCamera);

        tutorialPanel.DOFade(1, 0.25f);
        tutorialTiles.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        tutorialText.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        handTool.GetComponent<CanvasGroup>().alpha = 1;

        Sequence hand = DOTween.Sequence();
        hand.Append(handTool.GetComponent<RectTransform>().DOScale(0.9f, 0.5f).SetLoops(5, LoopType.Yoyo));
        hand.Append(handTool.GetComponent<RectTransform>().DOScale(1f, 0f));
        hand.Append(handTool.GetComponent<RectTransform>().DOAnchorPos(dropTarget.anchoredPosition, 0.5f));
        hand.Append(handTool.GetComponent<RectTransform>().DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo));
        hand.Play();

        GetStarterPos();
        StartCoroutine(IntroDropTile());
    }

    private IEnumerator IntroDropTile()
    {
        yield return new WaitUntil(() => GameManager.Instance.currentHexDrag);
        tutorialPanel.DOFade(0, 0.25f);
        tutorialTiles.DOKill();
        tutorialText.DOKill();

        ResetTimer();
        IntroAnim = false;
        //currentTimer = 3; handTool.GetComponent<CanvasGroup>().alpha = 0; timerCalled = false;
    }

    public void GetStarterPos()
    {
        if (IntroAnim)
        {
            starterPos = dragPos[1].anchoredPosition;
            handTool.GetComponent<RectTransform>().anchoredPosition = starterPos;
        }
        else
        {
            while (true)
            {
                if (GameManager.Instance.currentHexDrag)
                {
                    //Debug.Log("Choosing held hand");
                    dragger = GameManager.Instance.currentHexDrag;
                    int x = 0; 
                    foreach (HexGroup hex in GameManager.Instance.hexDraggers)
                    {
                        if (hex == GameManager.Instance.currentHexDrag)
                        {
                            starterPos = dragPos[x].anchoredPosition;
                            break;
                        }
                        x++;
                    }
                    handTool.GetComponent<RectTransform>().anchoredPosition = starterPos;
                    return;
                }
                else
                {
                    foreach (HexGroup drag in GameManager.Instance.hexDraggers)
                    {
                        foreach (HexBase b in GameManager.Instance.hexBases)
                        {
                            if (b.occupied)
                            {
                                if (drag.stackColor == b.occupiedHex.stackColor)
                                {
                                    foreach (HexBase near in b.nearbyBases)
                                    {
                                        if (!near.occupied)
                                        {
                                            //Debug.Log("Choosing held hand");
                                            oldStarter = starterPos;
                                            dragger = drag;
                                            starterPos = dragPos[drag.draggerNum - 1].anchoredPosition;
                                            handTool.GetComponent<RectTransform>().anchoredPosition = starterPos;
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                //Debug.Log("Choosing random hand");
                int tries = 10;
                while (true)
                {
                    int x = Random.Range(0, dragPos.Count);
                    if (GameManager.Instance.hexDraggers[x].GroupType != GroupType.None || tries == 0)
                    {
                        oldStarter = starterPos;
                        dragger = GameManager.Instance.hexDraggers[x];
                        starterPos = dragPos[x].anchoredPosition;
                        handTool.GetComponent<RectTransform>().anchoredPosition = starterPos;
                        return;
                    }
                    tries--;
                }
            }
        }
    }

    public Vector2 GetRandomBase()
    {
        Vector2 target;
        while (true)
        {
            foreach(HexBase b in GameManager.Instance.hexBases)
            {
                if (b.occupied) //Check if a base is occupied
                {
                    if (b.occupiedHex.stackColor == dragger.stackColor) // Check if toptile color is the same with dragger's toptile color
                    {
                        foreach (HexBase nearby in b.nearbyBases) //Look for any nearby base
                        {
                            if (!nearby.occupied) //Check if nearby is not occupied
                            {
                                int index = 0;
                                foreach (HexBase bases in GameManager.Instance.hexBases) //Look for the previous nearby base that is not occupied
                                {
                                    if (nearby == bases) //Check if its this base
                                    {
                                        if (!GameManager.Instance.hexBases[index].occupied)
                                        {
                                            target = basePos[index].anchoredPosition;
                                            return target;
                                        }
                                    }
                                    index++;
                                }
                            }
                        }
                    }
                }
            }

            //No possible nearby
            int tries = 10;
            while (true)
            {
                int x = Random.Range(0, basePos.Count);
                if (!GameManager.Instance.hexBases[x].occupied || tries == 0)
                {
                    target = basePos[x].anchoredPosition;
                    return target;
                }
                tries--;
            }
        }
    }

    public void DraggerToFreeBase(bool DoAnim)
    {
        GetStarterPos();
        baseP = GetRandomBase();

        if (DoAnim)
        {
            handTool.GetComponent<CanvasGroup>().DOFade(1, 0.5f);
            handTool.GetComponent<RectTransform>().localScale = Vector3.one;
            handTool.GetComponent<RectTransform>().DOKill();
            handTool.GetComponent<RectTransform>().DOScale(0.9f, 0.5f).SetLoops(3, LoopType.Yoyo).OnComplete(() =>
            {
                handTool.GetComponent<RectTransform>().DOAnchorPos(baseP, 0.75f).OnComplete(() =>
                {
                    handTool.GetComponent<RectTransform>().localScale = Vector3.one;
                    handTool.GetComponent<RectTransform>().DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
                });
            });
        }
    }

    public void ImmediateFreeBase()
    {
        handTool.GetComponent<RectTransform>().DOKill();
        if (oldStarter != starterPos) { baseP = GetRandomBase(); }

        int x = 0;
        foreach (HexGroup drag in GameManager.Instance.hexDraggers)
        {
            if (drag == GameManager.Instance.currentHexDrag) { break; }
            x++;
        }
        handTool.GetComponent<CanvasGroup>().DOFade(1, 0.5f);
        handTool.GetComponent<RectTransform>().localScale = Vector3.one;
        handTool.GetComponent<RectTransform>().DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        handTool.GetComponent<RectTransform>().anchoredPosition = baseP;
    }

    public void UpdateTutorialDragger(HexGroup d)
    {
        dragger = d;

        int index = 0;
        foreach (HexGroup hex in GameManager.Instance.hexDraggers)
        {
            if (d == hex)
            {
                starterPos = dragPos[index].anchoredPosition;

                if (oldStarter != starterPos)
                {
                    GetStarterPos();
                    baseP = GetRandomBase();
                } 
                return;
            }
            index++;
        }
    }

    public void UpdatePositions(GameObject baseParent, int lvl)
    {
        baseParent.transform.SetParent(this.transform);

        basePos.Clear();
        int index = 0;
        foreach (Transform t in baseParent.transform.GetChild(0))
        {
            basePos.Add(t.GetComponent<RectTransform>());
            GameObject sparkle = Instantiate(sparklePrefab, t.transform);
            switch (lvl)
            {
                case 1: sparkle.GetComponent<RectTransform>().sizeDelta = sparklePrefab.GetComponent<RectTransform>().sizeDelta * 0.75f; break;
                case 2: sparkle.GetComponent<RectTransform>().sizeDelta = sparklePrefab.GetComponent<RectTransform>().sizeDelta * 0.5f; break;
                default: break;
            }
            GameManager.Instance.hexBases[index].sparkleVFX = sparkle.GetComponent<Animator>();
            index++;
        }
        dragPos.Clear();
        foreach (Transform t in baseParent.transform.GetChild(1))
        {
            dragPos.Add(t.GetComponent<RectTransform>());
        }
    }
}
