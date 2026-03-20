var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSpring' )
  var i447 = data
  i446.spring = i447[0]
  i446.damper = i447[1]
  i446.targetPosition = i447[2]
  return i446
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointMotor' )
  var i449 = data
  i448.m_TargetVelocity = i449[0]
  i448.m_Force = i449[1]
  i448.m_FreeSpin = i449[2]
  return i448
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointLimits' )
  var i451 = data
  i450.m_Min = i451[0]
  i450.m_Max = i451[1]
  i450.m_Bounciness = i451[2]
  i450.m_BounceMinVelocity = i451[3]
  i450.m_ContactDistance = i451[4]
  i450.minBounce = i451[5]
  i450.maxBounce = i451[6]
  return i450
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointDrive' )
  var i453 = data
  i452.m_PositionSpring = i453[0]
  i452.m_PositionDamper = i453[1]
  i452.m_MaximumForce = i453[2]
  i452.m_UseAcceleration = i453[3]
  return i452
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i455 = data
  i454.m_Spring = i455[0]
  i454.m_Damper = i455[1]
  return i454
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i457 = data
  i456.m_Limit = i457[0]
  i456.m_Bounciness = i457[1]
  i456.m_ContactDistance = i457[2]
  return i456
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i459 = data
  i458.m_ExtremumSlip = i459[0]
  i458.m_ExtremumValue = i459[1]
  i458.m_AsymptoteSlip = i459[2]
  i458.m_AsymptoteValue = i459[3]
  i458.m_Stiffness = i459[4]
  return i458
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i461 = data
  i460.m_LowerAngle = i461[0]
  i460.m_UpperAngle = i461[1]
  return i460
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i463 = data
  i462.m_MotorSpeed = i463[0]
  i462.m_MaximumMotorTorque = i463[1]
  return i462
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i465 = data
  i464.m_DampingRatio = i465[0]
  i464.m_Frequency = i465[1]
  i464.m_Angle = i465[2]
  return i464
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i467 = data
  i466.m_LowerTranslation = i467[0]
  i466.m_UpperTranslation = i467[1]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i469 = data
  i468.name = i469[0]
  i468.width = i469[1]
  i468.height = i469[2]
  i468.mipmapCount = i469[3]
  i468.anisoLevel = i469[4]
  i468.filterMode = i469[5]
  i468.hdr = !!i469[6]
  i468.format = i469[7]
  i468.wrapMode = i469[8]
  i468.alphaIsTransparency = !!i469[9]
  i468.alphaSource = i469[10]
  i468.graphicsFormat = i469[11]
  i468.sRGBTexture = !!i469[12]
  i468.desiredColorSpace = i469[13]
  i468.wrapU = i469[14]
  i468.wrapV = i469[15]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i471 = data
  i470.position = new pc.Vec3( i471[0], i471[1], i471[2] )
  i470.scale = new pc.Vec3( i471[3], i471[4], i471[5] )
  i470.rotation = new pc.Quat(i471[6], i471[7], i471[8], i471[9])
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'sharedMesh')
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i475 = data
  request.r(i475[0], i475[1], 0, i474, 'additionalVertexStreams')
  i474.enabled = !!i475[2]
  request.r(i475[3], i475[4], 0, i474, 'sharedMaterial')
  var i477 = i475[5]
  var i476 = []
  for(var i = 0; i < i477.length; i += 2) {
  request.r(i477[i + 0], i477[i + 1], 2, i476, '')
  }
  i474.sharedMaterials = i476
  i474.receiveShadows = !!i475[6]
  i474.shadowCastingMode = i475[7]
  i474.sortingLayerID = i475[8]
  i474.sortingOrder = i475[9]
  i474.lightmapIndex = i475[10]
  i474.lightmapSceneIndex = i475[11]
  i474.lightmapScaleOffset = new pc.Vec4( i475[12], i475[13], i475[14], i475[15] )
  i474.lightProbeUsage = i475[16]
  i474.reflectionProbeUsage = i475[17]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i481 = data
  i480.name = i481[0]
  i480.tagId = i481[1]
  i480.enabled = !!i481[2]
  i480.isStatic = !!i481[3]
  i480.layer = i481[4]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i483 = data
  i482.name = i483[0]
  i482.halfPrecision = !!i483[1]
  i482.useUInt32IndexFormat = !!i483[2]
  i482.vertexCount = i483[3]
  i482.aabb = i483[4]
  var i485 = i483[5]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( !!i485[i + 0] );
  }
  i482.streams = i484
  i482.vertices = i483[6]
  var i487 = i483[7]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i487[i + 0]) );
  }
  i482.subMeshes = i486
  var i489 = i483[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 16) {
    i488.push( new pc.Mat4().setData(i489[i + 0], i489[i + 1], i489[i + 2], i489[i + 3],  i489[i + 4], i489[i + 5], i489[i + 6], i489[i + 7],  i489[i + 8], i489[i + 9], i489[i + 10], i489[i + 11],  i489[i + 12], i489[i + 13], i489[i + 14], i489[i + 15]) );
  }
  i482.bindposes = i488
  var i491 = i483[9]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i491[i + 0]) );
  }
  i482.blendShapes = i490
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i497 = data
  i496.triangles = i497[0]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i503 = data
  i502.name = i503[0]
  var i505 = i503[1]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i505[i + 0]) );
  }
  i502.frames = i504
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i539 = data
  i538.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i539[0], i538.main)
  i538.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i539[1], i538.colorBySpeed)
  i538.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i539[2], i538.colorOverLifetime)
  i538.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i539[3], i538.emission)
  i538.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i539[4], i538.rotationBySpeed)
  i538.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i539[5], i538.rotationOverLifetime)
  i538.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i539[6], i538.shape)
  i538.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i539[7], i538.sizeBySpeed)
  i538.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i539[8], i538.sizeOverLifetime)
  i538.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i539[9], i538.textureSheetAnimation)
  i538.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i539[10], i538.velocityOverLifetime)
  i538.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i539[11], i538.noise)
  i538.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i539[12], i538.inheritVelocity)
  i538.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i539[13], i538.forceOverLifetime)
  i538.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i539[14], i538.limitVelocityOverLifetime)
  i538.useAutoRandomSeed = !!i539[15]
  i538.randomSeed = i539[16]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemMain()
  var i541 = data
  i540.duration = i541[0]
  i540.loop = !!i541[1]
  i540.prewarm = !!i541[2]
  i540.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.startDelay)
  i540.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[4], i540.startLifetime)
  i540.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[5], i540.startSpeed)
  i540.startSize3D = !!i541[6]
  i540.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[7], i540.startSizeX)
  i540.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[8], i540.startSizeY)
  i540.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[9], i540.startSizeZ)
  i540.startRotation3D = !!i541[10]
  i540.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[11], i540.startRotationX)
  i540.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[12], i540.startRotationY)
  i540.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[13], i540.startRotationZ)
  i540.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i541[14], i540.startColor)
  i540.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[15], i540.gravityModifier)
  i540.simulationSpace = i541[16]
  request.r(i541[17], i541[18], 0, i540, 'customSimulationSpace')
  i540.simulationSpeed = i541[19]
  i540.useUnscaledTime = !!i541[20]
  i540.scalingMode = i541[21]
  i540.playOnAwake = !!i541[22]
  i540.maxParticles = i541[23]
  i540.emitterVelocityMode = i541[24]
  i540.stopAction = i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i542 = root || new pc.MinMaxCurve()
  var i543 = data
  i542.mode = i543[0]
  i542.curveMin = new pc.AnimationCurve( { keys_flow: i543[1] } )
  i542.curveMax = new pc.AnimationCurve( { keys_flow: i543[2] } )
  i542.curveMultiplier = i543[3]
  i542.constantMin = i543[4]
  i542.constantMax = i543[5]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i544 = root || new pc.MinMaxGradient()
  var i545 = data
  i544.mode = i545[0]
  i544.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[1], i544.gradientMin)
  i544.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[2], i544.gradientMax)
  i544.colorMin = new pc.Color(i545[3], i545[4], i545[5], i545[6])
  i544.colorMax = new pc.Color(i545[7], i545[8], i545[9], i545[10])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i547 = data
  i546.mode = i547[0]
  var i549 = i547[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i549[i + 0]) );
  }
  i546.colorKeys = i548
  var i551 = i547[2]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i551[i + 0]) );
  }
  i546.alphaKeys = i550
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemColorBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i553[1], i552.color)
  i552.range = new pc.Vec2( i553[2], i553[3] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i557 = data
  i556.color = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  i556.time = i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i561 = data
  i560.alpha = i561[0]
  i560.time = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemColorOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[1], i562.color)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemEmitter()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.rateOverTime)
  i564.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.rateOverDistance)
  var i567 = i565[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i567[i + 0]) );
  }
  i564.bursts = i566
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemBurst()
  var i571 = data
  i570.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[0], i570.count)
  i570.cycleCount = i571[1]
  i570.minCount = i571[2]
  i570.maxCount = i571[3]
  i570.repeatInterval = i571[4]
  i570.time = i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemRotationBySpeed()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  i572.range = new pc.Vec2( i573[5], i573[6] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemRotationOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemShape()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.shapeType = i577[1]
  i576.randomDirectionAmount = i577[2]
  i576.sphericalDirectionAmount = i577[3]
  i576.randomPositionAmount = i577[4]
  i576.alignToDirection = !!i577[5]
  i576.radius = i577[6]
  i576.radiusMode = i577[7]
  i576.radiusSpread = i577[8]
  i576.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[9], i576.radiusSpeed)
  i576.radiusThickness = i577[10]
  i576.angle = i577[11]
  i576.length = i577[12]
  i576.boxThickness = new pc.Vec3( i577[13], i577[14], i577[15] )
  i576.meshShapeType = i577[16]
  request.r(i577[17], i577[18], 0, i576, 'mesh')
  request.r(i577[19], i577[20], 0, i576, 'meshRenderer')
  request.r(i577[21], i577[22], 0, i576, 'skinnedMeshRenderer')
  i576.useMeshMaterialIndex = !!i577[23]
  i576.meshMaterialIndex = i577[24]
  i576.useMeshColors = !!i577[25]
  i576.normalOffset = i577[26]
  i576.arc = i577[27]
  i576.arcMode = i577[28]
  i576.arcSpread = i577[29]
  i576.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[30], i576.arcSpeed)
  i576.donutRadius = i577[31]
  i576.position = new pc.Vec3( i577[32], i577[33], i577[34] )
  i576.rotation = new pc.Vec3( i577[35], i577[36], i577[37] )
  i576.scale = new pc.Vec3( i577[38], i577[39], i577[40] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemSizeBySpeed()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.separateAxes = !!i579[4]
  i578.range = new pc.Vec2( i579[5], i579[6] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemSizeOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.separateAxes = !!i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.mode = i583[1]
  i582.animation = i583[2]
  i582.numTilesX = i583[3]
  i582.numTilesY = i583[4]
  i582.useRandomRow = !!i583[5]
  i582.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[6], i582.frameOverTime)
  i582.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[7], i582.startFrame)
  i582.cycleCount = i583[8]
  i582.rowIndex = i583[9]
  i582.flipU = i583[10]
  i582.flipV = i583[11]
  i582.spriteCount = i583[12]
  var i585 = i583[13]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sprites = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.radial)
  i588.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[5], i588.speedModifier)
  i588.space = i589[6]
  i588.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[7], i588.orbitalX)
  i588.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[8], i588.orbitalY)
  i588.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.orbitalZ)
  i588.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[10], i588.orbitalOffsetX)
  i588.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[11], i588.orbitalOffsetY)
  i588.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[12], i588.orbitalOffsetZ)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemNoise()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.separateAxes = !!i591[1]
  i590.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.strengthX)
  i590.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.strengthY)
  i590.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.strengthZ)
  i590.frequency = i591[5]
  i590.damping = !!i591[6]
  i590.octaveCount = i591[7]
  i590.octaveMultiplier = i591[8]
  i590.octaveScale = i591[9]
  i590.quality = i591[10]
  i590.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.scrollSpeed)
  i590.scrollSpeedMultiplier = i591[12]
  i590.remapEnabled = !!i591[13]
  i590.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[14], i590.remapX)
  i590.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[15], i590.remapY)
  i590.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[16], i590.remapZ)
  i590.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[17], i590.positionAmount)
  i590.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[18], i590.rotationAmount)
  i590.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[19], i590.sizeAmount)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemInheritVelocity()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.mode = i593[1]
  i592.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.curve)
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemForceOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.space = i595[4]
  i594.randomized = !!i595[5]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.limit)
  i596.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.limitX)
  i596.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.limitY)
  i596.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[4], i596.limitZ)
  i596.dampen = i597[5]
  i596.separateAxes = !!i597[6]
  i596.space = i597[7]
  i596.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[8], i596.drag)
  i596.multiplyDragByParticleSize = !!i597[9]
  i596.multiplyDragByParticleVelocity = !!i597[10]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i599 = data
  i598.enabled = !!i599[0]
  request.r(i599[1], i599[2], 0, i598, 'sharedMaterial')
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[4]
  i598.shadowCastingMode = i599[5]
  i598.sortingLayerID = i599[6]
  i598.sortingOrder = i599[7]
  i598.lightmapIndex = i599[8]
  i598.lightmapSceneIndex = i599[9]
  i598.lightmapScaleOffset = new pc.Vec4( i599[10], i599[11], i599[12], i599[13] )
  i598.lightProbeUsage = i599[14]
  i598.reflectionProbeUsage = i599[15]
  request.r(i599[16], i599[17], 0, i598, 'mesh')
  i598.meshCount = i599[18]
  i598.activeVertexStreamsCount = i599[19]
  i598.alignment = i599[20]
  i598.renderMode = i599[21]
  i598.sortMode = i599[22]
  i598.lengthScale = i599[23]
  i598.velocityScale = i599[24]
  i598.cameraVelocityScale = i599[25]
  i598.normalDirection = i599[26]
  i598.sortingFudge = i599[27]
  i598.minParticleSize = i599[28]
  i598.maxParticleSize = i599[29]
  i598.pivot = new pc.Vec3( i599[30], i599[31], i599[32] )
  request.r(i599[33], i599[34], 0, i598, 'trailMaterial')
  return i598
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i602 = root || request.c( 'HexGroup' )
  var i603 = data
  i602.GroupType = i603[0]
  i602.Replacer = !!i603[1]
  var i605 = i603[2]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 1, i604, '')
  }
  i602.HexTiles = i604
  var i607 = i603[3]
  var i606 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 1, i606, '')
  }
  i602.nearbyHex = i606
  i602.isTweening = !!i603[4]
  i602.oneStack = !!i603[5]
  i602.isEmptying = !!i603[6]
  i602.isTransferring = !!i603[7]
  i602.hasSecond = !!i603[8]
  i602.readyForMerge = !!i603[9]
  i602.draggable = !!i603[10]
  request.r(i603[11], i603[12], 0, i602, 'topTile')
  request.r(i603[13], i603[14], 0, i602, 'secondTopTile')
  request.r(i603[15], i603[16], 0, i602, 'thirdTopTile')
  var i609 = i603[17]
  var i608 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 1, i608, '')
  }
  i602.extraSameTiles = i608
  i602.stackNum = i603[18]
  i602.transferIndex = i603[19]
  var i611 = i603[20]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 1, i610, '')
  }
  i602.disappearingTiles = i610
  i602.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i603[21] )
  i602.oldPosition = new pc.Vec3( i603[22], i603[23], i603[24] )
  i602.isDragging = !!i603[25]
  i602.TransferTime = i603[26]
  i602.TransferDelay = i603[27]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i617 = data
  i616.enabled = !!i617[0]
  i616.isTrigger = !!i617[1]
  request.r(i617[2], i617[3], 0, i616, 'material')
  request.r(i617[4], i617[5], 0, i616, 'sharedMesh')
  i616.convex = !!i617[6]
  return i616
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i618 = root || request.c( 'HexTiles' )
  var i619 = data
  i618.tileColor = i619[0]
  var i621 = i619[1]
  var i620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 1, i620, '')
  }
  i618.singleTile = i620
  i618.perTiles = i619[2]
  i618.perSingleTiles = i619[3]
  i618.sequenceDuration = i619[4]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i625 = data
  i624.center = new pc.Vec3( i625[0], i625[1], i625[2] )
  i624.size = new pc.Vec3( i625[3], i625[4], i625[5] )
  i624.enabled = !!i625[6]
  i624.isTrigger = !!i625[7]
  request.r(i625[8], i625[9], 0, i624, 'material')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i627 = data
  i626.pivot = new pc.Vec2( i627[0], i627[1] )
  i626.anchorMin = new pc.Vec2( i627[2], i627[3] )
  i626.anchorMax = new pc.Vec2( i627[4], i627[5] )
  i626.sizeDelta = new pc.Vec2( i627[6], i627[7] )
  i626.anchoredPosition3D = new pc.Vec3( i627[8], i627[9], i627[10] )
  i626.rotation = new pc.Quat(i627[11], i627[12], i627[13], i627[14])
  i626.scale = new pc.Vec3( i627[15], i627[16], i627[17] )
  return i626
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i628 = root || request.c( 'ConfettiController' )
  var i629 = data
  i628.gameWin = !!i629[0]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i631 = data
  i630.cullTransparentMesh = !!i631[0]
  return i630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.Image' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Sprite')
  i632.m_Type = i633[2]
  i632.m_PreserveAspect = !!i633[3]
  i632.m_FillCenter = !!i633[4]
  i632.m_FillMethod = i633[5]
  i632.m_FillAmount = i633[6]
  i632.m_FillClockwise = !!i633[7]
  i632.m_FillOrigin = i633[8]
  i632.m_UseSpriteMesh = !!i633[9]
  i632.m_PixelsPerUnitMultiplier = i633[10]
  request.r(i633[11], i633[12], 0, i632, 'm_Material')
  i632.m_Maskable = !!i633[13]
  i632.m_Color = new pc.Color(i633[14], i633[15], i633[16], i633[17])
  i632.m_RaycastTarget = !!i633[18]
  i632.m_RaycastPadding = new pc.Vec4( i633[19], i633[20], i633[21], i633[22] )
  return i632
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i634 = root || request.c( 'ConfettiFall' )
  var i635 = data
  i634.gameWin = !!i635[0]
  request.r(i635[1], i635[2], 0, i634, 'fallArea')
  i634.fallDistance = i635[3]
  i634.fallDuration = i635[4]
  i634.resetDelay = i635[5]
  i634.horizontalFlutter = i635[6]
  i634.rotationAngle = i635[7]
  i634.startDelayMin = i635[8]
  i634.startDelayMax = i635[9]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i637 = data
  i636.name = i637[0]
  i636.atlasId = i637[1]
  i636.mipmapCount = i637[2]
  i636.hdr = !!i637[3]
  i636.size = i637[4]
  i636.anisoLevel = i637[5]
  i636.filterMode = i637[6]
  var i639 = i637[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 4) {
    i638.push( UnityEngine.Rect.MinMaxRect(i639[i + 0], i639[i + 1], i639[i + 2], i639[i + 3]) );
  }
  i636.rects = i638
  i636.wrapU = i637[8]
  i636.wrapV = i637[9]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i643 = data
  i642.name = i643[0]
  i642.index = i643[1]
  i642.startup = !!i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i645 = data
  i644.enabled = !!i645[0]
  i644.aspect = i645[1]
  i644.orthographic = !!i645[2]
  i644.orthographicSize = i645[3]
  i644.backgroundColor = new pc.Color(i645[4], i645[5], i645[6], i645[7])
  i644.nearClipPlane = i645[8]
  i644.farClipPlane = i645[9]
  i644.fieldOfView = i645[10]
  i644.depth = i645[11]
  i644.clearFlags = i645[12]
  i644.cullingMask = i645[13]
  i644.rect = i645[14]
  request.r(i645[15], i645[16], 0, i644, 'targetTexture')
  i644.usePhysicalProperties = !!i645[17]
  i644.focalLength = i645[18]
  i644.sensorSize = new pc.Vec2( i645[19], i645[20] )
  i644.lensShift = new pc.Vec2( i645[21], i645[22] )
  i644.gateFit = i645[23]
  i644.commandBufferCount = i645[24]
  i644.cameraType = i645[25]
  return i644
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i646 = root || request.c( 'CameraInfo' )
  var i647 = data
  i646.IntroCamera = !!i647[0]
  var i649 = i647[1]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i646.TargetPaths = i648
  i646.pathDurations = i647[2]
  i646.introTime = i647[3]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.type = i653[1]
  i652.color = new pc.Color(i653[2], i653[3], i653[4], i653[5])
  i652.cullingMask = i653[6]
  i652.intensity = i653[7]
  i652.range = i653[8]
  i652.spotAngle = i653[9]
  i652.shadows = i653[10]
  i652.shadowNormalBias = i653[11]
  i652.shadowBias = i653[12]
  i652.shadowStrength = i653[13]
  i652.shadowResolution = i653[14]
  i652.lightmapBakeType = i653[15]
  i652.renderMode = i653[16]
  request.r(i653[17], i653[18], 0, i652, 'cookie')
  i652.cookieSize = i653[19]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i655 = data
  i654.enabled = !!i655[0]
  i654.planeDistance = i655[1]
  i654.referencePixelsPerUnit = i655[2]
  i654.isFallbackOverlay = !!i655[3]
  i654.renderMode = i655[4]
  i654.renderOrder = i655[5]
  i654.sortingLayerName = i655[6]
  i654.sortingOrder = i655[7]
  i654.scaleFactor = i655[8]
  request.r(i655[9], i655[10], 0, i654, 'worldCamera')
  i654.overrideSorting = !!i655[11]
  i654.pixelPerfect = !!i655[12]
  i654.targetDisplay = i655[13]
  i654.overridePixelPerfect = !!i655[14]
  return i654
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i657 = data
  i656.m_UiScaleMode = i657[0]
  i656.m_ReferencePixelsPerUnit = i657[1]
  i656.m_ScaleFactor = i657[2]
  i656.m_ReferenceResolution = new pc.Vec2( i657[3], i657[4] )
  i656.m_ScreenMatchMode = i657[5]
  i656.m_MatchWidthOrHeight = i657[6]
  i656.m_PhysicalUnit = i657[7]
  i656.m_FallbackScreenDPI = i657[8]
  i656.m_DefaultSpriteDPI = i657[9]
  i656.m_DynamicPixelsPerUnit = i657[10]
  i656.m_PresetInfoIsWorld = !!i657[11]
  return i656
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i659 = data
  i658.m_IgnoreReversedGraphics = !!i659[0]
  i658.m_BlockingObjects = i659[1]
  i658.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i659[2] )
  return i658
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i660 = root || request.c( 'TutorialManager' )
  var i661 = data
  i660.IntroAnim = !!i661[0]
  var i663 = i661[1]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('HandPositioningList')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('HandPositioningList', i663[i + 0]));
  }
  i660.handInfo = i662
  request.r(i661[2], i661[3], 0, i660, 'tutorialPanel')
  request.r(i661[4], i661[5], 0, i660, 'tutorialText')
  request.r(i661[6], i661[7], 0, i660, 'tutorialTiles')
  request.r(i661[8], i661[9], 0, i660, 'handTool')
  i660.oldStarter = new pc.Vec2( i661[10], i661[11] )
  i660.starterPos = new pc.Vec2( i661[12], i661[13] )
  i660.baseP = new pc.Vec2( i661[14], i661[15] )
  request.r(i661[16], i661[17], 0, i660, 'dragger')
  var i665 = i661[18]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i660.dragPos = i664
  var i667 = i661[19]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 1, i666, '')
  }
  i660.basePos = i666
  i660.currentTimer = i661[20]
  i660.maxTimer = i661[21]
  i660.timerCalled = !!i661[22]
  return i660
}

Deserializers["HandPositioningList"] = function (request, data, root) {
  var i670 = root || request.c( 'HandPositioningList' )
  var i671 = data
  i670.id = i671[0]
  var i673 = i671[1]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i673.length; i += 2) {
    i672.add(new pc.Vec2( i673[i + 0], i673[i + 1] ));
  }
  i670.DragPositions = i672
  var i675 = i671[2]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i675.length; i += 2) {
    i674.add(new pc.Vec2( i675[i + 0], i675[i + 1] ));
  }
  i670.BasePositions = i674
  return i670
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.Mask' )
  var i681 = data
  i680.m_ShowMaskGraphic = !!i681[0]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i683 = data
  i682.m_Alpha = i683[0]
  i682.m_Interactable = !!i683[1]
  i682.m_BlocksRaycasts = !!i683[2]
  i682.m_IgnoreParentGroups = !!i683[3]
  i682.enabled = !!i683[4]
  return i682
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.Button' )
  var i685 = data
  i684.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i685[0], i684.m_OnClick)
  i684.m_Navigation = request.d('UnityEngine.UI.Navigation', i685[1], i684.m_Navigation)
  i684.m_Transition = i685[2]
  i684.m_Colors = request.d('UnityEngine.UI.ColorBlock', i685[3], i684.m_Colors)
  i684.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i685[4], i684.m_SpriteState)
  i684.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i685[5], i684.m_AnimationTriggers)
  i684.m_Interactable = !!i685[6]
  request.r(i685[7], i685[8], 0, i684, 'm_TargetGraphic')
  return i684
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i687 = data
  i686.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i687[0], i686.m_PersistentCalls)
  return i686
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('UnityEngine.Events.PersistentCall', i691[i + 0]));
  }
  i688.m_Calls = i690
  return i688
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'm_Target')
  i694.m_TargetAssemblyTypeName = i695[2]
  i694.m_MethodName = i695[3]
  i694.m_Mode = i695[4]
  i694.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i695[5], i694.m_Arguments)
  i694.m_CallState = i695[6]
  return i694
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'm_ObjectArgument')
  i696.m_ObjectArgumentAssemblyTypeName = i697[2]
  i696.m_IntArgument = i697[3]
  i696.m_FloatArgument = i697[4]
  i696.m_StringArgument = i697[5]
  i696.m_BoolArgument = !!i697[6]
  return i696
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i699 = data
  i698.m_Mode = i699[0]
  i698.m_WrapAround = !!i699[1]
  request.r(i699[2], i699[3], 0, i698, 'm_SelectOnUp')
  request.r(i699[4], i699[5], 0, i698, 'm_SelectOnDown')
  request.r(i699[6], i699[7], 0, i698, 'm_SelectOnLeft')
  request.r(i699[8], i699[9], 0, i698, 'm_SelectOnRight')
  return i698
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i701 = data
  i700.m_NormalColor = new pc.Color(i701[0], i701[1], i701[2], i701[3])
  i700.m_HighlightedColor = new pc.Color(i701[4], i701[5], i701[6], i701[7])
  i700.m_PressedColor = new pc.Color(i701[8], i701[9], i701[10], i701[11])
  i700.m_SelectedColor = new pc.Color(i701[12], i701[13], i701[14], i701[15])
  i700.m_DisabledColor = new pc.Color(i701[16], i701[17], i701[18], i701[19])
  i700.m_ColorMultiplier = i701[20]
  i700.m_FadeDuration = i701[21]
  return i700
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_HighlightedSprite')
  request.r(i703[2], i703[3], 0, i702, 'm_PressedSprite')
  request.r(i703[4], i703[5], 0, i702, 'm_SelectedSprite')
  request.r(i703[6], i703[7], 0, i702, 'm_DisabledSprite')
  return i702
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i705 = data
  i704.m_NormalTrigger = i705[0]
  i704.m_HighlightedTrigger = i705[1]
  i704.m_PressedTrigger = i705[2]
  i704.m_SelectedTrigger = i705[3]
  i704.m_DisabledTrigger = i705[4]
  return i704
}

Deserializers["HexBase"] = function (request, data, root) {
  var i706 = root || request.c( 'HexBase' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706.nearbyBases = i708
  request.r(i707[1], i707[2], 0, i706, 'occupiedHex')
  i706.occupied = !!i707[3]
  request.r(i707[4], i707[5], 0, i706, 'sparkleVFX')
  request.r(i707[6], i707[7], 0, i706, 'originalColor')
  request.r(i707[8], i707[9], 0, i706, 'clickedColor')
  return i706
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_FirstSelected')
  i712.m_sendNavigationEvents = !!i713[2]
  i712.m_DragThreshold = i713[3]
  return i712
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i715 = data
  i714.m_HorizontalAxis = i715[0]
  i714.m_VerticalAxis = i715[1]
  i714.m_SubmitButton = i715[2]
  i714.m_CancelButton = i715[3]
  i714.m_InputActionsPerSecond = i715[4]
  i714.m_RepeatDelay = i715[5]
  i714.m_ForceModuleActive = !!i715[6]
  i714.m_SendPointerHoverToParent = !!i715[7]
  return i714
}

Deserializers["GameManager"] = function (request, data, root) {
  var i716 = root || request.c( 'GameManager' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716.tileMats = i718
  var i721 = i717[1]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(i721[i + 0]);
  }
  i716.replacerChances = i720
  request.r(i717[2], i717[3], 0, i716, 'Ground')
  request.r(i717[4], i717[5], 0, i716, 'replacerParent')
  request.r(i717[6], i717[7], 0, i716, 'hexNorth')
  var i723 = i717[8]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 1, i722, '')
  }
  i716.hexBases = i722
  var i725 = i717[9]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i716.hexDraggers = i724
  request.r(i717[10], i717[11], 0, i716, 'emptyDrag')
  var i727 = i717[12]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 1, i726, '')
  }
  i716.currentMixers = i726
  request.r(i717[13], i717[14], 0, i716, 'currentReplacer')
  var i729 = i717[15]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i716.nearbyReplacerHexes = i728
  i716.firstFullStack = !!i717[16]
  i716.topTileChances = i717[17]
  i716.tileChances = i717[18]
  request.r(i717[19], i717[20], 0, i716, 'currentHexDrag')
  request.r(i717[21], i717[22], 0, i716, 'hexDragPrefab')
  request.r(i717[23], i717[24], 0, i716, 'hexDragParent')
  return i716
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i734 = root || request.c( 'AudioManager' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'library')
  i734.sfxPoolSize = i735[2]
  return i734
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i736 = root || request.c( 'DontDestroy' )
  var i737 = data
  return i736
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i738 = root || request.c( 'CTAManager' )
  var i739 = data
  i738.GameOver = !!i739[0]
  request.r(i739[1], i739[2], 0, i738, 'WinPanel')
  request.r(i739[3], i739[4], 0, i738, 'LosePanel')
  request.r(i739[5], i739[6], 0, i738, 'playNow')
  request.r(i739[7], i739[8], 0, i738, 'tryAgain')
  i738.iosLink = i739[9]
  i738.androidLink = i739[10]
  return i738
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i740 = root || request.c( 'IterationManager' )
  var i741 = data
  i740.numClicks = i741[0]
  i740.maxNumClicks = i741[1]
  i740.Iterations = i741[2]
  i740.currentTimer = i741[3]
  i740.maxTimer = i741[4]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i743 = data
  i742.ambientIntensity = i743[0]
  i742.reflectionIntensity = i743[1]
  i742.ambientMode = i743[2]
  i742.ambientLight = new pc.Color(i743[3], i743[4], i743[5], i743[6])
  i742.ambientSkyColor = new pc.Color(i743[7], i743[8], i743[9], i743[10])
  i742.ambientGroundColor = new pc.Color(i743[11], i743[12], i743[13], i743[14])
  i742.ambientEquatorColor = new pc.Color(i743[15], i743[16], i743[17], i743[18])
  i742.fogColor = new pc.Color(i743[19], i743[20], i743[21], i743[22])
  i742.fogEndDistance = i743[23]
  i742.fogStartDistance = i743[24]
  i742.fogDensity = i743[25]
  i742.fog = !!i743[26]
  request.r(i743[27], i743[28], 0, i742, 'skybox')
  i742.fogMode = i743[29]
  var i745 = i743[30]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i745[i + 0]) );
  }
  i742.lightmaps = i744
  i742.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i743[31], i742.lightProbes)
  i742.lightmapsMode = i743[32]
  i742.mixedBakeMode = i743[33]
  i742.environmentLightingMode = i743[34]
  i742.ambientProbe = new pc.SphericalHarmonicsL2(i743[35])
  i742.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i743[36])
  i742.useReferenceAmbientProbe = !!i743[37]
  request.r(i743[38], i743[39], 0, i742, 'customReflection')
  request.r(i743[40], i743[41], 0, i742, 'defaultReflection')
  i742.defaultReflectionMode = i743[42]
  i742.defaultReflectionResolution = i743[43]
  i742.sunLightObjectId = i743[44]
  i742.pixelLightCount = i743[45]
  i742.defaultReflectionHDR = !!i743[46]
  i742.hasLightDataAsset = !!i743[47]
  i742.hasManualGenerate = !!i743[48]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'lightmapColor')
  request.r(i749[2], i749[3], 0, i748, 'lightmapDirection')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i750 = root || new UnityEngine.LightProbes()
  var i751 = data
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i761[i + 0]));
  }
  i758.ShaderCompilationErrors = i760
  i758.name = i759[1]
  i758.guid = i759[2]
  var i763 = i759[3]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( i763[i + 0] );
  }
  i758.shaderDefinedKeywords = i762
  var i765 = i759[4]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i765[i + 0]) );
  }
  i758.passes = i764
  var i767 = i759[5]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i767[i + 0]) );
  }
  i758.usePasses = i766
  var i769 = i759[6]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i769[i + 0]) );
  }
  i758.defaultParameterValues = i768
  request.r(i759[7], i759[8], 0, i758, 'unityFallbackShader')
  i758.readDepth = !!i759[9]
  i758.isCreatedByShaderGraph = !!i759[10]
  i758.compiled = !!i759[11]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i773 = data
  i772.shaderName = i773[0]
  i772.errorMessage = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i778 = root || new pc.UnityShaderPass()
  var i779 = data
  i778.id = i779[0]
  i778.subShaderIndex = i779[1]
  i778.name = i779[2]
  i778.passType = i779[3]
  i778.grabPassTextureName = i779[4]
  i778.usePass = !!i779[5]
  i778.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[6], i778.zTest)
  i778.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[7], i778.zWrite)
  i778.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[8], i778.culling)
  i778.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i779[9], i778.blending)
  i778.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i779[10], i778.alphaBlending)
  i778.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[11], i778.colorWriteMask)
  i778.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[12], i778.offsetUnits)
  i778.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[13], i778.offsetFactor)
  i778.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[14], i778.stencilRef)
  i778.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[15], i778.stencilReadMask)
  i778.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i779[16], i778.stencilWriteMask)
  i778.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[17], i778.stencilOp)
  i778.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[18], i778.stencilOpFront)
  i778.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i779[19], i778.stencilOpBack)
  var i781 = i779[20]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i781[i + 0]) );
  }
  i778.tags = i780
  var i783 = i779[21]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( i783[i + 0] );
  }
  i778.passDefinedKeywords = i782
  var i785 = i779[22]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i785[i + 0]) );
  }
  i778.passDefinedKeywordGroups = i784
  var i787 = i779[23]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i787[i + 0]) );
  }
  i778.variants = i786
  var i789 = i779[24]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i789[i + 0]) );
  }
  i778.excludedVariants = i788
  i778.hasDepthReader = !!i779[25]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i791 = data
  i790.val = i791[0]
  i790.name = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i793 = data
  i792.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[0], i792.src)
  i792.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[1], i792.dst)
  i792.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[2], i792.op)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i795 = data
  i794.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[0], i794.pass)
  i794.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[1], i794.fail)
  i794.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[2], i794.zFail)
  i794.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[3], i794.comp)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i799 = data
  i798.name = i799[0]
  i798.value = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i802.keywords = i804
  i802.hasDiscard = !!i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i809 = data
  i808.passId = i809[0]
  i808.subShaderIndex = i809[1]
  var i811 = i809[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i808.keywords = i810
  i808.vertexProgram = i809[3]
  i808.fragmentProgram = i809[4]
  i808.exportedForWebGl2 = !!i809[5]
  i808.readDepth = !!i809[6]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'shader')
  i814.pass = i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i819 = data
  i818.name = i819[0]
  i818.type = i819[1]
  i818.value = new pc.Vec4( i819[2], i819[3], i819[4], i819[5] )
  i818.textureValue = i819[6]
  i818.shaderPropertyFlag = i819[7]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i821 = data
  i820.name = i821[0]
  request.r(i821[1], i821[2], 0, i820, 'texture')
  i820.aabb = i821[3]
  i820.vertices = i821[4]
  i820.triangles = i821[5]
  i820.textureRect = UnityEngine.Rect.MinMaxRect(i821[6], i821[7], i821[8], i821[9])
  i820.packedRect = UnityEngine.Rect.MinMaxRect(i821[10], i821[11], i821[12], i821[13])
  i820.border = new pc.Vec4( i821[14], i821[15], i821[16], i821[17] )
  i820.transparency = i821[18]
  i820.bounds = i821[19]
  i820.pixelsPerUnit = i821[20]
  i820.textureWidth = i821[21]
  i820.textureHeight = i821[22]
  i820.nativeSize = new pc.Vec2( i821[23], i821[24] )
  i820.pivot = new pc.Vec2( i821[25], i821[26] )
  i820.textureRectOffset = new pc.Vec2( i821[27], i821[28] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i823 = data
  i822.name = i823[0]
  return i822
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i824 = root || request.c( 'AudioLibrary' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('AudioLibrary+ClipEntry', i827[i + 0]));
  }
  i824.clips = i826
  return i824
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i830 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i831 = data
  i830.key = i831[0]
  i830.channel = i831[1]
  request.r(i831[2], i831[3], 0, i830, 'clip')
  i830.volume = i831[4]
  i830.loop = !!i831[5]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i833 = data
  var i835 = i833[0]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i835[i + 0]) );
  }
  i832.files = i834
  i832.componentToPrefabIds = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i839 = data
  i838.path = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'unityObject')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i843[i + 0]) );
  }
  i840.scriptsExecutionOrder = i842
  var i845 = i841[1]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i845[i + 0]) );
  }
  i840.sortingLayers = i844
  var i847 = i841[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i847[i + 0]) );
  }
  i840.cullingLayers = i846
  i840.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i841[3], i840.timeSettings)
  i840.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i841[4], i840.physicsSettings)
  i840.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i841[5], i840.physics2DSettings)
  i840.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i841[6], i840.qualitySettings)
  i840.enableRealtimeShadows = !!i841[7]
  i840.enableAutoInstancing = !!i841[8]
  i840.enableDynamicBatching = !!i841[9]
  i840.lightmapEncodingQuality = i841[10]
  i840.desiredColorSpace = i841[11]
  var i849 = i841[12]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i840.allTags = i848
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i853 = data
  i852.name = i853[0]
  i852.value = i853[1]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i857 = data
  i856.id = i857[0]
  i856.name = i857[1]
  i856.value = i857[2]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i861 = data
  i860.id = i861[0]
  i860.name = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i863 = data
  i862.fixedDeltaTime = i863[0]
  i862.maximumDeltaTime = i863[1]
  i862.timeScale = i863[2]
  i862.maximumParticleTimestep = i863[3]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i865 = data
  i864.gravity = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.defaultSolverIterations = i865[3]
  i864.bounceThreshold = i865[4]
  i864.autoSyncTransforms = !!i865[5]
  i864.autoSimulation = !!i865[6]
  var i867 = i865[7]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i867[i + 0]) );
  }
  i864.collisionMatrix = i866
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i871 = data
  i870.enabled = !!i871[0]
  i870.layerId = i871[1]
  i870.otherLayerId = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'material')
  i872.gravity = new pc.Vec2( i873[2], i873[3] )
  i872.positionIterations = i873[4]
  i872.velocityIterations = i873[5]
  i872.velocityThreshold = i873[6]
  i872.maxLinearCorrection = i873[7]
  i872.maxAngularCorrection = i873[8]
  i872.maxTranslationSpeed = i873[9]
  i872.maxRotationSpeed = i873[10]
  i872.baumgarteScale = i873[11]
  i872.baumgarteTOIScale = i873[12]
  i872.timeToSleep = i873[13]
  i872.linearSleepTolerance = i873[14]
  i872.angularSleepTolerance = i873[15]
  i872.defaultContactOffset = i873[16]
  i872.autoSimulation = !!i873[17]
  i872.queriesHitTriggers = !!i873[18]
  i872.queriesStartInColliders = !!i873[19]
  i872.callbacksOnDisable = !!i873[20]
  i872.reuseCollisionCallbacks = !!i873[21]
  i872.autoSyncTransforms = !!i873[22]
  var i875 = i873[23]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i883[i + 0]) );
  }
  i880.qualityLevels = i882
  var i885 = i881[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( i885[i + 0] );
  }
  i880.names = i884
  i880.shadows = i881[2]
  i880.anisotropicFiltering = i881[3]
  i880.antiAliasing = i881[4]
  i880.lodBias = i881[5]
  i880.shadowCascades = i881[6]
  i880.shadowDistance = i881[7]
  i880.shadowmaskMode = i881[8]
  i880.shadowProjection = i881[9]
  i880.shadowResolution = i881[10]
  i880.softParticles = !!i881[11]
  i880.softVegetation = !!i881[12]
  i880.activeColorSpace = i881[13]
  i880.desiredColorSpace = i881[14]
  i880.masterTextureLimit = i881[15]
  i880.maxQueuedFrames = i881[16]
  i880.particleRaycastBudget = i881[17]
  i880.pixelLightCount = i881[18]
  i880.realtimeReflectionProbes = !!i881[19]
  i880.shadowCascade2Split = i881[20]
  i880.shadowCascade4Split = new pc.Vec3( i881[21], i881[22], i881[23] )
  i880.streamingMipmapsActive = !!i881[24]
  i880.vSyncCount = i881[25]
  i880.asyncUploadBufferSize = i881[26]
  i880.asyncUploadTimeSlice = i881[27]
  i880.billboardsFaceCameraPosition = !!i881[28]
  i880.shadowNearPlaneOffset = i881[29]
  i880.streamingMipmapsMemoryBudget = i881[30]
  i880.maximumLODLevel = i881[31]
  i880.streamingMipmapsAddAllCameras = !!i881[32]
  i880.streamingMipmapsMaxLevelReduction = i881[33]
  i880.streamingMipmapsRenderersPerFrame = i881[34]
  i880.resolutionScalingFixedDPIFactor = i881[35]
  i880.streamingMipmapsMaxFileIORequests = i881[36]
  i880.currentQualityLevel = i881[37]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i891 = data
  i890.weight = i891[0]
  i890.vertices = i891[1]
  i890.normals = i891[2]
  i890.tangents = i891[3]
  return i890
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[22],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[22],"77":[3],"78":[79],"80":[79],"26":[16],"81":[16],"82":[16],"28":[26],"20":[18,16],"83":[16],"27":[26],"84":[16],"85":[16],"86":[16],"87":[16],"88":[16],"89":[16],"90":[16],"31":[16],"91":[16],"92":[18,16],"93":[16],"94":[16],"95":[16],"96":[16],"97":[18,16],"98":[16],"99":[35],"100":[35],"36":[35],"101":[35],"102":[22],"103":[22],"104":[16],"105":[3,16],"106":[16,18],"107":[16],"108":[18,16],"109":[3],"110":[18,16],"111":[16],"112":[113],"114":[113],"115":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","ConfettiFall","UnityEngine.Camera","UnityEngine.AudioListener","CameraInfo","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","IterationManager","UnityEngine.Cubemap","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "7.3";

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

Deserializers.buildID = "9878c1a7-d109-4262-8517-18b44e130bb5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

