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
    [SerializeField] List<HexTiles> HexTiles;
    public List<HexGroup> nearbyHex;
    public bool isTweening;
    public bool oneColor;
    public bool oneStack;
    public bool isEmptying;

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
    public int transferIndex;
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
                    if (HexTiles.Count > 2)
                    {
                        if (topTile.tileColor == HexTiles[HexTiles.Count - 3].tileColor)
                        {
                            stackNum = 3;
                            thirdTopTile = HexTiles[HexTiles.Count - 3];
                            while (true)
                            {
                                if (HexTiles.Count > stackNum)
                                {
                                    if (topTile.tileColor == HexTiles[HexTiles.Count - (stackNum + 1)].tileColor)
                                    {
                                        stackNum++;
                                        extraSameTiles.Add(HexTiles[HexTiles.Count - stackNum]);
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                                else
                                {
                                    break;
                                }
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
                foreach (RaycastHit h in hits)
                {
                    hit = h;
                    if (hit.collider.CompareTag("Dropper"))
                    {
                        if (!hit.collider.GetComponentInParent<HexBase>().occupied)
                        {
                            dragger.transform.position = hit.collider.transform.position + (Vector3.up * 1.25f);
                            hit.collider.GetComponent<HexBase>().ChangeColor(true);
                            return;
                        }
                    }
                }
                if (Physics.Raycast(ray, out hit, 100f, groundLayer))
                {
                    transform.position = hit.point;
                }
            }

        }
    }

    private void OnMouseUp()
    {
        isDragging = false;
        TutorialManager.Instance.ResetTimer();
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
                                GameManager.Instance.IsTransferring = true;
                                dragger.isTweening = true;
                            }).OnComplete(() =>
                            {
                                GameManager.Instance.IsTransferring = false;
                                dragger.isTweening = false;
                                dragger.GroupType = GroupType.Mixer;
                                GameManager.Instance.currentMixers.Add(this);
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

                            hit.collider.GetComponentInParent<HexBase>().occupied = true;
                            hit.collider.GetComponent<HexBase>().ChangeColor(false);
                            transform.parent.GetComponentInParent<HexBase>().occupiedHex = dragger;
                            GameManager.Instance.UpdateAllMixer("Dropped");

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
        if (secondTopTile) { transferIndex = secondTopTile.TransferTiles(topTile.transform, transferIndex, true); }
    }

    public void CheckFullStack()
    {
        CheckHexTiles();

        if (stackNum >= 3)// && oneColor)
        {
            if (!GameManager.Instance.firstFullStack)
            {
                GameManager.Instance.firstFullStack = true;
                oneStack = true;
            }
            RemoveStacks();
        }

    }

    public void RemoveStacks()
    {
        isEmptying = true;
        disappearingTiles.Clear();

        AudioManager.Instance.PlaySFX("FullStack");
        int index = 0;
        float lastPosY = 0;
        foreach (GameObject t in topTile.singleTile)
        {
            t.transform.DOScale(0, 0.03125f).SetDelay(0.015625f * index);
            index++;
        }
        disappearingTiles.Add(topTile);
        transform.DOScale(1, 0).SetDelay(0.015625f * index).OnStart(() => { HexTiles.Remove(topTile); }).OnComplete(() => {
            disappearingTiles.Remove(topTile); Destroy(topTile.gameObject); }); index++;
        foreach (GameObject t in secondTopTile.singleTile)
        {
            t.transform.DOScale(0, 0.03125f).SetDelay(0.015625f * index);
            index++;
        }
        disappearingTiles.Add(secondTopTile);
        transform.DOScale(1, 0).SetDelay(0.015625f * index).OnStart(() => { HexTiles.Remove(secondTopTile); }).OnComplete(() => {
            disappearingTiles.Remove(secondTopTile); Destroy(secondTopTile.gameObject); }); index++;
        foreach (GameObject t in thirdTopTile.singleTile)
        {
            t.transform.DOScale(0, 0.03125f).SetDelay(0.015625f * index); lastPosY = t.transform.position.y;
            index++;
        }
        disappearingTiles.Add(thirdTopTile);
        transform.DOScale(1, 0).SetDelay(0.015625f * index).OnStart(() => { HexTiles.Remove(thirdTopTile); }).OnComplete(() => {
            disappearingTiles.Remove(thirdTopTile); Destroy(thirdTopTile.gameObject); }); index++;
        if (extraSameTiles.Count > 0)
        {
            Debug.Log(extraSameTiles.Count);
            foreach (HexTiles tiles in extraSameTiles)
            {
                foreach (GameObject t in tiles.singleTile)
                {
                    t.transform.DOScale(0, 0.03125f).SetDelay(0.015625f * index); lastPosY = t.transform.position.y;
                    index++;
                }
                disappearingTiles.Add(tiles);
                transform.DOScale(1, 0).SetDelay(0.015625f * index).OnStart(() => { HexTiles.Remove(tiles); }).OnComplete(() => { 
                    disappearingTiles.Remove(tiles); Destroy(tiles.gameObject); }); index++;

            }
            extraSameTiles.Clear();
        }
        transform.DOScale(1, 0).SetDelay(0.015625f * index).OnComplete(() =>
        {
            StartCoroutine(FinishRemove(lastPosY));
        });
    }

    public IEnumerator FinishRemove(float lastPosY)
    {
        yield return new WaitUntil(() => disappearingTiles.Count == 0);

        isEmptying = false;
        CheckHexTiles();
        GameManager.Instance.CheckSimilarTopTiles();
        GameManager.Instance.UpdateAllMixer("RS");
        Debug.Log(lastPosY);
        GetComponentInParent<HexBase>().sparkleVFX.transform.position = GetComponentInParent<HexBase>().sparkleVFX.transform.position + (Vector3.up * (lastPosY));
        GetComponentInParent<HexBase>().sparkleVFX.Play();

    }

    public void CheckIfEmpty()
    {
        if (transform.parent.GetComponentInParent<HexBase>() || Replacer)
        {
            if (HexTiles.Count == 0)
            {
                Debug.Log("Huh");
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
                StartCoroutine(StackCheck());
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

    public IEnumerator StackCheck()
    {
        yield return new WaitForEndOfFrame();
        CheckHexTiles();
        GameManager.Instance.UpdateAllMixer("SC");
        if (oneStack)
        {
            Debug.Log("Check Again");
            oneStack = false;
            GameManager.Instance.CheckSimilarTopTiles(); //Check Again for confirmation
        }
    }
}
