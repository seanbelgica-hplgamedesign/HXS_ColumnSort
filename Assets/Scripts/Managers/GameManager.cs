using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    [Header("Basic Info")]
    public List<Material> tileMats;
    [SerializeField] Transform replacerParent;

    public GameObject Ground;
    public HexGroup currentHexDrag;
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
        Destroy(replacerParent.GetChild(0).gameObject);
        replacerParent.GetChild(0).GetComponent<HexGroup>().GroupType = GroupType.Mixer;
        foreach (Transform t in replacerParent)
        {
            t.DOMoveZ(t.transform.position.z - 1.5f, 0.125f);
        }
    }
}
