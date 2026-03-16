using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HexBase : MonoBehaviour
{
    [Header("Basic Info")]
    public List<HexBase> nearbyBases;
    public HexGroup occupiedHex;
    public bool occupied;
    public ParticleSystem sparkleVFX;
    public Material originalColor;
    public Material clickedColor;

    public void ChangeColor(bool clicked)
    {
        if (clicked)
        {
            transform.GetChild(0).GetComponent<MeshRenderer>().material = clickedColor;
        }
        else
        {
            transform.GetChild(0).GetComponent<MeshRenderer>().material = originalColor;
        }
    }
}
