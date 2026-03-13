using UnityEngine;

public class ConfettiController : MonoBehaviour
{
    public static ConfettiController Instance { get; private set; }

    [SerializeField] private bool gameWin = false;

    private ConfettiFall[] confettiPieces;
    private bool triggered = false;

    private void Awake()
    {
        // Singleton setup
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }
        Instance = this;

        confettiPieces = GetComponentsInChildren<ConfettiFall>(true);
    }

    //private void Update()
    //{
    //    // Optional: allow triggering from inspector (for testing)
    //    if (gameWin && !triggered)
    //    {
    //        TriggerAllConfetti();
    //    }
    //}

    public void TriggerAllConfetti()
    {
        if (triggered) return;
        triggered = true;

        foreach (var confetti in confettiPieces)
        {
            confetti.gameWin = true;
            confetti.TriggerConfetti();
        }
    }

    public void OnGameWin()
    {
        gameWin = true;
        TriggerAllConfetti();
    }
}
