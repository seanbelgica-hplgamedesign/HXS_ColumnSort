using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum Iteration
{
    None,
    Two,
    Four,
    Full
}

public class IterationManager : MonoBehaviour
{
    public static IterationManager Instance { get; private set; }

    [Header("Luna Playgrounds")]
    [LunaPlaygroundField]
    [SerializeField] Iteration Iterations;

    [Header("Clicks")]
    public int numWords;
    public int maxNumWords;

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
        //if (!GameManager.Instance.gameStart) return;
        if (Iterations == Iteration.Full || Iterations == Iteration.None)
        {
            currentTimer -= Time.deltaTime;
            if (currentTimer <= 0) { CTAManager.Instance.ShowEndCard(); }
        }
    }

    public void InitializeIteration()
    {
        switch (Iterations)
        {
            case Iteration.None:
                Debug.Log("No Finish Condition.");
                break;
            case Iteration.Two:
                Debug.Log("End Card will appear after making " + maxNumWords + " words.");
                break;
            case Iteration.Four:
                Debug.Log("End Card will appear after making " + maxNumWords + " words.");
                break;
            case Iteration.Full:
                Debug.Log("End Card will appear after completing the game before 50 seconds.");
                break;
        }
    }

    public void AddWord()
    {
        if (Iterations == Iteration.Two || Iterations == Iteration.Four)
        {
            numWords++;
            if (numWords >= maxNumWords) { CompleteGame(); }
        }
    }

    public void CompleteGame()
    {
        CTAManager.Instance.OpenAppLink(false);
        CTAManager.Instance.ShowEndCard();
    }
}
