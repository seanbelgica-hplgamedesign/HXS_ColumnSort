using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class ButtonInfo : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    public void OnPointerDown(PointerEventData eventData)
    {
        GetComponent<RectTransform>().localScale = Vector3.one * 0.875f;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        GetComponent<RectTransform>().localScale = Vector3.one;
    }
}
