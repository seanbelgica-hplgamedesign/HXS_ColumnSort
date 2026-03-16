using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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
    // Start is called before the first frame update
    void Start()
    {
        foreach (Transform t in transform)
        {
            t.GetComponentInChildren<MeshRenderer>().material = GameManager.Instance.tileMats[(int)tileColor];
        }
    }

    public int TransferTiles(Transform target, int index, bool second)
    {
        float sec = 0; if (second) { sec = perTiles; }
        foreach (GameObject tile in singleTile)
        {
            Transform childTile = tile.transform.GetChild(0);
            tile.transform.LookAt(target); float posY = tile.transform.eulerAngles.y - 180;
            tile.transform.eulerAngles = new Vector3(0, posY, 0);

            float jumpPower = target.position.y - tile.transform.position.y;
            if (jumpPower < 0) jumpPower = 0;

            Sequence seq = DOTween.Sequence();
            seq.Insert(0.125f * index, tile.transform.DOJump(target.transform.position + ((Vector3.up * (perTiles + sec)) + (Vector3.up * perSingleTiles * index)), jumpPower + 0.5f, 1, 0.125f).OnComplete(() =>
            {
                tile.transform.eulerAngles = Vector3.zero;
                AudioManager.Instance.PlaySFX("Transfer");
            }));
            seq.Insert(0.125f * index, childTile.transform.DOLocalRotate(Vector3.right * 90, 0.125f)).OnComplete(() =>
            {
                childTile.transform.localEulerAngles = Vector3.right * 270;
            });

            index++;
        }
        transform.DOScale(1, 0f).SetDelay(0.125f * index).OnComplete(() =>
        {
            HexGroup oldParent = transform.parent.GetComponent<HexGroup>();
            transform.SetParent(target.parent);
            int i = 5;
            foreach (GameObject tile in singleTile)
            {
                tile.transform.localPosition = Vector3.up * (perSingleTiles * i);
                i--;
            }
            GameManager.Instance.IsTransferring = false;
            transform.parent.GetComponent<HexGroup>().CheckHexTiles();
            oldParent.GetComponent<HexGroup>().CheckHexTiles();
            GameManager.Instance.UpdateAllMixer("Transfer");

            if (oldParent.secondTopTile)
            {
                if (this == oldParent.secondTopTile)
                {
                    GameManager.Instance.CheckSimilarTopTiles();
                }
            }
            else
            {
                GameManager.Instance.CheckSimilarTopTiles();
            }
        });
        return index;
    }
}
