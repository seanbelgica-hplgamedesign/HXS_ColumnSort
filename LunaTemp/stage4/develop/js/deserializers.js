var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSpring' )
  var i561 = data
  i560.spring = i561[0]
  i560.damper = i561[1]
  i560.targetPosition = i561[2]
  return i560
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor' )
  var i563 = data
  i562.m_TargetVelocity = i563[0]
  i562.m_Force = i563[1]
  i562.m_FreeSpin = i563[2]
  return i562
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointLimits' )
  var i565 = data
  i564.m_Min = i565[0]
  i564.m_Max = i565[1]
  i564.m_Bounciness = i565[2]
  i564.m_BounceMinVelocity = i565[3]
  i564.m_ContactDistance = i565[4]
  i564.minBounce = i565[5]
  i564.maxBounce = i565[6]
  return i564
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointDrive' )
  var i567 = data
  i566.m_PositionSpring = i567[0]
  i566.m_PositionDamper = i567[1]
  i566.m_MaximumForce = i567[2]
  i566.m_UseAcceleration = i567[3]
  return i566
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i569 = data
  i568.m_Spring = i569[0]
  i568.m_Damper = i569[1]
  return i568
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i571 = data
  i570.m_Limit = i571[0]
  i570.m_Bounciness = i571[1]
  i570.m_ContactDistance = i571[2]
  return i570
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i573 = data
  i572.m_ExtremumSlip = i573[0]
  i572.m_ExtremumValue = i573[1]
  i572.m_AsymptoteSlip = i573[2]
  i572.m_AsymptoteValue = i573[3]
  i572.m_Stiffness = i573[4]
  return i572
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i575 = data
  i574.m_LowerAngle = i575[0]
  i574.m_UpperAngle = i575[1]
  return i574
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i577 = data
  i576.m_MotorSpeed = i577[0]
  i576.m_MaximumMotorTorque = i577[1]
  return i576
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i579 = data
  i578.m_DampingRatio = i579[0]
  i578.m_Frequency = i579[1]
  i578.m_Angle = i579[2]
  return i578
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i581 = data
  i580.m_LowerTranslation = i581[0]
  i580.m_UpperTranslation = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i583 = data
  i582.name = i583[0]
  i582.width = i583[1]
  i582.height = i583[2]
  i582.mipmapCount = i583[3]
  i582.anisoLevel = i583[4]
  i582.filterMode = i583[5]
  i582.hdr = !!i583[6]
  i582.format = i583[7]
  i582.wrapMode = i583[8]
  i582.alphaIsTransparency = !!i583[9]
  i582.alphaSource = i583[10]
  i582.graphicsFormat = i583[11]
  i582.sRGBTexture = !!i583[12]
  i582.desiredColorSpace = i583[13]
  i582.wrapU = i583[14]
  i582.wrapV = i583[15]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i585 = data
  i584.pivot = new pc.Vec2( i585[0], i585[1] )
  i584.anchorMin = new pc.Vec2( i585[2], i585[3] )
  i584.anchorMax = new pc.Vec2( i585[4], i585[5] )
  i584.sizeDelta = new pc.Vec2( i585[6], i585[7] )
  i584.anchoredPosition3D = new pc.Vec3( i585[8], i585[9], i585[10] )
  i584.rotation = new pc.Quat(i585[11], i585[12], i585[13], i585[14])
  i584.scale = new pc.Vec3( i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i586 = root || request.c( 'ConfettiController' )
  var i587 = data
  i586.gameWin = !!i587[0]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i589 = data
  i588.name = i589[0]
  i588.tagId = i589[1]
  i588.enabled = !!i589[2]
  i588.isStatic = !!i589[3]
  i588.layer = i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i591 = data
  i590.cullTransparentMesh = !!i591[0]
  return i590
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.UI.Image' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'm_Sprite')
  i592.m_Type = i593[2]
  i592.m_PreserveAspect = !!i593[3]
  i592.m_FillCenter = !!i593[4]
  i592.m_FillMethod = i593[5]
  i592.m_FillAmount = i593[6]
  i592.m_FillClockwise = !!i593[7]
  i592.m_FillOrigin = i593[8]
  i592.m_UseSpriteMesh = !!i593[9]
  i592.m_PixelsPerUnitMultiplier = i593[10]
  request.r(i593[11], i593[12], 0, i592, 'm_Material')
  i592.m_Maskable = !!i593[13]
  i592.m_Color = new pc.Color(i593[14], i593[15], i593[16], i593[17])
  i592.m_RaycastTarget = !!i593[18]
  i592.m_RaycastPadding = new pc.Vec4( i593[19], i593[20], i593[21], i593[22] )
  return i592
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i594 = root || request.c( 'ConfettiFall' )
  var i595 = data
  i594.gameWin = !!i595[0]
  request.r(i595[1], i595[2], 0, i594, 'fallArea')
  i594.fallDistance = i595[3]
  i594.fallDuration = i595[4]
  i594.resetDelay = i595[5]
  i594.horizontalFlutter = i595[6]
  i594.rotationAngle = i595[7]
  i594.startDelayMin = i595[8]
  i594.startDelayMax = i595[9]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i596 = root || new pc.UnityMaterial()
  var i597 = data
  i596.name = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'shader')
  i596.renderQueue = i597[3]
  i596.enableInstancing = !!i597[4]
  var i599 = i597[5]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i599[i + 0]) );
  }
  i596.floatParameters = i598
  var i601 = i597[6]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i601[i + 0]) );
  }
  i596.colorParameters = i600
  var i603 = i597[7]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i603[i + 0]) );
  }
  i596.vectorParameters = i602
  var i605 = i597[8]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i605[i + 0]) );
  }
  i596.textureParameters = i604
  var i607 = i597[9]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i607[i + 0]) );
  }
  i596.materialFlags = i606
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Color(i615[1], i615[2], i615[3], i615[4])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Vec4( i619[1], i619[2], i619[3], i619[4] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i623 = data
  i622.name = i623[0]
  request.r(i623[1], i623[2], 0, i622, 'value')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i627 = data
  i626.name = i627[0]
  i626.enabled = !!i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i629 = data
  i628.position = new pc.Vec3( i629[0], i629[1], i629[2] )
  i628.scale = new pc.Vec3( i629[3], i629[4], i629[5] )
  i628.rotation = new pc.Quat(i629[6], i629[7], i629[8], i629[9])
  return i628
}

Deserializers["HexBase"] = function (request, data, root) {
  var i630 = root || request.c( 'HexBase' )
  var i631 = data
  var i633 = i631[0]
  var i632 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 1, i632, '')
  }
  i630.nearbyBases = i632
  request.r(i631[1], i631[2], 0, i630, 'occupiedHex')
  i630.occupied = !!i631[3]
  request.r(i631[4], i631[5], 0, i630, 'sparkleVFX')
  request.r(i631[6], i631[7], 0, i630, 'originalColor')
  request.r(i631[8], i631[9], 0, i630, 'clickedColor')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i637 = data
  i636.center = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.size = new pc.Vec3( i637[3], i637[4], i637[5] )
  i636.enabled = !!i637[6]
  i636.isTrigger = !!i637[7]
  request.r(i637[8], i637[9], 0, i636, 'material')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'sharedMesh')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'additionalVertexStreams')
  i640.enabled = !!i641[2]
  request.r(i641[3], i641[4], 0, i640, 'sharedMaterial')
  var i643 = i641[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[6]
  i640.shadowCastingMode = i641[7]
  i640.sortingLayerID = i641[8]
  i640.sortingOrder = i641[9]
  i640.lightmapIndex = i641[10]
  i640.lightmapSceneIndex = i641[11]
  i640.lightmapScaleOffset = new pc.Vec4( i641[12], i641[13], i641[14], i641[15] )
  i640.lightProbeUsage = i641[16]
  i640.reflectionProbeUsage = i641[17]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.isTrigger = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'material')
  request.r(i647[4], i647[5], 0, i646, 'sharedMesh')
  i646.convex = !!i647[6]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i649 = data
  i648.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i649[0], i648.main)
  i648.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i649[1], i648.colorBySpeed)
  i648.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i649[2], i648.colorOverLifetime)
  i648.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i649[3], i648.emission)
  i648.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i649[4], i648.rotationBySpeed)
  i648.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i649[5], i648.rotationOverLifetime)
  i648.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i649[6], i648.shape)
  i648.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i649[7], i648.sizeBySpeed)
  i648.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i649[8], i648.sizeOverLifetime)
  i648.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i649[9], i648.textureSheetAnimation)
  i648.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i649[10], i648.velocityOverLifetime)
  i648.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i649[11], i648.noise)
  i648.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i649[12], i648.inheritVelocity)
  i648.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i649[13], i648.forceOverLifetime)
  i648.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i649[14], i648.limitVelocityOverLifetime)
  i648.useAutoRandomSeed = !!i649[15]
  i648.randomSeed = i649[16]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemMain()
  var i651 = data
  i650.duration = i651[0]
  i650.loop = !!i651[1]
  i650.prewarm = !!i651[2]
  i650.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.startDelay)
  i650.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[4], i650.startLifetime)
  i650.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[5], i650.startSpeed)
  i650.startSize3D = !!i651[6]
  i650.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[7], i650.startSizeX)
  i650.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[8], i650.startSizeY)
  i650.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[9], i650.startSizeZ)
  i650.startRotation3D = !!i651[10]
  i650.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[11], i650.startRotationX)
  i650.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[12], i650.startRotationY)
  i650.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[13], i650.startRotationZ)
  i650.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[14], i650.startColor)
  i650.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[15], i650.gravityModifier)
  i650.simulationSpace = i651[16]
  request.r(i651[17], i651[18], 0, i650, 'customSimulationSpace')
  i650.simulationSpeed = i651[19]
  i650.useUnscaledTime = !!i651[20]
  i650.scalingMode = i651[21]
  i650.playOnAwake = !!i651[22]
  i650.maxParticles = i651[23]
  i650.emitterVelocityMode = i651[24]
  i650.stopAction = i651[25]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i652 = root || new pc.MinMaxCurve()
  var i653 = data
  i652.mode = i653[0]
  i652.curveMin = new pc.AnimationCurve( { keys_flow: i653[1] } )
  i652.curveMax = new pc.AnimationCurve( { keys_flow: i653[2] } )
  i652.curveMultiplier = i653[3]
  i652.constantMin = i653[4]
  i652.constantMax = i653[5]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i654 = root || new pc.MinMaxGradient()
  var i655 = data
  i654.mode = i655[0]
  i654.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i655[1], i654.gradientMin)
  i654.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i655[2], i654.gradientMax)
  i654.colorMin = new pc.Color(i655[3], i655[4], i655[5], i655[6])
  i654.colorMax = new pc.Color(i655[7], i655[8], i655[9], i655[10])
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i657 = data
  i656.mode = i657[0]
  var i659 = i657[1]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i659[i + 0]) );
  }
  i656.colorKeys = i658
  var i661 = i657[2]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i661[i + 0]) );
  }
  i656.alphaKeys = i660
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemColorBySpeed()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i663[1], i662.color)
  i662.range = new pc.Vec2( i663[2], i663[3] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i667 = data
  i666.color = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  i666.time = i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i671 = data
  i670.alpha = i671[0]
  i670.time = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemColorOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i673[1], i672.color)
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemEmitter()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.rateOverTime)
  i674.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.rateOverDistance)
  var i677 = i675[3]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i677[i + 0]) );
  }
  i674.bursts = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemBurst()
  var i681 = data
  i680.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[0], i680.count)
  i680.cycleCount = i681[1]
  i680.minCount = i681[2]
  i680.maxCount = i681[3]
  i680.repeatInterval = i681[4]
  i680.time = i681[5]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemRotationBySpeed()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.separateAxes = !!i683[4]
  i682.range = new pc.Vec2( i683[5], i683[6] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemRotationOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.separateAxes = !!i685[4]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemShape()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.shapeType = i687[1]
  i686.randomDirectionAmount = i687[2]
  i686.sphericalDirectionAmount = i687[3]
  i686.randomPositionAmount = i687[4]
  i686.alignToDirection = !!i687[5]
  i686.radius = i687[6]
  i686.radiusMode = i687[7]
  i686.radiusSpread = i687[8]
  i686.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.radiusSpeed)
  i686.radiusThickness = i687[10]
  i686.angle = i687[11]
  i686.length = i687[12]
  i686.boxThickness = new pc.Vec3( i687[13], i687[14], i687[15] )
  i686.meshShapeType = i687[16]
  request.r(i687[17], i687[18], 0, i686, 'mesh')
  request.r(i687[19], i687[20], 0, i686, 'meshRenderer')
  request.r(i687[21], i687[22], 0, i686, 'skinnedMeshRenderer')
  i686.useMeshMaterialIndex = !!i687[23]
  i686.meshMaterialIndex = i687[24]
  i686.useMeshColors = !!i687[25]
  i686.normalOffset = i687[26]
  i686.arc = i687[27]
  i686.arcMode = i687[28]
  i686.arcSpread = i687[29]
  i686.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[30], i686.arcSpeed)
  i686.donutRadius = i687[31]
  i686.position = new pc.Vec3( i687[32], i687[33], i687[34] )
  i686.rotation = new pc.Vec3( i687[35], i687[36], i687[37] )
  i686.scale = new pc.Vec3( i687[38], i687[39], i687[40] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemSizeBySpeed()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.separateAxes = !!i689[4]
  i688.range = new pc.Vec2( i689[5], i689[6] )
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemSizeOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.mode = i693[1]
  i692.animation = i693[2]
  i692.numTilesX = i693[3]
  i692.numTilesY = i693[4]
  i692.useRandomRow = !!i693[5]
  i692.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[6], i692.frameOverTime)
  i692.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[7], i692.startFrame)
  i692.cycleCount = i693[8]
  i692.rowIndex = i693[9]
  i692.flipU = i693[10]
  i692.flipV = i693[11]
  i692.spriteCount = i693[12]
  var i695 = i693[13]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sprites = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[4], i698.radial)
  i698.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[5], i698.speedModifier)
  i698.space = i699[6]
  i698.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[7], i698.orbitalX)
  i698.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[8], i698.orbitalY)
  i698.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[9], i698.orbitalZ)
  i698.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[10], i698.orbitalOffsetX)
  i698.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[11], i698.orbitalOffsetY)
  i698.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[12], i698.orbitalOffsetZ)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemNoise()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.separateAxes = !!i701[1]
  i700.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.strengthX)
  i700.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.strengthY)
  i700.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[4], i700.strengthZ)
  i700.frequency = i701[5]
  i700.damping = !!i701[6]
  i700.octaveCount = i701[7]
  i700.octaveMultiplier = i701[8]
  i700.octaveScale = i701[9]
  i700.quality = i701[10]
  i700.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[11], i700.scrollSpeed)
  i700.scrollSpeedMultiplier = i701[12]
  i700.remapEnabled = !!i701[13]
  i700.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[14], i700.remapX)
  i700.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[15], i700.remapY)
  i700.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[16], i700.remapZ)
  i700.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[17], i700.positionAmount)
  i700.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[18], i700.rotationAmount)
  i700.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[19], i700.sizeAmount)
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemInheritVelocity()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.mode = i703[1]
  i702.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.curve)
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemForceOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.x)
  i704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.y)
  i704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.z)
  i704.space = i705[4]
  i704.randomized = !!i705[5]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.limit)
  i706.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.limitX)
  i706.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.limitY)
  i706.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.limitZ)
  i706.dampen = i707[5]
  i706.separateAxes = !!i707[6]
  i706.space = i707[7]
  i706.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.drag)
  i706.multiplyDragByParticleSize = !!i707[9]
  i706.multiplyDragByParticleVelocity = !!i707[10]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i709 = data
  i708.enabled = !!i709[0]
  request.r(i709[1], i709[2], 0, i708, 'sharedMaterial')
  var i711 = i709[3]
  var i710 = []
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 2, i710, '')
  }
  i708.sharedMaterials = i710
  i708.receiveShadows = !!i709[4]
  i708.shadowCastingMode = i709[5]
  i708.sortingLayerID = i709[6]
  i708.sortingOrder = i709[7]
  i708.lightmapIndex = i709[8]
  i708.lightmapSceneIndex = i709[9]
  i708.lightmapScaleOffset = new pc.Vec4( i709[10], i709[11], i709[12], i709[13] )
  i708.lightProbeUsage = i709[14]
  i708.reflectionProbeUsage = i709[15]
  request.r(i709[16], i709[17], 0, i708, 'mesh')
  i708.meshCount = i709[18]
  i708.activeVertexStreamsCount = i709[19]
  i708.alignment = i709[20]
  i708.renderMode = i709[21]
  i708.sortMode = i709[22]
  i708.lengthScale = i709[23]
  i708.velocityScale = i709[24]
  i708.cameraVelocityScale = i709[25]
  i708.normalDirection = i709[26]
  i708.sortingFudge = i709[27]
  i708.minParticleSize = i709[28]
  i708.maxParticleSize = i709[29]
  i708.pivot = new pc.Vec3( i709[30], i709[31], i709[32] )
  request.r(i709[33], i709[34], 0, i708, 'trailMaterial')
  return i708
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i712 = root || request.c( 'HexGroup' )
  var i713 = data
  i712.GroupType = i713[0]
  i712.stackColor = i713[1]
  i712.draggerNum = i713[2]
  i712.boardStack = !!i713[3]
  request.r(i713[4], i713[5], 0, i712, 'dragReference')
  i712.isTweening = !!i713[6]
  i712.isEmptying = !!i713[7]
  i712.isTransferring = !!i713[8]
  var i715 = i713[9]
  var i714 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 1, i714, '')
  }
  i712.nearbyHex = i714
  i712.PerTile = i713[10]
  i712.tilesNeeded = i713[11]
  i712.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i713[12] )
  var i717 = i713[13]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i712.HexTiles = i716
  request.r(i713[14], i713[15], 0, i712, 'pointsPos')
  request.r(i713[16], i713[17], 0, i712, 'pointsTxt')
  request.r(i713[18], i713[19], 0, i712, 'pointsPrefab')
  i712.oldPosition = new pc.Vec3( i713[20], i713[21], i713[22] )
  i712.isDragging = !!i713[23]
  i712.TransferTime = i713[24]
  i712.TransferDelay = i713[25]
  i712.MergeTime = i713[26]
  i712.MergeDelay = i713[27]
  return i712
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i722 = root || request.c( 'HexTiles' )
  var i723 = data
  i722.tileColor = i723[0]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i725 = data
  i724.name = i725[0]
  i724.halfPrecision = !!i725[1]
  i724.useUInt32IndexFormat = !!i725[2]
  i724.vertexCount = i725[3]
  i724.aabb = i725[4]
  var i727 = i725[5]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( !!i727[i + 0] );
  }
  i724.streams = i726
  i724.vertices = i725[6]
  var i729 = i725[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i729[i + 0]) );
  }
  i724.subMeshes = i728
  var i731 = i725[8]
  var i730 = []
  for(var i = 0; i < i731.length; i += 16) {
    i730.push( new pc.Mat4().setData(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3],  i731[i + 4], i731[i + 5], i731[i + 6], i731[i + 7],  i731[i + 8], i731[i + 9], i731[i + 10], i731[i + 11],  i731[i + 12], i731[i + 13], i731[i + 14], i731[i + 15]) );
  }
  i724.bindposes = i730
  var i733 = i725[9]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i733[i + 0]) );
  }
  i724.blendShapes = i732
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i739 = data
  i738.triangles = i739[0]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i745 = data
  i744.name = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i747[i + 0]) );
  }
  i744.frames = i746
  return i744
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i748 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i749 = data
  i748.m_hasFontAssetChanged = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'm_baseMaterial')
  i748.m_maskOffset = new pc.Vec4( i749[3], i749[4], i749[5], i749[6] )
  i748.m_text = i749[7]
  i748.m_isRightToLeft = !!i749[8]
  request.r(i749[9], i749[10], 0, i748, 'm_fontAsset')
  request.r(i749[11], i749[12], 0, i748, 'm_sharedMaterial')
  var i751 = i749[13]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.m_fontSharedMaterials = i750
  request.r(i749[14], i749[15], 0, i748, 'm_fontMaterial')
  var i753 = i749[16]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i748.m_fontMaterials = i752
  i748.m_fontColor32 = UnityEngine.Color32.ConstructColor(i749[17], i749[18], i749[19], i749[20])
  i748.m_fontColor = new pc.Color(i749[21], i749[22], i749[23], i749[24])
  i748.m_enableVertexGradient = !!i749[25]
  i748.m_colorMode = i749[26]
  i748.m_fontColorGradient = request.d('TMPro.VertexGradient', i749[27], i748.m_fontColorGradient)
  request.r(i749[28], i749[29], 0, i748, 'm_fontColorGradientPreset')
  request.r(i749[30], i749[31], 0, i748, 'm_spriteAsset')
  i748.m_tintAllSprites = !!i749[32]
  request.r(i749[33], i749[34], 0, i748, 'm_StyleSheet')
  i748.m_TextStyleHashCode = i749[35]
  i748.m_overrideHtmlColors = !!i749[36]
  i748.m_faceColor = UnityEngine.Color32.ConstructColor(i749[37], i749[38], i749[39], i749[40])
  i748.m_fontSize = i749[41]
  i748.m_fontSizeBase = i749[42]
  i748.m_fontWeight = i749[43]
  i748.m_enableAutoSizing = !!i749[44]
  i748.m_fontSizeMin = i749[45]
  i748.m_fontSizeMax = i749[46]
  i748.m_fontStyle = i749[47]
  i748.m_HorizontalAlignment = i749[48]
  i748.m_VerticalAlignment = i749[49]
  i748.m_textAlignment = i749[50]
  i748.m_characterSpacing = i749[51]
  i748.m_wordSpacing = i749[52]
  i748.m_lineSpacing = i749[53]
  i748.m_lineSpacingMax = i749[54]
  i748.m_paragraphSpacing = i749[55]
  i748.m_charWidthMaxAdj = i749[56]
  i748.m_enableWordWrapping = !!i749[57]
  i748.m_wordWrappingRatios = i749[58]
  i748.m_overflowMode = i749[59]
  request.r(i749[60], i749[61], 0, i748, 'm_linkedTextComponent')
  request.r(i749[62], i749[63], 0, i748, 'parentLinkedComponent')
  i748.m_enableKerning = !!i749[64]
  i748.m_enableExtraPadding = !!i749[65]
  i748.checkPaddingRequired = !!i749[66]
  i748.m_isRichText = !!i749[67]
  i748.m_parseCtrlCharacters = !!i749[68]
  i748.m_isOrthographic = !!i749[69]
  i748.m_isCullingEnabled = !!i749[70]
  i748.m_horizontalMapping = i749[71]
  i748.m_verticalMapping = i749[72]
  i748.m_uvLineOffset = i749[73]
  i748.m_geometrySortingOrder = i749[74]
  i748.m_IsTextObjectScaleStatic = !!i749[75]
  i748.m_VertexBufferAutoSizeReduction = !!i749[76]
  i748.m_useMaxVisibleDescender = !!i749[77]
  i748.m_pageToDisplay = i749[78]
  i748.m_margin = new pc.Vec4( i749[79], i749[80], i749[81], i749[82] )
  i748.m_isUsingLegacyAnimationComponent = !!i749[83]
  i748.m_isVolumetricText = !!i749[84]
  request.r(i749[85], i749[86], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[87]
  i748.m_Color = new pc.Color(i749[88], i749[89], i749[90], i749[91])
  i748.m_RaycastTarget = !!i749[92]
  i748.m_RaycastPadding = new pc.Vec4( i749[93], i749[94], i749[95], i749[96] )
  return i748
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i754 = root || request.c( 'TMPro.VertexGradient' )
  var i755 = data
  i754.topLeft = new pc.Color(i755[0], i755[1], i755[2], i755[3])
  i754.topRight = new pc.Color(i755[4], i755[5], i755[6], i755[7])
  i754.bottomLeft = new pc.Color(i755[8], i755[9], i755[10], i755[11])
  i754.bottomRight = new pc.Color(i755[12], i755[13], i755[14], i755[15])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i757 = data
  i756.name = i757[0]
  i756.atlasId = i757[1]
  i756.mipmapCount = i757[2]
  i756.hdr = !!i757[3]
  i756.size = i757[4]
  i756.anisoLevel = i757[5]
  i756.filterMode = i757[6]
  var i759 = i757[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 4) {
    i758.push( UnityEngine.Rect.MinMaxRect(i759[i + 0], i759[i + 1], i759[i + 2], i759[i + 3]) );
  }
  i756.rects = i758
  i756.wrapU = i757[8]
  i756.wrapV = i757[9]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i763 = data
  i762.name = i763[0]
  i762.index = i763[1]
  i762.startup = !!i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i765 = data
  i764.enabled = !!i765[0]
  i764.aspect = i765[1]
  i764.orthographic = !!i765[2]
  i764.orthographicSize = i765[3]
  i764.backgroundColor = new pc.Color(i765[4], i765[5], i765[6], i765[7])
  i764.nearClipPlane = i765[8]
  i764.farClipPlane = i765[9]
  i764.fieldOfView = i765[10]
  i764.depth = i765[11]
  i764.clearFlags = i765[12]
  i764.cullingMask = i765[13]
  i764.rect = i765[14]
  request.r(i765[15], i765[16], 0, i764, 'targetTexture')
  i764.usePhysicalProperties = !!i765[17]
  i764.focalLength = i765[18]
  i764.sensorSize = new pc.Vec2( i765[19], i765[20] )
  i764.lensShift = new pc.Vec2( i765[21], i765[22] )
  i764.gateFit = i765[23]
  i764.commandBufferCount = i765[24]
  i764.cameraType = i765[25]
  return i764
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i766 = root || request.c( 'CameraInfo' )
  var i767 = data
  i766.IntroCamera = !!i767[0]
  var i769 = i767[1]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i766.TargetPaths = i768
  i766.pathDurations = i767[2]
  i766.introTime = i767[3]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i773 = data
  i772.enabled = !!i773[0]
  i772.type = i773[1]
  i772.color = new pc.Color(i773[2], i773[3], i773[4], i773[5])
  i772.cullingMask = i773[6]
  i772.intensity = i773[7]
  i772.range = i773[8]
  i772.spotAngle = i773[9]
  i772.shadows = i773[10]
  i772.shadowNormalBias = i773[11]
  i772.shadowBias = i773[12]
  i772.shadowStrength = i773[13]
  i772.shadowResolution = i773[14]
  i772.lightmapBakeType = i773[15]
  i772.renderMode = i773[16]
  request.r(i773[17], i773[18], 0, i772, 'cookie')
  i772.cookieSize = i773[19]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i775 = data
  i774.enabled = !!i775[0]
  i774.planeDistance = i775[1]
  i774.referencePixelsPerUnit = i775[2]
  i774.isFallbackOverlay = !!i775[3]
  i774.renderMode = i775[4]
  i774.renderOrder = i775[5]
  i774.sortingLayerName = i775[6]
  i774.sortingOrder = i775[7]
  i774.scaleFactor = i775[8]
  request.r(i775[9], i775[10], 0, i774, 'worldCamera')
  i774.overrideSorting = !!i775[11]
  i774.pixelPerfect = !!i775[12]
  i774.targetDisplay = i775[13]
  i774.overridePixelPerfect = !!i775[14]
  return i774
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i777 = data
  i776.m_UiScaleMode = i777[0]
  i776.m_ReferencePixelsPerUnit = i777[1]
  i776.m_ScaleFactor = i777[2]
  i776.m_ReferenceResolution = new pc.Vec2( i777[3], i777[4] )
  i776.m_ScreenMatchMode = i777[5]
  i776.m_MatchWidthOrHeight = i777[6]
  i776.m_PhysicalUnit = i777[7]
  i776.m_FallbackScreenDPI = i777[8]
  i776.m_DefaultSpriteDPI = i777[9]
  i776.m_DynamicPixelsPerUnit = i777[10]
  i776.m_PresetInfoIsWorld = !!i777[11]
  return i776
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i779 = data
  i778.m_IgnoreReversedGraphics = !!i779[0]
  i778.m_BlockingObjects = i779[1]
  i778.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i779[2] )
  return i778
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i780 = root || request.c( 'TutorialManager' )
  var i781 = data
  i780.IntroAnim = !!i781[0]
  request.r(i781[1], i781[2], 0, i780, 'handTool')
  request.r(i781[3], i781[4], 0, i780, 'tutorialPanel')
  request.r(i781[5], i781[6], 0, i780, 'tutorialText')
  request.r(i781[7], i781[8], 0, i780, 'tutorialTiles')
  request.r(i781[9], i781[10], 0, i780, 'dropTarget')
  i780.oldStarter = new pc.Vec2( i781[11], i781[12] )
  i780.starterPos = new pc.Vec2( i781[13], i781[14] )
  i780.baseP = new pc.Vec2( i781[15], i781[16] )
  request.r(i781[17], i781[18], 0, i780, 'dragger')
  var i783 = i781[19]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.dragPos = i782
  var i785 = i781[20]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i780.basePos = i784
  i780.currentTimer = i781[21]
  i780.maxTimer = i781[22]
  i780.timerCalled = !!i781[23]
  return i780
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.Mask' )
  var i789 = data
  i788.m_ShowMaskGraphic = !!i789[0]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i791 = data
  i790.m_Alpha = i791[0]
  i790.m_Interactable = !!i791[1]
  i790.m_BlocksRaycasts = !!i791[2]
  i790.m_IgnoreParentGroups = !!i791[3]
  i790.enabled = !!i791[4]
  return i790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button' )
  var i793 = data
  i792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i793[0], i792.m_OnClick)
  i792.m_Navigation = request.d('UnityEngine.UI.Navigation', i793[1], i792.m_Navigation)
  i792.m_Transition = i793[2]
  i792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i793[3], i792.m_Colors)
  i792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i793[4], i792.m_SpriteState)
  i792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i793[5], i792.m_AnimationTriggers)
  i792.m_Interactable = !!i793[6]
  request.r(i793[7], i793[8], 0, i792, 'm_TargetGraphic')
  return i792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i795 = data
  i794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i795[0], i794.m_PersistentCalls)
  return i794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.Events.PersistentCall', i799[i + 0]));
  }
  i796.m_Calls = i798
  return i796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Target')
  i802.m_TargetAssemblyTypeName = i803[2]
  i802.m_MethodName = i803[3]
  i802.m_Mode = i803[4]
  i802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i803[5], i802.m_Arguments)
  i802.m_CallState = i803[6]
  return i802
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_ObjectArgument')
  i804.m_ObjectArgumentAssemblyTypeName = i805[2]
  i804.m_IntArgument = i805[3]
  i804.m_FloatArgument = i805[4]
  i804.m_StringArgument = i805[5]
  i804.m_BoolArgument = !!i805[6]
  return i804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i807 = data
  i806.m_Mode = i807[0]
  i806.m_WrapAround = !!i807[1]
  request.r(i807[2], i807[3], 0, i806, 'm_SelectOnUp')
  request.r(i807[4], i807[5], 0, i806, 'm_SelectOnDown')
  request.r(i807[6], i807[7], 0, i806, 'm_SelectOnLeft')
  request.r(i807[8], i807[9], 0, i806, 'm_SelectOnRight')
  return i806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i809 = data
  i808.m_NormalColor = new pc.Color(i809[0], i809[1], i809[2], i809[3])
  i808.m_HighlightedColor = new pc.Color(i809[4], i809[5], i809[6], i809[7])
  i808.m_PressedColor = new pc.Color(i809[8], i809[9], i809[10], i809[11])
  i808.m_SelectedColor = new pc.Color(i809[12], i809[13], i809[14], i809[15])
  i808.m_DisabledColor = new pc.Color(i809[16], i809[17], i809[18], i809[19])
  i808.m_ColorMultiplier = i809[20]
  i808.m_FadeDuration = i809[21]
  return i808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_HighlightedSprite')
  request.r(i811[2], i811[3], 0, i810, 'm_PressedSprite')
  request.r(i811[4], i811[5], 0, i810, 'm_SelectedSprite')
  request.r(i811[6], i811[7], 0, i810, 'm_DisabledSprite')
  return i810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i813 = data
  i812.m_NormalTrigger = i813[0]
  i812.m_HighlightedTrigger = i813[1]
  i812.m_PressedTrigger = i813[2]
  i812.m_SelectedTrigger = i813[3]
  i812.m_DisabledTrigger = i813[4]
  return i812
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i814 = root || request.c( 'LevelManager' )
  var i815 = data
  i814.levelPicking = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'gameField')
  request.r(i815[3], i815[4], 0, i814, 'currentLevel')
  request.r(i815[5], i815[6], 0, i814, 'currentTutorial')
  request.r(i815[7], i815[8], 0, i814, 'twoChoices')
  request.r(i815[9], i815[10], 0, i814, 'medChoice')
  request.r(i815[11], i815[12], 0, i814, 'hardChoice')
  request.r(i815[13], i815[14], 0, i814, 'onePos')
  request.r(i815[15], i815[16], 0, i814, 'twoPos')
  request.r(i815[17], i815[18], 0, i814, 'easyLevel')
  request.r(i815[19], i815[20], 0, i814, 'easyTutorial')
  request.r(i815[21], i815[22], 0, i814, 'mediumLevel')
  request.r(i815[23], i815[24], 0, i814, 'mediumTutorial')
  request.r(i815[25], i815[26], 0, i814, 'hardLevel')
  request.r(i815[27], i815[28], 0, i814, 'hardTutorial')
  return i814
}

Deserializers["ButtonInfo"] = function (request, data, root) {
  var i816 = root || request.c( 'ButtonInfo' )
  var i817 = data
  return i816
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_FirstSelected')
  i818.m_sendNavigationEvents = !!i819[2]
  i818.m_DragThreshold = i819[3]
  return i818
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i821 = data
  i820.m_HorizontalAxis = i821[0]
  i820.m_VerticalAxis = i821[1]
  i820.m_SubmitButton = i821[2]
  i820.m_CancelButton = i821[3]
  i820.m_InputActionsPerSecond = i821[4]
  i820.m_RepeatDelay = i821[5]
  i820.m_ForceModuleActive = !!i821[6]
  i820.m_SendPointerHoverToParent = !!i821[7]
  return i820
}

Deserializers["GameManager"] = function (request, data, root) {
  var i822 = root || request.c( 'GameManager' )
  var i823 = data
  var i825 = i823[0]
  var i824 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 1, i824, '')
  }
  i822.tileMats = i824
  request.r(i823[1], i823[2], 0, i822, 'Ground')
  var i827 = i823[3]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i822.hexBases = i826
  var i829 = i823[4]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 1, i828, '')
  }
  i822.hexBoard = i828
  var i831 = i823[5]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i822.hexDraggers = i830
  var i833 = i823[6]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 1, i832, '')
  }
  i822.currentMixers = i832
  request.r(i823[7], i823[8], 0, i822, 'emptyDrag')
  request.r(i823[9], i823[10], 0, i822, 'currentHexDrag')
  i822.currentScore = i823[11]
  i822.requiredScore = i823[12]
  request.r(i823[13], i823[14], 0, i822, 'pointsCanvas')
  request.r(i823[15], i823[16], 0, i822, 'hexDragPrefab')
  request.r(i823[17], i823[18], 0, i822, 'hexDragParent')
  request.r(i823[19], i823[20], 0, i822, 'scoreTxt')
  request.r(i823[21], i823[22], 0, i822, 'scoreFill')
  i822.easyMode = !!i823[23]
  i822.mediumMode = !!i823[24]
  i822.hardMode = !!i823[25]
  return i822
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i836 = root || request.c( 'AudioManager' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'library')
  i836.sfxPoolSize = i837[2]
  i836.sfxMultiplier = i837[3]
  return i836
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i838 = root || request.c( 'CTAManager' )
  var i839 = data
  i838.GameOver = !!i839[0]
  request.r(i839[1], i839[2], 0, i838, 'WinPanel')
  request.r(i839[3], i839[4], 0, i838, 'LosePanel')
  request.r(i839[5], i839[6], 0, i838, 'playNow')
  request.r(i839[7], i839[8], 0, i838, 'tryAgain')
  i838.iosLink = i839[9]
  i838.androidLink = i839[10]
  return i838
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i840 = root || request.c( 'IterationManager' )
  var i841 = data
  i840.numClicks = i841[0]
  i840.maxNumClicks = i841[1]
  i840.Iterations = i841[2]
  i840.currentTimer = i841[3]
  i840.maxTimer = i841[4]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i843 = data
  i842.ambientIntensity = i843[0]
  i842.reflectionIntensity = i843[1]
  i842.ambientMode = i843[2]
  i842.ambientLight = new pc.Color(i843[3], i843[4], i843[5], i843[6])
  i842.ambientSkyColor = new pc.Color(i843[7], i843[8], i843[9], i843[10])
  i842.ambientGroundColor = new pc.Color(i843[11], i843[12], i843[13], i843[14])
  i842.ambientEquatorColor = new pc.Color(i843[15], i843[16], i843[17], i843[18])
  i842.fogColor = new pc.Color(i843[19], i843[20], i843[21], i843[22])
  i842.fogEndDistance = i843[23]
  i842.fogStartDistance = i843[24]
  i842.fogDensity = i843[25]
  i842.fog = !!i843[26]
  request.r(i843[27], i843[28], 0, i842, 'skybox')
  i842.fogMode = i843[29]
  var i845 = i843[30]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i845[i + 0]) );
  }
  i842.lightmaps = i844
  i842.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i843[31], i842.lightProbes)
  i842.lightmapsMode = i843[32]
  i842.mixedBakeMode = i843[33]
  i842.environmentLightingMode = i843[34]
  i842.ambientProbe = new pc.SphericalHarmonicsL2(i843[35])
  i842.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i843[36])
  i842.useReferenceAmbientProbe = !!i843[37]
  request.r(i843[38], i843[39], 0, i842, 'customReflection')
  request.r(i843[40], i843[41], 0, i842, 'defaultReflection')
  i842.defaultReflectionMode = i843[42]
  i842.defaultReflectionResolution = i843[43]
  i842.sunLightObjectId = i843[44]
  i842.pixelLightCount = i843[45]
  i842.defaultReflectionHDR = !!i843[46]
  i842.hasLightDataAsset = !!i843[47]
  i842.hasManualGenerate = !!i843[48]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'lightmapColor')
  request.r(i849[2], i849[3], 0, i848, 'lightmapDirection')
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i850 = root || new UnityEngine.LightProbes()
  var i851 = data
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i861[i + 0]));
  }
  i858.ShaderCompilationErrors = i860
  i858.name = i859[1]
  i858.guid = i859[2]
  var i863 = i859[3]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( i863[i + 0] );
  }
  i858.shaderDefinedKeywords = i862
  var i865 = i859[4]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i865[i + 0]) );
  }
  i858.passes = i864
  var i867 = i859[5]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i867[i + 0]) );
  }
  i858.usePasses = i866
  var i869 = i859[6]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i869[i + 0]) );
  }
  i858.defaultParameterValues = i868
  request.r(i859[7], i859[8], 0, i858, 'unityFallbackShader')
  i858.readDepth = !!i859[9]
  i858.isCreatedByShaderGraph = !!i859[10]
  i858.compiled = !!i859[11]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i873 = data
  i872.shaderName = i873[0]
  i872.errorMessage = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i878 = root || new pc.UnityShaderPass()
  var i879 = data
  i878.id = i879[0]
  i878.subShaderIndex = i879[1]
  i878.name = i879[2]
  i878.passType = i879[3]
  i878.grabPassTextureName = i879[4]
  i878.usePass = !!i879[5]
  i878.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[6], i878.zTest)
  i878.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[7], i878.zWrite)
  i878.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[8], i878.culling)
  i878.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i879[9], i878.blending)
  i878.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i879[10], i878.alphaBlending)
  i878.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[11], i878.colorWriteMask)
  i878.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[12], i878.offsetUnits)
  i878.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[13], i878.offsetFactor)
  i878.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[14], i878.stencilRef)
  i878.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[15], i878.stencilReadMask)
  i878.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i879[16], i878.stencilWriteMask)
  i878.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i879[17], i878.stencilOp)
  i878.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i879[18], i878.stencilOpFront)
  i878.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i879[19], i878.stencilOpBack)
  var i881 = i879[20]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i881[i + 0]) );
  }
  i878.tags = i880
  var i883 = i879[21]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i878.passDefinedKeywords = i882
  var i885 = i879[22]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i885[i + 0]) );
  }
  i878.passDefinedKeywordGroups = i884
  var i887 = i879[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i887[i + 0]) );
  }
  i878.variants = i886
  var i889 = i879[24]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i889[i + 0]) );
  }
  i878.excludedVariants = i888
  i878.hasDepthReader = !!i879[25]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i891 = data
  i890.val = i891[0]
  i890.name = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i893 = data
  i892.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[0], i892.src)
  i892.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[1], i892.dst)
  i892.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[2], i892.op)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i895 = data
  i894.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[0], i894.pass)
  i894.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[1], i894.fail)
  i894.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[2], i894.zFail)
  i894.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i895[3], i894.comp)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i899 = data
  i898.name = i899[0]
  i898.value = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i903 = data
  var i905 = i903[0]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( i905[i + 0] );
  }
  i902.keywords = i904
  i902.hasDiscard = !!i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i909 = data
  i908.passId = i909[0]
  i908.subShaderIndex = i909[1]
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i908.keywords = i910
  i908.vertexProgram = i909[3]
  i908.fragmentProgram = i909[4]
  i908.exportedForWebGl2 = !!i909[5]
  i908.readDepth = !!i909[6]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'shader')
  i914.pass = i915[2]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i919 = data
  i918.name = i919[0]
  i918.type = i919[1]
  i918.value = new pc.Vec4( i919[2], i919[3], i919[4], i919[5] )
  i918.textureValue = i919[6]
  i918.shaderPropertyFlag = i919[7]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i921 = data
  i920.name = i921[0]
  request.r(i921[1], i921[2], 0, i920, 'texture')
  i920.aabb = i921[3]
  i920.vertices = i921[4]
  i920.triangles = i921[5]
  i920.textureRect = UnityEngine.Rect.MinMaxRect(i921[6], i921[7], i921[8], i921[9])
  i920.packedRect = UnityEngine.Rect.MinMaxRect(i921[10], i921[11], i921[12], i921[13])
  i920.border = new pc.Vec4( i921[14], i921[15], i921[16], i921[17] )
  i920.transparency = i921[18]
  i920.bounds = i921[19]
  i920.pixelsPerUnit = i921[20]
  i920.textureWidth = i921[21]
  i920.textureHeight = i921[22]
  i920.nativeSize = new pc.Vec2( i921[23], i921[24] )
  i920.pivot = new pc.Vec2( i921[25], i921[26] )
  i920.textureRectOffset = new pc.Vec2( i921[27], i921[28] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i923 = data
  i922.name = i923[0]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i925 = data
  i924.name = i925[0]
  i924.ascent = i925[1]
  i924.originalLineHeight = i925[2]
  i924.fontSize = i925[3]
  var i927 = i925[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i927[i + 0]) );
  }
  i924.characterInfo = i926
  request.r(i925[5], i925[6], 0, i924, 'texture')
  i924.originalFontSize = i925[7]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i931 = data
  i930.index = i931[0]
  i930.advance = i931[1]
  i930.bearing = i931[2]
  i930.glyphWidth = i931[3]
  i930.glyphHeight = i931[4]
  i930.minX = i931[5]
  i930.maxX = i931[6]
  i930.minY = i931[7]
  i930.maxY = i931[8]
  i930.uvBottomLeftX = i931[9]
  i930.uvBottomLeftY = i931[10]
  i930.uvBottomRightX = i931[11]
  i930.uvBottomRightY = i931[12]
  i930.uvTopLeftX = i931[13]
  i930.uvTopLeftY = i931[14]
  i930.uvTopRightX = i931[15]
  i930.uvTopRightY = i931[16]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i933 = data
  i932.name = i933[0]
  i932.bytes64 = i933[1]
  i932.data = i933[2]
  return i932
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i935 = data
  i934.hashCode = i935[0]
  request.r(i935[1], i935[2], 0, i934, 'material')
  i934.materialHashCode = i935[3]
  request.r(i935[4], i935[5], 0, i934, 'atlas')
  i934.normalStyle = i935[6]
  i934.normalSpacingOffset = i935[7]
  i934.boldStyle = i935[8]
  i934.boldSpacing = i935[9]
  i934.italicStyle = i935[10]
  i934.tabSize = i935[11]
  i934.m_Version = i935[12]
  i934.m_SourceFontFileGUID = i935[13]
  request.r(i935[14], i935[15], 0, i934, 'm_SourceFontFile_EditorRef')
  request.r(i935[16], i935[17], 0, i934, 'm_SourceFontFile')
  i934.m_AtlasPopulationMode = i935[18]
  i934.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i935[19], i934.m_FaceInfo)
  var i937 = i935[20]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('UnityEngine.TextCore.Glyph', i937[i + 0]));
  }
  i934.m_GlyphTable = i936
  var i939 = i935[21]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('TMPro.TMP_Character', i939[i + 0]));
  }
  i934.m_CharacterTable = i938
  var i941 = i935[22]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i934.m_AtlasTextures = i940
  i934.m_AtlasTextureIndex = i935[23]
  i934.m_IsMultiAtlasTexturesEnabled = !!i935[24]
  i934.m_ClearDynamicDataOnBuild = !!i935[25]
  var i943 = i935[26]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('UnityEngine.TextCore.GlyphRect', i943[i + 0]));
  }
  i934.m_UsedGlyphRects = i942
  var i945 = i935[27]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.TextCore.GlyphRect', i945[i + 0]));
  }
  i934.m_FreeGlyphRects = i944
  i934.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i935[28], i934.m_fontInfo)
  i934.m_AtlasWidth = i935[29]
  i934.m_AtlasHeight = i935[30]
  i934.m_AtlasPadding = i935[31]
  i934.m_AtlasRenderMode = i935[32]
  var i947 = i935[33]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_Glyph', i947[i + 0]));
  }
  i934.m_glyphInfoList = i946
  i934.m_KerningTable = request.d('TMPro.KerningTable', i935[34], i934.m_KerningTable)
  i934.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i935[35], i934.m_FontFeatureTable)
  var i949 = i935[36]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 1, i948, '')
  }
  i934.fallbackFontAssets = i948
  var i951 = i935[37]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i934.m_FallbackFontAssetTable = i950
  i934.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i935[38], i934.m_CreationSettings)
  var i953 = i935[39]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('TMPro.TMP_FontWeightPair', i953[i + 0]) );
  }
  i934.m_FontWeightTable = i952
  var i955 = i935[40]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('TMPro.TMP_FontWeightPair', i955[i + 0]) );
  }
  i934.fontWeights = i954
  return i934
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i957 = data
  i956.m_FaceIndex = i957[0]
  i956.m_FamilyName = i957[1]
  i956.m_StyleName = i957[2]
  i956.m_PointSize = i957[3]
  i956.m_Scale = i957[4]
  i956.m_UnitsPerEM = i957[5]
  i956.m_LineHeight = i957[6]
  i956.m_AscentLine = i957[7]
  i956.m_CapLine = i957[8]
  i956.m_MeanLine = i957[9]
  i956.m_Baseline = i957[10]
  i956.m_DescentLine = i957[11]
  i956.m_SuperscriptOffset = i957[12]
  i956.m_SuperscriptSize = i957[13]
  i956.m_SubscriptOffset = i957[14]
  i956.m_SubscriptSize = i957[15]
  i956.m_UnderlineOffset = i957[16]
  i956.m_UnderlineThickness = i957[17]
  i956.m_StrikethroughOffset = i957[18]
  i956.m_StrikethroughThickness = i957[19]
  i956.m_TabWidth = i957[20]
  return i956
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i961 = data
  i960.m_Index = i961[0]
  i960.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i961[1], i960.m_Metrics)
  i960.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i961[2], i960.m_GlyphRect)
  i960.m_Scale = i961[3]
  i960.m_AtlasIndex = i961[4]
  i960.m_ClassDefinitionType = i961[5]
  return i960
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i963 = data
  i962.m_Width = i963[0]
  i962.m_Height = i963[1]
  i962.m_HorizontalBearingX = i963[2]
  i962.m_HorizontalBearingY = i963[3]
  i962.m_HorizontalAdvance = i963[4]
  return i962
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i965 = data
  i964.m_X = i965[0]
  i964.m_Y = i965[1]
  i964.m_Width = i965[2]
  i964.m_Height = i965[3]
  return i964
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.TMP_Character' )
  var i969 = data
  i968.m_ElementType = i969[0]
  i968.m_Unicode = i969[1]
  i968.m_GlyphIndex = i969[2]
  i968.m_Scale = i969[3]
  return i968
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i974 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i975 = data
  i974.Name = i975[0]
  i974.PointSize = i975[1]
  i974.Scale = i975[2]
  i974.CharacterCount = i975[3]
  i974.LineHeight = i975[4]
  i974.Baseline = i975[5]
  i974.Ascender = i975[6]
  i974.CapHeight = i975[7]
  i974.Descender = i975[8]
  i974.CenterLine = i975[9]
  i974.SuperscriptOffset = i975[10]
  i974.SubscriptOffset = i975[11]
  i974.SubSize = i975[12]
  i974.Underline = i975[13]
  i974.UnderlineThickness = i975[14]
  i974.strikethrough = i975[15]
  i974.strikethroughThickness = i975[16]
  i974.TabWidth = i975[17]
  i974.Padding = i975[18]
  i974.AtlasWidth = i975[19]
  i974.AtlasHeight = i975[20]
  return i974
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Glyph' )
  var i979 = data
  i978.id = i979[0]
  i978.x = i979[1]
  i978.y = i979[2]
  i978.width = i979[3]
  i978.height = i979[4]
  i978.xOffset = i979[5]
  i978.yOffset = i979[6]
  i978.xAdvance = i979[7]
  i978.scale = i979[8]
  return i978
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.KerningTable' )
  var i981 = data
  var i983 = i981[0]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i983.length; i += 1) {
    i982.add(request.d('TMPro.KerningPair', i983[i + 0]));
  }
  i980.kerningPairs = i982
  return i980
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.KerningPair' )
  var i987 = data
  i986.xOffset = i987[0]
  i986.m_FirstGlyph = i987[1]
  i986.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i987[2], i986.m_FirstGlyphAdjustments)
  i986.m_SecondGlyph = i987[3]
  i986.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i987[4], i986.m_SecondGlyphAdjustments)
  i986.m_IgnoreSpacingAdjustments = !!i987[5]
  return i986
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i991[i + 0]));
  }
  i988.m_GlyphPairAdjustmentRecords = i990
  return i988
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i995 = data
  i994.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i995[0], i994.m_FirstAdjustmentRecord)
  i994.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i995[1], i994.m_SecondAdjustmentRecord)
  i994.m_FeatureLookupFlags = i995[2]
  return i994
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i999 = data
  i998.sourceFontFileName = i999[0]
  i998.sourceFontFileGUID = i999[1]
  i998.pointSizeSamplingMode = i999[2]
  i998.pointSize = i999[3]
  i998.padding = i999[4]
  i998.packingMode = i999[5]
  i998.atlasWidth = i999[6]
  i998.atlasHeight = i999[7]
  i998.characterSetSelectionMode = i999[8]
  i998.characterSequence = i999[9]
  i998.referencedFontAssetGUID = i999[10]
  i998.referencedTextAssetGUID = i999[11]
  i998.fontStyle = i999[12]
  i998.fontStyleModifier = i999[13]
  i998.renderMode = i999[14]
  i998.includeFontFeatures = !!i999[15]
  return i998
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'regularTypeface')
  request.r(i1003[2], i1003[3], 0, i1002, 'italicTypeface')
  return i1002
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1004 = root || request.c( 'AudioLibrary' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('AudioLibrary+ClipEntry', i1007[i + 0]));
  }
  i1004.clips = i1006
  return i1004
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1010 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1011 = data
  i1010.key = i1011[0]
  i1010.channel = i1011[1]
  request.r(i1011[2], i1011[3], 0, i1010, 'clip')
  i1010.volume = i1011[4]
  i1010.loop = !!i1011[5]
  return i1010
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1013 = data
  i1012.useSafeMode = !!i1013[0]
  i1012.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1013[1], i1012.safeModeOptions)
  i1012.timeScale = i1013[2]
  i1012.unscaledTimeScale = i1013[3]
  i1012.useSmoothDeltaTime = !!i1013[4]
  i1012.maxSmoothUnscaledTime = i1013[5]
  i1012.rewindCallbackMode = i1013[6]
  i1012.showUnityEditorReport = !!i1013[7]
  i1012.logBehaviour = i1013[8]
  i1012.drawGizmos = !!i1013[9]
  i1012.defaultRecyclable = !!i1013[10]
  i1012.defaultAutoPlay = i1013[11]
  i1012.defaultUpdateType = i1013[12]
  i1012.defaultTimeScaleIndependent = !!i1013[13]
  i1012.defaultEaseType = i1013[14]
  i1012.defaultEaseOvershootOrAmplitude = i1013[15]
  i1012.defaultEasePeriod = i1013[16]
  i1012.defaultAutoKill = !!i1013[17]
  i1012.defaultLoopType = i1013[18]
  i1012.debugMode = !!i1013[19]
  i1012.debugStoreTargetId = !!i1013[20]
  i1012.showPreviewPanel = !!i1013[21]
  i1012.storeSettingsLocation = i1013[22]
  i1012.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1013[23], i1012.modules)
  i1012.createASMDEF = !!i1013[24]
  i1012.showPlayingTweens = !!i1013[25]
  i1012.showPausedTweens = !!i1013[26]
  return i1012
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1014 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1015 = data
  i1014.logBehaviour = i1015[0]
  i1014.nestedTweenFailureBehaviour = i1015[1]
  return i1014
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1017 = data
  i1016.showPanel = !!i1017[0]
  i1016.audioEnabled = !!i1017[1]
  i1016.physicsEnabled = !!i1017[2]
  i1016.physics2DEnabled = !!i1017[3]
  i1016.spriteEnabled = !!i1017[4]
  i1016.uiEnabled = !!i1017[5]
  i1016.textMeshProEnabled = !!i1017[6]
  i1016.tk2DEnabled = !!i1017[7]
  i1016.deAudioEnabled = !!i1017[8]
  i1016.deUnityExtendedEnabled = !!i1017[9]
  i1016.epoOutlineEnabled = !!i1017[10]
  return i1016
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_Settings' )
  var i1019 = data
  i1018.m_enableWordWrapping = !!i1019[0]
  i1018.m_enableKerning = !!i1019[1]
  i1018.m_enableExtraPadding = !!i1019[2]
  i1018.m_enableTintAllSprites = !!i1019[3]
  i1018.m_enableParseEscapeCharacters = !!i1019[4]
  i1018.m_EnableRaycastTarget = !!i1019[5]
  i1018.m_GetFontFeaturesAtRuntime = !!i1019[6]
  i1018.m_missingGlyphCharacter = i1019[7]
  i1018.m_warningsDisabled = !!i1019[8]
  request.r(i1019[9], i1019[10], 0, i1018, 'm_defaultFontAsset')
  i1018.m_defaultFontAssetPath = i1019[11]
  i1018.m_defaultFontSize = i1019[12]
  i1018.m_defaultAutoSizeMinRatio = i1019[13]
  i1018.m_defaultAutoSizeMaxRatio = i1019[14]
  i1018.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1019[15], i1019[16] )
  i1018.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1019[17], i1019[18] )
  i1018.m_autoSizeTextContainer = !!i1019[19]
  i1018.m_IsTextObjectScaleStatic = !!i1019[20]
  var i1021 = i1019[21]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1018.m_fallbackFontAssets = i1020
  i1018.m_matchMaterialPreset = !!i1019[22]
  request.r(i1019[23], i1019[24], 0, i1018, 'm_defaultSpriteAsset')
  i1018.m_defaultSpriteAssetPath = i1019[25]
  i1018.m_enableEmojiSupport = !!i1019[26]
  i1018.m_MissingCharacterSpriteUnicode = i1019[27]
  i1018.m_defaultColorGradientPresetsPath = i1019[28]
  request.r(i1019[29], i1019[30], 0, i1018, 'm_defaultStyleSheet')
  i1018.m_StyleSheetsResourcePath = i1019[31]
  request.r(i1019[32], i1019[33], 0, i1018, 'm_leadingCharacters')
  request.r(i1019[34], i1019[35], 0, i1018, 'm_followingCharacters')
  i1018.m_UseModernHangulLineBreakingRules = !!i1019[36]
  return i1018
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1023 = data
  i1022.m_GlyphIndex = i1023[0]
  i1022.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1023[1], i1022.m_GlyphValueRecord)
  return i1022
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1025 = data
  i1024.m_XPlacement = i1025[0]
  i1024.m_YPlacement = i1025[1]
  i1024.m_XAdvance = i1025[2]
  i1024.m_YAdvance = i1025[3]
  return i1024
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1027 = data
  i1026.hashCode = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'material')
  i1026.materialHashCode = i1027[3]
  request.r(i1027[4], i1027[5], 0, i1026, 'spriteSheet')
  var i1029 = i1027[6]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Sprite', i1029[i + 0]));
  }
  i1026.spriteInfoList = i1028
  var i1031 = i1027[7]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1026.fallbackSpriteAssets = i1030
  i1026.m_Version = i1027[8]
  i1026.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1027[9], i1026.m_FaceInfo)
  var i1033 = i1027[10]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.add(request.d('TMPro.TMP_SpriteCharacter', i1033[i + 0]));
  }
  i1026.m_SpriteCharacterTable = i1032
  var i1035 = i1027[11]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('TMPro.TMP_SpriteGlyph', i1035[i + 0]));
  }
  i1026.m_SpriteGlyphTable = i1034
  return i1026
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.hashCode = i1039[1]
  i1038.unicode = i1039[2]
  i1038.pivot = new pc.Vec2( i1039[3], i1039[4] )
  request.r(i1039[5], i1039[6], 0, i1038, 'sprite')
  i1038.id = i1039[7]
  i1038.x = i1039[8]
  i1038.y = i1039[9]
  i1038.width = i1039[10]
  i1038.height = i1039[11]
  i1038.xOffset = i1039[12]
  i1038.yOffset = i1039[13]
  i1038.xAdvance = i1039[14]
  i1038.scale = i1039[15]
  return i1038
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1045 = data
  i1044.m_Name = i1045[0]
  i1044.m_HashCode = i1045[1]
  i1044.m_ElementType = i1045[2]
  i1044.m_Unicode = i1045[3]
  i1044.m_GlyphIndex = i1045[4]
  i1044.m_Scale = i1045[5]
  return i1044
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'sprite')
  i1048.m_Index = i1049[2]
  i1048.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1049[3], i1048.m_Metrics)
  i1048.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1049[4], i1048.m_GlyphRect)
  i1048.m_Scale = i1049[5]
  i1048.m_AtlasIndex = i1049[6]
  i1048.m_ClassDefinitionType = i1049[7]
  return i1048
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_Style', i1053[i + 0]));
  }
  i1050.m_StyleList = i1052
  return i1050
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_Style' )
  var i1057 = data
  i1056.m_Name = i1057[0]
  i1056.m_HashCode = i1057[1]
  i1056.m_OpeningDefinition = i1057[2]
  i1056.m_ClosingDefinition = i1057[3]
  i1056.m_OpeningTagArray = i1057[4]
  i1056.m_ClosingTagArray = i1057[5]
  i1056.m_OpeningTagUnicodeArray = i1057[6]
  i1056.m_ClosingTagUnicodeArray = i1057[7]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1061[i + 0]) );
  }
  i1058.files = i1060
  i1058.componentToPrefabIds = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1065 = data
  i1064.path = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'unityObject')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1069[i + 0]) );
  }
  i1066.scriptsExecutionOrder = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1071[i + 0]) );
  }
  i1066.sortingLayers = i1070
  var i1073 = i1067[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1073[i + 0]) );
  }
  i1066.cullingLayers = i1072
  i1066.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1067[3], i1066.timeSettings)
  i1066.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1067[4], i1066.physicsSettings)
  i1066.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1067[5], i1066.physics2DSettings)
  i1066.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1067[6], i1066.qualitySettings)
  i1066.enableRealtimeShadows = !!i1067[7]
  i1066.enableAutoInstancing = !!i1067[8]
  i1066.enableDynamicBatching = !!i1067[9]
  i1066.lightmapEncodingQuality = i1067[10]
  i1066.desiredColorSpace = i1067[11]
  var i1075 = i1067[12]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1066.allTags = i1074
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1083 = data
  i1082.id = i1083[0]
  i1082.name = i1083[1]
  i1082.value = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1089 = data
  i1088.fixedDeltaTime = i1089[0]
  i1088.maximumDeltaTime = i1089[1]
  i1088.timeScale = i1089[2]
  i1088.maximumParticleTimestep = i1089[3]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1091 = data
  i1090.gravity = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.defaultSolverIterations = i1091[3]
  i1090.bounceThreshold = i1091[4]
  i1090.autoSyncTransforms = !!i1091[5]
  i1090.autoSimulation = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'material')
  i1098.gravity = new pc.Vec2( i1099[2], i1099[3] )
  i1098.positionIterations = i1099[4]
  i1098.velocityIterations = i1099[5]
  i1098.velocityThreshold = i1099[6]
  i1098.maxLinearCorrection = i1099[7]
  i1098.maxAngularCorrection = i1099[8]
  i1098.maxTranslationSpeed = i1099[9]
  i1098.maxRotationSpeed = i1099[10]
  i1098.baumgarteScale = i1099[11]
  i1098.baumgarteTOIScale = i1099[12]
  i1098.timeToSleep = i1099[13]
  i1098.linearSleepTolerance = i1099[14]
  i1098.angularSleepTolerance = i1099[15]
  i1098.defaultContactOffset = i1099[16]
  i1098.autoSimulation = !!i1099[17]
  i1098.queriesHitTriggers = !!i1099[18]
  i1098.queriesStartInColliders = !!i1099[19]
  i1098.callbacksOnDisable = !!i1099[20]
  i1098.reuseCollisionCallbacks = !!i1099[21]
  i1098.autoSyncTransforms = !!i1099[22]
  var i1101 = i1099[23]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1101[i + 0]) );
  }
  i1098.collisionMatrix = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1105 = data
  i1104.enabled = !!i1105[0]
  i1104.layerId = i1105[1]
  i1104.otherLayerId = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1109[i + 0]) );
  }
  i1106.qualityLevels = i1108
  var i1111 = i1107[1]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.names = i1110
  i1106.shadows = i1107[2]
  i1106.anisotropicFiltering = i1107[3]
  i1106.antiAliasing = i1107[4]
  i1106.lodBias = i1107[5]
  i1106.shadowCascades = i1107[6]
  i1106.shadowDistance = i1107[7]
  i1106.shadowmaskMode = i1107[8]
  i1106.shadowProjection = i1107[9]
  i1106.shadowResolution = i1107[10]
  i1106.softParticles = !!i1107[11]
  i1106.softVegetation = !!i1107[12]
  i1106.activeColorSpace = i1107[13]
  i1106.desiredColorSpace = i1107[14]
  i1106.masterTextureLimit = i1107[15]
  i1106.maxQueuedFrames = i1107[16]
  i1106.particleRaycastBudget = i1107[17]
  i1106.pixelLightCount = i1107[18]
  i1106.realtimeReflectionProbes = !!i1107[19]
  i1106.shadowCascade2Split = i1107[20]
  i1106.shadowCascade4Split = new pc.Vec3( i1107[21], i1107[22], i1107[23] )
  i1106.streamingMipmapsActive = !!i1107[24]
  i1106.vSyncCount = i1107[25]
  i1106.asyncUploadBufferSize = i1107[26]
  i1106.asyncUploadTimeSlice = i1107[27]
  i1106.billboardsFaceCameraPosition = !!i1107[28]
  i1106.shadowNearPlaneOffset = i1107[29]
  i1106.streamingMipmapsMemoryBudget = i1107[30]
  i1106.maximumLODLevel = i1107[31]
  i1106.streamingMipmapsAddAllCameras = !!i1107[32]
  i1106.streamingMipmapsMaxLevelReduction = i1107[33]
  i1106.streamingMipmapsRenderersPerFrame = i1107[34]
  i1106.resolutionScalingFixedDPIFactor = i1107[35]
  i1106.streamingMipmapsMaxFileIORequests = i1107[36]
  i1106.currentQualityLevel = i1107[37]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1117 = data
  i1116.weight = i1117[0]
  i1116.vertices = i1117[1]
  i1116.normals = i1117[2]
  i1116.tangents = i1117[3]
  return i1116
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1119 = data
  i1118.xPlacement = i1119[0]
  i1118.yPlacement = i1119[1]
  i1118.xAdvance = i1119[2]
  i1118.yAdvance = i1119[3]
  return i1118
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[25],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[25],"86":[17],"87":[88],"89":[88],"29":[0],"90":[0],"91":[0],"31":[29],"5":[3,0],"92":[0],"30":[29],"93":[0],"94":[0],"95":[0],"96":[0],"97":[0],"98":[0],"99":[0],"34":[0],"100":[0],"101":[3,0],"102":[0],"103":[0],"104":[0],"105":[0],"106":[3,0],"107":[0],"108":[39],"109":[39],"40":[39],"110":[39],"111":[25],"112":[25],"113":[0],"114":[17,0],"23":[0,3],"115":[0],"116":[3,0],"117":[17],"118":[3,0],"119":[0],"120":[121],"122":[121],"123":[121]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.MonoBehaviour","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","HexBase","UnityEngine.ParticleSystem","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.ParticleSystemRenderer","HexGroup","UnityEngine.GameObject","HexTiles","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","CameraInfo","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","LevelManager","ButtonInfo","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","IterationManager","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "11.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "MIP-Progression";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1759";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4348";

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

Deserializers.buildID = "c7a0cfe1-c984-4c16-a79a-d7b9c6e37371";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

