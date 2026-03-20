using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    [Header("Basic Info")]
    public List<Material> tileMats;
    public List<int> replacerChances;
    public GameObject Ground;
    public Transform replacerParent;
    public Transform hexNorth;
    public List<HexBase> hexBases;
    public List<HexGroup> hexDraggers;
    public HexGroup emptyDrag;
    public List<HexGroup> currentMixers;
    public HexGroup currentReplacer;
    public List<HexGroup> nearbyReplacerHexes;
    public bool firstFullStack;
    public int topTileChances;
    public int tileChances;

    [Header ("Dragger Info")]
    public HexGroup currentHexDrag;
    [SerializeField] GameObject hexDragPrefab;
    [SerializeField] Transform hexDragParent;
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
        //Intro Scene

        //*
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

        //Debug Mode
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            ReplaceNewTiles();
        }
    }

    public void ReplaceNewTiles()
    {
        currentMixers.Remove(currentReplacer);
        HexGroup oldReplacer = currentReplacer;

        foreach (Transform t in replacerParent)
        {
            t.DOMoveZ(t.transform.position.z - 1.5f, 0.125f);
        }
        DestroyImmediate(oldReplacer.gameObject);

        if (replacerParent.childCount > 0)
        {
            currentReplacer = replacerParent.GetChild(0).GetComponent<HexGroup>();
            UpdateRandomizerChances();
            currentMixers.Insert(0, currentReplacer);
            currentReplacer.GroupType = GroupType.Mixer;
            currentReplacer.transform.SetParent(hexNorth);
            currentReplacer.transform.parent.GetComponent<HexBase>().occupiedHex = currentReplacer;
            currentReplacer.CheckHexTiles();

            if (replacerParent.childCount < 13)
            {
                TutorialManager.Instance.UpdateHandPositioning(replacerParent.childCount);
                TutorialManager.Instance.ResetTimer();

                float camY, camZ;
                switch (replacerParent.childCount)
                {
                    case 12: camY = 16.5f; camZ = -7.5f; break;
                    case 11: camY = 17.5f; camZ = -7.75f; break;
                    case 10: camY = 18.5f; camZ = -7.75f; break;
                    case 9: camY = 19.5f; camZ = -7.75f; break;
                    case 8: camY = 20.5f; camZ = -8f; break;
                    case 7: camY = 22f; camZ = -8.25f; break;
                    case 6: camY = 23f; camZ = -8.25f; break;
                    case 5: camY = 24f; camZ = -8.5f; break;
                    case 4: camY = 25f; camZ = -8.5f; break;
                    case 3: camY = 26f; camZ = -8.5f; break;
                    case 2: camY = 27.5f; camZ = -8.75f; break;
                    case 1: camY = 28.5f; camZ = -9f; break;
                    default: camY = 28.5f; camZ = -9.25f; break;
                }
                Camera.main.transform.DOMove(new Vector3(0, camY, camZ), 0.5f).SetEase(Ease.InOutBack);
            }

            CheckSimilarTopTiles();
        }
        else
        {
            Debug.Log("You somehow got all of them");
            IterationManager.Instance.CompleteGame();
        }
    }

    public void UpdateRandomizerChances()
    {
        HexGroup replacer = currentReplacer;
        int red = 1; int violet = 1; int blue = 1; int green = 1; int yellow = 1;

        int extra = 0;
        if (replacer.isTransferring && replacer.HexTiles.Count == 1) replacer = replacerParent.GetChild(0).GetComponent<HexGroup>(); 
        //Happens when replaces is transferring and will go to next replacer

        if (!replacer.isTransferring) { extra += (topTileChances * (replacer.HexTiles.Count - 1)); }
        //Checks if reference is transferring

        foreach (HexTiles tiles in replacer.HexTiles)
        {
            if (tiles == replacer.topTile) // +4 chances for top tiles
            {
                switch ((int)tiles.tileColor) //Prioritizing Top Tile
                {
                    case 1: violet += extra; break;
                    case 2: yellow += extra; break;
                    case 3: red += extra; break;
                    case 4: green += extra; break;
                    case 5: blue += extra; break;
                }
            }

            switch ((int)tiles.tileColor)
            {
                case 1: violet += tileChances; break;
                case 2: yellow += tileChances; break;
                case 3: red += tileChances; break;
                case 4: green += tileChances; break;
                case 5: blue += tileChances; break;
            }
        }


        yellow += violet; red += yellow; green += red; blue += green;
        //Debug.Log((violet - 1) + "|" + (yellow - violet - 1) + "|" + (red - yellow - 1) + "|" + (green - red - 1) + "|" + (blue - green - 1));

        replacerChances.Clear();
        replacerChances.Add(violet); replacerChances.Add(yellow); replacerChances.Add(red); replacerChances.Add(green); replacerChances.Add(blue); 
    }

    public void CheckDraggerCount()
    {
        if (hexDragParent.childCount == 1)
        {
            UpdateRandomizerChances();
            hexDraggers.Clear();
            for (int i = 0; i < 3; i++)
            {
                GameObject g = Instantiate(hexDragPrefab, hexDragPrefab.transform.position, Quaternion.identity, hexDragParent);
                g.GetComponent<HexGroup>().GroupType = GroupType.Dragger;
                g.GetComponent<HexGroup>().RandomizeTile(Random.Range(0, replacerChances[replacerChances.Count - 1]), Random.Range(0, replacerChances[replacerChances.Count - 1]));
                g.transform.transform.localPosition = new Vector3(-1.75f + (i * 1.75f), 0, 0);
                g.transform.localScale = Vector3.zero;
                g.transform.DOScale(1, 0.75f);

                hexDraggers.Add(g.GetComponent<HexGroup>());
            }
        }
    }

    public void CheckSimilarTopTiles()
    {
        if (firstFullStack) { foreach (HexGroup mixer in currentMixers) { mixer.CheckFullStack(); } }
        UpdateAllMixer("CSMT1");

        foreach (HexGroup giver in currentMixers)
        {
            foreach (HexGroup receiver in giver.nearbyHex)
            {
                receiver.CheckHexTiles();
                giver.CheckHexTiles();
                if (!receiver.isTransferring && !giver.isTransferring)
                {
                    if (!receiver.isEmptying && !giver.isEmptying)
                    {
                        if (receiver != giver)
                        {
                            if (receiver.topTile.tileColor == giver.topTile.tileColor && giver.stackNum < 3)
                            {
                                giver.TransferTiles(receiver);
                                return;
                            }
                        }
                    }
                }
            }
        }
        //Debug.Log("No more similar top tiles");
        bool noStack = CheckFullStacks();
        if (noStack) return;
        UpdateAllMixer("CSMT3");

        if (firstFullStack) return;
        //Debug.Log("No more merging needed");
        StartCoroutine(CheckAllOccupied());
    }

    public void UpdateAllMixer(string name)
    {
        //foreach (HexBase b in hexBases) { b.UpdateOccupied(); }

        HexGroup hex = currentMixers[currentMixers.Count - 1];
        currentMixers.Clear();
        foreach (HexBase bases in hexBases)
        {
            if (bases.occupied)
            {
                if (bases.occupiedHex.Replacer)
                {
                    currentMixers.Insert(0, bases.occupiedHex);
                }
                else
                {
                    currentMixers.Add(bases.occupiedHex);
                }
            }
        }
        currentMixers.Remove(hex);
        currentMixers.Add(hex);

        foreach (HexGroup group in currentMixers)
        {
            group.CheckHexTiles();
        }
        foreach (HexGroup group in currentMixers)
        {
            group.UpdateNearbyTiles();
            //if (name == "CSMT1") { Debug.Log(group.HexTiles.Count); }
        }
    }

    public bool CheckFullStacks()
    {
        foreach (HexGroup mixer in currentMixers) { if (mixer.isEmptying) return true; if (mixer.isTransferring) return true; }

        foreach (HexGroup mixer in currentMixers)
        {
            if (!mixer.isEmptying) mixer.CheckFullStack();
        }
        return false;
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

    public void FinishEmptying(float lastPosY, HexGroup emptyHex, bool fullyEmpty)
    {
        if (fullyEmpty) emptyHex.CheckIfEmpty();
        UpdateAllMixer("CheckAgain");
        firstFullStack = false;
        Debug.Log(emptyHex.transform.childCount);

        //GameManager.Instance.UpdateAllMixer("RS");
        //if (oneStack) { CheckIfEmpty(); GameManager.Instance.CheckAgain(); }
        CheckSimilarTopTiles();
    }

    public void CheckAgain()
    {
        UpdateAllMixer("CheckAgain");
        firstFullStack = false;
        
        //Check Again for confirmation
        CheckSimilarTopTiles();
    }
}
