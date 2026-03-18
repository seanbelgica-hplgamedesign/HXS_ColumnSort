using DG.Tweening;
using Luna.Unity;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    [Header("Basic Info")]
    public List<Material> tileMats;
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
        if (Input.GetKeyDown(KeyCode.Space))
        {
            ReplaceNewTiles();
        }
    }

    public void ReplaceNewTiles()
    {
        currentMixers.Remove(currentReplacer);
        HexGroup oldReplacer = currentReplacer;
        if (replacerParent.childCount > 0)
        {
            currentReplacer = replacerParent.GetChild(0).GetComponent<HexGroup>();
            currentMixers.Insert(0, currentReplacer);
            Destroy(oldReplacer.gameObject);

            foreach (Transform t in replacerParent)
            {
                t.DOMoveZ(t.transform.position.z - 1.5f, 0.125f);
            }
            currentReplacer.GroupType = GroupType.Mixer;
            currentReplacer.transform.SetParent(hexNorth);
            currentReplacer.transform.parent.GetComponent<HexBase>().occupiedHex = currentReplacer;
            currentReplacer.CheckHexTiles();
            //UpdateAllMixer("RNT");
            CheckSimilarTopTiles();
        }
        else
        {
            Debug.Log("You somehow got all of them");
            IterationManager.Instance.CompleteGame();
        }
    }

    public void CheckDraggerCount()
    {
        if (hexDragParent.childCount == 1)
        {
            hexDraggers.Clear();
            for (int i = 0; i < 3; i++)
            {
                GameObject g = Instantiate(hexDragPrefab, hexDragPrefab.transform.position, Quaternion.identity, hexDragParent);
                g.GetComponent<HexGroup>().GroupType = GroupType.Dragger;
                g.GetComponent<HexGroup>().RandomizeTile();
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
                    if (!receiver.isEmptying)
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
        Debug.Log("No more merging needed");
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
        Debug.Log("Check Again");
        if (fullyEmpty) emptyHex.CheckIfEmpty();
        UpdateAllMixer("CheckAgain");
        firstFullStack = false;

        //GameManager.Instance.UpdateAllMixer("RS");
        //if (oneStack) { CheckIfEmpty(); GameManager.Instance.CheckAgain(); }
        CheckSimilarTopTiles();
    }

    public void CheckAgain()
    {
        Debug.Log("Check Again");
        UpdateAllMixer("CheckAgain");
        firstFullStack = false;
        
        //Check Again for confirmation
        CheckSimilarTopTiles();
    }
}
