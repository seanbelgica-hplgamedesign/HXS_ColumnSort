using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
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

    [Header("Scoring Info")]
    [SerializeField] int requiredScore;
    public int currentScore;
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
        UpdateAllMixers();
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

    public void CreateNewDragger(Transform parent, int dragNum)
    {
        HexGroup drag = Instantiate(hexDragPrefab, parent).GetComponent<HexGroup>();
        drag.draggerNum = dragNum;

        int red = 0; int green = 0; int blue = 0; int yellow = 0;
        foreach (HexGroup board in hexBoard)
        {
            switch (board.stackColor)
            {
                case TileColor.Red: red++; break;
                case TileColor.Green: green++; break;
                case TileColor.Blue: blue++; break;
                case TileColor.Yellow: yellow++; break;
            }
        }
        green += red;
        blue += green;
        yellow += green;

        int color = Random.Range(0, hexBoard.Count);
        if (color <= red) color = 0; else if (color <= green) color = 1; else if (color <= blue) color = 2; else color = 3;
        drag.RandomizeTile(color);
    }

    public void UpdateAllMixers()
    {
        currentMixers.Clear();
        foreach (HexBase bases in hexBases)
        {
            if (bases.occupied)
            {
                currentMixers.Add(bases.occupiedHex);
                if (bases.occupiedHex.boardStack) { hexBoard.Add(bases.occupiedHex); }
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
            CTAManager.Instance.ShowLoseCard();
        }
    }
}
