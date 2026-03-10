using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum GroupType
{
    None,
    Dropper,
    Dragger,
    Replacer
}

public class HexGroup : MonoBehaviour
{
    [Header ("Basic Info")]
    [SerializeField] GroupType GroupType;
    [SerializeField] List<HexTiles> HexTiles = new List<HexTiles>();

    [Header("Dragger Info")]
    [SerializeField] Vector3 oldPosition;
    [SerializeField] bool isTweening;
    [SerializeField] bool isDragging;
    private void Awake()
    {
        CheckHexTiles();
        TilesPosition();
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void CheckHexTiles()
    {
        HexTiles.Clear();
        foreach (Transform t in transform)
        {
            if (t.GetComponent<HexTiles>()) { HexTiles.Add(t.GetComponent<HexTiles>()); }
        }
    }

    private void TilesPosition()
    {
        int index = 0;
        foreach (HexTiles h in HexTiles)
        {
            h.transform.localPosition = new Vector3(0, 0.2f + (0.6f  * index), 0);
            index++;
        }
    }

    private void OnCollisionEnter(Collision col)
    {
    }

    private void OnCollisionStay (Collision col)
    {
        if (GroupType != GroupType.Dragger) return;

        if (Input.GetMouseButton(0))
        {
            transform.position = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        }
        if (Input.GetMouseButtonUp(0) && GroupType == GroupType.Dragger)
        {
            transform.DOMove(Camera.main.ScreenToWorldPoint(oldPosition), 0.5f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
            isDragging = false;
        }
    }

    private void OnMouseDown()
    {
        if (GroupType != GroupType.Dragger) return;

        if (!isTweening)
        {
            oldPosition = transform.position;
            Debug.Log(oldPosition + " " + transform.position);
            transform.DOMove(Camera.main.ScreenToWorldPoint(Input.mousePosition), 0.0625f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
            isDragging = true;
        }
    }

    private void OnMouseDrag()
    {
        if (GroupType != GroupType.Dragger) return;

        transform.position = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        transform.position = new Vector3(transform.position.x, 2, transform.position.z);
    }

    private void OnMouseUp()
    {
        if (GroupType != GroupType.Dragger) return;

        transform.DOMove(oldPosition, 0.5f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
        isDragging = false;
    }
}
