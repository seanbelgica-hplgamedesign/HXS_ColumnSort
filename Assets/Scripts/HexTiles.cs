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
            //childTile.LookAt(target); childTile.transform.eulerAngles = new Vector3(270, childTile.transform.eulerAngles.y, childTile.transform.eulerAngles.z - 180);
            childTile.transform.DORotate(new Vector3(90, childTile.transform.eulerAngles.y, childTile.transform.eulerAngles.z), 0.125f).SetDelay(0.125f * index);
            tile.transform.DOJump(target.transform.position + ((Vector3.up * (0.6f + sec)) + (Vector3.up * 0.1f * index)), 1, 1, 0.125f).SetDelay(0.125f * index).OnComplete(() =>
            {
                childTile.transform.localEulerAngles = Vector3.right * 270;
            }) ;
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
            transform.parent.GetComponent<HexGroup>().CheckHexTiles();
            oldParent.CheckHexTiles();

            oldParent.GetComponent<HexGroup>().CheckGiverTiles();
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
            //Debug.Log("Checking for more similar tiles");
            //GameManager.Instance.CheckSimilarTopTiles();
        });
        return index;
    }
}
