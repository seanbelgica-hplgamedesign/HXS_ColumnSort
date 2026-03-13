var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointSpring' )
  var i365 = data
  i364.spring = i365[0]
  i364.damper = i365[1]
  i364.targetPosition = i365[2]
  return i364
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointMotor' )
  var i367 = data
  i366.m_TargetVelocity = i367[0]
  i366.m_Force = i367[1]
  i366.m_FreeSpin = i367[2]
  return i366
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointLimits' )
  var i369 = data
  i368.m_Min = i369[0]
  i368.m_Max = i369[1]
  i368.m_Bounciness = i369[2]
  i368.m_BounceMinVelocity = i369[3]
  i368.m_ContactDistance = i369[4]
  i368.minBounce = i369[5]
  i368.maxBounce = i369[6]
  return i368
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointDrive' )
  var i371 = data
  i370.m_PositionSpring = i371[0]
  i370.m_PositionDamper = i371[1]
  i370.m_MaximumForce = i371[2]
  i370.m_UseAcceleration = i371[3]
  return i370
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i373 = data
  i372.m_Spring = i373[0]
  i372.m_Damper = i373[1]
  return i372
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i375 = data
  i374.m_Limit = i375[0]
  i374.m_Bounciness = i375[1]
  i374.m_ContactDistance = i375[2]
  return i374
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i377 = data
  i376.m_ExtremumSlip = i377[0]
  i376.m_ExtremumValue = i377[1]
  i376.m_AsymptoteSlip = i377[2]
  i376.m_AsymptoteValue = i377[3]
  i376.m_Stiffness = i377[4]
  return i376
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i379 = data
  i378.m_LowerAngle = i379[0]
  i378.m_UpperAngle = i379[1]
  return i378
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i381 = data
  i380.m_MotorSpeed = i381[0]
  i380.m_MaximumMotorTorque = i381[1]
  return i380
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i383 = data
  i382.m_DampingRatio = i383[0]
  i382.m_Frequency = i383[1]
  i382.m_Angle = i383[2]
  return i382
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i385 = data
  i384.m_LowerTranslation = i385[0]
  i384.m_UpperTranslation = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i387 = data
  i386.name = i387[0]
  i386.width = i387[1]
  i386.height = i387[2]
  i386.mipmapCount = i387[3]
  i386.anisoLevel = i387[4]
  i386.filterMode = i387[5]
  i386.hdr = !!i387[6]
  i386.format = i387[7]
  i386.wrapMode = i387[8]
  i386.alphaIsTransparency = !!i387[9]
  i386.alphaSource = i387[10]
  i386.graphicsFormat = i387[11]
  i386.sRGBTexture = !!i387[12]
  i386.desiredColorSpace = i387[13]
  i386.wrapU = i387[14]
  i386.wrapV = i387[15]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i389 = data
  i388.position = new pc.Vec3( i389[0], i389[1], i389[2] )
  i388.scale = new pc.Vec3( i389[3], i389[4], i389[5] )
  i388.rotation = new pc.Quat(i389[6], i389[7], i389[8], i389[9])
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i391 = data
  request.r(i391[0], i391[1], 0, i390, 'sharedMesh')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'additionalVertexStreams')
  i392.enabled = !!i393[2]
  request.r(i393[3], i393[4], 0, i392, 'sharedMaterial')
  var i395 = i393[5]
  var i394 = []
  for(var i = 0; i < i395.length; i += 2) {
  request.r(i395[i + 0], i395[i + 1], 2, i394, '')
  }
  i392.sharedMaterials = i394
  i392.receiveShadows = !!i393[6]
  i392.shadowCastingMode = i393[7]
  i392.sortingLayerID = i393[8]
  i392.sortingOrder = i393[9]
  i392.lightmapIndex = i393[10]
  i392.lightmapSceneIndex = i393[11]
  i392.lightmapScaleOffset = new pc.Vec4( i393[12], i393[13], i393[14], i393[15] )
  i392.lightProbeUsage = i393[16]
  i392.reflectionProbeUsage = i393[17]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i399 = data
  i398.name = i399[0]
  i398.tagId = i399[1]
  i398.enabled = !!i399[2]
  i398.isStatic = !!i399[3]
  i398.layer = i399[4]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i401 = data
  i400.name = i401[0]
  i400.halfPrecision = !!i401[1]
  i400.useUInt32IndexFormat = !!i401[2]
  i400.vertexCount = i401[3]
  i400.aabb = i401[4]
  var i403 = i401[5]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( !!i403[i + 0] );
  }
  i400.streams = i402
  i400.vertices = i401[6]
  var i405 = i401[7]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i405[i + 0]) );
  }
  i400.subMeshes = i404
  var i407 = i401[8]
  var i406 = []
  for(var i = 0; i < i407.length; i += 16) {
    i406.push( new pc.Mat4().setData(i407[i + 0], i407[i + 1], i407[i + 2], i407[i + 3],  i407[i + 4], i407[i + 5], i407[i + 6], i407[i + 7],  i407[i + 8], i407[i + 9], i407[i + 10], i407[i + 11],  i407[i + 12], i407[i + 13], i407[i + 14], i407[i + 15]) );
  }
  i400.bindposes = i406
  var i409 = i401[9]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i409[i + 0]) );
  }
  i400.blendShapes = i408
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i415 = data
  i414.triangles = i415[0]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i421 = data
  i420.name = i421[0]
  var i423 = i421[1]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i423[i + 0]) );
  }
  i420.frames = i422
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i424 = root || new pc.UnityMaterial()
  var i425 = data
  i424.name = i425[0]
  request.r(i425[1], i425[2], 0, i424, 'shader')
  i424.renderQueue = i425[3]
  i424.enableInstancing = !!i425[4]
  var i427 = i425[5]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i427[i + 0]) );
  }
  i424.floatParameters = i426
  var i429 = i425[6]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i429[i + 0]) );
  }
  i424.colorParameters = i428
  var i431 = i425[7]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i431[i + 0]) );
  }
  i424.vectorParameters = i430
  var i433 = i425[8]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i433[i + 0]) );
  }
  i424.textureParameters = i432
  var i435 = i425[9]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i435[i + 0]) );
  }
  i424.materialFlags = i434
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i439 = data
  i438.name = i439[0]
  i438.value = i439[1]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i443 = data
  i442.name = i443[0]
  i442.value = new pc.Color(i443[1], i443[2], i443[3], i443[4])
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i447 = data
  i446.name = i447[0]
  i446.value = new pc.Vec4( i447[1], i447[2], i447[3], i447[4] )
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'value')
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i455 = data
  i454.name = i455[0]
  i454.enabled = !!i455[1]
  return i454
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i456 = root || request.c( 'HexGroup' )
  var i457 = data
  i456.GroupType = i457[0]
  i456.Replacer = !!i457[1]
  var i459 = i457[2]
  var i458 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i459.length; i += 2) {
  request.r(i459[i + 0], i459[i + 1], 1, i458, '')
  }
  i456.nearbyHex = i458
  i456.isTweening = !!i457[3]
  i456.oneColor = !!i457[4]
  i456.oneStack = !!i457[5]
  i456.isEmptying = !!i457[6]
  i456.draggable = !!i457[7]
  request.r(i457[8], i457[9], 0, i456, 'topTile')
  request.r(i457[10], i457[11], 0, i456, 'secondTopTile')
  request.r(i457[12], i457[13], 0, i456, 'thirdTopTile')
  var i461 = i457[14]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i461.length; i += 2) {
  request.r(i461[i + 0], i461[i + 1], 1, i460, '')
  }
  i456.extraSameTiles = i460
  i456.stackNum = i457[15]
  i456.transferIndex = i457[16]
  i456.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i457[17] )
  var i463 = i457[18]
  var i462 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 1, i462, '')
  }
  i456.HexTiles = i462
  i456.oldPosition = new pc.Vec3( i457[19], i457[20], i457[21] )
  i456.isDragging = !!i457[22]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i469 = data
  i468.enabled = !!i469[0]
  i468.isTrigger = !!i469[1]
  request.r(i469[2], i469[3], 0, i468, 'material')
  request.r(i469[4], i469[5], 0, i468, 'sharedMesh')
  i468.convex = !!i469[6]
  return i468
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i470 = root || request.c( 'HexTiles' )
  var i471 = data
  i470.tileColor = i471[0]
  var i473 = i471[1]
  var i472 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i473.length; i += 2) {
  request.r(i473[i + 0], i473[i + 1], 1, i472, '')
  }
  i470.singleTile = i472
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i477 = data
  i476.center = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.size = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.enabled = !!i477[6]
  i476.isTrigger = !!i477[7]
  request.r(i477[8], i477[9], 0, i476, 'material')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i479 = data
  i478.pivot = new pc.Vec2( i479[0], i479[1] )
  i478.anchorMin = new pc.Vec2( i479[2], i479[3] )
  i478.anchorMax = new pc.Vec2( i479[4], i479[5] )
  i478.sizeDelta = new pc.Vec2( i479[6], i479[7] )
  i478.anchoredPosition3D = new pc.Vec3( i479[8], i479[9], i479[10] )
  i478.rotation = new pc.Quat(i479[11], i479[12], i479[13], i479[14])
  i478.scale = new pc.Vec3( i479[15], i479[16], i479[17] )
  return i478
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i480 = root || request.c( 'ConfettiController' )
  var i481 = data
  i480.gameWin = !!i481[0]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i483 = data
  i482.cullTransparentMesh = !!i483[0]
  return i482
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.UI.Image' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Sprite')
  i484.m_Type = i485[2]
  i484.m_PreserveAspect = !!i485[3]
  i484.m_FillCenter = !!i485[4]
  i484.m_FillMethod = i485[5]
  i484.m_FillAmount = i485[6]
  i484.m_FillClockwise = !!i485[7]
  i484.m_FillOrigin = i485[8]
  i484.m_UseSpriteMesh = !!i485[9]
  i484.m_PixelsPerUnitMultiplier = i485[10]
  request.r(i485[11], i485[12], 0, i484, 'm_Material')
  i484.m_Maskable = !!i485[13]
  i484.m_Color = new pc.Color(i485[14], i485[15], i485[16], i485[17])
  i484.m_RaycastTarget = !!i485[18]
  i484.m_RaycastPadding = new pc.Vec4( i485[19], i485[20], i485[21], i485[22] )
  return i484
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i486 = root || request.c( 'ConfettiFall' )
  var i487 = data
  i486.gameWin = !!i487[0]
  request.r(i487[1], i487[2], 0, i486, 'fallArea')
  i486.fallDistance = i487[3]
  i486.fallDuration = i487[4]
  i486.resetDelay = i487[5]
  i486.horizontalFlutter = i487[6]
  i486.rotationAngle = i487[7]
  i486.startDelayMin = i487[8]
  i486.startDelayMax = i487[9]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i489 = data
  i488.name = i489[0]
  i488.atlasId = i489[1]
  i488.mipmapCount = i489[2]
  i488.hdr = !!i489[3]
  i488.size = i489[4]
  i488.anisoLevel = i489[5]
  i488.filterMode = i489[6]
  var i491 = i489[7]
  var i490 = []
  for(var i = 0; i < i491.length; i += 4) {
    i490.push( UnityEngine.Rect.MinMaxRect(i491[i + 0], i491[i + 1], i491[i + 2], i491[i + 3]) );
  }
  i488.rects = i490
  i488.wrapU = i489[8]
  i488.wrapV = i489[9]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i495 = data
  i494.name = i495[0]
  i494.index = i495[1]
  i494.startup = !!i495[2]
  return i494
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i496 = root || request.c( 'CameraInfo' )
  var i497 = data
  i496.IntroCamera = !!i497[0]
  request.r(i497[1], i497[2], 0, i496, 'PathParent')
  var i499 = i497[3]
  var i498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 1, i498, '')
  }
  i496.TargetPaths = i498
  i496.pathDurations = i497[4]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i503 = data
  i502.enabled = !!i503[0]
  i502.aspect = i503[1]
  i502.orthographic = !!i503[2]
  i502.orthographicSize = i503[3]
  i502.backgroundColor = new pc.Color(i503[4], i503[5], i503[6], i503[7])
  i502.nearClipPlane = i503[8]
  i502.farClipPlane = i503[9]
  i502.fieldOfView = i503[10]
  i502.depth = i503[11]
  i502.clearFlags = i503[12]
  i502.cullingMask = i503[13]
  i502.rect = i503[14]
  request.r(i503[15], i503[16], 0, i502, 'targetTexture')
  i502.usePhysicalProperties = !!i503[17]
  i502.focalLength = i503[18]
  i502.sensorSize = new pc.Vec2( i503[19], i503[20] )
  i502.lensShift = new pc.Vec2( i503[21], i503[22] )
  i502.gateFit = i503[23]
  i502.commandBufferCount = i503[24]
  i502.cameraType = i503[25]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i505 = data
  i504.enabled = !!i505[0]
  i504.type = i505[1]
  i504.color = new pc.Color(i505[2], i505[3], i505[4], i505[5])
  i504.cullingMask = i505[6]
  i504.intensity = i505[7]
  i504.range = i505[8]
  i504.spotAngle = i505[9]
  i504.shadows = i505[10]
  i504.shadowNormalBias = i505[11]
  i504.shadowBias = i505[12]
  i504.shadowStrength = i505[13]
  i504.shadowResolution = i505[14]
  i504.lightmapBakeType = i505[15]
  i504.renderMode = i505[16]
  request.r(i505[17], i505[18], 0, i504, 'cookie')
  i504.cookieSize = i505[19]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.planeDistance = i507[1]
  i506.referencePixelsPerUnit = i507[2]
  i506.isFallbackOverlay = !!i507[3]
  i506.renderMode = i507[4]
  i506.renderOrder = i507[5]
  i506.sortingLayerName = i507[6]
  i506.sortingOrder = i507[7]
  i506.scaleFactor = i507[8]
  request.r(i507[9], i507[10], 0, i506, 'worldCamera')
  i506.overrideSorting = !!i507[11]
  i506.pixelPerfect = !!i507[12]
  i506.targetDisplay = i507[13]
  i506.overridePixelPerfect = !!i507[14]
  return i506
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i509 = data
  i508.m_UiScaleMode = i509[0]
  i508.m_ReferencePixelsPerUnit = i509[1]
  i508.m_ScaleFactor = i509[2]
  i508.m_ReferenceResolution = new pc.Vec2( i509[3], i509[4] )
  i508.m_ScreenMatchMode = i509[5]
  i508.m_MatchWidthOrHeight = i509[6]
  i508.m_PhysicalUnit = i509[7]
  i508.m_FallbackScreenDPI = i509[8]
  i508.m_DefaultSpriteDPI = i509[9]
  i508.m_DynamicPixelsPerUnit = i509[10]
  i508.m_PresetInfoIsWorld = !!i509[11]
  return i508
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i511 = data
  i510.m_IgnoreReversedGraphics = !!i511[0]
  i510.m_BlockingObjects = i511[1]
  i510.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i511[2] )
  return i510
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i512 = root || request.c( 'TutorialManager' )
  var i513 = data
  i512.IntroAnim = !!i513[0]
  request.r(i513[1], i513[2], 0, i512, 'tutorialPanel')
  request.r(i513[3], i513[4], 0, i512, 'tutorialText')
  request.r(i513[5], i513[6], 0, i512, 'tutorialTiles')
  request.r(i513[7], i513[8], 0, i512, 'handTool')
  i512.starterPos = new pc.Vec2( i513[9], i513[10] )
  i512.baseP = new pc.Vec2( i513[11], i513[12] )
  var i515 = i513[13]
  var i514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i515.length; i += 2) {
  request.r(i515[i + 0], i515[i + 1], 1, i514, '')
  }
  i512.dragPos = i514
  var i517 = i513[14]
  var i516 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i517.length; i += 2) {
  request.r(i517[i + 0], i517[i + 1], 1, i516, '')
  }
  i512.basePos = i516
  i512.hexMove = !!i513[15]
  i512.currentTimer = i513[16]
  i512.maxTimer = i513[17]
  i512.timerCalled = !!i513[18]
  return i512
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.Mask' )
  var i521 = data
  i520.m_ShowMaskGraphic = !!i521[0]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i523 = data
  i522.m_Alpha = i523[0]
  i522.m_Interactable = !!i523[1]
  i522.m_BlocksRaycasts = !!i523[2]
  i522.m_IgnoreParentGroups = !!i523[3]
  i522.enabled = !!i523[4]
  return i522
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.Button' )
  var i525 = data
  i524.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i525[0], i524.m_OnClick)
  i524.m_Navigation = request.d('UnityEngine.UI.Navigation', i525[1], i524.m_Navigation)
  i524.m_Transition = i525[2]
  i524.m_Colors = request.d('UnityEngine.UI.ColorBlock', i525[3], i524.m_Colors)
  i524.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i525[4], i524.m_SpriteState)
  i524.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i525[5], i524.m_AnimationTriggers)
  i524.m_Interactable = !!i525[6]
  request.r(i525[7], i525[8], 0, i524, 'm_TargetGraphic')
  return i524
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i527 = data
  i526.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i527[0], i526.m_PersistentCalls)
  return i526
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i529 = data
  var i531 = i529[0]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i531.length; i += 1) {
    i530.add(request.d('UnityEngine.Events.PersistentCall', i531[i + 0]));
  }
  i528.m_Calls = i530
  return i528
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'm_Target')
  i534.m_TargetAssemblyTypeName = i535[2]
  i534.m_MethodName = i535[3]
  i534.m_Mode = i535[4]
  i534.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i535[5], i534.m_Arguments)
  i534.m_CallState = i535[6]
  return i534
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i537 = data
  i536.m_Mode = i537[0]
  i536.m_WrapAround = !!i537[1]
  request.r(i537[2], i537[3], 0, i536, 'm_SelectOnUp')
  request.r(i537[4], i537[5], 0, i536, 'm_SelectOnDown')
  request.r(i537[6], i537[7], 0, i536, 'm_SelectOnLeft')
  request.r(i537[8], i537[9], 0, i536, 'm_SelectOnRight')
  return i536
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i539 = data
  i538.m_NormalColor = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.m_HighlightedColor = new pc.Color(i539[4], i539[5], i539[6], i539[7])
  i538.m_PressedColor = new pc.Color(i539[8], i539[9], i539[10], i539[11])
  i538.m_SelectedColor = new pc.Color(i539[12], i539[13], i539[14], i539[15])
  i538.m_DisabledColor = new pc.Color(i539[16], i539[17], i539[18], i539[19])
  i538.m_ColorMultiplier = i539[20]
  i538.m_FadeDuration = i539[21]
  return i538
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_HighlightedSprite')
  request.r(i541[2], i541[3], 0, i540, 'm_PressedSprite')
  request.r(i541[4], i541[5], 0, i540, 'm_SelectedSprite')
  request.r(i541[6], i541[7], 0, i540, 'm_DisabledSprite')
  return i540
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i543 = data
  i542.m_NormalTrigger = i543[0]
  i542.m_HighlightedTrigger = i543[1]
  i542.m_PressedTrigger = i543[2]
  i542.m_SelectedTrigger = i543[3]
  i542.m_DisabledTrigger = i543[4]
  return i542
}

Deserializers["HexBase"] = function (request, data, root) {
  var i544 = root || request.c( 'HexBase' )
  var i545 = data
  var i547 = i545[0]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 1, i546, '')
  }
  i544.nearbyBases = i546
  request.r(i545[1], i545[2], 0, i544, 'occupiedHex')
  i544.occupied = !!i545[3]
  return i544
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_FirstSelected')
  i550.m_sendNavigationEvents = !!i551[2]
  i550.m_DragThreshold = i551[3]
  return i550
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i553 = data
  i552.m_HorizontalAxis = i553[0]
  i552.m_VerticalAxis = i553[1]
  i552.m_SubmitButton = i553[2]
  i552.m_CancelButton = i553[3]
  i552.m_InputActionsPerSecond = i553[4]
  i552.m_RepeatDelay = i553[5]
  i552.m_ForceModuleActive = !!i553[6]
  i552.m_SendPointerHoverToParent = !!i553[7]
  return i552
}

Deserializers["GameManager"] = function (request, data, root) {
  var i554 = root || request.c( 'GameManager' )
  var i555 = data
  var i557 = i555[0]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 1, i556, '')
  }
  i554.tileMats = i556
  request.r(i555[1], i555[2], 0, i554, 'Ground')
  request.r(i555[3], i555[4], 0, i554, 'replacerParent')
  request.r(i555[5], i555[6], 0, i554, 'hexNorth')
  var i559 = i555[7]
  var i558 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i559.length; i += 2) {
  request.r(i559[i + 0], i559[i + 1], 1, i558, '')
  }
  i554.hexBases = i558
  var i561 = i555[8]
  var i560 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i561.length; i += 2) {
  request.r(i561[i + 0], i561[i + 1], 1, i560, '')
  }
  i554.hexDraggers = i560
  request.r(i555[9], i555[10], 0, i554, 'emptyDrag')
  var i563 = i555[11]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 1, i562, '')
  }
  i554.currentMixers = i562
  request.r(i555[12], i555[13], 0, i554, 'currentReplacer')
  var i565 = i555[14]
  var i564 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 1, i564, '')
  }
  i554.nearbyReplacerHexes = i564
  i554.IsTransferring = !!i555[15]
  i554.firstFullStack = !!i555[16]
  request.r(i555[17], i555[18], 0, i554, 'currentHexDrag')
  request.r(i555[19], i555[20], 0, i554, 'hexDragPrefab')
  request.r(i555[21], i555[22], 0, i554, 'hexDragParent')
  return i554
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i568 = root || request.c( 'AudioManager' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'library')
  i568.sfxPoolSize = i569[2]
  return i568
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i570 = root || request.c( 'DontDestroy' )
  var i571 = data
  return i570
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i572 = root || request.c( 'CTAManager' )
  var i573 = data
  i572.GameOver = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'WinPanel')
  request.r(i573[3], i573[4], 0, i572, 'LosePanel')
  i572.iosLink = i573[5]
  i572.androidLink = i573[6]
  return i572
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_ObjectArgument')
  i574.m_ObjectArgumentAssemblyTypeName = i575[2]
  i574.m_IntArgument = i575[3]
  i574.m_FloatArgument = i575[4]
  i574.m_StringArgument = i575[5]
  i574.m_BoolArgument = !!i575[6]
  return i574
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i576 = root || request.c( 'IterationManager' )
  var i577 = data
  i576.numClicks = i577[0]
  i576.maxNumClicks = i577[1]
  i576.Iterations = i577[2]
  i576.currentTimer = i577[3]
  i576.maxTimer = i577[4]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i579 = data
  i578.ambientIntensity = i579[0]
  i578.reflectionIntensity = i579[1]
  i578.ambientMode = i579[2]
  i578.ambientLight = new pc.Color(i579[3], i579[4], i579[5], i579[6])
  i578.ambientSkyColor = new pc.Color(i579[7], i579[8], i579[9], i579[10])
  i578.ambientGroundColor = new pc.Color(i579[11], i579[12], i579[13], i579[14])
  i578.ambientEquatorColor = new pc.Color(i579[15], i579[16], i579[17], i579[18])
  i578.fogColor = new pc.Color(i579[19], i579[20], i579[21], i579[22])
  i578.fogEndDistance = i579[23]
  i578.fogStartDistance = i579[24]
  i578.fogDensity = i579[25]
  i578.fog = !!i579[26]
  request.r(i579[27], i579[28], 0, i578, 'skybox')
  i578.fogMode = i579[29]
  var i581 = i579[30]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i581[i + 0]) );
  }
  i578.lightmaps = i580
  i578.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i579[31], i578.lightProbes)
  i578.lightmapsMode = i579[32]
  i578.mixedBakeMode = i579[33]
  i578.environmentLightingMode = i579[34]
  i578.ambientProbe = new pc.SphericalHarmonicsL2(i579[35])
  i578.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i579[36])
  i578.useReferenceAmbientProbe = !!i579[37]
  request.r(i579[38], i579[39], 0, i578, 'customReflection')
  request.r(i579[40], i579[41], 0, i578, 'defaultReflection')
  i578.defaultReflectionMode = i579[42]
  i578.defaultReflectionResolution = i579[43]
  i578.sunLightObjectId = i579[44]
  i578.pixelLightCount = i579[45]
  i578.defaultReflectionHDR = !!i579[46]
  i578.hasLightDataAsset = !!i579[47]
  i578.hasManualGenerate = !!i579[48]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i585 = data
  request.r(i585[0], i585[1], 0, i584, 'lightmapColor')
  request.r(i585[2], i585[3], 0, i584, 'lightmapDirection')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i586 = root || new UnityEngine.LightProbes()
  var i587 = data
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i595 = data
  var i597 = i595[0]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i597.length; i += 1) {
    i596.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i597[i + 0]));
  }
  i594.ShaderCompilationErrors = i596
  i594.name = i595[1]
  i594.guid = i595[2]
  var i599 = i595[3]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i594.shaderDefinedKeywords = i598
  var i601 = i595[4]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i601[i + 0]) );
  }
  i594.passes = i600
  var i603 = i595[5]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i603[i + 0]) );
  }
  i594.usePasses = i602
  var i605 = i595[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i605[i + 0]) );
  }
  i594.defaultParameterValues = i604
  request.r(i595[7], i595[8], 0, i594, 'unityFallbackShader')
  i594.readDepth = !!i595[9]
  i594.isCreatedByShaderGraph = !!i595[10]
  i594.compiled = !!i595[11]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i609 = data
  i608.shaderName = i609[0]
  i608.errorMessage = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i614 = root || new pc.UnityShaderPass()
  var i615 = data
  i614.id = i615[0]
  i614.subShaderIndex = i615[1]
  i614.name = i615[2]
  i614.passType = i615[3]
  i614.grabPassTextureName = i615[4]
  i614.usePass = !!i615[5]
  i614.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[6], i614.zTest)
  i614.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[7], i614.zWrite)
  i614.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[8], i614.culling)
  i614.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i615[9], i614.blending)
  i614.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i615[10], i614.alphaBlending)
  i614.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[11], i614.colorWriteMask)
  i614.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[12], i614.offsetUnits)
  i614.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[13], i614.offsetFactor)
  i614.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[14], i614.stencilRef)
  i614.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[15], i614.stencilReadMask)
  i614.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i615[16], i614.stencilWriteMask)
  i614.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i615[17], i614.stencilOp)
  i614.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i615[18], i614.stencilOpFront)
  i614.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i615[19], i614.stencilOpBack)
  var i617 = i615[20]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i617[i + 0]) );
  }
  i614.tags = i616
  var i619 = i615[21]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i614.passDefinedKeywords = i618
  var i621 = i615[22]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i621[i + 0]) );
  }
  i614.passDefinedKeywordGroups = i620
  var i623 = i615[23]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i623[i + 0]) );
  }
  i614.variants = i622
  var i625 = i615[24]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i625[i + 0]) );
  }
  i614.excludedVariants = i624
  i614.hasDepthReader = !!i615[25]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i627 = data
  i626.val = i627[0]
  i626.name = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i629 = data
  i628.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[0], i628.src)
  i628.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[1], i628.dst)
  i628.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i629[2], i628.op)
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i631 = data
  i630.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[0], i630.pass)
  i630.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[1], i630.fail)
  i630.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[2], i630.zFail)
  i630.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i631[3], i630.comp)
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i635 = data
  i634.name = i635[0]
  i634.value = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i639 = data
  var i641 = i639[0]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( i641[i + 0] );
  }
  i638.keywords = i640
  i638.hasDiscard = !!i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i645 = data
  i644.passId = i645[0]
  i644.subShaderIndex = i645[1]
  var i647 = i645[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i644.keywords = i646
  i644.vertexProgram = i645[3]
  i644.fragmentProgram = i645[4]
  i644.exportedForWebGl2 = !!i645[5]
  i644.readDepth = !!i645[6]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'shader')
  i650.pass = i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i655 = data
  i654.name = i655[0]
  i654.type = i655[1]
  i654.value = new pc.Vec4( i655[2], i655[3], i655[4], i655[5] )
  i654.textureValue = i655[6]
  i654.shaderPropertyFlag = i655[7]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i657 = data
  i656.name = i657[0]
  request.r(i657[1], i657[2], 0, i656, 'texture')
  i656.aabb = i657[3]
  i656.vertices = i657[4]
  i656.triangles = i657[5]
  i656.textureRect = UnityEngine.Rect.MinMaxRect(i657[6], i657[7], i657[8], i657[9])
  i656.packedRect = UnityEngine.Rect.MinMaxRect(i657[10], i657[11], i657[12], i657[13])
  i656.border = new pc.Vec4( i657[14], i657[15], i657[16], i657[17] )
  i656.transparency = i657[18]
  i656.bounds = i657[19]
  i656.pixelsPerUnit = i657[20]
  i656.textureWidth = i657[21]
  i656.textureHeight = i657[22]
  i656.nativeSize = new pc.Vec2( i657[23], i657[24] )
  i656.pivot = new pc.Vec2( i657[25], i657[26] )
  i656.textureRectOffset = new pc.Vec2( i657[27], i657[28] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i659 = data
  i658.name = i659[0]
  return i658
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i660 = root || request.c( 'AudioLibrary' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('AudioLibrary+ClipEntry', i663[i + 0]));
  }
  i660.clips = i662
  return i660
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i666 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i667 = data
  i666.key = i667[0]
  i666.channel = i667[1]
  request.r(i667[2], i667[3], 0, i666, 'clip')
  i666.volume = i667[4]
  i666.loop = !!i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i669 = data
  var i671 = i669[0]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i671[i + 0]) );
  }
  i668.files = i670
  i668.componentToPrefabIds = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i675 = data
  i674.path = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'unityObject')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i677 = data
  var i679 = i677[0]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i679[i + 0]) );
  }
  i676.scriptsExecutionOrder = i678
  var i681 = i677[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i681[i + 0]) );
  }
  i676.sortingLayers = i680
  var i683 = i677[2]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i683[i + 0]) );
  }
  i676.cullingLayers = i682
  i676.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i677[3], i676.timeSettings)
  i676.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i677[4], i676.physicsSettings)
  i676.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i677[5], i676.physics2DSettings)
  i676.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i677[6], i676.qualitySettings)
  i676.enableRealtimeShadows = !!i677[7]
  i676.enableAutoInstancing = !!i677[8]
  i676.enableDynamicBatching = !!i677[9]
  i676.lightmapEncodingQuality = i677[10]
  i676.desiredColorSpace = i677[11]
  var i685 = i677[12]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( i685[i + 0] );
  }
  i676.allTags = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i689 = data
  i688.name = i689[0]
  i688.value = i689[1]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i693 = data
  i692.id = i693[0]
  i692.name = i693[1]
  i692.value = i693[2]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i697 = data
  i696.id = i697[0]
  i696.name = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i699 = data
  i698.fixedDeltaTime = i699[0]
  i698.maximumDeltaTime = i699[1]
  i698.timeScale = i699[2]
  i698.maximumParticleTimestep = i699[3]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i701 = data
  i700.gravity = new pc.Vec3( i701[0], i701[1], i701[2] )
  i700.defaultSolverIterations = i701[3]
  i700.bounceThreshold = i701[4]
  i700.autoSyncTransforms = !!i701[5]
  i700.autoSimulation = !!i701[6]
  var i703 = i701[7]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i703[i + 0]) );
  }
  i700.collisionMatrix = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.layerId = i707[1]
  i706.otherLayerId = i707[2]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'material')
  i708.gravity = new pc.Vec2( i709[2], i709[3] )
  i708.positionIterations = i709[4]
  i708.velocityIterations = i709[5]
  i708.velocityThreshold = i709[6]
  i708.maxLinearCorrection = i709[7]
  i708.maxAngularCorrection = i709[8]
  i708.maxTranslationSpeed = i709[9]
  i708.maxRotationSpeed = i709[10]
  i708.baumgarteScale = i709[11]
  i708.baumgarteTOIScale = i709[12]
  i708.timeToSleep = i709[13]
  i708.linearSleepTolerance = i709[14]
  i708.angularSleepTolerance = i709[15]
  i708.defaultContactOffset = i709[16]
  i708.autoSimulation = !!i709[17]
  i708.queriesHitTriggers = !!i709[18]
  i708.queriesStartInColliders = !!i709[19]
  i708.callbacksOnDisable = !!i709[20]
  i708.reuseCollisionCallbacks = !!i709[21]
  i708.autoSyncTransforms = !!i709[22]
  var i711 = i709[23]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i711[i + 0]) );
  }
  i708.collisionMatrix = i710
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.layerId = i715[1]
  i714.otherLayerId = i715[2]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i717 = data
  var i719 = i717[0]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i719[i + 0]) );
  }
  i716.qualityLevels = i718
  var i721 = i717[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.names = i720
  i716.shadows = i717[2]
  i716.anisotropicFiltering = i717[3]
  i716.antiAliasing = i717[4]
  i716.lodBias = i717[5]
  i716.shadowCascades = i717[6]
  i716.shadowDistance = i717[7]
  i716.shadowmaskMode = i717[8]
  i716.shadowProjection = i717[9]
  i716.shadowResolution = i717[10]
  i716.softParticles = !!i717[11]
  i716.softVegetation = !!i717[12]
  i716.activeColorSpace = i717[13]
  i716.desiredColorSpace = i717[14]
  i716.masterTextureLimit = i717[15]
  i716.maxQueuedFrames = i717[16]
  i716.particleRaycastBudget = i717[17]
  i716.pixelLightCount = i717[18]
  i716.realtimeReflectionProbes = !!i717[19]
  i716.shadowCascade2Split = i717[20]
  i716.shadowCascade4Split = new pc.Vec3( i717[21], i717[22], i717[23] )
  i716.streamingMipmapsActive = !!i717[24]
  i716.vSyncCount = i717[25]
  i716.asyncUploadBufferSize = i717[26]
  i716.asyncUploadTimeSlice = i717[27]
  i716.billboardsFaceCameraPosition = !!i717[28]
  i716.shadowNearPlaneOffset = i717[29]
  i716.streamingMipmapsMemoryBudget = i717[30]
  i716.maximumLODLevel = i717[31]
  i716.streamingMipmapsAddAllCameras = !!i717[32]
  i716.streamingMipmapsMaxLevelReduction = i717[33]
  i716.streamingMipmapsRenderersPerFrame = i717[34]
  i716.resolutionScalingFixedDPIFactor = i717[35]
  i716.streamingMipmapsMaxFileIORequests = i717[36]
  i716.currentQualityLevel = i717[37]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i727 = data
  i726.weight = i727[0]
  i726.vertices = i727[1]
  i726.normals = i727[2]
  i726.tangents = i727[3]
  return i726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[20],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[20],"75":[3],"76":[77],"78":[77],"23":[12],"79":[12],"80":[12],"25":[23],"16":[14,12],"81":[12],"24":[23],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[12],"88":[12],"28":[12],"89":[12],"90":[14,12],"91":[12],"92":[12],"93":[12],"94":[12],"95":[14,12],"96":[12],"97":[31],"98":[31],"32":[31],"99":[31],"100":[20],"101":[20],"102":[12],"103":[3,12],"104":[12,14],"105":[12],"106":[14,12],"107":[3],"108":[14,12],"109":[12],"110":[111],"112":[111],"113":[111]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","CameraInfo","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","CTAManager","IterationManager","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "30032";

Deserializers.projectId = "7580e4ad9861cca4a8f47dfd6bc78b4a";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.HXS-ColumnSort";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ec9dc45f-10cf-4d4f-928c-8db38b2250f0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

