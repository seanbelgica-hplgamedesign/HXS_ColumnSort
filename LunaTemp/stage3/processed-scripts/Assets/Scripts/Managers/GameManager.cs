using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    [Header("Basic Info")]
    public List<Material> tileMats;
    public GameObject Ground;
    public List<HexBase> hexBases;
    public List<HexGroup> hexBoard;
    public List<HexGroup> hexDraggers;
    public List<HexGroup> currentMixers;
    public HexGroup emptyDrag;

    [Header ("Dragger Info")]
    public HexGroup currentHexDrag;
    [SerializeField] GameObject hexDragPrefab;
    [SerializeField] GameObject hexDragParent;

    [Header("Scoring Info")]
    public int currentScore;
    public int requiredScore;
    [SerializeField] TextMeshProUGUI scoreTxt;
    [SerializeField] Image scoreFill;
    public GameObject pointsCanvas;
    public CanvasGroup levelComplete;
    public ParticleSystem completeVFX;
    [SerializeField] bool easyMode;
    [SerializeField] bool mediumMode;
    [SerializeField] bool hardMode;

    #region Instance Calling
    public static GameManager Instance;
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
        Application.targetFrameRate = 60;

        LifeCycle.GameStarted();
        Analytics.LogEvent(Analytics.EventType.LevelStart);
        StartCoroutine(WaitForTap());
    }

    public IEnumerator WaitForTap()
    {
        yield return new WaitUntil(() => !TutorialManager.Instance.IntroAnim);
        AudioManager.Instance.PlayMusic("BGM");
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Ground.GetComponent<Collider>().enabled = true;
        }
        if (Input.GetMouseButtonUp(0))
        {
            Ground.GetComponent<Collider>().enabled = false;
        }
    }

    public void RemakeDraggers()
    {
        for (int i = 0; i < hexDraggers.Count; i++)
        {
            HexGroup drag = hexDraggers[i];

            hexDraggers.Remove(drag);
            DestroyImmediate(drag);
        }

        for (int i = 0; i < 3; i++) { StartCoroutine(CreateNewDragger(i + 1, true, 0)); }
    }

    public IEnumerator CreateNewDragger(int dragNum, bool first, float wait)
    {
        yield return new WaitForEndOfFrame();

        bool noReferenceCheck = true; foreach (HexGroup board in hexBoard) if (!board.dragReference) { noReferenceCheck = false; break; } if (noReferenceCheck) yield break;

        bool anim = false;
        foreach (HexGroup board in hexBoard)
        {
            if (!board.dragReference) { if (!board.isEmptying && !board.isTransferring) anim = true; break; }
        }
        if (!anim) yield break;

        if (hexDragParent.transform.GetChild(dragNum).childCount != 0)
        {
            GameObject dragger = hexDragParent.transform.GetChild(dragNum).GetChild(0).gameObject;
            hexDraggers.Remove(dragger.GetComponent<HexGroup>());
            DestroyImmediate(dragger);
        }

        HexGroup drag = Instantiate(hexDragPrefab, hexDragParent.transform.GetChild(dragNum)).GetComponent<HexGroup>();
        hexDraggers.Add(drag);
        drag.draggerNum = dragNum;
        drag.transform.localScale = Vector3.zero;
        drag.transform.DOScale(1, 0.25f);

        if (!first)
        {
            int index;
            while (true)
            {
                index = Random.Range(0, hexBoard.Count);
                if (!hexBoard[index].dragReference && !hexBoard[index].isEmptying && !hexBoard[index].isTransferring)
                {
                    hexBoard[index].dragReference = drag;
                    drag.dragReference = hexBoard[index];
                    break;
                }
            }
            TileColor color = hexBoard[index].stackColor;
            drag.RandomizeTile(color);
        }
        else
        {

            TileColor target;
            if (dragNum == 1) target = TileColor.Green; else if (dragNum == 2) target = TileColor.Blue; else target = TileColor.Red;
            for (int i = 0; i < hexBoard.Count; i++)
            {
                if (!hexBoard[i].dragReference)
                {
                    if (hexBoard[i].stackColor == target)
                    {
                        hexBoard[i].dragReference = drag;
                        drag.dragReference = hexBoard[i]; 
                        drag.RandomizeTile(hexBoard[i].stackColor); yield break;
                    }
                }
            }

        }
    }

    public void UpdateAllMixers()
    {
        currentMixers.Clear();
        hexBoard.Clear();
        foreach (HexBase bases in hexBases)
        {
            if (bases.occupied)
            {
                if (!bases.occupiedHex.isEmptying)
                {
                    currentMixers.Add(bases.occupiedHex);
                    if (bases.occupiedHex.boardStack) { hexBoard.Add(bases.occupiedHex); }
                }
            }
        }

        foreach (HexGroup mixers in currentMixers) { mixers.UpdateTileCount(); }
        foreach (HexGroup mixers in currentMixers) { mixers.UpdateNearbyTiles(); }
    }

    public IEnumerator CheckAllOccupied()
    {
        yield return new WaitForSeconds(0.0625f);
        foreach (HexGroup mixer in currentMixers) { if (mixer.isEmptying) yield break; if (mixer.isTransferring) yield break; }

        bool allOccupied = true;
        foreach (HexBase h in hexBases)
        {
            if (!h.occupied) { allOccupied = false; break; }
        }

        if (allOccupied)
        {
            Debug.Log("All Bases have been Occupied");
            CTAManager.Instance.ShowWinCard();
        }
    }

    //Score Checking
    public void UpdateScore(int score)
    {
        if (score == 0) { currentScore = 0; } //Reset Score

        if (currentScore < requiredScore)
        {
            currentScore += score;
            scoreTxt.text = currentScore + " / " + requiredScore;
            float newFill = (float)currentScore / (float)requiredScore;
            scoreFill.DOKill();
            scoreFill.DOFillAmount(newFill, newFill * 2).OnComplete(() => { if (currentScore == requiredScore) ShowLevelSelector(); });
        }
    }

    public void ShowLevelSelector()
    {
        Debug.Log("You win!");
        if (requiredScore == 40) easyMode = true;
        if (requiredScore == 250) mediumMode = true;
        if (requiredScore == 600) hardMode = true;

        if (mediumMode || hardMode) { IterationManager.Instance.CompleteGame(); return; } //Two Modes Completed

        currentScore = 0;

        StartCoroutine(LevelManager.Instance.OpenLevelSelector(mediumMode, hardMode));

    }
}
