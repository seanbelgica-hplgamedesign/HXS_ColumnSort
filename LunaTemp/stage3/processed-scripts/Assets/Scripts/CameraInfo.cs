using DG.Tweening;
using DG.Tweening.Plugins.Core.PathCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using UnityEngine;

public class CameraInfo : MonoBehaviour
{
    [SerializeField] Transform PathParent;
    [SerializeField] List<Transform> TargetPaths;
    Vector3[] TargetPositions;
    Quaternion[] TargetRotations;
    [SerializeField] float[] pathDurations;

    public bool IntroCamera;

    #region Instance Calling
    public static CameraInfo Instance;
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(this.gameObject);
        }
    }
    #endregion
    // Start is called before the first frame update
    void Start()
    {
        //IntroCamera = true;
        StartCoroutine(StartRolling());
    }

    public IEnumerator StartRolling()
    {
        yield return new WaitForEndOfFrame();

        foreach (Transform t in PathParent)
        {
            TargetPaths.Add(t);
        }
        transform.position = TargetPaths[0].position;
        transform.eulerAngles = TargetPaths[0].eulerAngles;

        TargetPositions = new Vector3[TargetPaths.Count];
        TargetRotations = new Quaternion[TargetPaths.Count];
        for (int i = 0; i <  TargetPaths.Count; i++)
        {
            TargetPositions[i] = TargetPaths[i].position;
            TargetRotations[i] = TargetPaths[i].rotation;
        }

        pathDurations = GetWaypointDurations(TargetPositions, 5f);
        transform.DOPath(TargetPositions, 5f, PathType.Linear, PathMode.Full3D, 10, null).OnWaypointChange(ChangeRotation).OnComplete(() =>
        {
            IntroCamera = false;
        });
    }

    private void ChangeRotation(int index)
    {
        //transform.DORotate(TargetRotations[index], GetWaypointDuration(TargetPositions, index, pathTween.Duration()));
        transform.DORotateQuaternion(TargetRotations[index + 1], pathDurations[index]);
    }

    float[] GetWaypointDurations(Vector3[] waypoints, float totalDuration)
    {
        int segmentCount = waypoints.Length - 1;
        float[] durations = new float[segmentCount];

        float totalDistance = 0f;
        float[] distances = new float[segmentCount];

        // Calculate segment distances
        for (int i = 0; i < segmentCount; i++)
        {
            float dist = Vector3.Distance(waypoints[i], waypoints[i + 1]);
            distances[i] = dist;
            totalDistance += dist;
        }

        // Convert distance ratio to duration
        for (int i = 0; i < segmentCount; i++)
        {
            durations[i] = (distances[i] / totalDistance) * totalDuration;
        }

        return durations;
    }
}
