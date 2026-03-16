var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointSpring' )
  var i431 = data
  i430.spring = i431[0]
  i430.damper = i431[1]
  i430.targetPosition = i431[2]
  return i430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointMotor' )
  var i433 = data
  i432.m_TargetVelocity = i433[0]
  i432.m_Force = i433[1]
  i432.m_FreeSpin = i433[2]
  return i432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointLimits' )
  var i435 = data
  i434.m_Min = i435[0]
  i434.m_Max = i435[1]
  i434.m_Bounciness = i435[2]
  i434.m_BounceMinVelocity = i435[3]
  i434.m_ContactDistance = i435[4]
  i434.minBounce = i435[5]
  i434.maxBounce = i435[6]
  return i434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointDrive' )
  var i437 = data
  i436.m_PositionSpring = i437[0]
  i436.m_PositionDamper = i437[1]
  i436.m_MaximumForce = i437[2]
  i436.m_UseAcceleration = i437[3]
  return i436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i439 = data
  i438.m_Spring = i439[0]
  i438.m_Damper = i439[1]
  return i438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i441 = data
  i440.m_Limit = i441[0]
  i440.m_Bounciness = i441[1]
  i440.m_ContactDistance = i441[2]
  return i440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i443 = data
  i442.m_ExtremumSlip = i443[0]
  i442.m_ExtremumValue = i443[1]
  i442.m_AsymptoteSlip = i443[2]
  i442.m_AsymptoteValue = i443[3]
  i442.m_Stiffness = i443[4]
  return i442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i445 = data
  i444.m_LowerAngle = i445[0]
  i444.m_UpperAngle = i445[1]
  return i444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i447 = data
  i446.m_MotorSpeed = i447[0]
  i446.m_MaximumMotorTorque = i447[1]
  return i446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i449 = data
  i448.m_DampingRatio = i449[0]
  i448.m_Frequency = i449[1]
  i448.m_Angle = i449[2]
  return i448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i451 = data
  i450.m_LowerTranslation = i451[0]
  i450.m_UpperTranslation = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i453 = data
  i452.name = i453[0]
  i452.width = i453[1]
  i452.height = i453[2]
  i452.mipmapCount = i453[3]
  i452.anisoLevel = i453[4]
  i452.filterMode = i453[5]
  i452.hdr = !!i453[6]
  i452.format = i453[7]
  i452.wrapMode = i453[8]
  i452.alphaIsTransparency = !!i453[9]
  i452.alphaSource = i453[10]
  i452.graphicsFormat = i453[11]
  i452.sRGBTexture = !!i453[12]
  i452.desiredColorSpace = i453[13]
  i452.wrapU = i453[14]
  i452.wrapV = i453[15]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i455 = data
  i454.position = new pc.Vec3( i455[0], i455[1], i455[2] )
  i454.scale = new pc.Vec3( i455[3], i455[4], i455[5] )
  i454.rotation = new pc.Quat(i455[6], i455[7], i455[8], i455[9])
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'sharedMesh')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i459 = data
  request.r(i459[0], i459[1], 0, i458, 'additionalVertexStreams')
  i458.enabled = !!i459[2]
  request.r(i459[3], i459[4], 0, i458, 'sharedMaterial')
  var i461 = i459[5]
  var i460 = []
  for(var i = 0; i < i461.length; i += 2) {
  request.r(i461[i + 0], i461[i + 1], 2, i460, '')
  }
  i458.sharedMaterials = i460
  i458.receiveShadows = !!i459[6]
  i458.shadowCastingMode = i459[7]
  i458.sortingLayerID = i459[8]
  i458.sortingOrder = i459[9]
  i458.lightmapIndex = i459[10]
  i458.lightmapSceneIndex = i459[11]
  i458.lightmapScaleOffset = new pc.Vec4( i459[12], i459[13], i459[14], i459[15] )
  i458.lightProbeUsage = i459[16]
  i458.reflectionProbeUsage = i459[17]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i465 = data
  i464.name = i465[0]
  i464.tagId = i465[1]
  i464.enabled = !!i465[2]
  i464.isStatic = !!i465[3]
  i464.layer = i465[4]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i467 = data
  i466.name = i467[0]
  i466.halfPrecision = !!i467[1]
  i466.useUInt32IndexFormat = !!i467[2]
  i466.vertexCount = i467[3]
  i466.aabb = i467[4]
  var i469 = i467[5]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( !!i469[i + 0] );
  }
  i466.streams = i468
  i466.vertices = i467[6]
  var i471 = i467[7]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i471[i + 0]) );
  }
  i466.subMeshes = i470
  var i473 = i467[8]
  var i472 = []
  for(var i = 0; i < i473.length; i += 16) {
    i472.push( new pc.Mat4().setData(i473[i + 0], i473[i + 1], i473[i + 2], i473[i + 3],  i473[i + 4], i473[i + 5], i473[i + 6], i473[i + 7],  i473[i + 8], i473[i + 9], i473[i + 10], i473[i + 11],  i473[i + 12], i473[i + 13], i473[i + 14], i473[i + 15]) );
  }
  i466.bindposes = i472
  var i475 = i467[9]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i475[i + 0]) );
  }
  i466.blendShapes = i474
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i481 = data
  i480.triangles = i481[0]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i487 = data
  i486.name = i487[0]
  var i489 = i487[1]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i489[i + 0]) );
  }
  i486.frames = i488
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i490 = root || new pc.UnityMaterial()
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'shader')
  i490.renderQueue = i491[3]
  i490.enableInstancing = !!i491[4]
  var i493 = i491[5]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i493[i + 0]) );
  }
  i490.floatParameters = i492
  var i495 = i491[6]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i495[i + 0]) );
  }
  i490.colorParameters = i494
  var i497 = i491[7]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i497[i + 0]) );
  }
  i490.vectorParameters = i496
  var i499 = i491[8]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i499[i + 0]) );
  }
  i490.textureParameters = i498
  var i501 = i491[9]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i501[i + 0]) );
  }
  i490.materialFlags = i500
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Color(i509[1], i509[2], i509[3], i509[4])
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Vec4( i513[1], i513[2], i513[3], i513[4] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i517 = data
  i516.name = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'value')
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i521 = data
  i520.name = i521[0]
  i520.enabled = !!i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i523 = data
  i522.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i523[0], i522.main)
  i522.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i523[1], i522.colorBySpeed)
  i522.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i523[2], i522.colorOverLifetime)
  i522.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i523[3], i522.emission)
  i522.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i523[4], i522.rotationBySpeed)
  i522.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i523[5], i522.rotationOverLifetime)
  i522.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i523[6], i522.shape)
  i522.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i523[7], i522.sizeBySpeed)
  i522.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i523[8], i522.sizeOverLifetime)
  i522.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i523[9], i522.textureSheetAnimation)
  i522.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i523[10], i522.velocityOverLifetime)
  i522.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i523[11], i522.noise)
  i522.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i523[12], i522.inheritVelocity)
  i522.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i523[13], i522.forceOverLifetime)
  i522.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i523[14], i522.limitVelocityOverLifetime)
  i522.useAutoRandomSeed = !!i523[15]
  i522.randomSeed = i523[16]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i524 = root || new pc.ParticleSystemMain()
  var i525 = data
  i524.duration = i525[0]
  i524.loop = !!i525[1]
  i524.prewarm = !!i525[2]
  i524.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[3], i524.startDelay)
  i524.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[4], i524.startLifetime)
  i524.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[5], i524.startSpeed)
  i524.startSize3D = !!i525[6]
  i524.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[7], i524.startSizeX)
  i524.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[8], i524.startSizeY)
  i524.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[9], i524.startSizeZ)
  i524.startRotation3D = !!i525[10]
  i524.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[11], i524.startRotationX)
  i524.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[12], i524.startRotationY)
  i524.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[13], i524.startRotationZ)
  i524.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i525[14], i524.startColor)
  i524.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i525[15], i524.gravityModifier)
  i524.simulationSpace = i525[16]
  request.r(i525[17], i525[18], 0, i524, 'customSimulationSpace')
  i524.simulationSpeed = i525[19]
  i524.useUnscaledTime = !!i525[20]
  i524.scalingMode = i525[21]
  i524.playOnAwake = !!i525[22]
  i524.maxParticles = i525[23]
  i524.emitterVelocityMode = i525[24]
  i524.stopAction = i525[25]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i526 = root || new pc.MinMaxCurve()
  var i527 = data
  i526.mode = i527[0]
  i526.curveMin = new pc.AnimationCurve( { keys_flow: i527[1] } )
  i526.curveMax = new pc.AnimationCurve( { keys_flow: i527[2] } )
  i526.curveMultiplier = i527[3]
  i526.constantMin = i527[4]
  i526.constantMax = i527[5]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i528 = root || new pc.MinMaxGradient()
  var i529 = data
  i528.mode = i529[0]
  i528.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[1], i528.gradientMin)
  i528.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i529[2], i528.gradientMax)
  i528.colorMin = new pc.Color(i529[3], i529[4], i529[5], i529[6])
  i528.colorMax = new pc.Color(i529[7], i529[8], i529[9], i529[10])
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i531 = data
  i530.mode = i531[0]
  var i533 = i531[1]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i533[i + 0]) );
  }
  i530.colorKeys = i532
  var i535 = i531[2]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i535[i + 0]) );
  }
  i530.alphaKeys = i534
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemColorBySpeed()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i537[1], i536.color)
  i536.range = new pc.Vec2( i537[2], i537[3] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i541 = data
  i540.color = new pc.Color(i541[0], i541[1], i541[2], i541[3])
  i540.time = i541[4]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i545 = data
  i544.alpha = i545[0]
  i544.time = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemColorOverLifetime()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i547[1], i546.color)
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i548 = root || new pc.ParticleSystemEmitter()
  var i549 = data
  i548.enabled = !!i549[0]
  i548.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[1], i548.rateOverTime)
  i548.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i549[2], i548.rateOverDistance)
  var i551 = i549[3]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i551[i + 0]) );
  }
  i548.bursts = i550
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemBurst()
  var i555 = data
  i554.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[0], i554.count)
  i554.cycleCount = i555[1]
  i554.minCount = i555[2]
  i554.maxCount = i555[3]
  i554.repeatInterval = i555[4]
  i554.time = i555[5]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemRotationBySpeed()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  i556.range = new pc.Vec2( i557[5], i557[6] )
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemRotationOverLifetime()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.separateAxes = !!i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemShape()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.shapeType = i561[1]
  i560.randomDirectionAmount = i561[2]
  i560.sphericalDirectionAmount = i561[3]
  i560.randomPositionAmount = i561[4]
  i560.alignToDirection = !!i561[5]
  i560.radius = i561[6]
  i560.radiusMode = i561[7]
  i560.radiusSpread = i561[8]
  i560.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[9], i560.radiusSpeed)
  i560.radiusThickness = i561[10]
  i560.angle = i561[11]
  i560.length = i561[12]
  i560.boxThickness = new pc.Vec3( i561[13], i561[14], i561[15] )
  i560.meshShapeType = i561[16]
  request.r(i561[17], i561[18], 0, i560, 'mesh')
  request.r(i561[19], i561[20], 0, i560, 'meshRenderer')
  request.r(i561[21], i561[22], 0, i560, 'skinnedMeshRenderer')
  i560.useMeshMaterialIndex = !!i561[23]
  i560.meshMaterialIndex = i561[24]
  i560.useMeshColors = !!i561[25]
  i560.normalOffset = i561[26]
  i560.arc = i561[27]
  i560.arcMode = i561[28]
  i560.arcSpread = i561[29]
  i560.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[30], i560.arcSpeed)
  i560.donutRadius = i561[31]
  i560.position = new pc.Vec3( i561[32], i561[33], i561[34] )
  i560.rotation = new pc.Vec3( i561[35], i561[36], i561[37] )
  i560.scale = new pc.Vec3( i561[38], i561[39], i561[40] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemSizeBySpeed()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  i562.range = new pc.Vec2( i563[5], i563[6] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemSizeOverLifetime()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.mode = i567[1]
  i566.animation = i567[2]
  i566.numTilesX = i567[3]
  i566.numTilesY = i567[4]
  i566.useRandomRow = !!i567[5]
  i566.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[6], i566.frameOverTime)
  i566.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[7], i566.startFrame)
  i566.cycleCount = i567[8]
  i566.rowIndex = i567[9]
  i566.flipU = i567[10]
  i566.flipV = i567[11]
  i566.spriteCount = i567[12]
  var i569 = i567[13]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.sprites = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.radial)
  i572.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[5], i572.speedModifier)
  i572.space = i573[6]
  i572.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[7], i572.orbitalX)
  i572.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[8], i572.orbitalY)
  i572.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[9], i572.orbitalZ)
  i572.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[10], i572.orbitalOffsetX)
  i572.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[11], i572.orbitalOffsetY)
  i572.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[12], i572.orbitalOffsetZ)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemNoise()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.separateAxes = !!i575[1]
  i574.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.strengthX)
  i574.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.strengthY)
  i574.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[4], i574.strengthZ)
  i574.frequency = i575[5]
  i574.damping = !!i575[6]
  i574.octaveCount = i575[7]
  i574.octaveMultiplier = i575[8]
  i574.octaveScale = i575[9]
  i574.quality = i575[10]
  i574.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[11], i574.scrollSpeed)
  i574.scrollSpeedMultiplier = i575[12]
  i574.remapEnabled = !!i575[13]
  i574.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[14], i574.remapX)
  i574.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[15], i574.remapY)
  i574.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[16], i574.remapZ)
  i574.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[17], i574.positionAmount)
  i574.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[18], i574.rotationAmount)
  i574.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[19], i574.sizeAmount)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemInheritVelocity()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.mode = i577[1]
  i576.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.curve)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemForceOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.space = i579[4]
  i578.randomized = !!i579[5]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.limit)
  i580.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.limitX)
  i580.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.limitY)
  i580.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[4], i580.limitZ)
  i580.dampen = i581[5]
  i580.separateAxes = !!i581[6]
  i580.space = i581[7]
  i580.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[8], i580.drag)
  i580.multiplyDragByParticleSize = !!i581[9]
  i580.multiplyDragByParticleVelocity = !!i581[10]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i583 = data
  i582.enabled = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'sharedMaterial')
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[4]
  i582.shadowCastingMode = i583[5]
  i582.sortingLayerID = i583[6]
  i582.sortingOrder = i583[7]
  i582.lightmapIndex = i583[8]
  i582.lightmapSceneIndex = i583[9]
  i582.lightmapScaleOffset = new pc.Vec4( i583[10], i583[11], i583[12], i583[13] )
  i582.lightProbeUsage = i583[14]
  i582.reflectionProbeUsage = i583[15]
  request.r(i583[16], i583[17], 0, i582, 'mesh')
  i582.meshCount = i583[18]
  i582.activeVertexStreamsCount = i583[19]
  i582.alignment = i583[20]
  i582.renderMode = i583[21]
  i582.sortMode = i583[22]
  i582.lengthScale = i583[23]
  i582.velocityScale = i583[24]
  i582.cameraVelocityScale = i583[25]
  i582.normalDirection = i583[26]
  i582.sortingFudge = i583[27]
  i582.minParticleSize = i583[28]
  i582.maxParticleSize = i583[29]
  i582.pivot = new pc.Vec3( i583[30], i583[31], i583[32] )
  request.r(i583[33], i583[34], 0, i582, 'trailMaterial')
  return i582
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i586 = root || request.c( 'HexGroup' )
  var i587 = data
  i586.GroupType = i587[0]
  i586.Replacer = !!i587[1]
  var i589 = i587[2]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 1, i588, '')
  }
  i586.nearbyHex = i588
  i586.isTweening = !!i587[3]
  i586.oneColor = !!i587[4]
  i586.oneStack = !!i587[5]
  i586.isEmptying = !!i587[6]
  i586.draggable = !!i587[7]
  request.r(i587[8], i587[9], 0, i586, 'topTile')
  request.r(i587[10], i587[11], 0, i586, 'secondTopTile')
  request.r(i587[12], i587[13], 0, i586, 'thirdTopTile')
  var i591 = i587[14]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 1, i590, '')
  }
  i586.extraSameTiles = i590
  i586.stackNum = i587[15]
  i586.transferIndex = i587[16]
  var i593 = i587[17]
  var i592 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 1, i592, '')
  }
  i586.disappearingTiles = i592
  i586.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i587[18] )
  var i595 = i587[19]
  var i594 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 1, i594, '')
  }
  i586.HexTiles = i594
  i586.oldPosition = new pc.Vec3( i587[20], i587[21], i587[22] )
  i586.isDragging = !!i587[23]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i601 = data
  i600.enabled = !!i601[0]
  i600.isTrigger = !!i601[1]
  request.r(i601[2], i601[3], 0, i600, 'material')
  request.r(i601[4], i601[5], 0, i600, 'sharedMesh')
  i600.convex = !!i601[6]
  return i600
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i602 = root || request.c( 'HexTiles' )
  var i603 = data
  i602.tileColor = i603[0]
  var i605 = i603[1]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 1, i604, '')
  }
  i602.singleTile = i604
  i602.perTiles = i603[2]
  i602.perSingleTiles = i603[3]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i609 = data
  i608.center = new pc.Vec3( i609[0], i609[1], i609[2] )
  i608.size = new pc.Vec3( i609[3], i609[4], i609[5] )
  i608.enabled = !!i609[6]
  i608.isTrigger = !!i609[7]
  request.r(i609[8], i609[9], 0, i608, 'material')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i611 = data
  i610.pivot = new pc.Vec2( i611[0], i611[1] )
  i610.anchorMin = new pc.Vec2( i611[2], i611[3] )
  i610.anchorMax = new pc.Vec2( i611[4], i611[5] )
  i610.sizeDelta = new pc.Vec2( i611[6], i611[7] )
  i610.anchoredPosition3D = new pc.Vec3( i611[8], i611[9], i611[10] )
  i610.rotation = new pc.Quat(i611[11], i611[12], i611[13], i611[14])
  i610.scale = new pc.Vec3( i611[15], i611[16], i611[17] )
  return i610
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i612 = root || request.c( 'ConfettiController' )
  var i613 = data
  i612.gameWin = !!i613[0]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i615 = data
  i614.cullTransparentMesh = !!i615[0]
  return i614
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.Image' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_Sprite')
  i616.m_Type = i617[2]
  i616.m_PreserveAspect = !!i617[3]
  i616.m_FillCenter = !!i617[4]
  i616.m_FillMethod = i617[5]
  i616.m_FillAmount = i617[6]
  i616.m_FillClockwise = !!i617[7]
  i616.m_FillOrigin = i617[8]
  i616.m_UseSpriteMesh = !!i617[9]
  i616.m_PixelsPerUnitMultiplier = i617[10]
  request.r(i617[11], i617[12], 0, i616, 'm_Material')
  i616.m_Maskable = !!i617[13]
  i616.m_Color = new pc.Color(i617[14], i617[15], i617[16], i617[17])
  i616.m_RaycastTarget = !!i617[18]
  i616.m_RaycastPadding = new pc.Vec4( i617[19], i617[20], i617[21], i617[22] )
  return i616
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i618 = root || request.c( 'ConfettiFall' )
  var i619 = data
  i618.gameWin = !!i619[0]
  request.r(i619[1], i619[2], 0, i618, 'fallArea')
  i618.fallDistance = i619[3]
  i618.fallDuration = i619[4]
  i618.resetDelay = i619[5]
  i618.horizontalFlutter = i619[6]
  i618.rotationAngle = i619[7]
  i618.startDelayMin = i619[8]
  i618.startDelayMax = i619[9]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i621 = data
  i620.name = i621[0]
  i620.atlasId = i621[1]
  i620.mipmapCount = i621[2]
  i620.hdr = !!i621[3]
  i620.size = i621[4]
  i620.anisoLevel = i621[5]
  i620.filterMode = i621[6]
  var i623 = i621[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 4) {
    i622.push( UnityEngine.Rect.MinMaxRect(i623[i + 0], i623[i + 1], i623[i + 2], i623[i + 3]) );
  }
  i620.rects = i622
  i620.wrapU = i621[8]
  i620.wrapV = i621[9]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i627 = data
  i626.name = i627[0]
  i626.index = i627[1]
  i626.startup = !!i627[2]
  return i626
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i628 = root || request.c( 'CameraInfo' )
  var i629 = data
  i628.IntroCamera = !!i629[0]
  request.r(i629[1], i629[2], 0, i628, 'PathParent')
  var i631 = i629[3]
  var i630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 1, i630, '')
  }
  i628.TargetPaths = i630
  i628.pathDurations = i629[4]
  i628.introTime = i629[5]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i635 = data
  i634.enabled = !!i635[0]
  i634.aspect = i635[1]
  i634.orthographic = !!i635[2]
  i634.orthographicSize = i635[3]
  i634.backgroundColor = new pc.Color(i635[4], i635[5], i635[6], i635[7])
  i634.nearClipPlane = i635[8]
  i634.farClipPlane = i635[9]
  i634.fieldOfView = i635[10]
  i634.depth = i635[11]
  i634.clearFlags = i635[12]
  i634.cullingMask = i635[13]
  i634.rect = i635[14]
  request.r(i635[15], i635[16], 0, i634, 'targetTexture')
  i634.usePhysicalProperties = !!i635[17]
  i634.focalLength = i635[18]
  i634.sensorSize = new pc.Vec2( i635[19], i635[20] )
  i634.lensShift = new pc.Vec2( i635[21], i635[22] )
  i634.gateFit = i635[23]
  i634.commandBufferCount = i635[24]
  i634.cameraType = i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i637 = data
  i636.enabled = !!i637[0]
  i636.type = i637[1]
  i636.color = new pc.Color(i637[2], i637[3], i637[4], i637[5])
  i636.cullingMask = i637[6]
  i636.intensity = i637[7]
  i636.range = i637[8]
  i636.spotAngle = i637[9]
  i636.shadows = i637[10]
  i636.shadowNormalBias = i637[11]
  i636.shadowBias = i637[12]
  i636.shadowStrength = i637[13]
  i636.shadowResolution = i637[14]
  i636.lightmapBakeType = i637[15]
  i636.renderMode = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'cookie')
  i636.cookieSize = i637[19]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i639 = data
  i638.enabled = !!i639[0]
  i638.planeDistance = i639[1]
  i638.referencePixelsPerUnit = i639[2]
  i638.isFallbackOverlay = !!i639[3]
  i638.renderMode = i639[4]
  i638.renderOrder = i639[5]
  i638.sortingLayerName = i639[6]
  i638.sortingOrder = i639[7]
  i638.scaleFactor = i639[8]
  request.r(i639[9], i639[10], 0, i638, 'worldCamera')
  i638.overrideSorting = !!i639[11]
  i638.pixelPerfect = !!i639[12]
  i638.targetDisplay = i639[13]
  i638.overridePixelPerfect = !!i639[14]
  return i638
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i641 = data
  i640.m_UiScaleMode = i641[0]
  i640.m_ReferencePixelsPerUnit = i641[1]
  i640.m_ScaleFactor = i641[2]
  i640.m_ReferenceResolution = new pc.Vec2( i641[3], i641[4] )
  i640.m_ScreenMatchMode = i641[5]
  i640.m_MatchWidthOrHeight = i641[6]
  i640.m_PhysicalUnit = i641[7]
  i640.m_FallbackScreenDPI = i641[8]
  i640.m_DefaultSpriteDPI = i641[9]
  i640.m_DynamicPixelsPerUnit = i641[10]
  i640.m_PresetInfoIsWorld = !!i641[11]
  return i640
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i643 = data
  i642.m_IgnoreReversedGraphics = !!i643[0]
  i642.m_BlockingObjects = i643[1]
  i642.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i643[2] )
  return i642
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i644 = root || request.c( 'TutorialManager' )
  var i645 = data
  i644.IntroAnim = !!i645[0]
  request.r(i645[1], i645[2], 0, i644, 'tutorialPanel')
  request.r(i645[3], i645[4], 0, i644, 'tutorialText')
  request.r(i645[5], i645[6], 0, i644, 'tutorialTiles')
  request.r(i645[7], i645[8], 0, i644, 'handTool')
  i644.oldStarter = new pc.Vec2( i645[9], i645[10] )
  i644.starterPos = new pc.Vec2( i645[11], i645[12] )
  i644.baseP = new pc.Vec2( i645[13], i645[14] )
  request.r(i645[15], i645[16], 0, i644, 'dragger')
  var i647 = i645[17]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 1, i646, '')
  }
  i644.dragPos = i646
  var i649 = i645[18]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i644.basePos = i648
  i644.currentTimer = i645[19]
  i644.maxTimer = i645[20]
  i644.timerCalled = !!i645[21]
  return i644
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.Mask' )
  var i653 = data
  i652.m_ShowMaskGraphic = !!i653[0]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i655 = data
  i654.m_Alpha = i655[0]
  i654.m_Interactable = !!i655[1]
  i654.m_BlocksRaycasts = !!i655[2]
  i654.m_IgnoreParentGroups = !!i655[3]
  i654.enabled = !!i655[4]
  return i654
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Button' )
  var i657 = data
  i656.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i657[0], i656.m_OnClick)
  i656.m_Navigation = request.d('UnityEngine.UI.Navigation', i657[1], i656.m_Navigation)
  i656.m_Transition = i657[2]
  i656.m_Colors = request.d('UnityEngine.UI.ColorBlock', i657[3], i656.m_Colors)
  i656.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i657[4], i656.m_SpriteState)
  i656.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i657[5], i656.m_AnimationTriggers)
  i656.m_Interactable = !!i657[6]
  request.r(i657[7], i657[8], 0, i656, 'm_TargetGraphic')
  return i656
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i659 = data
  i658.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i659[0], i658.m_PersistentCalls)
  return i658
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i661 = data
  var i663 = i661[0]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i663.length; i += 1) {
    i662.add(request.d('UnityEngine.Events.PersistentCall', i663[i + 0]));
  }
  i660.m_Calls = i662
  return i660
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Target')
  i666.m_TargetAssemblyTypeName = i667[2]
  i666.m_MethodName = i667[3]
  i666.m_Mode = i667[4]
  i666.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i667[5], i666.m_Arguments)
  i666.m_CallState = i667[6]
  return i666
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_ObjectArgument')
  i668.m_ObjectArgumentAssemblyTypeName = i669[2]
  i668.m_IntArgument = i669[3]
  i668.m_FloatArgument = i669[4]
  i668.m_StringArgument = i669[5]
  i668.m_BoolArgument = !!i669[6]
  return i668
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i671 = data
  i670.m_Mode = i671[0]
  i670.m_WrapAround = !!i671[1]
  request.r(i671[2], i671[3], 0, i670, 'm_SelectOnUp')
  request.r(i671[4], i671[5], 0, i670, 'm_SelectOnDown')
  request.r(i671[6], i671[7], 0, i670, 'm_SelectOnLeft')
  request.r(i671[8], i671[9], 0, i670, 'm_SelectOnRight')
  return i670
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i673 = data
  i672.m_NormalColor = new pc.Color(i673[0], i673[1], i673[2], i673[3])
  i672.m_HighlightedColor = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.m_PressedColor = new pc.Color(i673[8], i673[9], i673[10], i673[11])
  i672.m_SelectedColor = new pc.Color(i673[12], i673[13], i673[14], i673[15])
  i672.m_DisabledColor = new pc.Color(i673[16], i673[17], i673[18], i673[19])
  i672.m_ColorMultiplier = i673[20]
  i672.m_FadeDuration = i673[21]
  return i672
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'm_HighlightedSprite')
  request.r(i675[2], i675[3], 0, i674, 'm_PressedSprite')
  request.r(i675[4], i675[5], 0, i674, 'm_SelectedSprite')
  request.r(i675[6], i675[7], 0, i674, 'm_DisabledSprite')
  return i674
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i677 = data
  i676.m_NormalTrigger = i677[0]
  i676.m_HighlightedTrigger = i677[1]
  i676.m_PressedTrigger = i677[2]
  i676.m_SelectedTrigger = i677[3]
  i676.m_DisabledTrigger = i677[4]
  return i676
}

Deserializers["HexBase"] = function (request, data, root) {
  var i678 = root || request.c( 'HexBase' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 1, i680, '')
  }
  i678.nearbyBases = i680
  request.r(i679[1], i679[2], 0, i678, 'occupiedHex')
  i678.occupied = !!i679[3]
  request.r(i679[4], i679[5], 0, i678, 'sparkleVFX')
  request.r(i679[6], i679[7], 0, i678, 'originalColor')
  request.r(i679[8], i679[9], 0, i678, 'clickedColor')
  return i678
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_FirstSelected')
  i684.m_sendNavigationEvents = !!i685[2]
  i684.m_DragThreshold = i685[3]
  return i684
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i687 = data
  i686.m_HorizontalAxis = i687[0]
  i686.m_VerticalAxis = i687[1]
  i686.m_SubmitButton = i687[2]
  i686.m_CancelButton = i687[3]
  i686.m_InputActionsPerSecond = i687[4]
  i686.m_RepeatDelay = i687[5]
  i686.m_ForceModuleActive = !!i687[6]
  i686.m_SendPointerHoverToParent = !!i687[7]
  return i686
}

Deserializers["GameManager"] = function (request, data, root) {
  var i688 = root || request.c( 'GameManager' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i688.tileMats = i690
  request.r(i689[1], i689[2], 0, i688, 'Ground')
  request.r(i689[3], i689[4], 0, i688, 'replacerParent')
  request.r(i689[5], i689[6], 0, i688, 'hexNorth')
  var i693 = i689[7]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 1, i692, '')
  }
  i688.hexBases = i692
  var i695 = i689[8]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i688.hexDraggers = i694
  request.r(i689[9], i689[10], 0, i688, 'emptyDrag')
  var i697 = i689[11]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i688.currentMixers = i696
  request.r(i689[12], i689[13], 0, i688, 'currentReplacer')
  var i699 = i689[14]
  var i698 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 1, i698, '')
  }
  i688.nearbyReplacerHexes = i698
  i688.IsTransferring = !!i689[15]
  i688.firstFullStack = !!i689[16]
  request.r(i689[17], i689[18], 0, i688, 'currentHexDrag')
  request.r(i689[19], i689[20], 0, i688, 'hexDragPrefab')
  request.r(i689[21], i689[22], 0, i688, 'hexDragParent')
  return i688
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i702 = root || request.c( 'AudioManager' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'library')
  i702.sfxPoolSize = i703[2]
  return i702
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i704 = root || request.c( 'DontDestroy' )
  var i705 = data
  return i704
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i706 = root || request.c( 'CTAManager' )
  var i707 = data
  i706.GameOver = !!i707[0]
  request.r(i707[1], i707[2], 0, i706, 'WinPanel')
  request.r(i707[3], i707[4], 0, i706, 'LosePanel')
  request.r(i707[5], i707[6], 0, i706, 'playNow')
  request.r(i707[7], i707[8], 0, i706, 'tryAgain')
  i706.iosLink = i707[9]
  i706.androidLink = i707[10]
  return i706
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i708 = root || request.c( 'IterationManager' )
  var i709 = data
  i708.numClicks = i709[0]
  i708.maxNumClicks = i709[1]
  i708.Iterations = i709[2]
  i708.currentTimer = i709[3]
  i708.maxTimer = i709[4]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i711 = data
  i710.ambientIntensity = i711[0]
  i710.reflectionIntensity = i711[1]
  i710.ambientMode = i711[2]
  i710.ambientLight = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.ambientSkyColor = new pc.Color(i711[7], i711[8], i711[9], i711[10])
  i710.ambientGroundColor = new pc.Color(i711[11], i711[12], i711[13], i711[14])
  i710.ambientEquatorColor = new pc.Color(i711[15], i711[16], i711[17], i711[18])
  i710.fogColor = new pc.Color(i711[19], i711[20], i711[21], i711[22])
  i710.fogEndDistance = i711[23]
  i710.fogStartDistance = i711[24]
  i710.fogDensity = i711[25]
  i710.fog = !!i711[26]
  request.r(i711[27], i711[28], 0, i710, 'skybox')
  i710.fogMode = i711[29]
  var i713 = i711[30]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i713[i + 0]) );
  }
  i710.lightmaps = i712
  i710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i711[31], i710.lightProbes)
  i710.lightmapsMode = i711[32]
  i710.mixedBakeMode = i711[33]
  i710.environmentLightingMode = i711[34]
  i710.ambientProbe = new pc.SphericalHarmonicsL2(i711[35])
  i710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i711[36])
  i710.useReferenceAmbientProbe = !!i711[37]
  request.r(i711[38], i711[39], 0, i710, 'customReflection')
  request.r(i711[40], i711[41], 0, i710, 'defaultReflection')
  i710.defaultReflectionMode = i711[42]
  i710.defaultReflectionResolution = i711[43]
  i710.sunLightObjectId = i711[44]
  i710.pixelLightCount = i711[45]
  i710.defaultReflectionHDR = !!i711[46]
  i710.hasLightDataAsset = !!i711[47]
  i710.hasManualGenerate = !!i711[48]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'lightmapColor')
  request.r(i717[2], i717[3], 0, i716, 'lightmapDirection')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i718 = root || new UnityEngine.LightProbes()
  var i719 = data
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i729[i + 0]));
  }
  i726.ShaderCompilationErrors = i728
  i726.name = i727[1]
  i726.guid = i727[2]
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.shaderDefinedKeywords = i730
  var i733 = i727[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i733[i + 0]) );
  }
  i726.passes = i732
  var i735 = i727[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i735[i + 0]) );
  }
  i726.usePasses = i734
  var i737 = i727[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i737[i + 0]) );
  }
  i726.defaultParameterValues = i736
  request.r(i727[7], i727[8], 0, i726, 'unityFallbackShader')
  i726.readDepth = !!i727[9]
  i726.isCreatedByShaderGraph = !!i727[10]
  i726.compiled = !!i727[11]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i741 = data
  i740.shaderName = i741[0]
  i740.errorMessage = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i746 = root || new pc.UnityShaderPass()
  var i747 = data
  i746.id = i747[0]
  i746.subShaderIndex = i747[1]
  i746.name = i747[2]
  i746.passType = i747[3]
  i746.grabPassTextureName = i747[4]
  i746.usePass = !!i747[5]
  i746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[6], i746.zTest)
  i746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[7], i746.zWrite)
  i746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[8], i746.culling)
  i746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[9], i746.blending)
  i746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[10], i746.alphaBlending)
  i746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[11], i746.colorWriteMask)
  i746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[12], i746.offsetUnits)
  i746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[13], i746.offsetFactor)
  i746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[14], i746.stencilRef)
  i746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[15], i746.stencilReadMask)
  i746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[16], i746.stencilWriteMask)
  i746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[17], i746.stencilOp)
  i746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[18], i746.stencilOpFront)
  i746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[19], i746.stencilOpBack)
  var i749 = i747[20]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i749[i + 0]) );
  }
  i746.tags = i748
  var i751 = i747[21]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.passDefinedKeywords = i750
  var i753 = i747[22]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i753[i + 0]) );
  }
  i746.passDefinedKeywordGroups = i752
  var i755 = i747[23]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i746.variants = i754
  var i757 = i747[24]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i757[i + 0]) );
  }
  i746.excludedVariants = i756
  i746.hasDepthReader = !!i747[25]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i759 = data
  i758.val = i759[0]
  i758.name = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i761 = data
  i760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.src)
  i760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.dst)
  i760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.op)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i763 = data
  i762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[0], i762.pass)
  i762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[1], i762.fail)
  i762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[2], i762.zFail)
  i762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[3], i762.comp)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.hasDiscard = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i777 = data
  i776.passId = i777[0]
  i776.subShaderIndex = i777[1]
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.vertexProgram = i777[3]
  i776.fragmentProgram = i777[4]
  i776.exportedForWebGl2 = !!i777[5]
  i776.readDepth = !!i777[6]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'shader')
  i782.pass = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i787 = data
  i786.name = i787[0]
  i786.type = i787[1]
  i786.value = new pc.Vec4( i787[2], i787[3], i787[4], i787[5] )
  i786.textureValue = i787[6]
  i786.shaderPropertyFlag = i787[7]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i789 = data
  i788.name = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'texture')
  i788.aabb = i789[3]
  i788.vertices = i789[4]
  i788.triangles = i789[5]
  i788.textureRect = UnityEngine.Rect.MinMaxRect(i789[6], i789[7], i789[8], i789[9])
  i788.packedRect = UnityEngine.Rect.MinMaxRect(i789[10], i789[11], i789[12], i789[13])
  i788.border = new pc.Vec4( i789[14], i789[15], i789[16], i789[17] )
  i788.transparency = i789[18]
  i788.bounds = i789[19]
  i788.pixelsPerUnit = i789[20]
  i788.textureWidth = i789[21]
  i788.textureHeight = i789[22]
  i788.nativeSize = new pc.Vec2( i789[23], i789[24] )
  i788.pivot = new pc.Vec2( i789[25], i789[26] )
  i788.textureRectOffset = new pc.Vec2( i789[27], i789[28] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i791 = data
  i790.name = i791[0]
  return i790
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i792 = root || request.c( 'AudioLibrary' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('AudioLibrary+ClipEntry', i795[i + 0]));
  }
  i792.clips = i794
  return i792
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i798 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i799 = data
  i798.key = i799[0]
  i798.channel = i799[1]
  request.r(i799[2], i799[3], 0, i798, 'clip')
  i798.volume = i799[4]
  i798.loop = !!i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i803[i + 0]) );
  }
  i800.files = i802
  i800.componentToPrefabIds = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i807 = data
  i806.path = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'unityObject')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i809 = data
  var i811 = i809[0]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i811[i + 0]) );
  }
  i808.scriptsExecutionOrder = i810
  var i813 = i809[1]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i813[i + 0]) );
  }
  i808.sortingLayers = i812
  var i815 = i809[2]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i815[i + 0]) );
  }
  i808.cullingLayers = i814
  i808.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i809[3], i808.timeSettings)
  i808.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i809[4], i808.physicsSettings)
  i808.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i809[5], i808.physics2DSettings)
  i808.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i809[6], i808.qualitySettings)
  i808.enableRealtimeShadows = !!i809[7]
  i808.enableAutoInstancing = !!i809[8]
  i808.enableDynamicBatching = !!i809[9]
  i808.lightmapEncodingQuality = i809[10]
  i808.desiredColorSpace = i809[11]
  var i817 = i809[12]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i808.allTags = i816
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i825 = data
  i824.id = i825[0]
  i824.name = i825[1]
  i824.value = i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i829 = data
  i828.id = i829[0]
  i828.name = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i831 = data
  i830.fixedDeltaTime = i831[0]
  i830.maximumDeltaTime = i831[1]
  i830.timeScale = i831[2]
  i830.maximumParticleTimestep = i831[3]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i833 = data
  i832.gravity = new pc.Vec3( i833[0], i833[1], i833[2] )
  i832.defaultSolverIterations = i833[3]
  i832.bounceThreshold = i833[4]
  i832.autoSyncTransforms = !!i833[5]
  i832.autoSimulation = !!i833[6]
  var i835 = i833[7]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i835[i + 0]) );
  }
  i832.collisionMatrix = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i839 = data
  i838.enabled = !!i839[0]
  i838.layerId = i839[1]
  i838.otherLayerId = i839[2]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'material')
  i840.gravity = new pc.Vec2( i841[2], i841[3] )
  i840.positionIterations = i841[4]
  i840.velocityIterations = i841[5]
  i840.velocityThreshold = i841[6]
  i840.maxLinearCorrection = i841[7]
  i840.maxAngularCorrection = i841[8]
  i840.maxTranslationSpeed = i841[9]
  i840.maxRotationSpeed = i841[10]
  i840.baumgarteScale = i841[11]
  i840.baumgarteTOIScale = i841[12]
  i840.timeToSleep = i841[13]
  i840.linearSleepTolerance = i841[14]
  i840.angularSleepTolerance = i841[15]
  i840.defaultContactOffset = i841[16]
  i840.autoSimulation = !!i841[17]
  i840.queriesHitTriggers = !!i841[18]
  i840.queriesStartInColliders = !!i841[19]
  i840.callbacksOnDisable = !!i841[20]
  i840.reuseCollisionCallbacks = !!i841[21]
  i840.autoSyncTransforms = !!i841[22]
  var i843 = i841[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i843[i + 0]) );
  }
  i840.collisionMatrix = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.layerId = i847[1]
  i846.otherLayerId = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i851[i + 0]) );
  }
  i848.qualityLevels = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.names = i852
  i848.shadows = i849[2]
  i848.anisotropicFiltering = i849[3]
  i848.antiAliasing = i849[4]
  i848.lodBias = i849[5]
  i848.shadowCascades = i849[6]
  i848.shadowDistance = i849[7]
  i848.shadowmaskMode = i849[8]
  i848.shadowProjection = i849[9]
  i848.shadowResolution = i849[10]
  i848.softParticles = !!i849[11]
  i848.softVegetation = !!i849[12]
  i848.activeColorSpace = i849[13]
  i848.desiredColorSpace = i849[14]
  i848.masterTextureLimit = i849[15]
  i848.maxQueuedFrames = i849[16]
  i848.particleRaycastBudget = i849[17]
  i848.pixelLightCount = i849[18]
  i848.realtimeReflectionProbes = !!i849[19]
  i848.shadowCascade2Split = i849[20]
  i848.shadowCascade4Split = new pc.Vec3( i849[21], i849[22], i849[23] )
  i848.streamingMipmapsActive = !!i849[24]
  i848.vSyncCount = i849[25]
  i848.asyncUploadBufferSize = i849[26]
  i848.asyncUploadTimeSlice = i849[27]
  i848.billboardsFaceCameraPosition = !!i849[28]
  i848.shadowNearPlaneOffset = i849[29]
  i848.streamingMipmapsMemoryBudget = i849[30]
  i848.maximumLODLevel = i849[31]
  i848.streamingMipmapsAddAllCameras = !!i849[32]
  i848.streamingMipmapsMaxLevelReduction = i849[33]
  i848.streamingMipmapsRenderersPerFrame = i849[34]
  i848.resolutionScalingFixedDPIFactor = i849[35]
  i848.streamingMipmapsMaxFileIORequests = i849[36]
  i848.currentQualityLevel = i849[37]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i859 = data
  i858.weight = i859[0]
  i858.vertices = i859[1]
  i858.normals = i859[2]
  i858.tangents = i859[3]
  return i858
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[52],"53":[23],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[23],"77":[3],"78":[79],"80":[79],"26":[16],"81":[16],"82":[16],"28":[26],"20":[18,16],"83":[16],"27":[26],"84":[16],"85":[16],"86":[16],"87":[16],"88":[16],"89":[16],"90":[16],"31":[16],"91":[16],"92":[18,16],"93":[16],"94":[16],"95":[16],"96":[16],"97":[18,16],"98":[16],"99":[35],"100":[35],"36":[35],"101":[35],"102":[23],"103":[23],"104":[16],"105":[3,16],"106":[16,18],"107":[16],"108":[18,16],"109":[3],"110":[18,16],"111":[16],"112":[113],"114":[113],"115":[113]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","ConfettiFall","CameraInfo","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","IterationManager","UnityEngine.Cubemap","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "3.2";

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

Deserializers.buildID = "aedf9658-b551-4a73-a047-18f1f00e2361";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

