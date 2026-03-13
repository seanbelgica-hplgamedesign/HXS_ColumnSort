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
        float sec = 0; if (second) { sec = 0.6f; }
        foreach (GameObject tile in singleTile)
        {
            Transform childTile = tile.transform.GetChild(0);
            tile.transform.LookAt(target); tile.transform.eulerAngles = new Vector3(0, tile.transform.eulerAngles.y - 180, 0);

            Sequence seq = DOTween.Sequence();
            seq.Insert(0.125f * index, tile.transform.DOJump(target.transform.position + ((Vector3.up * (0.6f + sec)) + (Vector3.up * 0.1f * index)), 1, 1, 0.125f).OnComplete(() =>
            {
                childTile.transform.eulerAngles = Vector3.right * 270;
            }));
            seq.Insert(0.125f * index, childTile.transform.DORotate(new Vector3(90, childTile.transform.eulerAngles.y, childTile.transform.eulerAngles.z), 0.125f));

            index++;
        }
        transform.DOScale(1, 0f).SetDelay(0.125f * index).OnComplete(() =>
        {
            HexGroup oldParent = transform.parent.GetComponent<HexGroup>();
            transform.SetParent(target.parent);
            int i = 5;
            foreach (GameObject tile in singleTile)
            {
                tile.transform.localPosition = Vector3.up * (0.1f * i);
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
                    Debug.Log("Tile1");
                    StartCoroutine(GameManager.Instance.DelayChecking());
                }
            }
            else
            {
                Debug.Log("Tile2");
                StartCoroutine(GameManager.Instance.DelayChecking());
            }
        });
        return index;
    }
}
