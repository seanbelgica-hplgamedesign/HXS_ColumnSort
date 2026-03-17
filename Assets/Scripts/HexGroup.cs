using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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
    [SerializeField] LayerMask groundLayer;
    public GroupType GroupType;
    public bool Replacer;
    public List<HexTiles> HexTiles;
    public List<HexGroup> nearbyHex;
    public bool isTweening;
    public bool oneColor;
    public bool oneStack;
    public bool isEmptying;
    public bool hasSecond;
    public bool readyForMerge;

    [Header("Drag & Drop")]
    [SerializeField] Vector3 oldPosition;
    [SerializeField] bool isDragging;
    public bool draggable;

    [Header("Gameplay")]
    public HexTiles topTile;
    public HexTiles secondTopTile;
    public HexTiles thirdTopTile;
    public List<HexTiles> extraSameTiles;
    public int stackNum;

    [Header("Transfer")]
    public int transferIndex;
    [SerializeField] float TransferTime;
    [SerializeField] float TransferDelay;
    public List<HexTiles> disappearingTiles;

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
        if (transform.childCount != 0)
        {
            foreach (Transform t in transform)
            {
                if (t.GetComponent<HexTiles>()) { HexTiles.Add(t.GetComponent<HexTiles>()); }
            }
        }
        topTile = null;
        secondTopTile = null;
        thirdTopTile = null;
        hasSecond = false;
        readyForMerge = false;
        extraSameTiles.Clear();
        stackNum = 0;
        if (HexTiles.Count > 0)
        {
            stackNum = 1;
            topTile = HexTiles[HexTiles.Count - 1];
            if (HexTiles.Count > 1)
            {
                if (topTile.tileColor == HexTiles[HexTiles.Count - 2].tileColor)
                {
                    stackNum = 2;
                    secondTopTile = HexTiles[HexTiles.Count - 2];
                    hasSecond = true;
                    if (HexTiles.Count > 2)
                    {
                        if (topTile.tileColor == HexTiles[HexTiles.Count - 3].tileColor)
                        {
                            stackNum = 3;
                            thirdTopTile = HexTiles[HexTiles.Count - 3];
                            readyForMerge = true;
                            while (true)
                            {
                                if (HexTiles.Count > stackNum)
                                {
                                    if (topTile.tileColor == HexTiles[HexTiles.Count - (stackNum + 1)].tileColor)
                                    {
                                        stackNum++;
                                        extraSameTiles.Add(HexTiles[HexTiles.Count - stackNum]);
                                    }
                                    else { break; } }
                                else { break; }
                            }
                        }
                    }
                }
            }

            int index = 0;
            foreach (HexTiles h in HexTiles)
            {
                h.transform.localPosition = new Vector3(0, 0.2f + (1.05f * index), 0);
                index++;
            }

            oneColor = false; if (stackNum == HexTiles.Count) { oneColor = true; }
        }
        CheckIfEmpty();
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

    #region Drag&Drop
    private void OnMouseDown()
    {
        if (CTAManager.Instance.GameOver) return;
        if (CameraInfo.Instance.IntroCamera) return;
        if (GameManager.Instance.IsTransferring) return;
        if (GroupType != GroupType.Dragger) return;
        if (!draggable) { return; }
        if (isTweening) return;
        if (isDragging) return;
        foreach (HexGroup h in GameManager.Instance.currentMixers) if (h.isEmptying) return;

                GameManager.Instance.currentHexDrag = this;
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Physics.Raycast(ray, out hit, 100f, groundLayer))
        {
            transform.DOMove(hit.point, 0.25f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
        }
        TutorialManager.Instance.UpdateTutorialDragger(this);
        isDragging = true;

        AudioManager.Instance.PlaySFX("Pickup");
    }

    private void OnMouseDrag()
    {
        if (GroupType != GroupType.Dragger) return;

        if (!isTweening && isDragging)
        {
            if (GameManager.Instance.currentHexDrag) 
            {
                foreach (HexBase bases in GameManager.Instance.hexBases)
                {
                    if (bases.transform.GetChild(0).GetComponent<MeshRenderer>().material != bases.originalColor)
                    {
                        bases.ChangeColor(false);
                    }
                }

                Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                RaycastHit[] hits = Physics.RaycastAll(ray);

                RaycastHit hit;
                HexGroup dragger = GameManager.Instance.currentHexDrag;
                if (Physics.Raycast(ray, out hit, 100f, groundLayer))
                {
                    transform.position = hit.point;
                }

                foreach (RaycastHit h in hits)
                {
                    hit = h;
                    if (hit.collider.CompareTag("Dropper"))
                    {
                        if (!hit.collider.GetComponentInParent<HexBase>().occupied)
                        {
                            //dragger.transform.position = hit.collider.transform.position + (Vector3.up * 1.25f);
                            hit.collider.GetComponent<HexBase>().ChangeColor(true);
                            return;
                        }
                    }
                }
            }

        }
    }

    private void OnMouseUp()
    {
        isDragging = false;
        TutorialManager.Instance.ResetTimer();

        foreach (HexBase bases in GameManager.Instance.hexBases)
        {
            bases.ChangeColor(false);
        }
        if (GameManager.Instance.currentHexDrag)
        {
            IterationManager.Instance.AddClick();
            HexGroup dragger = GameManager.Instance.currentHexDrag;
            if (dragger.GroupType == GroupType.Dragger)
            {
                Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                RaycastHit[] hits = Physics.RaycastAll(ray);

                foreach (RaycastHit hit in hits)
                {
                    if (hit.collider.CompareTag("Dropper"))
                    {
                        if (!hit.collider.GetComponentInParent<HexBase>().occupied)
                        {
                            dragger.transform.DOMove(hit.collider.transform.position, 0.375f).SetEase(Ease.InBack).OnStart(() =>
                            {
                                dragger.isTweening = true;
                            }).OnComplete(() =>
                            {
                                dragger.isTweening = false;
                                dragger.GroupType = GroupType.Mixer;
                                GameManager.Instance.UpdateAllMixer("Dropped");
                                GameManager.Instance.currentMixers.Add(this);

                                hit.collider.GetComponentInParent<HexBase>().occupied = true;
                                transform.parent.GetComponentInParent<HexBase>().occupiedHex = dragger;
                                GameManager.Instance.CheckSimilarTopTiles();
                            });
                            dragger.transform.SetParent(hit.collider.transform);

                            for (int i = 0; i < GameManager.Instance.hexDraggers.Count; i++)
                            {
                                if (dragger == GameManager.Instance.hexDraggers[i])
                                {
                                    GameManager.Instance.hexDraggers[i] = GameManager.Instance.emptyDrag;
                                }
                            }
                            GameManager.Instance.currentHexDrag = null;
                            GameManager.Instance.CheckDraggerCount();

                            AudioManager.Instance.PlaySFX("PlaceDrag");
                            return;
                        }
                    }
                }
            }
            GameManager.Instance.currentHexDrag = null;

            foreach (HexBase hex in GameManager.Instance.hexBases)
            {
                if (hex.transform.GetChild(0).GetComponent<MeshRenderer>().material != hex.originalColor) { hex.ChangeColor(false); }
            }
            AudioManager.Instance.PlaySFX("ReturnDrag");

            if (GroupType == GroupType.Dragger)
            {
                transform.DOKill();
                transform.DOMove(oldPosition, 0.5f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
            }
        }
    }
    #endregion

    #region TransferMethod
    public void TransferTiles(HexGroup receiver)
    {
        transferIndex = 0;
        transferIndex = topTile.TransferTiles(receiver.topTile.transform, transferIndex, false);
        if (secondTopTile) { transferIndex = secondTopTile.TransferTiles(receiver.topTile.transform, transferIndex, true); }
    }

    public void CheckFullStack()
    {
        CheckHexTiles();
        if (readyForMerge)// && oneColor)
        {
            if (!GameManager.Instance.firstFullStack)
            {
                GameManager.Instance.firstFullStack = true;
                oneStack = true;
            }
            StartCoroutine(RemoveStacks());
        }

    }

    public IEnumerator RemoveStacks()
    {
        isEmptying = true;
        yield return new WaitForSeconds(0.125f);

        int index = 0;
        float lastPosY = 0;
        foreach (GameObject t in topTile.singleTile)
        {
            t.transform.DOScale(0.1f, TransferTime).SetDelay(TransferDelay * index).OnStart(() =>
            {
                AudioManager.Instance.PlaySFX("Pickup");
            }).OnComplete(() =>
            {
                t.transform.localScale = Vector3.zero;
            });
            index++;
        }
        disappearingTiles.Add(topTile);
        transform.DOScale(1, TransferTime).SetDelay(TransferDelay * index).OnStart(() => { HexTiles.Remove(topTile); });
        foreach (GameObject t in secondTopTile.singleTile)
        {
            t.transform.DOScale(0.1f, TransferTime).SetDelay(TransferDelay * index).OnStart(() =>
            {
                AudioManager.Instance.PlaySFX("Pickup");
            }).OnComplete(() =>
            {
                t.transform.localScale = Vector3.zero;
            });
            index++;
        }
        disappearingTiles.Add(secondTopTile);
        transform.DOScale(1, TransferTime).SetDelay(TransferDelay * index).OnStart(() => { HexTiles.Remove(secondTopTile); });
        foreach (GameObject t in thirdTopTile.singleTile)
        {
            t.transform.DOScale(0.1f, TransferTime).SetDelay(TransferDelay * index).OnStart(() =>
            {
                AudioManager.Instance.PlaySFX("Pickup");
            }).OnComplete(() =>
            {
                t.transform.localScale = Vector3.zero;
            }); lastPosY = t.transform.position.y;
            index++;
        }
        disappearingTiles.Add(thirdTopTile);
        transform.DOScale(1, TransferTime).SetDelay(TransferDelay * index).OnStart(() => { HexTiles.Remove(thirdTopTile); });
        if (extraSameTiles.Count > 0)
        {
            foreach (HexTiles tiles in extraSameTiles)
            {
                foreach (GameObject t in tiles.singleTile)
                {
                    t.transform.DOScale(0.1f, TransferTime).SetDelay(TransferDelay * index).OnStart(() =>
                    {
                        AudioManager.Instance.PlaySFX("Pickup");
                    }).OnComplete(() =>
                    {
                        t.transform.localScale = Vector3.zero;
                    }); lastPosY = t.transform.position.y;
                    index++;
                }
                disappearingTiles.Add(tiles);
                transform.DOScale(1, TransferTime).SetDelay(TransferDelay * index).OnStart(() => { HexTiles.Remove(tiles); });

            }
            extraSameTiles.Clear();
        }
        StartCoroutine(FinishMerge(TransferDelay * index, lastPosY));
        //transform.DOScale(1, 0).SetDelay(TransferDelay * index).OnComplete(() =>
        //{
        //    DestroyImmediate(topTile.gameObject);
        //    DestroyImmediate(secondTopTile.gameObject);
        //    DestroyImmediate(thirdTopTile.gameObject);
        //    foreach (HexTiles tiles in extraSameTiles)
        //    {
        //        Destroy(tiles.gameObject);
        //    }
        //    //StartCoroutine(DelayFinish(lastPosY));
        //    disappearingTiles.Clear();
        //    CheckIfEmpty();
        //    CheckHexTiles();
        //
        //    AudioManager.Instance.PlaySFX("FullStack");
        //    isEmptying = false;
        //    GameManager.Instance.UpdateAllMixer("RS");
        //    GetComponentInParent<HexBase>().sparkleVFX.transform.position = GetComponentInParent<HexBase>().sparkleVFX.transform.position + (Vector3.up * (lastPosY));
        //    GetComponentInParent<HexBase>().sparkleVFX.Play();
        //    GameManager.Instance.CheckSimilarTopTiles();
        //});
    }

    public IEnumerator FinishMerge(float delay, float lastPosY)
    {
        yield return new WaitForSeconds(delay);

        DestroyImmediate(topTile.gameObject);
        DestroyImmediate(secondTopTile.gameObject);
        DestroyImmediate(thirdTopTile.gameObject);
        foreach (HexTiles tiles in extraSameTiles)
        {
            Destroy(tiles.gameObject);
        }
        disappearingTiles.Clear();
        CheckIfEmpty();
        CheckHexTiles();

        AudioManager.Instance.PlaySFX("FullStack");
        isEmptying = false;
        GameManager.Instance.UpdateAllMixer("RS");
        GetComponentInParent<HexBase>().sparkleVFX.transform.position = GetComponentInParent<HexBase>().sparkleVFX.transform.position + (Vector3.up * (lastPosY));
        GetComponentInParent<HexBase>().sparkleVFX.Play();
        GameManager.Instance.CheckSimilarTopTiles();
    }

    public void CheckIfEmpty()
    {
        if (transform.parent.GetComponentInParent<HexBase>() || Replacer)
        {
            if (HexTiles.Count == 0)
            {
                if (Replacer)
                {
                    //Do breaking base animation
                    GameManager.Instance.ReplaceNewTiles();
                }
                else
                {
                    GameManager.Instance.currentMixers.Remove(this);
                    transform.parent.GetComponentInParent<HexBase>().occupied = false;
                    transform.parent.GetComponentInParent<HexBase>().occupiedHex = null;
                    Destroy(this.gameObject);
                }
                if (oneStack) { StackCheck(); }
            }
        }
        //if (HexTiles.Count > 2) Debug.Log(name + ": " + HexTiles.Count + " - " + transform.childCount);
    }

    public void UpdateNearbyTiles()
    {
        nearbyHex.Clear();
        foreach(HexBase bases in transform.parent.GetComponent<HexBase>().nearbyBases)
        {
            if (bases.occupied)
            {
                nearbyHex.Add(bases.occupiedHex);
            }
        }
    }
    #endregion

    public void StackCheck()
    {
        //yield return new WaitForEndOfFrame();
        Debug.Log("what");
        if (oneStack)
        {
            Debug.Log("Check Again");
            oneStack = false;
            GameManager.Instance.firstFullStack = false;
            GameManager.Instance.CheckSimilarTopTiles(); //Check Again for confirmation
        }
    }
}
