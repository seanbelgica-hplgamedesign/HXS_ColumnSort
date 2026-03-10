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
    [SerializeField] TileColor tileColor;
    [SerializeField] List<MeshRenderer> singleTile;
    // Start is called before the first frame update
    void Start()
    {
        foreach (Transform t in transform)
        {
            t.GetComponent<MeshRenderer>().material = GameManager.Instance.tileMats[(int)tileColor];
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
