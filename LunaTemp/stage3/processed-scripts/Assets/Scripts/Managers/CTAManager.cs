using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CTAManager : MonoBehaviour
{

    [Header("Panels")]
    public bool GameOver;
    [SerializeField] CanvasGroup WinPanel;
    [SerializeField] CanvasGroup LosePanel;
    [SerializeField] RectTransform playNow;
    [SerializeField] RectTransform tryAgain;

    [Header("Links")]
    [SerializeField] string iosLink;
    [SerializeField] string androidLink;

    #region Instance Calling
    public static CTAManager Instance;
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

    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            ShowWinCard();
        }
    }

    public void ShowWinCard()
    {
        if (GameOver) return;
        Debug.Log("Showing Win Card");

        ConfettiController.Instance.OnGameWin();
        Analytics.LogEvent(Analytics.EventType.LevelWon);
        Analytics.LogEvent(Analytics.EventType.EndCardShown);
        WinPanel.alpha = 1;
        WinPanel.GetComponent<RectTransform>().localScale = Vector3.zero;
        WinPanel.GetComponent<RectTransform>().DOScale(1, 0.25f);
        playNow.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        GameOver = true;

        AudioManager.Instance.PlaySFX("Winner");
    }

    public void ShowLoseCard()
    {
        if (GameOver) return;

        Analytics.LogEvent(Analytics.EventType.LevelFailed);
        Analytics.LogEvent(Analytics.EventType.EndCardShown);
        LosePanel.alpha = 1;
        LosePanel.GetComponent<RectTransform>().localScale = Vector3.zero;
        LosePanel.GetComponent<RectTransform>().DOScale(1, 0.25f);
        tryAgain.DOScale(0.9f, 0.5f).SetLoops(-1, LoopType.Yoyo);
        GameOver = true;

        AudioManager.Instance.PlaySFX("Fail");
    }

    public void OpenAppLink(bool ending)
    {
        Debug.Log("Opening Link");
        Playable.InstallFullGame(iosLink, androidLink);

        if (ending) LifeCycle.GameEnded();
    }
}
