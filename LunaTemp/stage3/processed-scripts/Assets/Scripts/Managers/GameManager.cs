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
    public bool IsTransferring;
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
            currentReplacer.GetComponent<HexGroup>().GroupType = GroupType.Mixer;
            currentReplacer.transform.SetParent(hexNorth);
            currentReplacer.transform.parent.GetComponent<HexBase>().occupiedHex = currentReplacer;
            CheckSimilarTopTiles();
            UpdateAllMixer("RNT");
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
                g.transform.DOScale(1, 1f);

                hexDraggers.Add(g.GetComponent<HexGroup>());
            }
        }
    }

    //public IEnumerator DelayChecking()
    //{
    //    yield return new WaitForEndOfFrame();
    //    CheckSimilarTopTiles();
    //}

    public void CheckSimilarTopTiles()
    {
        if (IsTransferring) return;
        foreach (HexGroup mixer in currentMixers)
        {
            mixer.UpdateNearbyTiles();
        }

        foreach (HexGroup mixer in currentMixers)
        {
            if (mixer.isEmptying) { Debug.Log("Something is emptying"); return; }
        }

        UpdateAllMixer("CSMT1");
        foreach (HexGroup giver in currentMixers)
        {
            foreach (HexGroup receiver in giver.nearbyHex)
            {
                receiver.CheckHexTiles();
                giver.CheckHexTiles();
                if (receiver != giver)
                {
                    if (receiver.topTile.tileColor == giver.topTile.tileColor)
                    {
                        //if (receiver.oneColor)
                        //{
                            IsTransferring = true;
                            giver.TransferTiles(receiver);
                            return;
                        //}
                    }
                }
            }
        }

        firstFullStack = false;
        foreach (HexGroup mixer in currentMixers)
        {
            mixer.CheckFullStack();
        }
        if (firstFullStack) return;
        UpdateAllMixer("CSMT2");

        Debug.Log("No more similar top tiles");
        StartCoroutine(CheckAllOccupied());
    }

    public void UpdateAllMixer(string name)
    {
        foreach (HexGroup group in currentMixers)
        {
            group.CheckHexTiles();
        }
        foreach (HexGroup group in currentMixers)
        {
            group.UpdateNearbyTiles();
        }
    }

    public IEnumerator CheckAllOccupied()
    {
        yield return new WaitForSeconds(0.0625f);

        bool allOccupied = true;
        foreach (HexBase h in hexBases)
        {
            if (!h.occupied) { allOccupied = false; Debug.Log(h.name); break; }
        }

        if (allOccupied)
        {
            Debug.Log("All Bases have been Occupied");
            CTAManager.Instance.ShowLoseCard();
        }
    }
}
