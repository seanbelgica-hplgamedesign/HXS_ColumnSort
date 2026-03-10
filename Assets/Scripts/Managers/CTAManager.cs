using DG.Tweening;
using Luna.Unity;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CTAManager : MonoBehaviour
{

    [Header("Panels")]
    public bool GameOver;
    [SerializeField] GameObject CTAPanel;

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

    public void ShowEndCard()
    {
        if (GameOver) return;

        Analytics.LogEvent(Analytics.EventType.EndCardShown);
        CTAPanel.SetActive(true);
        GameOver = true;
    }

    public void OpenAppLink(bool ending)
    {
        Playable.InstallFullGame(iosLink, androidLink);

        if (ending) LifeCycle.GameEnded();
    }
}
