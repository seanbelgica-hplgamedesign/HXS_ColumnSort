using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using static UnityEngine.GraphicsBuffer;

public enum TileColor
{
    Red,
    Green,
    Blue,
    Yellow
}

public class HexTiles : MonoBehaviour
{
    public TileColor tileColor;
    // Start is called before the first frame update
    void Start()
    {
        UpdateColor();
    }

    private void Update()
    {
        if (transform.localScale == Vector3.zero) { DestroyImmediate(gameObject); }
    }

    public void UpdateColor()
    {
        GetComponentInChildren<MeshRenderer>().material = GameManager.Instance.tileMats[(int)tileColor];
    }
}
