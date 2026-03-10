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
    [SerializeField] List<GameObject> singleTile;
    // Start is called before the first frame update
    void Start()
    {
        foreach (Transform t in transform)
        {
            t.GetComponent<MeshRenderer>().material = GameManager.Instance.tileMats[(int)tileColor];
        }
    }

    public void TransferTiles(Vector3 target)
    {
        int index = 0;
        foreach (GameObject tile in singleTile)
        {
            tile.transform.LookAt(target); tile.transform.eulerAngles = new Vector3(270, tile.transform.eulerAngles.y, tile.transform.eulerAngles.z);
            tile.transform.DORotate(new Vector3(90, tile.transform.eulerAngles.y, -tile.transform.eulerAngles.z), 0.375f).SetDelay(0.125f * index).OnComplete(() =>
            {
                tile.transform.eulerAngles = Vector3.right * 270;
            });
            tile.transform.DOJump(target + ((Vector3.up * 0.6f) + (Vector3.up * 0.1f * index)), 1, 1, 0.375f).SetDelay(0.125f * index);
            index++;
        }
        transform.DOScale(1, 0f).SetDelay(0.125f * index).OnComplete(() =>
        {
            GameManager.Instance.CheckSimilarTopTiles();
        });
    }
}
