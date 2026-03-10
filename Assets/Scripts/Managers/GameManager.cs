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
    [SerializeField] Transform replacerParent;
    public List<HexGroup> currentMixers;

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
        yield return new WaitUntil(() => (Input.GetMouseButtonDown(0) || Input.touchCount > 0));
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

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            ReplaceNewTiles();
        }
    }

    public void ReplaceNewTiles()
    {
        currentMixers.Remove(replacerParent.GetChild(0).GetComponent<HexGroup>());
        Destroy(replacerParent.GetChild(0).gameObject);
        currentMixers.Add(replacerParent.GetChild(0).GetComponent<HexGroup>());
        replacerParent.GetChild(0).GetComponent<HexGroup>().GroupType = GroupType.Mixer;
        foreach (Transform t in replacerParent)
        {
            t.DOMoveZ(t.transform.position.z - 1.5f, 0.125f);
        }
    }

    public void CheckDraggerCount()
    {
        if (hexDragParent.childCount == 0)
        {
            for (int i = 0; i < 3; i++)
            {
                GameObject g = Instantiate(hexDragPrefab, hexDragPrefab.transform.position, Quaternion.identity, hexDragParent);
                g.GetComponent<HexGroup>().GroupType = GroupType.Dragger;
                g.GetComponent<HexGroup>().RandomizeTile();
                g.transform.transform.localPosition = new Vector3(-2 + (i * 2), 0, 0);
                g.transform.localScale = Vector3.zero;
                g.transform.DOScale(1, 0.25f);
            }
        }
    }

    public void CheckSimilarTopTiles()
    {
        foreach(HexGroup giver in currentMixers)
        {
            foreach (HexGroup receiver in currentMixers)
            {
                if (receiver != giver && !giver.transferring)
                {
                    if (receiver.topTile.tileColor == giver.topTile.tileColor)
                    {
                        Debug.Log("Giving " + giver.name + " to " + receiver);
                        giver.TransferTiles(receiver);
                        receiver.transferring = true;
                        giver.transferring = true;
                        return;
                    }
                }
            }
        }
        Debug.Log("No more similar top tiles");
    }
}
