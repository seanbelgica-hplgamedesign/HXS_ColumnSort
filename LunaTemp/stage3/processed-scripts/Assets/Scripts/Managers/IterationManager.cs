using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Luna.Unity;

public enum Iteration
{
    None,
    TwoClicks,
    FifteenClicks,
    ThirtySeconds,
    SixtySeconds,
    Full
}

public class IterationManager : MonoBehaviour
{
    public static IterationManager Instance { get; private set; }

    [Header("Luna Playgrounds")]
    [LunaPlaygroundField]
    [SerializeField] Iteration Iterations;

    [Header("Clicks")]
    public int numClicks;
    public int maxNumClicks;

    [Header("Timer")]
    [SerializeField] float currentTimer = 50;
    [SerializeField] float maxTimer = 50;
    // Start is called before the first frame update
    void Awake()
    {
        if (Instance != null && Instance != this) { Destroy(gameObject); return; }
        Instance = this;
        InitializeIteration();
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        if (CTAManager.Instance.GameOver) return;
        if (TutorialManager.Instance.IntroAnim) return;

        if (Iterations == Iteration.ThirtySeconds || Iterations == Iteration.SixtySeconds)
        {
            currentTimer -= Time.deltaTime;
            if (currentTimer <= 0) { CTAManager.Instance.ShowWinCard(); }
        }
    }

    public void InitializeIteration()
    {
        switch (Iterations)
        {
            case Iteration.None:
                Debug.Log("No Finish Condition.");
                break;
            case Iteration.TwoClicks:
                maxNumClicks = 2;
                break;
            case Iteration.FifteenClicks:
                maxNumClicks = 15;
                break;
            case Iteration.ThirtySeconds:
                maxTimer = 30;
                break;
            case Iteration.SixtySeconds:
                maxTimer = 60;
                break;
            case Iteration.Full:
                break;
        }
        currentTimer = maxTimer;
    }

    public void AddClick()
    {
        if (Iterations == Iteration.TwoClicks || Iterations == Iteration.FifteenClicks)
        {
            numClicks++;
            if (numClicks >= maxNumClicks) { CompleteGame(); }
        }
    }

    public void CompleteGame()
    {
        CTAManager.Instance.OpenAppLink(false);
        CTAManager.Instance.ShowWinCard();
    }
}
