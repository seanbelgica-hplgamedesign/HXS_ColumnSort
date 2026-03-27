using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HexBase : MonoBehaviour
{
    [Header("Basic Info")]
    public List<HexBase> nearbyBases;
    public HexGroup occupiedHex;
    public bool occupied;
    public Animator sparkleVFX;
    public Material originalColor;
    public Material clickedColor;

    private void Awake()
    {
        if (transform.childCount == 3)
        {
            occupied = true;
            occupiedHex = transform.GetChild(2).GetComponent<HexGroup>();
        }
        else
        {
            occupied = false;
            occupiedHex = null;
        }
    }

    public void ChangeColor(bool clicked)
    {
        if (clicked) { transform.GetChild(0).GetComponent<MeshRenderer>().material = clickedColor; }
        else { transform.GetChild(0).GetComponent<MeshRenderer>().material = originalColor; }
    }
}
