using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelManager : MonoBehaviour
{
    public bool levelPicking;
    [SerializeField] GameObject gameField;
    [SerializeField] GameObject currentLevel;
    [SerializeField] GameObject currentTutorial;

    [Header("Panel")]
    [SerializeField] GameObject twoChoices;
    [SerializeField] GameObject medChoice;
    [SerializeField] GameObject hardChoice;
    [SerializeField] RectTransform onePos;
    [SerializeField] RectTransform twoPos;

    [Header("Levels & Tutorial")]
    [SerializeField] GameObject easyLevel;
    [SerializeField] GameObject easyTutorial;
    [Space(10)]
    [SerializeField] GameObject mediumLevel;
    [SerializeField] GameObject mediumTutorial;
    [Space(10)]
    [SerializeField] GameObject hardLevel;
    [SerializeField] GameObject hardTutorial;

    #region Instance Calling
    public static LevelManager Instance;
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
        PickLevel(0);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void OpenLevelSelector(bool med, bool hard)
    {
        RectTransform hand = TutorialManager.Instance.handTool.GetComponent<RectTransform>();

        AudioManager.Instance.PlaySFX("Winner");

        if (!med && hard) { medChoice.SetActive(true); hand.anchoredPosition = onePos.anchoredPosition; }
        else if (!hard && med) { hardChoice.SetActive(true); hand.anchoredPosition = onePos.anchoredPosition; }
        else { twoChoices.SetActive(true); hand.anchoredPosition = twoPos.anchoredPosition; }

        hand.DOKill();
        hand.GetComponent<CanvasGroup>().alpha = 1;
        hand.localScale = Vector3.one;

        Sequence anim = DOTween.Sequence();
        anim.Join(hand.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo));
        anim.Join(GetComponent<CanvasGroup>().DOFade(1, 0.25f));
        anim.Play();
    }

    public void PickLevel(int level)
    {
        GameManager.Instance.hexBases.Clear();
        if (level != 0) AudioManager.Instance.PlaySFX("Pickup");

        DestroyImmediate(currentTutorial); DestroyImmediate(currentLevel);
        GameObject tutorial; GameObject lvl;
        if (level == 0)
        {
            Debug.Log("Picking easy level");
            tutorial = Instantiate(easyTutorial, TutorialManager.Instance.transform);
            tutorial.name = easyTutorial.name;

            lvl = Instantiate(easyLevel, gameField.transform);
            lvl.name = easyLevel.name;
            foreach (Transform t in lvl.transform) GameManager.Instance.hexBases.Add(t.GetComponent<HexBase>());
            GameManager.Instance.requiredScore = 40;
            Camera.main.DOOrthoSize(8, 0.25f);
            Camera.main.transform.DOMoveZ(-5f, 0.25f);
        }
        else if (level == 1)
        {
            Debug.Log("Picking medium level");
            tutorial = Instantiate(mediumTutorial, TutorialManager.Instance.transform);
            tutorial.name = mediumTutorial.name;

            lvl = Instantiate(mediumLevel, gameField.transform);
            lvl.name = mediumLevel.name;
            foreach (Transform t in lvl.transform) GameManager.Instance.hexBases.Add(t.GetComponent<HexBase>());
            GameManager.Instance.requiredScore = 150;
            Camera.main.DOOrthoSize(9, 0.25f);
            Camera.main.transform.DOMoveZ(-4.25f, 0.25f);
        }
        else
        {
            Debug.Log("Picking hard level");
            tutorial = Instantiate(hardTutorial, TutorialManager.Instance.transform);
            tutorial.name = hardTutorial.name;

            lvl = Instantiate(hardLevel, gameField.transform);
            lvl.name = hardLevel.name;
            foreach (Transform t in lvl.transform) GameManager.Instance.hexBases.Add(t.GetComponent<HexBase>());
            GameManager.Instance.requiredScore = 250;
            Camera.main.DOOrthoSize(11, 0.25f);
            Camera.main.transform.DOMoveZ(-2.75f, 0.25f);
        }
        currentTutorial = tutorial; currentLevel = lvl;
        TutorialManager.Instance.UpdatePositions(tutorial);
        GameManager.Instance.UpdateAllMixers();
        GameManager.Instance.RemakeDraggers();

        GameManager.Instance.UpdateScore(0);
        levelPicking = false;
        GetComponent<CanvasGroup>().DOFade(0, 0.25f);

        medChoice.SetActive(false); hardChoice.SetActive(false); twoChoices.SetActive(false);
        RectTransform hand = TutorialManager.Instance.handTool.GetComponent<RectTransform>();
        hand.DOKill();
        hand.GetComponent<CanvasGroup>().alpha = 0;
        hand.localScale = Vector3.one;
        GameManager.Instance.currentScore = 0;
    }
}
