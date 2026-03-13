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

    public void ShowWinCard()
    {
        if (GameOver) return;

        ConfettiController.Instance.OnGameWin();
        Analytics.LogEvent(Analytics.EventType.LevelWon);
        Analytics.LogEvent(Analytics.EventType.EndCardShown);
        WinPanel.alpha = 1;
        WinPanel.GetComponent<RectTransform>().localScale = Vector3.zero;
        WinPanel.GetComponent<RectTransform>().DOScale(1, 0.25f);
        GameOver = true;
    }

    public void ShowLoseCard()
    {
        if (GameOver) return;

        Analytics.LogEvent(Analytics.EventType.LevelFailed);
        Analytics.LogEvent(Analytics.EventType.EndCardShown);
        LosePanel.alpha = 1;
        LosePanel.GetComponent<RectTransform>().localScale = Vector3.zero;
        LosePanel.GetComponent<RectTransform>().DOScale(1, 0.25f);
        GameOver = true;
    }

    public void OpenAppLink(bool ending)
    {
        Debug.Log("Opening Link");
        Playable.InstallFullGame(iosLink, androidLink);

        if (ending) LifeCycle.GameEnded();
    }
}
