var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointSpring' )
  var i653 = data
  i652.spring = i653[0]
  i652.damper = i653[1]
  i652.targetPosition = i653[2]
  return i652
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointMotor' )
  var i655 = data
  i654.m_TargetVelocity = i655[0]
  i654.m_Force = i655[1]
  i654.m_FreeSpin = i655[2]
  return i654
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointLimits' )
  var i657 = data
  i656.m_Min = i657[0]
  i656.m_Max = i657[1]
  i656.m_Bounciness = i657[2]
  i656.m_BounceMinVelocity = i657[3]
  i656.m_ContactDistance = i657[4]
  i656.minBounce = i657[5]
  i656.maxBounce = i657[6]
  return i656
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointDrive' )
  var i659 = data
  i658.m_PositionSpring = i659[0]
  i658.m_PositionDamper = i659[1]
  i658.m_MaximumForce = i659[2]
  i658.m_UseAcceleration = i659[3]
  return i658
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i661 = data
  i660.m_Spring = i661[0]
  i660.m_Damper = i661[1]
  return i660
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i663 = data
  i662.m_Limit = i663[0]
  i662.m_Bounciness = i663[1]
  i662.m_ContactDistance = i663[2]
  return i662
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i665 = data
  i664.m_ExtremumSlip = i665[0]
  i664.m_ExtremumValue = i665[1]
  i664.m_AsymptoteSlip = i665[2]
  i664.m_AsymptoteValue = i665[3]
  i664.m_Stiffness = i665[4]
  return i664
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i667 = data
  i666.m_LowerAngle = i667[0]
  i666.m_UpperAngle = i667[1]
  return i666
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i669 = data
  i668.m_MotorSpeed = i669[0]
  i668.m_MaximumMotorTorque = i669[1]
  return i668
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i671 = data
  i670.m_DampingRatio = i671[0]
  i670.m_Frequency = i671[1]
  i670.m_Angle = i671[2]
  return i670
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i673 = data
  i672.m_LowerTranslation = i673[0]
  i672.m_UpperTranslation = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i675 = data
  i674.position = new pc.Vec3( i675[0], i675[1], i675[2] )
  i674.scale = new pc.Vec3( i675[3], i675[4], i675[5] )
  i674.rotation = new pc.Quat(i675[6], i675[7], i675[8], i675[9])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i677 = data
  i676.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i677[0], i676.main)
  i676.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i677[1], i676.colorBySpeed)
  i676.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i677[2], i676.colorOverLifetime)
  i676.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i677[3], i676.emission)
  i676.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i677[4], i676.rotationBySpeed)
  i676.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i677[5], i676.rotationOverLifetime)
  i676.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i677[6], i676.shape)
  i676.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i677[7], i676.sizeBySpeed)
  i676.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i677[8], i676.sizeOverLifetime)
  i676.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i677[9], i676.textureSheetAnimation)
  i676.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i677[10], i676.velocityOverLifetime)
  i676.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i677[11], i676.noise)
  i676.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i677[12], i676.inheritVelocity)
  i676.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i677[13], i676.forceOverLifetime)
  i676.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i677[14], i676.limitVelocityOverLifetime)
  i676.useAutoRandomSeed = !!i677[15]
  i676.randomSeed = i677[16]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemMain()
  var i679 = data
  i678.duration = i679[0]
  i678.loop = !!i679[1]
  i678.prewarm = !!i679[2]
  i678.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.startDelay)
  i678.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[4], i678.startLifetime)
  i678.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[5], i678.startSpeed)
  i678.startSize3D = !!i679[6]
  i678.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.startSizeX)
  i678.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[8], i678.startSizeY)
  i678.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[9], i678.startSizeZ)
  i678.startRotation3D = !!i679[10]
  i678.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[11], i678.startRotationX)
  i678.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[12], i678.startRotationY)
  i678.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[13], i678.startRotationZ)
  i678.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i679[14], i678.startColor)
  i678.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[15], i678.gravityModifier)
  i678.simulationSpace = i679[16]
  request.r(i679[17], i679[18], 0, i678, 'customSimulationSpace')
  i678.simulationSpeed = i679[19]
  i678.useUnscaledTime = !!i679[20]
  i678.scalingMode = i679[21]
  i678.playOnAwake = !!i679[22]
  i678.maxParticles = i679[23]
  i678.emitterVelocityMode = i679[24]
  i678.stopAction = i679[25]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i680 = root || new pc.MinMaxCurve()
  var i681 = data
  i680.mode = i681[0]
  i680.curveMin = new pc.AnimationCurve( { keys_flow: i681[1] } )
  i680.curveMax = new pc.AnimationCurve( { keys_flow: i681[2] } )
  i680.curveMultiplier = i681[3]
  i680.constantMin = i681[4]
  i680.constantMax = i681[5]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i682 = root || new pc.MinMaxGradient()
  var i683 = data
  i682.mode = i683[0]
  i682.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i683[1], i682.gradientMin)
  i682.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i683[2], i682.gradientMax)
  i682.colorMin = new pc.Color(i683[3], i683[4], i683[5], i683[6])
  i682.colorMax = new pc.Color(i683[7], i683[8], i683[9], i683[10])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i685 = data
  i684.mode = i685[0]
  var i687 = i685[1]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i687[i + 0]) );
  }
  i684.colorKeys = i686
  var i689 = i685[2]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i689[i + 0]) );
  }
  i684.alphaKeys = i688
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemColorBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i691[1], i690.color)
  i690.range = new pc.Vec2( i691[2], i691[3] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i695 = data
  i694.color = new pc.Color(i695[0], i695[1], i695[2], i695[3])
  i694.time = i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i699 = data
  i698.alpha = i699[0]
  i698.time = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemColorOverLifetime()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i701[1], i700.color)
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemEmitter()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.rateOverTime)
  i702.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.rateOverDistance)
  var i705 = i703[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i705[i + 0]) );
  }
  i702.bursts = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemBurst()
  var i709 = data
  i708.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[0], i708.count)
  i708.cycleCount = i709[1]
  i708.minCount = i709[2]
  i708.maxCount = i709[3]
  i708.repeatInterval = i709[4]
  i708.time = i709[5]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemRotationBySpeed()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.z)
  i710.separateAxes = !!i711[4]
  i710.range = new pc.Vec2( i711[5], i711[6] )
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemRotationOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.x)
  i712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.y)
  i712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.z)
  i712.separateAxes = !!i713[4]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemShape()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.shapeType = i715[1]
  i714.randomDirectionAmount = i715[2]
  i714.sphericalDirectionAmount = i715[3]
  i714.randomPositionAmount = i715[4]
  i714.alignToDirection = !!i715[5]
  i714.radius = i715[6]
  i714.radiusMode = i715[7]
  i714.radiusSpread = i715[8]
  i714.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[9], i714.radiusSpeed)
  i714.radiusThickness = i715[10]
  i714.angle = i715[11]
  i714.length = i715[12]
  i714.boxThickness = new pc.Vec3( i715[13], i715[14], i715[15] )
  i714.meshShapeType = i715[16]
  request.r(i715[17], i715[18], 0, i714, 'mesh')
  request.r(i715[19], i715[20], 0, i714, 'meshRenderer')
  request.r(i715[21], i715[22], 0, i714, 'skinnedMeshRenderer')
  i714.useMeshMaterialIndex = !!i715[23]
  i714.meshMaterialIndex = i715[24]
  i714.useMeshColors = !!i715[25]
  i714.normalOffset = i715[26]
  i714.arc = i715[27]
  i714.arcMode = i715[28]
  i714.arcSpread = i715[29]
  i714.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[30], i714.arcSpeed)
  i714.donutRadius = i715[31]
  i714.position = new pc.Vec3( i715[32], i715[33], i715[34] )
  i714.rotation = new pc.Vec3( i715[35], i715[36], i715[37] )
  i714.scale = new pc.Vec3( i715[38], i715[39], i715[40] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemSizeBySpeed()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.x)
  i716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.y)
  i716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.z)
  i716.separateAxes = !!i717[4]
  i716.range = new pc.Vec2( i717[5], i717[6] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemSizeOverLifetime()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[1], i718.x)
  i718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.y)
  i718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.z)
  i718.separateAxes = !!i719[4]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.mode = i721[1]
  i720.animation = i721[2]
  i720.numTilesX = i721[3]
  i720.numTilesY = i721[4]
  i720.useRandomRow = !!i721[5]
  i720.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[6], i720.frameOverTime)
  i720.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[7], i720.startFrame)
  i720.cycleCount = i721[8]
  i720.rowIndex = i721[9]
  i720.flipU = i721[10]
  i720.flipV = i721[11]
  i720.spriteCount = i721[12]
  var i723 = i721[13]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.sprites = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.x)
  i726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.y)
  i726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.z)
  i726.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[4], i726.radial)
  i726.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[5], i726.speedModifier)
  i726.space = i727[6]
  i726.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[7], i726.orbitalX)
  i726.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[8], i726.orbitalY)
  i726.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[9], i726.orbitalZ)
  i726.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[10], i726.orbitalOffsetX)
  i726.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[11], i726.orbitalOffsetY)
  i726.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[12], i726.orbitalOffsetZ)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemNoise()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.separateAxes = !!i729[1]
  i728.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.strengthX)
  i728.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[3], i728.strengthY)
  i728.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[4], i728.strengthZ)
  i728.frequency = i729[5]
  i728.damping = !!i729[6]
  i728.octaveCount = i729[7]
  i728.octaveMultiplier = i729[8]
  i728.octaveScale = i729[9]
  i728.quality = i729[10]
  i728.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[11], i728.scrollSpeed)
  i728.scrollSpeedMultiplier = i729[12]
  i728.remapEnabled = !!i729[13]
  i728.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[14], i728.remapX)
  i728.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[15], i728.remapY)
  i728.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[16], i728.remapZ)
  i728.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[17], i728.positionAmount)
  i728.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[18], i728.rotationAmount)
  i728.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[19], i728.sizeAmount)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemInheritVelocity()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.mode = i731[1]
  i730.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.curve)
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemForceOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.x)
  i732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.y)
  i732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.z)
  i732.space = i733[4]
  i732.randomized = !!i733[5]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.limit)
  i734.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.limitX)
  i734.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.limitY)
  i734.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.limitZ)
  i734.dampen = i735[5]
  i734.separateAxes = !!i735[6]
  i734.space = i735[7]
  i734.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.drag)
  i734.multiplyDragByParticleSize = !!i735[9]
  i734.multiplyDragByParticleVelocity = !!i735[10]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i737 = data
  i736.enabled = !!i737[0]
  request.r(i737[1], i737[2], 0, i736, 'sharedMaterial')
  var i739 = i737[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[4]
  i736.shadowCastingMode = i737[5]
  i736.sortingLayerID = i737[6]
  i736.sortingOrder = i737[7]
  i736.lightmapIndex = i737[8]
  i736.lightmapSceneIndex = i737[9]
  i736.lightmapScaleOffset = new pc.Vec4( i737[10], i737[11], i737[12], i737[13] )
  i736.lightProbeUsage = i737[14]
  i736.reflectionProbeUsage = i737[15]
  request.r(i737[16], i737[17], 0, i736, 'mesh')
  i736.meshCount = i737[18]
  i736.activeVertexStreamsCount = i737[19]
  i736.alignment = i737[20]
  i736.renderMode = i737[21]
  i736.sortMode = i737[22]
  i736.lengthScale = i737[23]
  i736.velocityScale = i737[24]
  i736.cameraVelocityScale = i737[25]
  i736.normalDirection = i737[26]
  i736.sortingFudge = i737[27]
  i736.minParticleSize = i737[28]
  i736.maxParticleSize = i737[29]
  i736.pivot = new pc.Vec3( i737[30], i737[31], i737[32] )
  request.r(i737[33], i737[34], 0, i736, 'trailMaterial')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i743 = data
  i742.name = i743[0]
  i742.tagId = i743[1]
  i742.enabled = !!i743[2]
  i742.isStatic = !!i743[3]
  i742.layer = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i744 = root || new pc.UnityMaterial()
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'shader')
  i744.renderQueue = i745[3]
  i744.enableInstancing = !!i745[4]
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i747[i + 0]) );
  }
  i744.floatParameters = i746
  var i749 = i745[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i749[i + 0]) );
  }
  i744.colorParameters = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i751[i + 0]) );
  }
  i744.vectorParameters = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i753[i + 0]) );
  }
  i744.textureParameters = i752
  var i755 = i745[9]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i755[i + 0]) );
  }
  i744.materialFlags = i754
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Color(i763[1], i763[2], i763[3], i763[4])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Vec4( i767[1], i767[2], i767[3], i767[4] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i775 = data
  i774.name = i775[0]
  i774.enabled = !!i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i777 = data
  i776.name = i777[0]
  i776.width = i777[1]
  i776.height = i777[2]
  i776.mipmapCount = i777[3]
  i776.anisoLevel = i777[4]
  i776.filterMode = i777[5]
  i776.hdr = !!i777[6]
  i776.format = i777[7]
  i776.wrapMode = i777[8]
  i776.alphaIsTransparency = !!i777[9]
  i776.alphaSource = i777[10]
  i776.graphicsFormat = i777[11]
  i776.sRGBTexture = !!i777[12]
  i776.desiredColorSpace = i777[13]
  i776.wrapU = i777[14]
  i776.wrapV = i777[15]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i779 = data
  i778.name = i779[0]
  i778.halfPrecision = !!i779[1]
  i778.useUInt32IndexFormat = !!i779[2]
  i778.vertexCount = i779[3]
  i778.aabb = i779[4]
  var i781 = i779[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( !!i781[i + 0] );
  }
  i778.streams = i780
  i778.vertices = i779[6]
  var i783 = i779[7]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i783[i + 0]) );
  }
  i778.subMeshes = i782
  var i785 = i779[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 16) {
    i784.push( new pc.Mat4().setData(i785[i + 0], i785[i + 1], i785[i + 2], i785[i + 3],  i785[i + 4], i785[i + 5], i785[i + 6], i785[i + 7],  i785[i + 8], i785[i + 9], i785[i + 10], i785[i + 11],  i785[i + 12], i785[i + 13], i785[i + 14], i785[i + 15]) );
  }
  i778.bindposes = i784
  var i787 = i779[9]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i787[i + 0]) );
  }
  i778.blendShapes = i786
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i793 = data
  i792.triangles = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i799 = data
  i798.name = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i801[i + 0]) );
  }
  i798.frames = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i803 = data
  i802.pivot = new pc.Vec2( i803[0], i803[1] )
  i802.anchorMin = new pc.Vec2( i803[2], i803[3] )
  i802.anchorMax = new pc.Vec2( i803[4], i803[5] )
  i802.sizeDelta = new pc.Vec2( i803[6], i803[7] )
  i802.anchoredPosition3D = new pc.Vec3( i803[8], i803[9], i803[10] )
  i802.rotation = new pc.Quat(i803[11], i803[12], i803[13], i803[14])
  i802.scale = new pc.Vec3( i803[15], i803[16], i803[17] )
  return i802
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i804 = root || request.c( 'ConfettiController' )
  var i805 = data
  i804.gameWin = !!i805[0]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i807 = data
  i806.cullTransparentMesh = !!i807[0]
  return i806
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.Image' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Sprite')
  i808.m_Type = i809[2]
  i808.m_PreserveAspect = !!i809[3]
  i808.m_FillCenter = !!i809[4]
  i808.m_FillMethod = i809[5]
  i808.m_FillAmount = i809[6]
  i808.m_FillClockwise = !!i809[7]
  i808.m_FillOrigin = i809[8]
  i808.m_UseSpriteMesh = !!i809[9]
  i808.m_PixelsPerUnitMultiplier = i809[10]
  request.r(i809[11], i809[12], 0, i808, 'm_Material')
  i808.m_Maskable = !!i809[13]
  i808.m_Color = new pc.Color(i809[14], i809[15], i809[16], i809[17])
  i808.m_RaycastTarget = !!i809[18]
  i808.m_RaycastPadding = new pc.Vec4( i809[19], i809[20], i809[21], i809[22] )
  return i808
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i810 = root || request.c( 'ConfettiFall' )
  var i811 = data
  i810.gameWin = !!i811[0]
  request.r(i811[1], i811[2], 0, i810, 'fallArea')
  i810.fallDistance = i811[3]
  i810.fallDuration = i811[4]
  i810.resetDelay = i811[5]
  i810.horizontalFlutter = i811[6]
  i810.rotationAngle = i811[7]
  i810.startDelayMin = i811[8]
  i810.startDelayMax = i811[9]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'animatorController')
  request.r(i813[2], i813[3], 0, i812, 'avatar')
  i812.updateMode = i813[4]
  i812.hasTransformHierarchy = !!i813[5]
  i812.applyRootMotion = !!i813[6]
  var i815 = i813[7]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.humanBones = i814
  i812.enabled = !!i813[8]
  return i812
}

Deserializers["HexBase"] = function (request, data, root) {
  var i818 = root || request.c( 'HexBase' )
  var i819 = data
  var i821 = i819[0]
  var i820 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 1, i820, '')
  }
  i818.nearbyBases = i820
  request.r(i819[1], i819[2], 0, i818, 'occupiedHex')
  i818.occupied = !!i819[3]
  request.r(i819[4], i819[5], 0, i818, 'sparkleVFX')
  request.r(i819[6], i819[7], 0, i818, 'originalColor')
  request.r(i819[8], i819[9], 0, i818, 'clickedColor')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i825 = data
  i824.center = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.size = new pc.Vec3( i825[3], i825[4], i825[5] )
  i824.enabled = !!i825[6]
  i824.isTrigger = !!i825[7]
  request.r(i825[8], i825[9], 0, i824, 'material')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'sharedMesh')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'additionalVertexStreams')
  i828.enabled = !!i829[2]
  request.r(i829[3], i829[4], 0, i828, 'sharedMaterial')
  var i831 = i829[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[6]
  i828.shadowCastingMode = i829[7]
  i828.sortingLayerID = i829[8]
  i828.sortingOrder = i829[9]
  i828.lightmapIndex = i829[10]
  i828.lightmapSceneIndex = i829[11]
  i828.lightmapScaleOffset = new pc.Vec4( i829[12], i829[13], i829[14], i829[15] )
  i828.lightProbeUsage = i829[16]
  i828.reflectionProbeUsage = i829[17]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i833 = data
  i832.enabled = !!i833[0]
  i832.isTrigger = !!i833[1]
  request.r(i833[2], i833[3], 0, i832, 'material')
  request.r(i833[4], i833[5], 0, i832, 'sharedMesh')
  i832.convex = !!i833[6]
  return i832
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i834 = root || request.c( 'HexGroup' )
  var i835 = data
  i834.GroupType = i835[0]
  i834.stackColor = i835[1]
  i834.draggerNum = i835[2]
  i834.boardStack = !!i835[3]
  request.r(i835[4], i835[5], 0, i834, 'dragReference')
  i834.isTweening = !!i835[6]
  i834.isEmptying = !!i835[7]
  i834.isTransferring = !!i835[8]
  var i837 = i835[9]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.nearbyHex = i836
  i834.PerTile = i835[10]
  i834.tilesNeeded = i835[11]
  i834.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i835[12] )
  var i839 = i835[13]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 1, i838, '')
  }
  i834.HexTiles = i838
  request.r(i835[14], i835[15], 0, i834, 'pointsPos')
  request.r(i835[16], i835[17], 0, i834, 'pointsTxt')
  request.r(i835[18], i835[19], 0, i834, 'pointsPrefab')
  i834.oldPosition = new pc.Vec3( i835[20], i835[21], i835[22] )
  i834.isDragging = !!i835[23]
  i834.TransferTime = i835[24]
  i834.TransferDelay = i835[25]
  i834.MergeTime = i835[26]
  i834.MergeDelay = i835[27]
  return i834
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i844 = root || request.c( 'HexTiles' )
  var i845 = data
  i844.tileColor = i845[0]
  return i844
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i847 = data
  i846.m_hasFontAssetChanged = !!i847[0]
  request.r(i847[1], i847[2], 0, i846, 'm_baseMaterial')
  i846.m_maskOffset = new pc.Vec4( i847[3], i847[4], i847[5], i847[6] )
  i846.m_text = i847[7]
  i846.m_isRightToLeft = !!i847[8]
  request.r(i847[9], i847[10], 0, i846, 'm_fontAsset')
  request.r(i847[11], i847[12], 0, i846, 'm_sharedMaterial')
  var i849 = i847[13]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.m_fontSharedMaterials = i848
  request.r(i847[14], i847[15], 0, i846, 'm_fontMaterial')
  var i851 = i847[16]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i846.m_fontMaterials = i850
  i846.m_fontColor32 = UnityEngine.Color32.ConstructColor(i847[17], i847[18], i847[19], i847[20])
  i846.m_fontColor = new pc.Color(i847[21], i847[22], i847[23], i847[24])
  i846.m_enableVertexGradient = !!i847[25]
  i846.m_colorMode = i847[26]
  i846.m_fontColorGradient = request.d('TMPro.VertexGradient', i847[27], i846.m_fontColorGradient)
  request.r(i847[28], i847[29], 0, i846, 'm_fontColorGradientPreset')
  request.r(i847[30], i847[31], 0, i846, 'm_spriteAsset')
  i846.m_tintAllSprites = !!i847[32]
  request.r(i847[33], i847[34], 0, i846, 'm_StyleSheet')
  i846.m_TextStyleHashCode = i847[35]
  i846.m_overrideHtmlColors = !!i847[36]
  i846.m_faceColor = UnityEngine.Color32.ConstructColor(i847[37], i847[38], i847[39], i847[40])
  i846.m_fontSize = i847[41]
  i846.m_fontSizeBase = i847[42]
  i846.m_fontWeight = i847[43]
  i846.m_enableAutoSizing = !!i847[44]
  i846.m_fontSizeMin = i847[45]
  i846.m_fontSizeMax = i847[46]
  i846.m_fontStyle = i847[47]
  i846.m_HorizontalAlignment = i847[48]
  i846.m_VerticalAlignment = i847[49]
  i846.m_textAlignment = i847[50]
  i846.m_characterSpacing = i847[51]
  i846.m_wordSpacing = i847[52]
  i846.m_lineSpacing = i847[53]
  i846.m_lineSpacingMax = i847[54]
  i846.m_paragraphSpacing = i847[55]
  i846.m_charWidthMaxAdj = i847[56]
  i846.m_enableWordWrapping = !!i847[57]
  i846.m_wordWrappingRatios = i847[58]
  i846.m_overflowMode = i847[59]
  request.r(i847[60], i847[61], 0, i846, 'm_linkedTextComponent')
  request.r(i847[62], i847[63], 0, i846, 'parentLinkedComponent')
  i846.m_enableKerning = !!i847[64]
  i846.m_enableExtraPadding = !!i847[65]
  i846.checkPaddingRequired = !!i847[66]
  i846.m_isRichText = !!i847[67]
  i846.m_parseCtrlCharacters = !!i847[68]
  i846.m_isOrthographic = !!i847[69]
  i846.m_isCullingEnabled = !!i847[70]
  i846.m_horizontalMapping = i847[71]
  i846.m_verticalMapping = i847[72]
  i846.m_uvLineOffset = i847[73]
  i846.m_geometrySortingOrder = i847[74]
  i846.m_IsTextObjectScaleStatic = !!i847[75]
  i846.m_VertexBufferAutoSizeReduction = !!i847[76]
  i846.m_useMaxVisibleDescender = !!i847[77]
  i846.m_pageToDisplay = i847[78]
  i846.m_margin = new pc.Vec4( i847[79], i847[80], i847[81], i847[82] )
  i846.m_isUsingLegacyAnimationComponent = !!i847[83]
  i846.m_isVolumetricText = !!i847[84]
  request.r(i847[85], i847[86], 0, i846, 'm_Material')
  i846.m_Maskable = !!i847[87]
  i846.m_Color = new pc.Color(i847[88], i847[89], i847[90], i847[91])
  i846.m_RaycastTarget = !!i847[92]
  i846.m_RaycastPadding = new pc.Vec4( i847[93], i847[94], i847[95], i847[96] )
  return i846
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i852 = root || request.c( 'TMPro.VertexGradient' )
  var i853 = data
  i852.topLeft = new pc.Color(i853[0], i853[1], i853[2], i853[3])
  i852.topRight = new pc.Color(i853[4], i853[5], i853[6], i853[7])
  i852.bottomLeft = new pc.Color(i853[8], i853[9], i853[10], i853[11])
  i852.bottomRight = new pc.Color(i853[12], i853[13], i853[14], i853[15])
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i855 = data
  i854.name = i855[0]
  i854.atlasId = i855[1]
  i854.mipmapCount = i855[2]
  i854.hdr = !!i855[3]
  i854.size = i855[4]
  i854.anisoLevel = i855[5]
  i854.filterMode = i855[6]
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 4) {
    i856.push( UnityEngine.Rect.MinMaxRect(i857[i + 0], i857[i + 1], i857[i + 2], i857[i + 3]) );
  }
  i854.rects = i856
  i854.wrapU = i855[8]
  i854.wrapV = i855[9]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i861 = data
  i860.name = i861[0]
  i860.index = i861[1]
  i860.startup = !!i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i863 = data
  i862.enabled = !!i863[0]
  i862.aspect = i863[1]
  i862.orthographic = !!i863[2]
  i862.orthographicSize = i863[3]
  i862.backgroundColor = new pc.Color(i863[4], i863[5], i863[6], i863[7])
  i862.nearClipPlane = i863[8]
  i862.farClipPlane = i863[9]
  i862.fieldOfView = i863[10]
  i862.depth = i863[11]
  i862.clearFlags = i863[12]
  i862.cullingMask = i863[13]
  i862.rect = i863[14]
  request.r(i863[15], i863[16], 0, i862, 'targetTexture')
  i862.usePhysicalProperties = !!i863[17]
  i862.focalLength = i863[18]
  i862.sensorSize = new pc.Vec2( i863[19], i863[20] )
  i862.lensShift = new pc.Vec2( i863[21], i863[22] )
  i862.gateFit = i863[23]
  i862.commandBufferCount = i863[24]
  i862.cameraType = i863[25]
  return i862
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i864 = root || request.c( 'CameraInfo' )
  var i865 = data
  i864.IntroCamera = !!i865[0]
  var i867 = i865[1]
  var i866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 1, i866, '')
  }
  i864.TargetPaths = i866
  i864.pathDurations = i865[2]
  i864.introTime = i865[3]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i871 = data
  i870.enabled = !!i871[0]
  i870.type = i871[1]
  i870.color = new pc.Color(i871[2], i871[3], i871[4], i871[5])
  i870.cullingMask = i871[6]
  i870.intensity = i871[7]
  i870.range = i871[8]
  i870.spotAngle = i871[9]
  i870.shadows = i871[10]
  i870.shadowNormalBias = i871[11]
  i870.shadowBias = i871[12]
  i870.shadowStrength = i871[13]
  i870.shadowResolution = i871[14]
  i870.lightmapBakeType = i871[15]
  i870.renderMode = i871[16]
  request.r(i871[17], i871[18], 0, i870, 'cookie')
  i870.cookieSize = i871[19]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i873 = data
  i872.enabled = !!i873[0]
  i872.planeDistance = i873[1]
  i872.referencePixelsPerUnit = i873[2]
  i872.isFallbackOverlay = !!i873[3]
  i872.renderMode = i873[4]
  i872.renderOrder = i873[5]
  i872.sortingLayerName = i873[6]
  i872.sortingOrder = i873[7]
  i872.scaleFactor = i873[8]
  request.r(i873[9], i873[10], 0, i872, 'worldCamera')
  i872.overrideSorting = !!i873[11]
  i872.pixelPerfect = !!i873[12]
  i872.targetDisplay = i873[13]
  i872.overridePixelPerfect = !!i873[14]
  return i872
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i875 = data
  i874.m_UiScaleMode = i875[0]
  i874.m_ReferencePixelsPerUnit = i875[1]
  i874.m_ScaleFactor = i875[2]
  i874.m_ReferenceResolution = new pc.Vec2( i875[3], i875[4] )
  i874.m_ScreenMatchMode = i875[5]
  i874.m_MatchWidthOrHeight = i875[6]
  i874.m_PhysicalUnit = i875[7]
  i874.m_FallbackScreenDPI = i875[8]
  i874.m_DefaultSpriteDPI = i875[9]
  i874.m_DynamicPixelsPerUnit = i875[10]
  i874.m_PresetInfoIsWorld = !!i875[11]
  return i874
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i877 = data
  i876.m_IgnoreReversedGraphics = !!i877[0]
  i876.m_BlockingObjects = i877[1]
  i876.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i877[2] )
  return i876
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i878 = root || request.c( 'TutorialManager' )
  var i879 = data
  i878.IntroAnim = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'handTool')
  request.r(i879[3], i879[4], 0, i878, 'tutorialPanel')
  request.r(i879[5], i879[6], 0, i878, 'tutorialText')
  request.r(i879[7], i879[8], 0, i878, 'tutorialTiles')
  request.r(i879[9], i879[10], 0, i878, 'dropTarget')
  i878.oldStarter = new pc.Vec2( i879[11], i879[12] )
  i878.starterPos = new pc.Vec2( i879[13], i879[14] )
  i878.baseP = new pc.Vec2( i879[15], i879[16] )
  request.r(i879[17], i879[18], 0, i878, 'dragger')
  var i881 = i879[19]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i878.dragPos = i880
  var i883 = i879[20]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i878.basePos = i882
  request.r(i879[21], i879[22], 0, i878, 'sparklePrefab')
  i878.currentTimer = i879[23]
  i878.maxTimer = i879[24]
  i878.timerCalled = !!i879[25]
  return i878
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.UI.Mask' )
  var i887 = data
  i886.m_ShowMaskGraphic = !!i887[0]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i889 = data
  i888.m_Alpha = i889[0]
  i888.m_Interactable = !!i889[1]
  i888.m_BlocksRaycasts = !!i889[2]
  i888.m_IgnoreParentGroups = !!i889[3]
  i888.enabled = !!i889[4]
  return i888
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.UI.Button' )
  var i891 = data
  i890.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i891[0], i890.m_OnClick)
  i890.m_Navigation = request.d('UnityEngine.UI.Navigation', i891[1], i890.m_Navigation)
  i890.m_Transition = i891[2]
  i890.m_Colors = request.d('UnityEngine.UI.ColorBlock', i891[3], i890.m_Colors)
  i890.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i891[4], i890.m_SpriteState)
  i890.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i891[5], i890.m_AnimationTriggers)
  i890.m_Interactable = !!i891[6]
  request.r(i891[7], i891[8], 0, i890, 'm_TargetGraphic')
  return i890
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.Events.PersistentCall', i897[i + 0]));
  }
  i894.m_Calls = i896
  return i894
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Target')
  i900.m_TargetAssemblyTypeName = i901[2]
  i900.m_MethodName = i901[3]
  i900.m_Mode = i901[4]
  i900.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i901[5], i900.m_Arguments)
  i900.m_CallState = i901[6]
  return i900
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_ObjectArgument')
  i902.m_ObjectArgumentAssemblyTypeName = i903[2]
  i902.m_IntArgument = i903[3]
  i902.m_FloatArgument = i903[4]
  i902.m_StringArgument = i903[5]
  i902.m_BoolArgument = !!i903[6]
  return i902
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i905 = data
  i904.m_Mode = i905[0]
  i904.m_WrapAround = !!i905[1]
  request.r(i905[2], i905[3], 0, i904, 'm_SelectOnUp')
  request.r(i905[4], i905[5], 0, i904, 'm_SelectOnDown')
  request.r(i905[6], i905[7], 0, i904, 'm_SelectOnLeft')
  request.r(i905[8], i905[9], 0, i904, 'm_SelectOnRight')
  return i904
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i907 = data
  i906.m_NormalColor = new pc.Color(i907[0], i907[1], i907[2], i907[3])
  i906.m_HighlightedColor = new pc.Color(i907[4], i907[5], i907[6], i907[7])
  i906.m_PressedColor = new pc.Color(i907[8], i907[9], i907[10], i907[11])
  i906.m_SelectedColor = new pc.Color(i907[12], i907[13], i907[14], i907[15])
  i906.m_DisabledColor = new pc.Color(i907[16], i907[17], i907[18], i907[19])
  i906.m_ColorMultiplier = i907[20]
  i906.m_FadeDuration = i907[21]
  return i906
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_HighlightedSprite')
  request.r(i909[2], i909[3], 0, i908, 'm_PressedSprite')
  request.r(i909[4], i909[5], 0, i908, 'm_SelectedSprite')
  request.r(i909[6], i909[7], 0, i908, 'm_DisabledSprite')
  return i908
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i911 = data
  i910.m_NormalTrigger = i911[0]
  i910.m_HighlightedTrigger = i911[1]
  i910.m_PressedTrigger = i911[2]
  i910.m_SelectedTrigger = i911[3]
  i910.m_DisabledTrigger = i911[4]
  return i910
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i912 = root || request.c( 'LevelManager' )
  var i913 = data
  i912.levelPicking = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'gameField')
  request.r(i913[3], i913[4], 0, i912, 'currentLevel')
  request.r(i913[5], i913[6], 0, i912, 'currentTutorial')
  request.r(i913[7], i913[8], 0, i912, 'twoChoices')
  request.r(i913[9], i913[10], 0, i912, 'medChoice')
  request.r(i913[11], i913[12], 0, i912, 'hardChoice')
  request.r(i913[13], i913[14], 0, i912, 'onePos')
  request.r(i913[15], i913[16], 0, i912, 'twoPos')
  request.r(i913[17], i913[18], 0, i912, 'levelLayout')
  i912.origHand = new pc.Vec2( i913[19], i913[20] )
  request.r(i913[21], i913[22], 0, i912, 'easyLevel')
  request.r(i913[23], i913[24], 0, i912, 'easyTutorial')
  request.r(i913[25], i913[26], 0, i912, 'easySprite')
  request.r(i913[27], i913[28], 0, i912, 'mediumLevel')
  request.r(i913[29], i913[30], 0, i912, 'mediumTutorial')
  request.r(i913[31], i913[32], 0, i912, 'mediumSprite')
  request.r(i913[33], i913[34], 0, i912, 'hardLevel')
  request.r(i913[35], i913[36], 0, i912, 'hardTutorial')
  request.r(i913[37], i913[38], 0, i912, 'hardSprite')
  return i912
}

Deserializers["ButtonInfo"] = function (request, data, root) {
  var i914 = root || request.c( 'ButtonInfo' )
  var i915 = data
  return i914
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_FirstSelected')
  i916.m_sendNavigationEvents = !!i917[2]
  i916.m_DragThreshold = i917[3]
  return i916
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i919 = data
  i918.m_HorizontalAxis = i919[0]
  i918.m_VerticalAxis = i919[1]
  i918.m_SubmitButton = i919[2]
  i918.m_CancelButton = i919[3]
  i918.m_InputActionsPerSecond = i919[4]
  i918.m_RepeatDelay = i919[5]
  i918.m_ForceModuleActive = !!i919[6]
  i918.m_SendPointerHoverToParent = !!i919[7]
  return i918
}

Deserializers["GameManager"] = function (request, data, root) {
  var i920 = root || request.c( 'GameManager' )
  var i921 = data
  var i923 = i921[0]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i920.tileMats = i922
  request.r(i921[1], i921[2], 0, i920, 'Ground')
  var i925 = i921[3]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 1, i924, '')
  }
  i920.hexBases = i924
  var i927 = i921[4]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 1, i926, '')
  }
  i920.hexBoard = i926
  var i929 = i921[5]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i920.hexDraggers = i928
  var i931 = i921[6]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i920.currentMixers = i930
  request.r(i921[7], i921[8], 0, i920, 'emptyDrag')
  request.r(i921[9], i921[10], 0, i920, 'currentHexDrag')
  i920.currentScore = i921[11]
  i920.requiredScore = i921[12]
  request.r(i921[13], i921[14], 0, i920, 'pointsCanvas')
  request.r(i921[15], i921[16], 0, i920, 'levelComplete')
  request.r(i921[17], i921[18], 0, i920, 'completeVFX')
  request.r(i921[19], i921[20], 0, i920, 'hexDragPrefab')
  request.r(i921[21], i921[22], 0, i920, 'hexDragParent')
  request.r(i921[23], i921[24], 0, i920, 'scoreTxt')
  request.r(i921[25], i921[26], 0, i920, 'scoreFill')
  i920.easyMode = !!i921[27]
  i920.mediumMode = !!i921[28]
  i920.hardMode = !!i921[29]
  return i920
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i934 = root || request.c( 'AudioManager' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'library')
  i934.sfxPoolSize = i935[2]
  i934.sfxMultiplier = i935[3]
  return i934
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i936 = root || request.c( 'CTAManager' )
  var i937 = data
  i936.GameOver = !!i937[0]
  request.r(i937[1], i937[2], 0, i936, 'WinPanel')
  request.r(i937[3], i937[4], 0, i936, 'LosePanel')
  request.r(i937[5], i937[6], 0, i936, 'playNow')
  request.r(i937[7], i937[8], 0, i936, 'tryAgain')
  i936.iosLink = i937[9]
  i936.androidLink = i937[10]
  return i936
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i938 = root || request.c( 'IterationManager' )
  var i939 = data
  i938.numClicks = i939[0]
  i938.maxNumClicks = i939[1]
  i938.Iterations = i939[2]
  i938.currentTimer = i939[3]
  i938.maxTimer = i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i941 = data
  i940.ambientIntensity = i941[0]
  i940.reflectionIntensity = i941[1]
  i940.ambientMode = i941[2]
  i940.ambientLight = new pc.Color(i941[3], i941[4], i941[5], i941[6])
  i940.ambientSkyColor = new pc.Color(i941[7], i941[8], i941[9], i941[10])
  i940.ambientGroundColor = new pc.Color(i941[11], i941[12], i941[13], i941[14])
  i940.ambientEquatorColor = new pc.Color(i941[15], i941[16], i941[17], i941[18])
  i940.fogColor = new pc.Color(i941[19], i941[20], i941[21], i941[22])
  i940.fogEndDistance = i941[23]
  i940.fogStartDistance = i941[24]
  i940.fogDensity = i941[25]
  i940.fog = !!i941[26]
  request.r(i941[27], i941[28], 0, i940, 'skybox')
  i940.fogMode = i941[29]
  var i943 = i941[30]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i943[i + 0]) );
  }
  i940.lightmaps = i942
  i940.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i941[31], i940.lightProbes)
  i940.lightmapsMode = i941[32]
  i940.mixedBakeMode = i941[33]
  i940.environmentLightingMode = i941[34]
  i940.ambientProbe = new pc.SphericalHarmonicsL2(i941[35])
  i940.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i941[36])
  i940.useReferenceAmbientProbe = !!i941[37]
  request.r(i941[38], i941[39], 0, i940, 'customReflection')
  request.r(i941[40], i941[41], 0, i940, 'defaultReflection')
  i940.defaultReflectionMode = i941[42]
  i940.defaultReflectionResolution = i941[43]
  i940.sunLightObjectId = i941[44]
  i940.pixelLightCount = i941[45]
  i940.defaultReflectionHDR = !!i941[46]
  i940.hasLightDataAsset = !!i941[47]
  i940.hasManualGenerate = !!i941[48]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'lightmapColor')
  request.r(i947[2], i947[3], 0, i946, 'lightmapDirection')
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i948 = root || new UnityEngine.LightProbes()
  var i949 = data
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i957 = data
  var i959 = i957[0]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i959[i + 0]));
  }
  i956.ShaderCompilationErrors = i958
  i956.name = i957[1]
  i956.guid = i957[2]
  var i961 = i957[3]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i956.shaderDefinedKeywords = i960
  var i963 = i957[4]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i963[i + 0]) );
  }
  i956.passes = i962
  var i965 = i957[5]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i965[i + 0]) );
  }
  i956.usePasses = i964
  var i967 = i957[6]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i967[i + 0]) );
  }
  i956.defaultParameterValues = i966
  request.r(i957[7], i957[8], 0, i956, 'unityFallbackShader')
  i956.readDepth = !!i957[9]
  i956.isCreatedByShaderGraph = !!i957[10]
  i956.compiled = !!i957[11]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i971 = data
  i970.shaderName = i971[0]
  i970.errorMessage = i971[1]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i976 = root || new pc.UnityShaderPass()
  var i977 = data
  i976.id = i977[0]
  i976.subShaderIndex = i977[1]
  i976.name = i977[2]
  i976.passType = i977[3]
  i976.grabPassTextureName = i977[4]
  i976.usePass = !!i977[5]
  i976.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[6], i976.zTest)
  i976.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[7], i976.zWrite)
  i976.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[8], i976.culling)
  i976.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i977[9], i976.blending)
  i976.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i977[10], i976.alphaBlending)
  i976.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[11], i976.colorWriteMask)
  i976.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[12], i976.offsetUnits)
  i976.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[13], i976.offsetFactor)
  i976.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[14], i976.stencilRef)
  i976.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[15], i976.stencilReadMask)
  i976.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i977[16], i976.stencilWriteMask)
  i976.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i977[17], i976.stencilOp)
  i976.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i977[18], i976.stencilOpFront)
  i976.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i977[19], i976.stencilOpBack)
  var i979 = i977[20]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i979[i + 0]) );
  }
  i976.tags = i978
  var i981 = i977[21]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i976.passDefinedKeywords = i980
  var i983 = i977[22]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i983[i + 0]) );
  }
  i976.passDefinedKeywordGroups = i982
  var i985 = i977[23]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i985[i + 0]) );
  }
  i976.variants = i984
  var i987 = i977[24]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i987[i + 0]) );
  }
  i976.excludedVariants = i986
  i976.hasDepthReader = !!i977[25]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i989 = data
  i988.val = i989[0]
  i988.name = i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i991 = data
  i990.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[0], i990.src)
  i990.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[1], i990.dst)
  i990.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i991[2], i990.op)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i993 = data
  i992.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[0], i992.pass)
  i992.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[1], i992.fail)
  i992.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[2], i992.zFail)
  i992.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[3], i992.comp)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i997 = data
  i996.name = i997[0]
  i996.value = i997[1]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( i1003[i + 0] );
  }
  i1000.keywords = i1002
  i1000.hasDiscard = !!i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1007 = data
  i1006.passId = i1007[0]
  i1006.subShaderIndex = i1007[1]
  var i1009 = i1007[2]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1006.keywords = i1008
  i1006.vertexProgram = i1007[3]
  i1006.fragmentProgram = i1007[4]
  i1006.exportedForWebGl2 = !!i1007[5]
  i1006.readDepth = !!i1007[6]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'shader')
  i1012.pass = i1013[2]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1017 = data
  i1016.name = i1017[0]
  i1016.type = i1017[1]
  i1016.value = new pc.Vec4( i1017[2], i1017[3], i1017[4], i1017[5] )
  i1016.textureValue = i1017[6]
  i1016.shaderPropertyFlag = i1017[7]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1019 = data
  i1018.name = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'texture')
  i1018.aabb = i1019[3]
  i1018.vertices = i1019[4]
  i1018.triangles = i1019[5]
  i1018.textureRect = UnityEngine.Rect.MinMaxRect(i1019[6], i1019[7], i1019[8], i1019[9])
  i1018.packedRect = UnityEngine.Rect.MinMaxRect(i1019[10], i1019[11], i1019[12], i1019[13])
  i1018.border = new pc.Vec4( i1019[14], i1019[15], i1019[16], i1019[17] )
  i1018.transparency = i1019[18]
  i1018.bounds = i1019[19]
  i1018.pixelsPerUnit = i1019[20]
  i1018.textureWidth = i1019[21]
  i1018.textureHeight = i1019[22]
  i1018.nativeSize = new pc.Vec2( i1019[23], i1019[24] )
  i1018.pivot = new pc.Vec2( i1019[25], i1019[26] )
  i1018.textureRectOffset = new pc.Vec2( i1019[27], i1019[28] )
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1021 = data
  i1020.name = i1021[0]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.wrapMode = i1023[1]
  i1022.isLooping = !!i1023[2]
  i1022.length = i1023[3]
  var i1025 = i1023[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1025[i + 0]) );
  }
  i1022.curves = i1024
  var i1027 = i1023[5]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1027[i + 0]) );
  }
  i1022.events = i1026
  i1022.halfPrecision = !!i1023[6]
  i1022._frameRate = i1023[7]
  i1022.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1023[8], i1022.localBounds)
  i1022.hasMuscleCurves = !!i1023[9]
  var i1029 = i1023[10]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1022.clipMuscleConstant = i1028
  i1022.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1023[11], i1022.clipBindingConstant)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1033 = data
  i1032.path = i1033[0]
  i1032.hash = i1033[1]
  i1032.componentType = i1033[2]
  i1032.property = i1033[3]
  i1032.keys = i1033[4]
  var i1035 = i1033[5]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1035[i + 0]) );
  }
  i1032.objectReferenceKeys = i1034
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1039 = data
  i1038.time = i1039[0]
  request.r(i1039[1], i1039[2], 0, i1038, 'value')
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1043 = data
  i1042.functionName = i1043[0]
  i1042.floatParameter = i1043[1]
  i1042.intParameter = i1043[2]
  i1042.stringParameter = i1043[3]
  request.r(i1043[4], i1043[5], 0, i1042, 'objectReferenceParameter')
  i1042.time = i1043[6]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1045 = data
  i1044.center = new pc.Vec3( i1045[0], i1045[1], i1045[2] )
  i1044.extends = new pc.Vec3( i1045[3], i1045[4], i1045[5] )
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1049 = data
  var i1051 = i1049[0]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( i1051[i + 0] );
  }
  i1048.genericBindings = i1050
  var i1053 = i1049[1]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( i1053[i + 0] );
  }
  i1048.pptrCurveMapping = i1052
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.ascent = i1055[1]
  i1054.originalLineHeight = i1055[2]
  i1054.fontSize = i1055[3]
  var i1057 = i1055[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1057[i + 0]) );
  }
  i1054.characterInfo = i1056
  request.r(i1055[5], i1055[6], 0, i1054, 'texture')
  i1054.originalFontSize = i1055[7]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1061 = data
  i1060.index = i1061[0]
  i1060.advance = i1061[1]
  i1060.bearing = i1061[2]
  i1060.glyphWidth = i1061[3]
  i1060.glyphHeight = i1061[4]
  i1060.minX = i1061[5]
  i1060.maxX = i1061[6]
  i1060.minY = i1061[7]
  i1060.maxY = i1061[8]
  i1060.uvBottomLeftX = i1061[9]
  i1060.uvBottomLeftY = i1061[10]
  i1060.uvBottomRightX = i1061[11]
  i1060.uvBottomRightY = i1061[12]
  i1060.uvTopLeftX = i1061[13]
  i1060.uvTopLeftY = i1061[14]
  i1060.uvTopRightX = i1061[15]
  i1060.uvTopRightY = i1061[16]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1063 = data
  i1062.name = i1063[0]
  var i1065 = i1063[1]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1065[i + 0]) );
  }
  i1062.layers = i1064
  var i1067 = i1063[2]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1067[i + 0]) );
  }
  i1062.parameters = i1066
  i1062.animationClips = i1063[3]
  i1062.avatarUnsupported = i1063[4]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.defaultWeight = i1071[1]
  i1070.blendingMode = i1071[2]
  i1070.avatarMask = i1071[3]
  i1070.syncedLayerIndex = i1071[4]
  i1070.syncedLayerAffectsTiming = !!i1071[5]
  i1070.syncedLayers = i1071[6]
  i1070.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1071[7], i1070.stateMachine)
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1073 = data
  i1072.id = i1073[0]
  i1072.name = i1073[1]
  i1072.path = i1073[2]
  var i1075 = i1073[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1075[i + 0]) );
  }
  i1072.states = i1074
  var i1077 = i1073[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1077[i + 0]) );
  }
  i1072.machines = i1076
  var i1079 = i1073[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1079[i + 0]) );
  }
  i1072.entryStateTransitions = i1078
  var i1081 = i1073[6]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1081[i + 0]) );
  }
  i1072.exitStateTransitions = i1080
  var i1083 = i1073[7]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1083[i + 0]) );
  }
  i1072.anyStateTransitions = i1082
  i1072.defaultStateId = i1073[8]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  i1086.cycleOffset = i1087[2]
  i1086.cycleOffsetParameter = i1087[3]
  i1086.cycleOffsetParameterActive = !!i1087[4]
  i1086.mirror = !!i1087[5]
  i1086.mirrorParameter = i1087[6]
  i1086.mirrorParameterActive = !!i1087[7]
  i1086.motionId = i1087[8]
  i1086.nameHash = i1087[9]
  i1086.fullPathHash = i1087[10]
  i1086.speed = i1087[11]
  i1086.speedParameter = i1087[12]
  i1086.speedParameterActive = !!i1087[13]
  i1086.tag = i1087[14]
  i1086.tagHash = i1087[15]
  i1086.writeDefaultValues = !!i1087[16]
  var i1089 = i1087[17]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1086.behaviours = i1088
  var i1091 = i1087[18]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1091[i + 0]) );
  }
  i1086.transitions = i1090
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1097 = data
  i1096.fullPath = i1097[0]
  i1096.canTransitionToSelf = !!i1097[1]
  i1096.duration = i1097[2]
  i1096.exitTime = i1097[3]
  i1096.hasExitTime = !!i1097[4]
  i1096.hasFixedDuration = !!i1097[5]
  i1096.interruptionSource = i1097[6]
  i1096.offset = i1097[7]
  i1096.orderedInterruption = !!i1097[8]
  i1096.destinationStateId = i1097[9]
  i1096.isExit = !!i1097[10]
  i1096.mute = !!i1097[11]
  i1096.solo = !!i1097[12]
  var i1099 = i1097[13]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1099[i + 0]) );
  }
  i1096.conditions = i1098
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1105 = data
  i1104.destinationStateId = i1105[0]
  i1104.isExit = !!i1105[1]
  i1104.mute = !!i1105[2]
  i1104.solo = !!i1105[3]
  var i1107 = i1105[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1107[i + 0]) );
  }
  i1104.conditions = i1106
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1111 = data
  i1110.defaultBool = !!i1111[0]
  i1110.defaultFloat = i1111[1]
  i1110.defaultInt = i1111[2]
  i1110.name = i1111[3]
  i1110.nameHash = i1111[4]
  i1110.type = i1111[5]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1113 = data
  i1112.name = i1113[0]
  i1112.bytes64 = i1113[1]
  i1112.data = i1113[2]
  return i1112
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1115 = data
  i1114.hashCode = i1115[0]
  request.r(i1115[1], i1115[2], 0, i1114, 'material')
  i1114.materialHashCode = i1115[3]
  request.r(i1115[4], i1115[5], 0, i1114, 'atlas')
  i1114.normalStyle = i1115[6]
  i1114.normalSpacingOffset = i1115[7]
  i1114.boldStyle = i1115[8]
  i1114.boldSpacing = i1115[9]
  i1114.italicStyle = i1115[10]
  i1114.tabSize = i1115[11]
  i1114.m_Version = i1115[12]
  i1114.m_SourceFontFileGUID = i1115[13]
  request.r(i1115[14], i1115[15], 0, i1114, 'm_SourceFontFile_EditorRef')
  request.r(i1115[16], i1115[17], 0, i1114, 'm_SourceFontFile')
  i1114.m_AtlasPopulationMode = i1115[18]
  i1114.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1115[19], i1114.m_FaceInfo)
  var i1117 = i1115[20]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('UnityEngine.TextCore.Glyph', i1117[i + 0]));
  }
  i1114.m_GlyphTable = i1116
  var i1119 = i1115[21]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('TMPro.TMP_Character', i1119[i + 0]));
  }
  i1114.m_CharacterTable = i1118
  var i1121 = i1115[22]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1114.m_AtlasTextures = i1120
  i1114.m_AtlasTextureIndex = i1115[23]
  i1114.m_IsMultiAtlasTexturesEnabled = !!i1115[24]
  i1114.m_ClearDynamicDataOnBuild = !!i1115[25]
  var i1123 = i1115[26]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('UnityEngine.TextCore.GlyphRect', i1123[i + 0]));
  }
  i1114.m_UsedGlyphRects = i1122
  var i1125 = i1115[27]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('UnityEngine.TextCore.GlyphRect', i1125[i + 0]));
  }
  i1114.m_FreeGlyphRects = i1124
  i1114.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1115[28], i1114.m_fontInfo)
  i1114.m_AtlasWidth = i1115[29]
  i1114.m_AtlasHeight = i1115[30]
  i1114.m_AtlasPadding = i1115[31]
  i1114.m_AtlasRenderMode = i1115[32]
  var i1127 = i1115[33]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.add(request.d('TMPro.TMP_Glyph', i1127[i + 0]));
  }
  i1114.m_glyphInfoList = i1126
  i1114.m_KerningTable = request.d('TMPro.KerningTable', i1115[34], i1114.m_KerningTable)
  i1114.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1115[35], i1114.m_FontFeatureTable)
  var i1129 = i1115[36]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 1, i1128, '')
  }
  i1114.fallbackFontAssets = i1128
  var i1131 = i1115[37]
  var i1130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 1, i1130, '')
  }
  i1114.m_FallbackFontAssetTable = i1130
  i1114.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1115[38], i1114.m_CreationSettings)
  var i1133 = i1115[39]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('TMPro.TMP_FontWeightPair', i1133[i + 0]) );
  }
  i1114.m_FontWeightTable = i1132
  var i1135 = i1115[40]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('TMPro.TMP_FontWeightPair', i1135[i + 0]) );
  }
  i1114.fontWeights = i1134
  return i1114
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1137 = data
  i1136.m_FaceIndex = i1137[0]
  i1136.m_FamilyName = i1137[1]
  i1136.m_StyleName = i1137[2]
  i1136.m_PointSize = i1137[3]
  i1136.m_Scale = i1137[4]
  i1136.m_UnitsPerEM = i1137[5]
  i1136.m_LineHeight = i1137[6]
  i1136.m_AscentLine = i1137[7]
  i1136.m_CapLine = i1137[8]
  i1136.m_MeanLine = i1137[9]
  i1136.m_Baseline = i1137[10]
  i1136.m_DescentLine = i1137[11]
  i1136.m_SuperscriptOffset = i1137[12]
  i1136.m_SuperscriptSize = i1137[13]
  i1136.m_SubscriptOffset = i1137[14]
  i1136.m_SubscriptSize = i1137[15]
  i1136.m_UnderlineOffset = i1137[16]
  i1136.m_UnderlineThickness = i1137[17]
  i1136.m_StrikethroughOffset = i1137[18]
  i1136.m_StrikethroughThickness = i1137[19]
  i1136.m_TabWidth = i1137[20]
  return i1136
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1141 = data
  i1140.m_Index = i1141[0]
  i1140.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1141[1], i1140.m_Metrics)
  i1140.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1141[2], i1140.m_GlyphRect)
  i1140.m_Scale = i1141[3]
  i1140.m_AtlasIndex = i1141[4]
  i1140.m_ClassDefinitionType = i1141[5]
  return i1140
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1143 = data
  i1142.m_Width = i1143[0]
  i1142.m_Height = i1143[1]
  i1142.m_HorizontalBearingX = i1143[2]
  i1142.m_HorizontalBearingY = i1143[3]
  i1142.m_HorizontalAdvance = i1143[4]
  return i1142
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1145 = data
  i1144.m_X = i1145[0]
  i1144.m_Y = i1145[1]
  i1144.m_Width = i1145[2]
  i1144.m_Height = i1145[3]
  return i1144
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.TMP_Character' )
  var i1149 = data
  i1148.m_ElementType = i1149[0]
  i1148.m_Unicode = i1149[1]
  i1148.m_GlyphIndex = i1149[2]
  i1148.m_Scale = i1149[3]
  return i1148
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1155 = data
  i1154.Name = i1155[0]
  i1154.PointSize = i1155[1]
  i1154.Scale = i1155[2]
  i1154.CharacterCount = i1155[3]
  i1154.LineHeight = i1155[4]
  i1154.Baseline = i1155[5]
  i1154.Ascender = i1155[6]
  i1154.CapHeight = i1155[7]
  i1154.Descender = i1155[8]
  i1154.CenterLine = i1155[9]
  i1154.SuperscriptOffset = i1155[10]
  i1154.SubscriptOffset = i1155[11]
  i1154.SubSize = i1155[12]
  i1154.Underline = i1155[13]
  i1154.UnderlineThickness = i1155[14]
  i1154.strikethrough = i1155[15]
  i1154.strikethroughThickness = i1155[16]
  i1154.TabWidth = i1155[17]
  i1154.Padding = i1155[18]
  i1154.AtlasWidth = i1155[19]
  i1154.AtlasHeight = i1155[20]
  return i1154
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1158 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1159 = data
  i1158.id = i1159[0]
  i1158.x = i1159[1]
  i1158.y = i1159[2]
  i1158.width = i1159[3]
  i1158.height = i1159[4]
  i1158.xOffset = i1159[5]
  i1158.yOffset = i1159[6]
  i1158.xAdvance = i1159[7]
  i1158.scale = i1159[8]
  return i1158
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1160 = root || request.c( 'TMPro.KerningTable' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.add(request.d('TMPro.KerningPair', i1163[i + 0]));
  }
  i1160.kerningPairs = i1162
  return i1160
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.KerningPair' )
  var i1167 = data
  i1166.xOffset = i1167[0]
  i1166.m_FirstGlyph = i1167[1]
  i1166.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1167[2], i1166.m_FirstGlyphAdjustments)
  i1166.m_SecondGlyph = i1167[3]
  i1166.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1167[4], i1166.m_SecondGlyphAdjustments)
  i1166.m_IgnoreSpacingAdjustments = !!i1167[5]
  return i1166
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1171[i + 0]));
  }
  i1168.m_GlyphPairAdjustmentRecords = i1170
  return i1168
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1175 = data
  i1174.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1175[0], i1174.m_FirstAdjustmentRecord)
  i1174.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1175[1], i1174.m_SecondAdjustmentRecord)
  i1174.m_FeatureLookupFlags = i1175[2]
  return i1174
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1178 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1179 = data
  i1178.sourceFontFileName = i1179[0]
  i1178.sourceFontFileGUID = i1179[1]
  i1178.pointSizeSamplingMode = i1179[2]
  i1178.pointSize = i1179[3]
  i1178.padding = i1179[4]
  i1178.packingMode = i1179[5]
  i1178.atlasWidth = i1179[6]
  i1178.atlasHeight = i1179[7]
  i1178.characterSetSelectionMode = i1179[8]
  i1178.characterSequence = i1179[9]
  i1178.referencedFontAssetGUID = i1179[10]
  i1178.referencedTextAssetGUID = i1179[11]
  i1178.fontStyle = i1179[12]
  i1178.fontStyleModifier = i1179[13]
  i1178.renderMode = i1179[14]
  i1178.includeFontFeatures = !!i1179[15]
  return i1178
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'regularTypeface')
  request.r(i1183[2], i1183[3], 0, i1182, 'italicTypeface')
  return i1182
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1184 = root || request.c( 'AudioLibrary' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('AudioLibrary+ClipEntry', i1187[i + 0]));
  }
  i1184.clips = i1186
  return i1184
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1190 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1191 = data
  i1190.key = i1191[0]
  i1190.channel = i1191[1]
  request.r(i1191[2], i1191[3], 0, i1190, 'clip')
  i1190.volume = i1191[4]
  i1190.loop = !!i1191[5]
  return i1190
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1193 = data
  i1192.useSafeMode = !!i1193[0]
  i1192.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1193[1], i1192.safeModeOptions)
  i1192.timeScale = i1193[2]
  i1192.unscaledTimeScale = i1193[3]
  i1192.useSmoothDeltaTime = !!i1193[4]
  i1192.maxSmoothUnscaledTime = i1193[5]
  i1192.rewindCallbackMode = i1193[6]
  i1192.showUnityEditorReport = !!i1193[7]
  i1192.logBehaviour = i1193[8]
  i1192.drawGizmos = !!i1193[9]
  i1192.defaultRecyclable = !!i1193[10]
  i1192.defaultAutoPlay = i1193[11]
  i1192.defaultUpdateType = i1193[12]
  i1192.defaultTimeScaleIndependent = !!i1193[13]
  i1192.defaultEaseType = i1193[14]
  i1192.defaultEaseOvershootOrAmplitude = i1193[15]
  i1192.defaultEasePeriod = i1193[16]
  i1192.defaultAutoKill = !!i1193[17]
  i1192.defaultLoopType = i1193[18]
  i1192.debugMode = !!i1193[19]
  i1192.debugStoreTargetId = !!i1193[20]
  i1192.showPreviewPanel = !!i1193[21]
  i1192.storeSettingsLocation = i1193[22]
  i1192.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1193[23], i1192.modules)
  i1192.createASMDEF = !!i1193[24]
  i1192.showPlayingTweens = !!i1193[25]
  i1192.showPausedTweens = !!i1193[26]
  return i1192
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1194 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1195 = data
  i1194.logBehaviour = i1195[0]
  i1194.nestedTweenFailureBehaviour = i1195[1]
  return i1194
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1196 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1197 = data
  i1196.showPanel = !!i1197[0]
  i1196.audioEnabled = !!i1197[1]
  i1196.physicsEnabled = !!i1197[2]
  i1196.physics2DEnabled = !!i1197[3]
  i1196.spriteEnabled = !!i1197[4]
  i1196.uiEnabled = !!i1197[5]
  i1196.textMeshProEnabled = !!i1197[6]
  i1196.tk2DEnabled = !!i1197[7]
  i1196.deAudioEnabled = !!i1197[8]
  i1196.deUnityExtendedEnabled = !!i1197[9]
  i1196.epoOutlineEnabled = !!i1197[10]
  return i1196
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_Settings' )
  var i1199 = data
  i1198.m_enableWordWrapping = !!i1199[0]
  i1198.m_enableKerning = !!i1199[1]
  i1198.m_enableExtraPadding = !!i1199[2]
  i1198.m_enableTintAllSprites = !!i1199[3]
  i1198.m_enableParseEscapeCharacters = !!i1199[4]
  i1198.m_EnableRaycastTarget = !!i1199[5]
  i1198.m_GetFontFeaturesAtRuntime = !!i1199[6]
  i1198.m_missingGlyphCharacter = i1199[7]
  i1198.m_warningsDisabled = !!i1199[8]
  request.r(i1199[9], i1199[10], 0, i1198, 'm_defaultFontAsset')
  i1198.m_defaultFontAssetPath = i1199[11]
  i1198.m_defaultFontSize = i1199[12]
  i1198.m_defaultAutoSizeMinRatio = i1199[13]
  i1198.m_defaultAutoSizeMaxRatio = i1199[14]
  i1198.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1199[15], i1199[16] )
  i1198.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1199[17], i1199[18] )
  i1198.m_autoSizeTextContainer = !!i1199[19]
  i1198.m_IsTextObjectScaleStatic = !!i1199[20]
  var i1201 = i1199[21]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.m_fallbackFontAssets = i1200
  i1198.m_matchMaterialPreset = !!i1199[22]
  request.r(i1199[23], i1199[24], 0, i1198, 'm_defaultSpriteAsset')
  i1198.m_defaultSpriteAssetPath = i1199[25]
  i1198.m_enableEmojiSupport = !!i1199[26]
  i1198.m_MissingCharacterSpriteUnicode = i1199[27]
  i1198.m_defaultColorGradientPresetsPath = i1199[28]
  request.r(i1199[29], i1199[30], 0, i1198, 'm_defaultStyleSheet')
  i1198.m_StyleSheetsResourcePath = i1199[31]
  request.r(i1199[32], i1199[33], 0, i1198, 'm_leadingCharacters')
  request.r(i1199[34], i1199[35], 0, i1198, 'm_followingCharacters')
  i1198.m_UseModernHangulLineBreakingRules = !!i1199[36]
  return i1198
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1203 = data
  i1202.m_GlyphIndex = i1203[0]
  i1202.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1203[1], i1202.m_GlyphValueRecord)
  return i1202
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1205 = data
  i1204.m_XPlacement = i1205[0]
  i1204.m_YPlacement = i1205[1]
  i1204.m_XAdvance = i1205[2]
  i1204.m_YAdvance = i1205[3]
  return i1204
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1206 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1207 = data
  i1206.hashCode = i1207[0]
  request.r(i1207[1], i1207[2], 0, i1206, 'material')
  i1206.materialHashCode = i1207[3]
  request.r(i1207[4], i1207[5], 0, i1206, 'spriteSheet')
  var i1209 = i1207[6]
  var i1208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.add(request.d('TMPro.TMP_Sprite', i1209[i + 0]));
  }
  i1206.spriteInfoList = i1208
  var i1211 = i1207[7]
  var i1210 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1211.length; i += 2) {
  request.r(i1211[i + 0], i1211[i + 1], 1, i1210, '')
  }
  i1206.fallbackSpriteAssets = i1210
  i1206.m_Version = i1207[8]
  i1206.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1207[9], i1206.m_FaceInfo)
  var i1213 = i1207[10]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.add(request.d('TMPro.TMP_SpriteCharacter', i1213[i + 0]));
  }
  i1206.m_SpriteCharacterTable = i1212
  var i1215 = i1207[11]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.add(request.d('TMPro.TMP_SpriteGlyph', i1215[i + 0]));
  }
  i1206.m_SpriteGlyphTable = i1214
  return i1206
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1218 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1219 = data
  i1218.name = i1219[0]
  i1218.hashCode = i1219[1]
  i1218.unicode = i1219[2]
  i1218.pivot = new pc.Vec2( i1219[3], i1219[4] )
  request.r(i1219[5], i1219[6], 0, i1218, 'sprite')
  i1218.id = i1219[7]
  i1218.x = i1219[8]
  i1218.y = i1219[9]
  i1218.width = i1219[10]
  i1218.height = i1219[11]
  i1218.xOffset = i1219[12]
  i1218.yOffset = i1219[13]
  i1218.xAdvance = i1219[14]
  i1218.scale = i1219[15]
  return i1218
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1224 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1225 = data
  i1224.m_Name = i1225[0]
  i1224.m_HashCode = i1225[1]
  i1224.m_ElementType = i1225[2]
  i1224.m_Unicode = i1225[3]
  i1224.m_GlyphIndex = i1225[4]
  i1224.m_Scale = i1225[5]
  return i1224
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1228 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'sprite')
  i1228.m_Index = i1229[2]
  i1228.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1229[3], i1228.m_Metrics)
  i1228.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1229[4], i1228.m_GlyphRect)
  i1228.m_Scale = i1229[5]
  i1228.m_AtlasIndex = i1229[6]
  i1228.m_ClassDefinitionType = i1229[7]
  return i1228
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1230 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('TMPro.TMP_Style', i1233[i + 0]));
  }
  i1230.m_StyleList = i1232
  return i1230
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1236 = root || request.c( 'TMPro.TMP_Style' )
  var i1237 = data
  i1236.m_Name = i1237[0]
  i1236.m_HashCode = i1237[1]
  i1236.m_OpeningDefinition = i1237[2]
  i1236.m_ClosingDefinition = i1237[3]
  i1236.m_OpeningTagArray = i1237[4]
  i1236.m_ClosingTagArray = i1237[5]
  i1236.m_OpeningTagUnicodeArray = i1237[6]
  i1236.m_ClosingTagUnicodeArray = i1237[7]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1241[i + 0]) );
  }
  i1238.files = i1240
  i1238.componentToPrefabIds = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1245 = data
  i1244.path = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'unityObject')
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1249[i + 0]) );
  }
  i1246.scriptsExecutionOrder = i1248
  var i1251 = i1247[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1251[i + 0]) );
  }
  i1246.sortingLayers = i1250
  var i1253 = i1247[2]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1253[i + 0]) );
  }
  i1246.cullingLayers = i1252
  i1246.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1247[3], i1246.timeSettings)
  i1246.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1247[4], i1246.physicsSettings)
  i1246.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1247[5], i1246.physics2DSettings)
  i1246.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1247[6], i1246.qualitySettings)
  i1246.enableRealtimeShadows = !!i1247[7]
  i1246.enableAutoInstancing = !!i1247[8]
  i1246.enableDynamicBatching = !!i1247[9]
  i1246.lightmapEncodingQuality = i1247[10]
  i1246.desiredColorSpace = i1247[11]
  var i1255 = i1247[12]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1246.allTags = i1254
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.value = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1263 = data
  i1262.id = i1263[0]
  i1262.name = i1263[1]
  i1262.value = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1269 = data
  i1268.fixedDeltaTime = i1269[0]
  i1268.maximumDeltaTime = i1269[1]
  i1268.timeScale = i1269[2]
  i1268.maximumParticleTimestep = i1269[3]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1271 = data
  i1270.gravity = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.defaultSolverIterations = i1271[3]
  i1270.bounceThreshold = i1271[4]
  i1270.autoSyncTransforms = !!i1271[5]
  i1270.autoSimulation = !!i1271[6]
  var i1273 = i1271[7]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'material')
  i1278.gravity = new pc.Vec2( i1279[2], i1279[3] )
  i1278.positionIterations = i1279[4]
  i1278.velocityIterations = i1279[5]
  i1278.velocityThreshold = i1279[6]
  i1278.maxLinearCorrection = i1279[7]
  i1278.maxAngularCorrection = i1279[8]
  i1278.maxTranslationSpeed = i1279[9]
  i1278.maxRotationSpeed = i1279[10]
  i1278.baumgarteScale = i1279[11]
  i1278.baumgarteTOIScale = i1279[12]
  i1278.timeToSleep = i1279[13]
  i1278.linearSleepTolerance = i1279[14]
  i1278.angularSleepTolerance = i1279[15]
  i1278.defaultContactOffset = i1279[16]
  i1278.autoSimulation = !!i1279[17]
  i1278.queriesHitTriggers = !!i1279[18]
  i1278.queriesStartInColliders = !!i1279[19]
  i1278.callbacksOnDisable = !!i1279[20]
  i1278.reuseCollisionCallbacks = !!i1279[21]
  i1278.autoSyncTransforms = !!i1279[22]
  var i1281 = i1279[23]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1281[i + 0]) );
  }
  i1278.collisionMatrix = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1285 = data
  i1284.enabled = !!i1285[0]
  i1284.layerId = i1285[1]
  i1284.otherLayerId = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1287 = data
  var i1289 = i1287[0]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1289[i + 0]) );
  }
  i1286.qualityLevels = i1288
  var i1291 = i1287[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1286.names = i1290
  i1286.shadows = i1287[2]
  i1286.anisotropicFiltering = i1287[3]
  i1286.antiAliasing = i1287[4]
  i1286.lodBias = i1287[5]
  i1286.shadowCascades = i1287[6]
  i1286.shadowDistance = i1287[7]
  i1286.shadowmaskMode = i1287[8]
  i1286.shadowProjection = i1287[9]
  i1286.shadowResolution = i1287[10]
  i1286.softParticles = !!i1287[11]
  i1286.softVegetation = !!i1287[12]
  i1286.activeColorSpace = i1287[13]
  i1286.desiredColorSpace = i1287[14]
  i1286.masterTextureLimit = i1287[15]
  i1286.maxQueuedFrames = i1287[16]
  i1286.particleRaycastBudget = i1287[17]
  i1286.pixelLightCount = i1287[18]
  i1286.realtimeReflectionProbes = !!i1287[19]
  i1286.shadowCascade2Split = i1287[20]
  i1286.shadowCascade4Split = new pc.Vec3( i1287[21], i1287[22], i1287[23] )
  i1286.streamingMipmapsActive = !!i1287[24]
  i1286.vSyncCount = i1287[25]
  i1286.asyncUploadBufferSize = i1287[26]
  i1286.asyncUploadTimeSlice = i1287[27]
  i1286.billboardsFaceCameraPosition = !!i1287[28]
  i1286.shadowNearPlaneOffset = i1287[29]
  i1286.streamingMipmapsMemoryBudget = i1287[30]
  i1286.maximumLODLevel = i1287[31]
  i1286.streamingMipmapsAddAllCameras = !!i1287[32]
  i1286.streamingMipmapsMaxLevelReduction = i1287[33]
  i1286.streamingMipmapsRenderersPerFrame = i1287[34]
  i1286.resolutionScalingFixedDPIFactor = i1287[35]
  i1286.streamingMipmapsMaxFileIORequests = i1287[36]
  i1286.currentQualityLevel = i1287[37]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1297 = data
  i1296.weight = i1297[0]
  i1296.vertices = i1297[1]
  i1296.normals = i1297[2]
  i1296.tangents = i1297[3]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1301 = data
  i1300.mode = i1301[0]
  i1300.parameter = i1301[1]
  i1300.threshold = i1301[2]
  return i1300
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1303 = data
  i1302.xPlacement = i1303[0]
  i1302.yPlacement = i1303[1]
  i1302.xAdvance = i1303[2]
  i1302.yAdvance = i1303[3]
  return i1302
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[27],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[74],"82":[74],"83":[74],"84":[74],"85":[74],"86":[74],"87":[27],"88":[20],"89":[90],"91":[90],"31":[7],"92":[7],"93":[7],"33":[31],"12":[10,7],"94":[7],"32":[31],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"100":[7],"101":[7],"36":[7],"102":[7],"103":[10,7],"104":[7],"105":[7],"106":[7],"107":[7],"108":[10,7],"109":[7],"110":[41],"111":[41],"42":[41],"112":[41],"113":[27],"114":[27],"115":[7],"116":[20,7],"25":[7,10],"117":[7],"118":[10,7],"119":[20],"120":[10,7],"121":[7],"122":[123],"124":[123],"125":[123]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","HexBase","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","HexGroup","UnityEngine.GameObject","HexTiles","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","CameraInfo","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","LevelManager","ButtonInfo","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","IterationManager","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "14.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1756";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4353";

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

Deserializers.buildID = "beeb1e36-b7f4-4da2-b378-fe0d79ef4ad6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

