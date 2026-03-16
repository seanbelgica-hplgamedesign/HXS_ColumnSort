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
    [SerializeField] RectTransform handTool;
    [SerializeField] Vector2 oldStarter;
    [SerializeField] Vector2 starterPos;
    [SerializeField] Vector2 baseP;
    [SerializeField] HexGroup dragger;
    [SerializeField] List<RectTransform> dragPos;
    [SerializeField] List<RectTransform> basePos;

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
        if (GameManager.Instance.IsTransferring) return;
        foreach (HexGroup h in GameManager.Instance.currentMixers) if (h.isEmptying) return;

        if (!IntroAnim && !CTAManager.Instance.GameOver)
        {
            currentTimer -= Time.deltaTime;
            if (currentTimer < 0)
            {
                if (!timerCalled)
                {
                    DraggerToFreeBase();
                    timerCalled = true;
                }
                else
                {
                    if (currentTimer < -4f)
                    {
                        currentTimer = 1;
                        handTool.GetComponent<CanvasGroup>().DOFade(0, 1f).OnComplete(() =>
                        {
                            timerCalled = false;
                        });
                    }
                }
            }
            if (GameManager.Instance.currentHexDrag)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    handTool.DOKill();
                    if (oldStarter != starterPos) { baseP = GetRandomBase(); }

                    int x = 0;
                    foreach (HexGroup drag in GameManager.Instance.hexDraggers)
                    {
                        if (drag == GameManager.Instance.currentHexDrag) { break; }
                        x++;
                    }
                    handTool.GetComponent<CanvasGroup>().alpha = 1;
                    handTool.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
                }
                if (Input.GetMouseButton(0))
                {
                    currentTimer = 3;
                    handTool.localScale = Vector3.one;
                    handTool.anchoredPosition = baseP;
                }
            }
        }
    }

    public void ResetTimer()
    {
        currentTimer = 3; handTool.GetComponent<CanvasGroup>().alpha = 0; timerCalled = false;
        handTool.DOKill();
    }

    private IEnumerator DoIntro()
    {
        yield return new WaitUntil(() => !CameraInfo.Instance.IntroCamera);

        tutorialPanel.DOFade(1, 0.25f);
        tutorialTiles.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        tutorialText.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        GameManager.Instance.hexDraggers[0].draggable = false;
        GameManager.Instance.hexDraggers[2].draggable = false;
        handTool.GetComponent<CanvasGroup>().alpha = 1;
        handTool.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        GetStarterPos();

        StartCoroutine(IntroDropTile());
    }

    private IEnumerator IntroDropTile()
    {
        yield return new WaitUntil(() => GameManager.Instance.currentHexDrag);
        tutorialPanel.DOFade(0, 0.25f);
        tutorialTiles.DOKill();
        tutorialText.DOKill();
        
        GameManager.Instance.hexDraggers[0].draggable = true;
        GameManager.Instance.hexDraggers[2].draggable = true;

        IntroAnim = false;
        //currentTimer = 3; handTool.GetComponent<CanvasGroup>().alpha = 0; timerCalled = false;
    }

    public void GetStarterPos()
    {
        if (IntroAnim)
        {
            starterPos = dragPos[1].anchoredPosition;
            handTool.anchoredPosition = starterPos;
        }
        else
        {
            dragger = null;
            while (true)
            {
                foreach (HexBase b in GameManager.Instance.hexBases)
                {
                    if (b.occupied)
                    {
                        int index = 0;
                        foreach (HexGroup drag in GameManager.Instance.hexDraggers)
                        {
                            if (drag != GameManager.Instance.emptyDrag && drag.topTile.tileColor == b.occupiedHex.topTile.tileColor)
                            {
                                dragger = GameManager.Instance.hexDraggers[index];
                                starterPos = dragPos[index].anchoredPosition;
                                handTool.anchoredPosition = starterPos;
                                oldStarter = starterPos;
                                return;
                            }
                            index++;
                        }
                    }
                }

                Debug.Log("Choosing random hand");
                while (true)
                {
                    int x = Random.Range(0, dragPos.Count);
                    if (GameManager.Instance.hexDraggers[x].GroupType != GroupType.None)
                    {
                        dragger = GameManager.Instance.hexDraggers[x];
                        starterPos = dragPos[x].anchoredPosition;
                        handTool.anchoredPosition = starterPos;
                        oldStarter = starterPos;
                        return;
                    }
                    //foreach (HexGroup drag in GameManager.Instance.hexDraggers)
                    //{
                    //    if (drag == GameManager.Instance.hexDraggers[x])
                    //    {
                    //        if (drag.GroupType != GroupType.None)
                    //        {
                    //            dragger = GameManager.Instance.hexDraggers[x];
                    //            starterPos = dragPos[x].anchoredPosition;
                    //            handTool.anchoredPosition = starterPos;
                    //            oldStarter = starterPos;
                    //            return;
                    //        }
                    //    }
                    //}
                    //Debug.Log("Did not find anything, going for default, not supposed to be possible");
                    //dragger = GameManager.Instance.hexDraggers[x];
                    //starterPos = dragPos[x].anchoredPosition;
                    //handTool.anchoredPosition = starterPos;
                    //oldStarter = starterPos;
                    //return;
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
                    if (b.occupiedHex.topTile.tileColor == dragger.topTile.tileColor) // Check if toptile color is the same with dragger's toptile color
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
            while (true)
            {
                int x = Random.Range(0, basePos.Count);
                if (!GameManager.Instance.hexBases[x].occupied)
                {
                    target = basePos[x].anchoredPosition;
                    return target;
                }
                //foreach (HexBase bases in GameManager.Instance.hexBases)
                //{
                //    if (bases == GameManager.Instance.hexBases[x])
                //    {
                //        if (!GameManager.Instance.hexBases[x].occupied)
                //        {
                //            target = basePos[x].anchoredPosition;
                //            return target;
                //        }
                //    }
                //}
                //Debug.Log("Did not find anything, going for default, not supposed to be possible");
                //if (!GameManager.Instance.hexBases[x].occupied)
                //{
                //    target = basePos[x].anchoredPosition;
                //    return target;
                //}
            }
        }
    }

    public void DraggerToFreeBase()
    {
        if (!GameManager.Instance.currentHexDrag) GetStarterPos();
        baseP = GetRandomBase();

        handTool.GetComponent<CanvasGroup>().alpha = 1;
        handTool.localScale = Vector3.one;
        handTool.DOKill();
        handTool.DOScale(0.9f, 0.5f).SetLoops(3, LoopType.Yoyo).OnComplete(() =>
        {
            handTool.DOAnchorPos(baseP, 0.75f).OnComplete(() =>
            {
                handTool.localScale = Vector3.one;
                handTool.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
            });
        });
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
                    oldStarter = starterPos;
                    baseP = GetRandomBase();
                } 
                return;
            }
            index++;
        }
    }
}
