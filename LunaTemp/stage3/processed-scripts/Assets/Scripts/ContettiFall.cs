using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ConfettiFall : MonoBehaviour
{
    [SerializeField] private RectTransform fallArea; // reference for starting area
    [SerializeField] private float fallDistance = 80f;
    [SerializeField] private float fallDuration = 2.75f;
    [SerializeField] private float resetDelay = 1f;
    [SerializeField] private float horizontalFlutter = 30f;
    [SerializeField] private float rotationAngle = 25f;
    [SerializeField] private float startDelayMin = 0f;
    [SerializeField] private float startDelayMax = 2f;

    [SerializeField] public bool gameWin = false; // set this externally
    private bool isFalling = false;

    private RectTransform rectTransform;
    private Vector2 startPos;

    void Start()
    {
        rectTransform = GetComponent<RectTransform>();
        startPos = rectTransform.anchoredPosition;
    }

    // Call this externally when player wins
    public void TriggerConfetti()
    {
        if (isFalling || !gameWin) return; // prevent double trigger or false start

        gameWin = true;
        isFalling = true;
        float randomDelay = Random.Range(startDelayMin, startDelayMax);
        Invoke(nameof(StartFalling), randomDelay);
    }

    void StartFalling()
    {
        StartCoroutine(FlutterLoop());
    }

    private IEnumerator FlutterLoop()
    {
        while (true)
        {
            rectTransform.anchoredPosition = startPos;
            rectTransform.rotation = Quaternion.identity;

            // build fluttering sequence
            Sequence flutter = DOTween.Sequence();

            // simulate soft side-to-side + rotate
            flutter.Join(rectTransform.DOAnchorPosX(startPos.x + Random.Range(-horizontalFlutter, horizontalFlutter), fallDuration / 2)
                .SetEase(Ease.InOutSine)
                .SetLoops(2, LoopType.Yoyo));

            flutter.Join(rectTransform.DORotate(new Vector3(0, 0, Random.Range(-rotationAngle, rotationAngle)), fallDuration / 2, RotateMode.FastBeyond360)
                .SetEase(Ease.InOutSine)
                .SetLoops(2, LoopType.Yoyo));

            // downward flutter with gentle easing
            flutter.Join(rectTransform.DOAnchorPosY(startPos.y - fallDistance, fallDuration)
                .SetEase(Ease.InOutQuad));

            yield return flutter.WaitForCompletion();
            yield return new WaitForSeconds(resetDelay);
        }
    }

}
