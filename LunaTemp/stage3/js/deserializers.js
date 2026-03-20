var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointSpring' )
  var i435 = data
  i434.spring = i435[0]
  i434.damper = i435[1]
  i434.targetPosition = i435[2]
  return i434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointMotor' )
  var i437 = data
  i436.m_TargetVelocity = i437[0]
  i436.m_Force = i437[1]
  i436.m_FreeSpin = i437[2]
  return i436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointLimits' )
  var i439 = data
  i438.m_Min = i439[0]
  i438.m_Max = i439[1]
  i438.m_Bounciness = i439[2]
  i438.m_BounceMinVelocity = i439[3]
  i438.m_ContactDistance = i439[4]
  i438.minBounce = i439[5]
  i438.maxBounce = i439[6]
  return i438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointDrive' )
  var i441 = data
  i440.m_PositionSpring = i441[0]
  i440.m_PositionDamper = i441[1]
  i440.m_MaximumForce = i441[2]
  i440.m_UseAcceleration = i441[3]
  return i440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i443 = data
  i442.m_Spring = i443[0]
  i442.m_Damper = i443[1]
  return i442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i445 = data
  i444.m_Limit = i445[0]
  i444.m_Bounciness = i445[1]
  i444.m_ContactDistance = i445[2]
  return i444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i447 = data
  i446.m_ExtremumSlip = i447[0]
  i446.m_ExtremumValue = i447[1]
  i446.m_AsymptoteSlip = i447[2]
  i446.m_AsymptoteValue = i447[3]
  i446.m_Stiffness = i447[4]
  return i446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i449 = data
  i448.m_LowerAngle = i449[0]
  i448.m_UpperAngle = i449[1]
  return i448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i451 = data
  i450.m_MotorSpeed = i451[0]
  i450.m_MaximumMotorTorque = i451[1]
  return i450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i453 = data
  i452.m_DampingRatio = i453[0]
  i452.m_Frequency = i453[1]
  i452.m_Angle = i453[2]
  return i452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i455 = data
  i454.m_LowerTranslation = i455[0]
  i454.m_UpperTranslation = i455[1]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i457 = data
  i456.name = i457[0]
  i456.width = i457[1]
  i456.height = i457[2]
  i456.mipmapCount = i457[3]
  i456.anisoLevel = i457[4]
  i456.filterMode = i457[5]
  i456.hdr = !!i457[6]
  i456.format = i457[7]
  i456.wrapMode = i457[8]
  i456.alphaIsTransparency = !!i457[9]
  i456.alphaSource = i457[10]
  i456.graphicsFormat = i457[11]
  i456.sRGBTexture = !!i457[12]
  i456.desiredColorSpace = i457[13]
  i456.wrapU = i457[14]
  i456.wrapV = i457[15]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i459 = data
  i458.position = new pc.Vec3( i459[0], i459[1], i459[2] )
  i458.scale = new pc.Vec3( i459[3], i459[4], i459[5] )
  i458.rotation = new pc.Quat(i459[6], i459[7], i459[8], i459[9])
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'sharedMesh')
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i463 = data
  request.r(i463[0], i463[1], 0, i462, 'additionalVertexStreams')
  i462.enabled = !!i463[2]
  request.r(i463[3], i463[4], 0, i462, 'sharedMaterial')
  var i465 = i463[5]
  var i464 = []
  for(var i = 0; i < i465.length; i += 2) {
  request.r(i465[i + 0], i465[i + 1], 2, i464, '')
  }
  i462.sharedMaterials = i464
  i462.receiveShadows = !!i463[6]
  i462.shadowCastingMode = i463[7]
  i462.sortingLayerID = i463[8]
  i462.sortingOrder = i463[9]
  i462.lightmapIndex = i463[10]
  i462.lightmapSceneIndex = i463[11]
  i462.lightmapScaleOffset = new pc.Vec4( i463[12], i463[13], i463[14], i463[15] )
  i462.lightProbeUsage = i463[16]
  i462.reflectionProbeUsage = i463[17]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i469 = data
  i468.name = i469[0]
  i468.tagId = i469[1]
  i468.enabled = !!i469[2]
  i468.isStatic = !!i469[3]
  i468.layer = i469[4]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i471 = data
  i470.name = i471[0]
  i470.halfPrecision = !!i471[1]
  i470.useUInt32IndexFormat = !!i471[2]
  i470.vertexCount = i471[3]
  i470.aabb = i471[4]
  var i473 = i471[5]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( !!i473[i + 0] );
  }
  i470.streams = i472
  i470.vertices = i471[6]
  var i475 = i471[7]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i475[i + 0]) );
  }
  i470.subMeshes = i474
  var i477 = i471[8]
  var i476 = []
  for(var i = 0; i < i477.length; i += 16) {
    i476.push( new pc.Mat4().setData(i477[i + 0], i477[i + 1], i477[i + 2], i477[i + 3],  i477[i + 4], i477[i + 5], i477[i + 6], i477[i + 7],  i477[i + 8], i477[i + 9], i477[i + 10], i477[i + 11],  i477[i + 12], i477[i + 13], i477[i + 14], i477[i + 15]) );
  }
  i470.bindposes = i476
  var i479 = i471[9]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i479[i + 0]) );
  }
  i470.blendShapes = i478
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i485 = data
  i484.triangles = i485[0]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i491 = data
  i490.name = i491[0]
  var i493 = i491[1]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i493[i + 0]) );
  }
  i490.frames = i492
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i527 = data
  i526.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i527[0], i526.main)
  i526.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i527[1], i526.colorBySpeed)
  i526.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i527[2], i526.colorOverLifetime)
  i526.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i527[3], i526.emission)
  i526.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i527[4], i526.rotationBySpeed)
  i526.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i527[5], i526.rotationOverLifetime)
  i526.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i527[6], i526.shape)
  i526.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i527[7], i526.sizeBySpeed)
  i526.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i527[8], i526.sizeOverLifetime)
  i526.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i527[9], i526.textureSheetAnimation)
  i526.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i527[10], i526.velocityOverLifetime)
  i526.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i527[11], i526.noise)
  i526.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i527[12], i526.inheritVelocity)
  i526.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i527[13], i526.forceOverLifetime)
  i526.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i527[14], i526.limitVelocityOverLifetime)
  i526.useAutoRandomSeed = !!i527[15]
  i526.randomSeed = i527[16]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemMain()
  var i529 = data
  i528.duration = i529[0]
  i528.loop = !!i529[1]
  i528.prewarm = !!i529[2]
  i528.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[3], i528.startDelay)
  i528.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[4], i528.startLifetime)
  i528.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[5], i528.startSpeed)
  i528.startSize3D = !!i529[6]
  i528.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[7], i528.startSizeX)
  i528.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[8], i528.startSizeY)
  i528.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[9], i528.startSizeZ)
  i528.startRotation3D = !!i529[10]
  i528.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[11], i528.startRotationX)
  i528.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[12], i528.startRotationY)
  i528.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[13], i528.startRotationZ)
  i528.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i529[14], i528.startColor)
  i528.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[15], i528.gravityModifier)
  i528.simulationSpace = i529[16]
  request.r(i529[17], i529[18], 0, i528, 'customSimulationSpace')
  i528.simulationSpeed = i529[19]
  i528.useUnscaledTime = !!i529[20]
  i528.scalingMode = i529[21]
  i528.playOnAwake = !!i529[22]
  i528.maxParticles = i529[23]
  i528.emitterVelocityMode = i529[24]
  i528.stopAction = i529[25]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i530 = root || new pc.MinMaxCurve()
  var i531 = data
  i530.mode = i531[0]
  i530.curveMin = new pc.AnimationCurve( { keys_flow: i531[1] } )
  i530.curveMax = new pc.AnimationCurve( { keys_flow: i531[2] } )
  i530.curveMultiplier = i531[3]
  i530.constantMin = i531[4]
  i530.constantMax = i531[5]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i532 = root || new pc.MinMaxGradient()
  var i533 = data
  i532.mode = i533[0]
  i532.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i533[1], i532.gradientMin)
  i532.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i533[2], i532.gradientMax)
  i532.colorMin = new pc.Color(i533[3], i533[4], i533[5], i533[6])
  i532.colorMax = new pc.Color(i533[7], i533[8], i533[9], i533[10])
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i535 = data
  i534.mode = i535[0]
  var i537 = i535[1]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i537[i + 0]) );
  }
  i534.colorKeys = i536
  var i539 = i535[2]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i539[i + 0]) );
  }
  i534.alphaKeys = i538
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemColorBySpeed()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i541[1], i540.color)
  i540.range = new pc.Vec2( i541[2], i541[3] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i545 = data
  i544.color = new pc.Color(i545[0], i545[1], i545[2], i545[3])
  i544.time = i545[4]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i549 = data
  i548.alpha = i549[0]
  i548.time = i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i550 = root || new pc.ParticleSystemColorOverLifetime()
  var i551 = data
  i550.enabled = !!i551[0]
  i550.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i551[1], i550.color)
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemEmitter()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[1], i552.rateOverTime)
  i552.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.rateOverDistance)
  var i555 = i553[3]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i555[i + 0]) );
  }
  i552.bursts = i554
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemBurst()
  var i559 = data
  i558.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[0], i558.count)
  i558.cycleCount = i559[1]
  i558.minCount = i559[2]
  i558.maxCount = i559[3]
  i558.repeatInterval = i559[4]
  i558.time = i559[5]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemRotationBySpeed()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  i560.range = new pc.Vec2( i561[5], i561[6] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemRotationOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemShape()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.shapeType = i565[1]
  i564.randomDirectionAmount = i565[2]
  i564.sphericalDirectionAmount = i565[3]
  i564.randomPositionAmount = i565[4]
  i564.alignToDirection = !!i565[5]
  i564.radius = i565[6]
  i564.radiusMode = i565[7]
  i564.radiusSpread = i565[8]
  i564.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[9], i564.radiusSpeed)
  i564.radiusThickness = i565[10]
  i564.angle = i565[11]
  i564.length = i565[12]
  i564.boxThickness = new pc.Vec3( i565[13], i565[14], i565[15] )
  i564.meshShapeType = i565[16]
  request.r(i565[17], i565[18], 0, i564, 'mesh')
  request.r(i565[19], i565[20], 0, i564, 'meshRenderer')
  request.r(i565[21], i565[22], 0, i564, 'skinnedMeshRenderer')
  i564.useMeshMaterialIndex = !!i565[23]
  i564.meshMaterialIndex = i565[24]
  i564.useMeshColors = !!i565[25]
  i564.normalOffset = i565[26]
  i564.arc = i565[27]
  i564.arcMode = i565[28]
  i564.arcSpread = i565[29]
  i564.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[30], i564.arcSpeed)
  i564.donutRadius = i565[31]
  i564.position = new pc.Vec3( i565[32], i565[33], i565[34] )
  i564.rotation = new pc.Vec3( i565[35], i565[36], i565[37] )
  i564.scale = new pc.Vec3( i565[38], i565[39], i565[40] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemSizeBySpeed()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.x)
  i566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.y)
  i566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.z)
  i566.separateAxes = !!i567[4]
  i566.range = new pc.Vec2( i567[5], i567[6] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemSizeOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.separateAxes = !!i569[4]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.mode = i571[1]
  i570.animation = i571[2]
  i570.numTilesX = i571[3]
  i570.numTilesY = i571[4]
  i570.useRandomRow = !!i571[5]
  i570.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[6], i570.frameOverTime)
  i570.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[7], i570.startFrame)
  i570.cycleCount = i571[8]
  i570.rowIndex = i571[9]
  i570.flipU = i571[10]
  i570.flipV = i571[11]
  i570.spriteCount = i571[12]
  var i573 = i571[13]
  var i572 = []
  for(var i = 0; i < i573.length; i += 2) {
  request.r(i573[i + 0], i573[i + 1], 2, i572, '')
  }
  i570.sprites = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[4], i576.radial)
  i576.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[5], i576.speedModifier)
  i576.space = i577[6]
  i576.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[7], i576.orbitalX)
  i576.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[8], i576.orbitalY)
  i576.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[9], i576.orbitalZ)
  i576.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[10], i576.orbitalOffsetX)
  i576.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[11], i576.orbitalOffsetY)
  i576.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[12], i576.orbitalOffsetZ)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemNoise()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.separateAxes = !!i579[1]
  i578.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.strengthX)
  i578.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.strengthY)
  i578.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[4], i578.strengthZ)
  i578.frequency = i579[5]
  i578.damping = !!i579[6]
  i578.octaveCount = i579[7]
  i578.octaveMultiplier = i579[8]
  i578.octaveScale = i579[9]
  i578.quality = i579[10]
  i578.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[11], i578.scrollSpeed)
  i578.scrollSpeedMultiplier = i579[12]
  i578.remapEnabled = !!i579[13]
  i578.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[14], i578.remapX)
  i578.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[15], i578.remapY)
  i578.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[16], i578.remapZ)
  i578.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[17], i578.positionAmount)
  i578.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[18], i578.rotationAmount)
  i578.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[19], i578.sizeAmount)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemInheritVelocity()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.mode = i581[1]
  i580.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.curve)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemForceOverLifetime()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.x)
  i582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.y)
  i582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.z)
  i582.space = i583[4]
  i582.randomized = !!i583[5]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[1], i584.limit)
  i584.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.limitX)
  i584.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.limitY)
  i584.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[4], i584.limitZ)
  i584.dampen = i585[5]
  i584.separateAxes = !!i585[6]
  i584.space = i585[7]
  i584.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[8], i584.drag)
  i584.multiplyDragByParticleSize = !!i585[9]
  i584.multiplyDragByParticleVelocity = !!i585[10]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i587 = data
  i586.enabled = !!i587[0]
  request.r(i587[1], i587[2], 0, i586, 'sharedMaterial')
  var i589 = i587[3]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.sharedMaterials = i588
  i586.receiveShadows = !!i587[4]
  i586.shadowCastingMode = i587[5]
  i586.sortingLayerID = i587[6]
  i586.sortingOrder = i587[7]
  i586.lightmapIndex = i587[8]
  i586.lightmapSceneIndex = i587[9]
  i586.lightmapScaleOffset = new pc.Vec4( i587[10], i587[11], i587[12], i587[13] )
  i586.lightProbeUsage = i587[14]
  i586.reflectionProbeUsage = i587[15]
  request.r(i587[16], i587[17], 0, i586, 'mesh')
  i586.meshCount = i587[18]
  i586.activeVertexStreamsCount = i587[19]
  i586.alignment = i587[20]
  i586.renderMode = i587[21]
  i586.sortMode = i587[22]
  i586.lengthScale = i587[23]
  i586.velocityScale = i587[24]
  i586.cameraVelocityScale = i587[25]
  i586.normalDirection = i587[26]
  i586.sortingFudge = i587[27]
  i586.minParticleSize = i587[28]
  i586.maxParticleSize = i587[29]
  i586.pivot = new pc.Vec3( i587[30], i587[31], i587[32] )
  request.r(i587[33], i587[34], 0, i586, 'trailMaterial')
  return i586
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'HexGroup' )
  var i591 = data
  i590.GroupType = i591[0]
  i590.Replacer = !!i591[1]
  var i593 = i591[2]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i590.HexTiles = i592
  var i595 = i591[3]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 1, i594, '')
  }
  i590.nearbyHex = i594
  i590.isTweening = !!i591[4]
  i590.oneStack = !!i591[5]
  i590.isEmptying = !!i591[6]
  i590.isTransferring = !!i591[7]
  i590.hasSecond = !!i591[8]
  i590.readyForMerge = !!i591[9]
  i590.draggable = !!i591[10]
  request.r(i591[11], i591[12], 0, i590, 'topTile')
  request.r(i591[13], i591[14], 0, i590, 'secondTopTile')
  request.r(i591[15], i591[16], 0, i590, 'thirdTopTile')
  var i597 = i591[17]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i590.extraSameTiles = i596
  i590.stackNum = i591[18]
  i590.transferIndex = i591[19]
  var i599 = i591[20]
  var i598 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i599.length; i += 2) {
  request.r(i599[i + 0], i599[i + 1], 1, i598, '')
  }
  i590.disappearingTiles = i598
  i590.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i591[21] )
  i590.oldPosition = new pc.Vec3( i591[22], i591[23], i591[24] )
  i590.isDragging = !!i591[25]
  i590.TransferTime = i591[26]
  i590.TransferDelay = i591[27]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i605 = data
  i604.enabled = !!i605[0]
  i604.isTrigger = !!i605[1]
  request.r(i605[2], i605[3], 0, i604, 'material')
  request.r(i605[4], i605[5], 0, i604, 'sharedMesh')
  i604.convex = !!i605[6]
  return i604
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i606 = root || request.c( 'HexTiles' )
  var i607 = data
  i606.tileColor = i607[0]
  var i609 = i607[1]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i606.singleTile = i608
  i606.perTiles = i607[2]
  i606.perSingleTiles = i607[3]
  i606.sequenceDuration = i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i613 = data
  i612.center = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.size = new pc.Vec3( i613[3], i613[4], i613[5] )
  i612.enabled = !!i613[6]
  i612.isTrigger = !!i613[7]
  request.r(i613[8], i613[9], 0, i612, 'material')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i615 = data
  i614.pivot = new pc.Vec2( i615[0], i615[1] )
  i614.anchorMin = new pc.Vec2( i615[2], i615[3] )
  i614.anchorMax = new pc.Vec2( i615[4], i615[5] )
  i614.sizeDelta = new pc.Vec2( i615[6], i615[7] )
  i614.anchoredPosition3D = new pc.Vec3( i615[8], i615[9], i615[10] )
  i614.rotation = new pc.Quat(i615[11], i615[12], i615[13], i615[14])
  i614.scale = new pc.Vec3( i615[15], i615[16], i615[17] )
  return i614
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i616 = root || request.c( 'ConfettiController' )
  var i617 = data
  i616.gameWin = !!i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i619 = data
  i618.cullTransparentMesh = !!i619[0]
  return i618
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.Image' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Sprite')
  i620.m_Type = i621[2]
  i620.m_PreserveAspect = !!i621[3]
  i620.m_FillCenter = !!i621[4]
  i620.m_FillMethod = i621[5]
  i620.m_FillAmount = i621[6]
  i620.m_FillClockwise = !!i621[7]
  i620.m_FillOrigin = i621[8]
  i620.m_UseSpriteMesh = !!i621[9]
  i620.m_PixelsPerUnitMultiplier = i621[10]
  request.r(i621[11], i621[12], 0, i620, 'm_Material')
  i620.m_Maskable = !!i621[13]
  i620.m_Color = new pc.Color(i621[14], i621[15], i621[16], i621[17])
  i620.m_RaycastTarget = !!i621[18]
  i620.m_RaycastPadding = new pc.Vec4( i621[19], i621[20], i621[21], i621[22] )
  return i620
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i622 = root || request.c( 'ConfettiFall' )
  var i623 = data
  i622.gameWin = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'fallArea')
  i622.fallDistance = i623[3]
  i622.fallDuration = i623[4]
  i622.resetDelay = i623[5]
  i622.horizontalFlutter = i623[6]
  i622.rotationAngle = i623[7]
  i622.startDelayMin = i623[8]
  i622.startDelayMax = i623[9]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i625 = data
  i624.name = i625[0]
  i624.atlasId = i625[1]
  i624.mipmapCount = i625[2]
  i624.hdr = !!i625[3]
  i624.size = i625[4]
  i624.anisoLevel = i625[5]
  i624.filterMode = i625[6]
  var i627 = i625[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 4) {
    i626.push( UnityEngine.Rect.MinMaxRect(i627[i + 0], i627[i + 1], i627[i + 2], i627[i + 3]) );
  }
  i624.rects = i626
  i624.wrapU = i625[8]
  i624.wrapV = i625[9]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i631 = data
  i630.name = i631[0]
  i630.index = i631[1]
  i630.startup = !!i631[2]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i633 = data
  i632.enabled = !!i633[0]
  i632.aspect = i633[1]
  i632.orthographic = !!i633[2]
  i632.orthographicSize = i633[3]
  i632.backgroundColor = new pc.Color(i633[4], i633[5], i633[6], i633[7])
  i632.nearClipPlane = i633[8]
  i632.farClipPlane = i633[9]
  i632.fieldOfView = i633[10]
  i632.depth = i633[11]
  i632.clearFlags = i633[12]
  i632.cullingMask = i633[13]
  i632.rect = i633[14]
  request.r(i633[15], i633[16], 0, i632, 'targetTexture')
  i632.usePhysicalProperties = !!i633[17]
  i632.focalLength = i633[18]
  i632.sensorSize = new pc.Vec2( i633[19], i633[20] )
  i632.lensShift = new pc.Vec2( i633[21], i633[22] )
  i632.gateFit = i633[23]
  i632.commandBufferCount = i633[24]
  i632.cameraType = i633[25]
  return i632
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i634 = root || request.c( 'CameraInfo' )
  var i635 = data
  i634.IntroCamera = !!i635[0]
  var i637 = i635[1]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.TargetPaths = i636
  i634.pathDurations = i635[2]
  i634.introTime = i635[3]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i641 = data
  i640.enabled = !!i641[0]
  i640.type = i641[1]
  i640.color = new pc.Color(i641[2], i641[3], i641[4], i641[5])
  i640.cullingMask = i641[6]
  i640.intensity = i641[7]
  i640.range = i641[8]
  i640.spotAngle = i641[9]
  i640.shadows = i641[10]
  i640.shadowNormalBias = i641[11]
  i640.shadowBias = i641[12]
  i640.shadowStrength = i641[13]
  i640.shadowResolution = i641[14]
  i640.lightmapBakeType = i641[15]
  i640.renderMode = i641[16]
  request.r(i641[17], i641[18], 0, i640, 'cookie')
  i640.cookieSize = i641[19]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.planeDistance = i643[1]
  i642.referencePixelsPerUnit = i643[2]
  i642.isFallbackOverlay = !!i643[3]
  i642.renderMode = i643[4]
  i642.renderOrder = i643[5]
  i642.sortingLayerName = i643[6]
  i642.sortingOrder = i643[7]
  i642.scaleFactor = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'worldCamera')
  i642.overrideSorting = !!i643[11]
  i642.pixelPerfect = !!i643[12]
  i642.targetDisplay = i643[13]
  i642.overridePixelPerfect = !!i643[14]
  return i642
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i645 = data
  i644.m_UiScaleMode = i645[0]
  i644.m_ReferencePixelsPerUnit = i645[1]
  i644.m_ScaleFactor = i645[2]
  i644.m_ReferenceResolution = new pc.Vec2( i645[3], i645[4] )
  i644.m_ScreenMatchMode = i645[5]
  i644.m_MatchWidthOrHeight = i645[6]
  i644.m_PhysicalUnit = i645[7]
  i644.m_FallbackScreenDPI = i645[8]
  i644.m_DefaultSpriteDPI = i645[9]
  i644.m_DynamicPixelsPerUnit = i645[10]
  i644.m_PresetInfoIsWorld = !!i645[11]
  return i644
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i647 = data
  i646.m_IgnoreReversedGraphics = !!i647[0]
  i646.m_BlockingObjects = i647[1]
  i646.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i647[2] )
  return i646
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i648 = root || request.c( 'TutorialManager' )
  var i649 = data
  i648.IntroAnim = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'tutorialPanel')
  request.r(i649[3], i649[4], 0, i648, 'tutorialText')
  request.r(i649[5], i649[6], 0, i648, 'tutorialTiles')
  request.r(i649[7], i649[8], 0, i648, 'handTool')
  i648.oldStarter = new pc.Vec2( i649[9], i649[10] )
  i648.starterPos = new pc.Vec2( i649[11], i649[12] )
  i648.baseP = new pc.Vec2( i649[13], i649[14] )
  request.r(i649[15], i649[16], 0, i648, 'dragger')
  var i651 = i649[17]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i648.dragPos = i650
  var i653 = i649[18]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i653.length; i += 2) {
  request.r(i653[i + 0], i653[i + 1], 1, i652, '')
  }
  i648.basePos = i652
  i648.currentTimer = i649[19]
  i648.maxTimer = i649[20]
  i648.timerCalled = !!i649[21]
  return i648
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Mask' )
  var i657 = data
  i656.m_ShowMaskGraphic = !!i657[0]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i659 = data
  i658.m_Alpha = i659[0]
  i658.m_Interactable = !!i659[1]
  i658.m_BlocksRaycasts = !!i659[2]
  i658.m_IgnoreParentGroups = !!i659[3]
  i658.enabled = !!i659[4]
  return i658
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Button' )
  var i661 = data
  i660.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i661[0], i660.m_OnClick)
  i660.m_Navigation = request.d('UnityEngine.UI.Navigation', i661[1], i660.m_Navigation)
  i660.m_Transition = i661[2]
  i660.m_Colors = request.d('UnityEngine.UI.ColorBlock', i661[3], i660.m_Colors)
  i660.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i661[4], i660.m_SpriteState)
  i660.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i661[5], i660.m_AnimationTriggers)
  i660.m_Interactable = !!i661[6]
  request.r(i661[7], i661[8], 0, i660, 'm_TargetGraphic')
  return i660
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i663 = data
  i662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i663[0], i662.m_PersistentCalls)
  return i662
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i665 = data
  var i667 = i665[0]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('UnityEngine.Events.PersistentCall', i667[i + 0]));
  }
  i664.m_Calls = i666
  return i664
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_Target')
  i670.m_TargetAssemblyTypeName = i671[2]
  i670.m_MethodName = i671[3]
  i670.m_Mode = i671[4]
  i670.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i671[5], i670.m_Arguments)
  i670.m_CallState = i671[6]
  return i670
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_ObjectArgument')
  i672.m_ObjectArgumentAssemblyTypeName = i673[2]
  i672.m_IntArgument = i673[3]
  i672.m_FloatArgument = i673[4]
  i672.m_StringArgument = i673[5]
  i672.m_BoolArgument = !!i673[6]
  return i672
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i675 = data
  i674.m_Mode = i675[0]
  i674.m_WrapAround = !!i675[1]
  request.r(i675[2], i675[3], 0, i674, 'm_SelectOnUp')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectOnDown')
  request.r(i675[6], i675[7], 0, i674, 'm_SelectOnLeft')
  request.r(i675[8], i675[9], 0, i674, 'm_SelectOnRight')
  return i674
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i677 = data
  i676.m_NormalColor = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.m_HighlightedColor = new pc.Color(i677[4], i677[5], i677[6], i677[7])
  i676.m_PressedColor = new pc.Color(i677[8], i677[9], i677[10], i677[11])
  i676.m_SelectedColor = new pc.Color(i677[12], i677[13], i677[14], i677[15])
  i676.m_DisabledColor = new pc.Color(i677[16], i677[17], i677[18], i677[19])
  i676.m_ColorMultiplier = i677[20]
  i676.m_FadeDuration = i677[21]
  return i676
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_HighlightedSprite')
  request.r(i679[2], i679[3], 0, i678, 'm_PressedSprite')
  request.r(i679[4], i679[5], 0, i678, 'm_SelectedSprite')
  request.r(i679[6], i679[7], 0, i678, 'm_DisabledSprite')
  return i678
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i681 = data
  i680.m_NormalTrigger = i681[0]
  i680.m_HighlightedTrigger = i681[1]
  i680.m_PressedTrigger = i681[2]
  i680.m_SelectedTrigger = i681[3]
  i680.m_DisabledTrigger = i681[4]
  return i680
}

Deserializers["HexBase"] = function (request, data, root) {
  var i682 = root || request.c( 'HexBase' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i682.nearbyBases = i684
  request.r(i683[1], i683[2], 0, i682, 'occupiedHex')
  i682.occupied = !!i683[3]
  request.r(i683[4], i683[5], 0, i682, 'sparkleVFX')
  request.r(i683[6], i683[7], 0, i682, 'originalColor')
  request.r(i683[8], i683[9], 0, i682, 'clickedColor')
  return i682
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_FirstSelected')
  i688.m_sendNavigationEvents = !!i689[2]
  i688.m_DragThreshold = i689[3]
  return i688
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i691 = data
  i690.m_HorizontalAxis = i691[0]
  i690.m_VerticalAxis = i691[1]
  i690.m_SubmitButton = i691[2]
  i690.m_CancelButton = i691[3]
  i690.m_InputActionsPerSecond = i691[4]
  i690.m_RepeatDelay = i691[5]
  i690.m_ForceModuleActive = !!i691[6]
  i690.m_SendPointerHoverToParent = !!i691[7]
  return i690
}

Deserializers["GameManager"] = function (request, data, root) {
  var i692 = root || request.c( 'GameManager' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i692.tileMats = i694
  var i697 = i693[1]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i697.length; i += 1) {
    i696.add(i697[i + 0]);
  }
  i692.replacerChances = i696
  request.r(i693[2], i693[3], 0, i692, 'Ground')
  request.r(i693[4], i693[5], 0, i692, 'replacerParent')
  request.r(i693[6], i693[7], 0, i692, 'hexNorth')
  var i699 = i693[8]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i692.hexBases = i698
  var i701 = i693[9]
  var i700 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i701.length; i += 2) {
  request.r(i701[i + 0], i701[i + 1], 1, i700, '')
  }
  i692.hexDraggers = i700
  request.r(i693[10], i693[11], 0, i692, 'emptyDrag')
  var i703 = i693[12]
  var i702 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 1, i702, '')
  }
  i692.currentMixers = i702
  request.r(i693[13], i693[14], 0, i692, 'currentReplacer')
  var i705 = i693[15]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 1, i704, '')
  }
  i692.nearbyReplacerHexes = i704
  i692.firstFullStack = !!i693[16]
  request.r(i693[17], i693[18], 0, i692, 'currentHexDrag')
  request.r(i693[19], i693[20], 0, i692, 'hexDragPrefab')
  request.r(i693[21], i693[22], 0, i692, 'hexDragParent')
  return i692
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i710 = root || request.c( 'AudioManager' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'library')
  i710.sfxPoolSize = i711[2]
  return i710
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i712 = root || request.c( 'DontDestroy' )
  var i713 = data
  return i712
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i714 = root || request.c( 'CTAManager' )
  var i715 = data
  i714.GameOver = !!i715[0]
  request.r(i715[1], i715[2], 0, i714, 'WinPanel')
  request.r(i715[3], i715[4], 0, i714, 'LosePanel')
  request.r(i715[5], i715[6], 0, i714, 'playNow')
  request.r(i715[7], i715[8], 0, i714, 'tryAgain')
  i714.iosLink = i715[9]
  i714.androidLink = i715[10]
  return i714
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i716 = root || request.c( 'IterationManager' )
  var i717 = data
  i716.numClicks = i717[0]
  i716.maxNumClicks = i717[1]
  i716.Iterations = i717[2]
  i716.currentTimer = i717[3]
  i716.maxTimer = i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i719 = data
  i718.ambientIntensity = i719[0]
  i718.reflectionIntensity = i719[1]
  i718.ambientMode = i719[2]
  i718.ambientLight = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.ambientSkyColor = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  i718.ambientGroundColor = new pc.Color(i719[11], i719[12], i719[13], i719[14])
  i718.ambientEquatorColor = new pc.Color(i719[15], i719[16], i719[17], i719[18])
  i718.fogColor = new pc.Color(i719[19], i719[20], i719[21], i719[22])
  i718.fogEndDistance = i719[23]
  i718.fogStartDistance = i719[24]
  i718.fogDensity = i719[25]
  i718.fog = !!i719[26]
  request.r(i719[27], i719[28], 0, i718, 'skybox')
  i718.fogMode = i719[29]
  var i721 = i719[30]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i721[i + 0]) );
  }
  i718.lightmaps = i720
  i718.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i719[31], i718.lightProbes)
  i718.lightmapsMode = i719[32]
  i718.mixedBakeMode = i719[33]
  i718.environmentLightingMode = i719[34]
  i718.ambientProbe = new pc.SphericalHarmonicsL2(i719[35])
  i718.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i719[36])
  i718.useReferenceAmbientProbe = !!i719[37]
  request.r(i719[38], i719[39], 0, i718, 'customReflection')
  request.r(i719[40], i719[41], 0, i718, 'defaultReflection')
  i718.defaultReflectionMode = i719[42]
  i718.defaultReflectionResolution = i719[43]
  i718.sunLightObjectId = i719[44]
  i718.pixelLightCount = i719[45]
  i718.defaultReflectionHDR = !!i719[46]
  i718.hasLightDataAsset = !!i719[47]
  i718.hasManualGenerate = !!i719[48]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'lightmapColor')
  request.r(i725[2], i725[3], 0, i724, 'lightmapDirection')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i726 = root || new UnityEngine.LightProbes()
  var i727 = data
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i737[i + 0]));
  }
  i734.ShaderCompilationErrors = i736
  i734.name = i735[1]
  i734.guid = i735[2]
  var i739 = i735[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.shaderDefinedKeywords = i738
  var i741 = i735[4]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i741[i + 0]) );
  }
  i734.passes = i740
  var i743 = i735[5]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i743[i + 0]) );
  }
  i734.usePasses = i742
  var i745 = i735[6]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i745[i + 0]) );
  }
  i734.defaultParameterValues = i744
  request.r(i735[7], i735[8], 0, i734, 'unityFallbackShader')
  i734.readDepth = !!i735[9]
  i734.isCreatedByShaderGraph = !!i735[10]
  i734.compiled = !!i735[11]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i749 = data
  i748.shaderName = i749[0]
  i748.errorMessage = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i754 = root || new pc.UnityShaderPass()
  var i755 = data
  i754.id = i755[0]
  i754.subShaderIndex = i755[1]
  i754.name = i755[2]
  i754.passType = i755[3]
  i754.grabPassTextureName = i755[4]
  i754.usePass = !!i755[5]
  i754.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[6], i754.zTest)
  i754.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[7], i754.zWrite)
  i754.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[8], i754.culling)
  i754.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i755[9], i754.blending)
  i754.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i755[10], i754.alphaBlending)
  i754.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[11], i754.colorWriteMask)
  i754.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[12], i754.offsetUnits)
  i754.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[13], i754.offsetFactor)
  i754.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[14], i754.stencilRef)
  i754.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[15], i754.stencilReadMask)
  i754.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i755[16], i754.stencilWriteMask)
  i754.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i755[17], i754.stencilOp)
  i754.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i755[18], i754.stencilOpFront)
  i754.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i755[19], i754.stencilOpBack)
  var i757 = i755[20]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i757[i + 0]) );
  }
  i754.tags = i756
  var i759 = i755[21]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( i759[i + 0] );
  }
  i754.passDefinedKeywords = i758
  var i761 = i755[22]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i761[i + 0]) );
  }
  i754.passDefinedKeywordGroups = i760
  var i763 = i755[23]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i763[i + 0]) );
  }
  i754.variants = i762
  var i765 = i755[24]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i765[i + 0]) );
  }
  i754.excludedVariants = i764
  i754.hasDepthReader = !!i755[25]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i767 = data
  i766.val = i767[0]
  i766.name = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i769 = data
  i768.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[0], i768.src)
  i768.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[1], i768.dst)
  i768.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[2], i768.op)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i771 = data
  i770.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[0], i770.pass)
  i770.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[1], i770.fail)
  i770.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[2], i770.zFail)
  i770.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i771[3], i770.comp)
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i775 = data
  i774.name = i775[0]
  i774.value = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i779 = data
  var i781 = i779[0]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i778.keywords = i780
  i778.hasDiscard = !!i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i785 = data
  i784.passId = i785[0]
  i784.subShaderIndex = i785[1]
  var i787 = i785[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i784.keywords = i786
  i784.vertexProgram = i785[3]
  i784.fragmentProgram = i785[4]
  i784.exportedForWebGl2 = !!i785[5]
  i784.readDepth = !!i785[6]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'shader')
  i790.pass = i791[2]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i795 = data
  i794.name = i795[0]
  i794.type = i795[1]
  i794.value = new pc.Vec4( i795[2], i795[3], i795[4], i795[5] )
  i794.textureValue = i795[6]
  i794.shaderPropertyFlag = i795[7]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i797 = data
  i796.name = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'texture')
  i796.aabb = i797[3]
  i796.vertices = i797[4]
  i796.triangles = i797[5]
  i796.textureRect = UnityEngine.Rect.MinMaxRect(i797[6], i797[7], i797[8], i797[9])
  i796.packedRect = UnityEngine.Rect.MinMaxRect(i797[10], i797[11], i797[12], i797[13])
  i796.border = new pc.Vec4( i797[14], i797[15], i797[16], i797[17] )
  i796.transparency = i797[18]
  i796.bounds = i797[19]
  i796.pixelsPerUnit = i797[20]
  i796.textureWidth = i797[21]
  i796.textureHeight = i797[22]
  i796.nativeSize = new pc.Vec2( i797[23], i797[24] )
  i796.pivot = new pc.Vec2( i797[25], i797[26] )
  i796.textureRectOffset = new pc.Vec2( i797[27], i797[28] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i799 = data
  i798.name = i799[0]
  return i798
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i800 = root || request.c( 'AudioLibrary' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('AudioLibrary+ClipEntry', i803[i + 0]));
  }
  i800.clips = i802
  return i800
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i806 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i807 = data
  i806.key = i807[0]
  i806.channel = i807[1]
  request.r(i807[2], i807[3], 0, i806, 'clip')
  i806.volume = i807[4]
  i806.loop = !!i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i811[i + 0]) );
  }
  i808.files = i810
  i808.componentToPrefabIds = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i815 = data
  i814.path = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'unityObject')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i819[i + 0]) );
  }
  i816.scriptsExecutionOrder = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i821[i + 0]) );
  }
  i816.sortingLayers = i820
  var i823 = i817[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i823[i + 0]) );
  }
  i816.cullingLayers = i822
  i816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i817[3], i816.timeSettings)
  i816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i817[4], i816.physicsSettings)
  i816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i817[5], i816.physics2DSettings)
  i816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i817[6], i816.qualitySettings)
  i816.enableRealtimeShadows = !!i817[7]
  i816.enableAutoInstancing = !!i817[8]
  i816.enableDynamicBatching = !!i817[9]
  i816.lightmapEncodingQuality = i817[10]
  i816.desiredColorSpace = i817[11]
  var i825 = i817[12]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i816.allTags = i824
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i829 = data
  i828.name = i829[0]
  i828.value = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i833 = data
  i832.id = i833[0]
  i832.name = i833[1]
  i832.value = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i839 = data
  i838.fixedDeltaTime = i839[0]
  i838.maximumDeltaTime = i839[1]
  i838.timeScale = i839[2]
  i838.maximumParticleTimestep = i839[3]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i841 = data
  i840.gravity = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.defaultSolverIterations = i841[3]
  i840.bounceThreshold = i841[4]
  i840.autoSyncTransforms = !!i841[5]
  i840.autoSimulation = !!i841[6]
  var i843 = i841[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i843[i + 0]) );
  }
  i840.collisionMatrix = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.layerId = i847[1]
  i846.otherLayerId = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'material')
  i848.gravity = new pc.Vec2( i849[2], i849[3] )
  i848.positionIterations = i849[4]
  i848.velocityIterations = i849[5]
  i848.velocityThreshold = i849[6]
  i848.maxLinearCorrection = i849[7]
  i848.maxAngularCorrection = i849[8]
  i848.maxTranslationSpeed = i849[9]
  i848.maxRotationSpeed = i849[10]
  i848.baumgarteScale = i849[11]
  i848.baumgarteTOIScale = i849[12]
  i848.timeToSleep = i849[13]
  i848.linearSleepTolerance = i849[14]
  i848.angularSleepTolerance = i849[15]
  i848.defaultContactOffset = i849[16]
  i848.autoSimulation = !!i849[17]
  i848.queriesHitTriggers = !!i849[18]
  i848.queriesStartInColliders = !!i849[19]
  i848.callbacksOnDisable = !!i849[20]
  i848.reuseCollisionCallbacks = !!i849[21]
  i848.autoSyncTransforms = !!i849[22]
  var i851 = i849[23]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i851[i + 0]) );
  }
  i848.collisionMatrix = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.layerId = i855[1]
  i854.otherLayerId = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i859[i + 0]) );
  }
  i856.qualityLevels = i858
  var i861 = i857[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.names = i860
  i856.shadows = i857[2]
  i856.anisotropicFiltering = i857[3]
  i856.antiAliasing = i857[4]
  i856.lodBias = i857[5]
  i856.shadowCascades = i857[6]
  i856.shadowDistance = i857[7]
  i856.shadowmaskMode = i857[8]
  i856.shadowProjection = i857[9]
  i856.shadowResolution = i857[10]
  i856.softParticles = !!i857[11]
  i856.softVegetation = !!i857[12]
  i856.activeColorSpace = i857[13]
  i856.desiredColorSpace = i857[14]
  i856.masterTextureLimit = i857[15]
  i856.maxQueuedFrames = i857[16]
  i856.particleRaycastBudget = i857[17]
  i856.pixelLightCount = i857[18]
  i856.realtimeReflectionProbes = !!i857[19]
  i856.shadowCascade2Split = i857[20]
  i856.shadowCascade4Split = new pc.Vec3( i857[21], i857[22], i857[23] )
  i856.streamingMipmapsActive = !!i857[24]
  i856.vSyncCount = i857[25]
  i856.asyncUploadBufferSize = i857[26]
  i856.asyncUploadTimeSlice = i857[27]
  i856.billboardsFaceCameraPosition = !!i857[28]
  i856.shadowNearPlaneOffset = i857[29]
  i856.streamingMipmapsMemoryBudget = i857[30]
  i856.maximumLODLevel = i857[31]
  i856.streamingMipmapsAddAllCameras = !!i857[32]
  i856.streamingMipmapsMaxLevelReduction = i857[33]
  i856.streamingMipmapsRenderersPerFrame = i857[34]
  i856.resolutionScalingFixedDPIFactor = i857[35]
  i856.streamingMipmapsMaxFileIORequests = i857[36]
  i856.currentQualityLevel = i857[37]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i867 = data
  i866.weight = i867[0]
  i866.vertices = i867[1]
  i866.normals = i867[2]
  i866.tangents = i867[3]
  return i866
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[22],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[22],"77":[3],"78":[79],"80":[79],"26":[16],"81":[16],"82":[16],"28":[26],"20":[18,16],"83":[16],"27":[26],"84":[16],"85":[16],"86":[16],"87":[16],"88":[16],"89":[16],"90":[16],"31":[16],"91":[16],"92":[18,16],"93":[16],"94":[16],"95":[16],"96":[16],"97":[18,16],"98":[16],"99":[35],"100":[35],"36":[35],"101":[35],"102":[22],"103":[22],"104":[16],"105":[3,16],"106":[16,18],"107":[16],"108":[18,16],"109":[3],"110":[18,16],"111":[16],"112":[113],"114":[113],"115":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","ConfettiFall","UnityEngine.Camera","UnityEngine.AudioListener","CameraInfo","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","IterationManager","UnityEngine.Cubemap","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "7.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "ColumnSort";

Deserializers.lunaAppID = "29382";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1834";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3909";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

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

Deserializers.buildID = "4f62bd6d-187b-4051-9c3d-cd1145fe14c4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

