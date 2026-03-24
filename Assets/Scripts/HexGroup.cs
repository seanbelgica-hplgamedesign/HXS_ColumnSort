using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using TMPro;
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
    public TileColor stackColor;
    [SerializeField] List<HexTiles> HexTiles;
    public int draggerNum;

    [Header ("Board Stacks")]
    public bool boardStack;
    public HexGroup dragReference;
    [SerializeField] Transform pointsPos;
    [SerializeField] TextMeshProUGUI pointsTxt;
    [SerializeField] GameObject pointsPrefab;

    [Header ("Boolean Checks")]
    public bool isTweening;
    public bool isEmptying;
    public bool isTransferring;

    [Header("Drag & Drop")]
    [SerializeField] Vector3 oldPosition;
    [SerializeField] bool isDragging;
    //public bool draggable;

    [Header("Gameplay")]
    public List<HexGroup> nearbyHex;

    [Header("Transfer")]
    public float PerTile;
    [SerializeField] float TransferTime;
    [SerializeField] float TransferDelay;

    [Header("Merging")]
    public int tilesNeeded;
    [SerializeField] float MergeTime;
    [SerializeField] float MergeDelay;

    // Start is called before the first frame update
    void Start()
    {
        oldPosition = transform.position;
        //if (boardStack)
        //{
        //    pointsTxt = Instantiate(pointsPrefab, GameManager.Instance.pointsCanvas.transform).GetComponent<TextMeshProUGUI>();
        //    pointsTxt.text = tilesNeeded.ToString();
        //    pointsTxt.transform.position = pointsPos.position;
        //}

        UpdateTileCount();
    }

    #region HexTiles
    public void UpdateTileCount()
    {
        HexTiles.Clear();
        if (transform.childCount > 1)
        {
            foreach (Transform t in transform) { if(t.GetComponent<HexTiles>()) HexTiles.Add(t.GetComponent<HexTiles>()); }
            stackColor = HexTiles[0].tileColor;
        }

        CheckIfEmpty();
        CheckFullStack();
    }

    public void RandomizeTile(TileColor color)
    {
        UpdateTileCount();
        foreach (HexTiles tiles in HexTiles) { tiles.tileColor = color; tiles.UpdateColor(); }
    }
    #endregion

    #region Drag&Drop
    private void OnMouseDown()
    {
        if (LevelManager.Instance.levelPicking) return;
        if (CTAManager.Instance.GameOver) return;
        if (CameraInfo.Instance.IntroCamera) return;
        if (GroupType != GroupType.Dragger) return;
        //if (!draggable) { return; }
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

        if (GameManager.Instance.currentHexDrag != this) return;

        foreach (HexBase bases in GameManager.Instance.hexBases)
        {
            bases.ChangeColor(false);
        }
        IterationManager.Instance.AddClick();

        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray);

        foreach (RaycastHit hit in hits)
        {
            if (hit.collider.CompareTag("Dropper"))
            {
                if (!hit.collider.GetComponentInParent<HexBase>().occupied)
                {
                    Transform oldParent = transform.parent;
                    transform.DOMove(hit.collider.transform.position, 0.375f).SetEase(Ease.InBack).OnStart(() =>
                    {
                        isTweening = true;
                    }).OnComplete(() =>
                    {
                        isTweening = false;
                        GroupType = GroupType.Mixer;

                        hit.collider.GetComponentInParent<HexBase>().occupied = true;
                        transform.parent.GetComponentInParent<HexBase>().occupiedHex = this;

                        dragReference.dragReference = null;
                        dragReference = null;

                        Debug.Log(transform.parent.name);
                        GameManager.Instance.UpdateAllMixers();
                        Debug.Log(stackColor);
                        GameManager.Instance.hexDraggers.Remove(this);
                        CheckForPossibleTransfers();

                        StartCoroutine(GameManager.Instance.CreateNewDragger(draggerNum, false, 0.25f));

                        StartCoroutine(GameManager.Instance.CheckAllOccupied());

                    });
                    transform.SetParent(hit.collider.transform);
                    GameManager.Instance.currentHexDrag = null;

                    AudioManager.Instance.PlaySFX("PlaceDrag");
                    return;
                }
            }
        }
        GameManager.Instance.currentHexDrag = null;

        AudioManager.Instance.PlaySFX("ReturnDrag");
        transform.DOKill();
        transform.DOMove(oldPosition, 0.5f).OnUpdate(() => { isTweening = true; }).OnComplete(() => { isTweening = false; });
    }
    #endregion

    #region TransferMethod
    public void CheckForPossibleTransfers()
    {
        foreach (HexGroup hex in nearbyHex)
        {
            if (hex.stackColor == this.stackColor)
            {
                if (!hex.isTransferring && !hex.isEmptying)
                {
                    if (hex.boardStack)
                    {
                        //hex.dragReference = null; 
                        GameManager.Instance.hexBoard.Remove(hex);
                    }

                    TransferTiles(hex);
                    return;
                }
            }
        }
    }

    public void TransferTiles(HexGroup receiver)
    {
        int index = 0;
        isTransferring = true;
        receiver.isTransferring = true;
        //if (receiver.boardStack) receiver.pointsTxt.gameObject.SetActive(false);

        Sequence transfer = DOTween.Sequence();
        for (int i = HexTiles.Count - 1; i > -1; i--)
        {
            HexTiles tiles = HexTiles[i];
            Transform childTile = tiles.transform.GetChild(0).GetChild(0);
            tiles.transform.LookAt(receiver.transform); float posY = tiles.transform.eulerAngles.y - 180;
            tiles.transform.eulerAngles = new Vector3(0, posY, 0);

            Vector3 newPos = receiver.HexTiles[receiver.HexTiles.Count - 1].transform.position + (Vector3.up * (0.2f * index));
            transfer.Insert(TransferDelay * index, tiles.transform.DOJump(newPos, 0.2f * (index + 1), 1, TransferTime)
            .OnStart(() => { AudioManager.Instance.PlaySFX("Transfer"); })
                .OnComplete(() => { tiles.transform.eulerAngles = Vector3.zero;
                }));
            transfer.Insert(TransferDelay * index, childTile.transform.DOLocalRotate(Vector3.right * 90, TransferTime))
                .OnComplete(() => { childTile.transform.localEulerAngles = Vector3.right * 270; });

            index++;
        }

        transfer.OnComplete(() =>
        {
            index = 0;
            foreach (HexTiles tiles in HexTiles)
            {
                Vector3 newPos = receiver.HexTiles[receiver.HexTiles.Count - 1].transform.position + (Vector3.up * (0.2f * index));
                tiles.transform.SetParent(receiver.transform); tiles.transform.position = newPos; index++;
            }

            GameManager.Instance.UpdateAllMixers();
        });

        transfer.Play();
    }

    public void CheckFullStack()
    {
        if (GroupType != GroupType.Mixer) return;
        if (isEmptying) return;

        if (HexTiles.Count >= tilesNeeded)
        {
            //if (boardStack) { GameManager.Instance.UpdateScore(tilesNeeded); }
            GameManager.Instance.UpdateScore(tilesNeeded);
            isEmptying = true;

            int index = 0;
            Sequence merge = DOTween.Sequence();
            for (int i = HexTiles.Count - 1; i > -1; i--)
            {
                HexTiles tiles = HexTiles[i];
                merge.Insert(MergeDelay * index, tiles.transform.DOScale(0.1f, MergeTime).OnStart(() => { AudioManager.Instance.PlaySFX("Pickup"); })
                    .OnComplete(() => { tiles.transform.localScale = Vector3.zero; }));
                index++;
            }

            merge.OnComplete(() =>
            {
                if (pointsTxt) DestroyImmediate(pointsTxt.gameObject);
                StartCoroutine(DelayFullMerge());
                //DelayFullMerge();
            });

            merge.Play();
        }
    }

    public IEnumerator DelayFullMerge()
    {
        yield return new WaitForSeconds(0.125f);
        GetComponentInParent<HexBase>().sparkleVFX.Play();
        AudioManager.Instance.PlaySFX("FullStack");

        isEmptying = false;

        UpdateTileCount();
    }

    public void CheckIfEmpty()
    {
        if (HexTiles.Count == 0 && GroupType != GroupType.Dragger)
        {
            GameManager.Instance.currentMixers.Remove(this);
            transform.parent.GetComponent<HexBase>().occupied = false;
            transform.parent.GetComponent<HexBase>().occupiedHex = null;

            GameManager.Instance.UpdateAllMixers();
            DestroyImmediate(this.gameObject);
        }
    }

    public void UpdateNearbyTiles()
    {
        nearbyHex.Clear();
        foreach(HexBase bases in transform.parent.GetComponent<HexBase>().nearbyBases)
        {
            if (bases.occupied)
            {
                if (!bases.occupiedHex.isEmptying && !bases.occupiedHex.isTransferring)
                {
                    if (bases.occupiedHex.boardStack)
                    {
                        nearbyHex.Insert(0, bases.occupiedHex);
                    }
                    else
                    {
                        nearbyHex.Add(bases.occupiedHex);
                    }
                }
            }
        }
    }
    #endregion
}
