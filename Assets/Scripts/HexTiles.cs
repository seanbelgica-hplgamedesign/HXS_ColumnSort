using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public enum TileColor
{
    Grey,
    Red,
    Violet,
    Blue,
    LightBlue,
    Green,
    Yellow,
    Orange
}

public class HexTiles : MonoBehaviour
{
    public TileColor tileColor;
    public List<GameObject> singleTile;

    [Header("Number Changes")]
    [SerializeField] float perTiles;
    [SerializeField] float perSingleTiles;
    [SerializeField] float sequenceDuration;
    // Start is called before the first frame update
    void Start()
    {
        foreach (Transform t in transform)
        {
            t.GetComponentInChildren<MeshRenderer>().material = GameManager.Instance.tileMats[(int)tileColor];
        }
    }

    private void Update()
    {
        if (transform.localScale == Vector3.zero) { DestroyImmediate(gameObject); return; }
    }

    public int TransferTiles(Transform target, int index, bool second)
    {
        float prevTileY = 1.25f;
        foreach (GameObject tile in singleTile)
        {
            Transform childTile = tile.transform.GetChild(0);
            tile.transform.LookAt(target); float posY = tile.transform.eulerAngles.y - 180;
            tile.transform.eulerAngles = new Vector3(0, posY, 0);

            float jumpPower = prevTileY - tile.transform.position.y;
            if (jumpPower < 0) { jumpPower = 0; }
            prevTileY = tile.transform.position.y;

            Sequence seq = DOTween.Sequence();
            seq.Insert((sequenceDuration / 8) * index, tile.transform.DOJump(target.transform.position + ((Vector3.up * perTiles) + (Vector3.up * perSingleTiles * index)), jumpPower + 0.5f, 1, sequenceDuration).OnStart(() =>
            {
                AudioManager.Instance.PlaySFX("Transfer");
            }).OnComplete(() =>
            {
                tile.transform.eulerAngles = Vector3.zero;
            }));
            seq.Insert((sequenceDuration / 8) * index, childTile.transform.DOLocalRotate(Vector3.right * 90, sequenceDuration)).OnComplete(() =>
            {
                childTile.transform.localEulerAngles = Vector3.right * 270;
            });

            index++;
        }
        transform.DOScale(1, 0f).SetDelay((sequenceDuration / 8) * index + sequenceDuration).OnComplete(() =>
        {
            HexGroup oldParent = transform.parent.GetComponent<HexGroup>();
            transform.SetParent(target.parent);
            int i = 5;
            foreach (GameObject tile in singleTile)
            {
                tile.transform.localPosition = Vector3.up * (perSingleTiles * i);
                i--;
            }

            transform.parent.GetComponent<HexGroup>().CheckHexTiles();
            if (second)
            {
                oldParent.CheckHexTiles();
                transform.parent.GetComponent<HexGroup>().isTransferring = false;
                oldParent.isTransferring = false;
                //GameManager.Instance.UpdateAllMixer("Transfer");
                GameManager.Instance.CheckSimilarTopTiles();
            }
            else
            {
                if (!oldParent.hasSecond)
                {
                    oldParent.CheckHexTiles();
                    transform.parent.GetComponent<HexGroup>().isTransferring = false;
                    oldParent.isTransferring = false;
                    //GameManager.Instance.UpdateAllMixer("Transfer");
                    GameManager.Instance.CheckSimilarTopTiles();
                }
            }
        });
        return index;
    }
}
