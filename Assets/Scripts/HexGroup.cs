using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEditor.Experimental.GraphView;
using UnityEngine;
using UnityEngine.UIElements;

public enum GroupType
{
    None,
    Dropper,
    Dragger,
    Mixer
}

public class HexGroup : MonoBehaviour
{
    [Header ("Basic Info")]
    public GroupType GroupType;
    [SerializeField] LayerMask groundLayer;
    public bool isTweening;
    [SerializeField] List<HexTiles> HexTiles;

    [Header("Drag & Drop")]
    [SerializeField] Vector3 oldPosition;
    [SerializeField] bool isDragging;
    [SerializeField] bool occupied;

    [Header("Gameplay")]
    public HexTiles topTile;
    public int stackNum;
    public bool transferring;

    // Start is called before the first frame update
    void Start()
    {
        oldPosition = transform.position;

        CheckHexTiles();
    }

    #region HexTiles
    public void CheckHexTiles()
    {
        HexTiles.Clear();
        foreach (Transform t in transform)
        {
            if (t.GetComponent<HexTiles>()) { HexTiles.Add(t.GetComponent<HexTiles>()); }
        }
        if (HexTiles.Count > 0)
        {
            topTile = HexTiles[HexTiles.Count - 1];
            if (HexTiles.Count > 1) if (topTile.tileColor == HexTiles[HexTiles.Count - 2].tileColor) stackNum = 2; else stackNum = 1;
        }

        int index = 0;
        foreach (HexTiles h in HexTiles)
        {
            h.transform.localPosition = new Vector3(0, 0.2f + (0.6f * index), 0);
            index++;
        }
    }

    public void RandomizeTile()
    {
        int index0 = UnityEngine.Random.Range(1, Enum.GetNames(typeof(TileColor)).Length);
        HexTiles[0].tileColor = (TileColor)index0;
        HexTiles[1].tileColor = (TileColor)index0;

        int index1 = 0; //1 in 2 chance to have different color
        if (UnityEngine.Random.Range(0, 2) == 0) { index1 = UnityEngine.Random.Range(1, Enum.GetNames(typeof(TileColor)).Length); HexTiles[1].tileColor = (TileColor)index1; }
    }
    #endregion

    private void OnMouseDown()
    {
        if (GroupType != GroupType.Dragger) return;
        if (isTweening) return;
        if (isDragging) return;

        GameManager.Instance.currentHexDrag = this;
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, 100f, groundLayer))
        {
            transform.DOMove(hit.point, 0.25f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
        }
        isDragging = true;
    }

    private void OnMouseDrag()
    {
        if (GroupType != GroupType.Dragger) return;

        if (!isTweening && isDragging)
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit, 100f, groundLayer))
            {
                transform.position = hit.point;
            }
        }
    }

    private void OnMouseUp()
    {
        isDragging = false;
        if (GameManager.Instance.currentHexDrag)
        {
            HexGroup dragger = GameManager.Instance.currentHexDrag;
            if (dragger.GroupType == GroupType.Dragger)
            {
                Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                RaycastHit[] hits = Physics.RaycastAll(ray);

                foreach (RaycastHit hit in hits)
                {
                    if (hit.collider.CompareTag("Dropper"))
                    {
                        if (!hit.collider.GetComponent<HexGroup>().occupied)
                        {
                            dragger.transform.DOMove(hit.collider.transform.position, 0.5f).OnUpdate(() =>
                            {
                                dragger.isTweening = true;
                            }).OnComplete(() =>
                            {
                                dragger.isTweening = false;
                                dragger.GroupType = GroupType.Mixer;
                                GameManager.Instance.currentMixers.Add(this);
                                GameManager.Instance.CheckSimilarTopTiles();
                            });
                            dragger.transform.SetParent(hit.collider.transform.parent);
                            GameManager.Instance.CheckDraggerCount();
                            hit.collider.GetComponent<HexGroup>().occupied = true;
                            return;
                        }
                    }
                }
            }
            GameManager.Instance.currentHexDrag = null;

            if (GroupType == GroupType.Dragger)
            {
                transform.DOKill();
                transform.DOMove(oldPosition, 0.5f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
            }
        }
    }

    public void TransferTiles(HexGroup receiver)
    {
        topTile.TransferTiles(receiver.topTile.transform.position);
        CheckHexTiles();
    }
}
