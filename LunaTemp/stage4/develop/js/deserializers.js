var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7280 = root || request.c( 'UnityEngine.JointSpring' )
  var i7281 = data
  i7280.spring = i7281[0]
  i7280.damper = i7281[1]
  i7280.targetPosition = i7281[2]
  return i7280
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7282 = root || request.c( 'UnityEngine.JointMotor' )
  var i7283 = data
  i7282.m_TargetVelocity = i7283[0]
  i7282.m_Force = i7283[1]
  i7282.m_FreeSpin = i7283[2]
  return i7282
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7284 = root || request.c( 'UnityEngine.JointLimits' )
  var i7285 = data
  i7284.m_Min = i7285[0]
  i7284.m_Max = i7285[1]
  i7284.m_Bounciness = i7285[2]
  i7284.m_BounceMinVelocity = i7285[3]
  i7284.m_ContactDistance = i7285[4]
  i7284.minBounce = i7285[5]
  i7284.maxBounce = i7285[6]
  return i7284
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7286 = root || request.c( 'UnityEngine.JointDrive' )
  var i7287 = data
  i7286.m_PositionSpring = i7287[0]
  i7286.m_PositionDamper = i7287[1]
  i7286.m_MaximumForce = i7287[2]
  i7286.m_UseAcceleration = i7287[3]
  return i7286
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7288 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7289 = data
  i7288.m_Spring = i7289[0]
  i7288.m_Damper = i7289[1]
  return i7288
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7290 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7291 = data
  i7290.m_Limit = i7291[0]
  i7290.m_Bounciness = i7291[1]
  i7290.m_ContactDistance = i7291[2]
  return i7290
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7292 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7293 = data
  i7292.m_ExtremumSlip = i7293[0]
  i7292.m_ExtremumValue = i7293[1]
  i7292.m_AsymptoteSlip = i7293[2]
  i7292.m_AsymptoteValue = i7293[3]
  i7292.m_Stiffness = i7293[4]
  return i7292
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7294 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7295 = data
  i7294.m_LowerAngle = i7295[0]
  i7294.m_UpperAngle = i7295[1]
  return i7294
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7296 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7297 = data
  i7296.m_MotorSpeed = i7297[0]
  i7296.m_MaximumMotorTorque = i7297[1]
  return i7296
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7298 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7299 = data
  i7298.m_DampingRatio = i7299[0]
  i7298.m_Frequency = i7299[1]
  i7298.m_Angle = i7299[2]
  return i7298
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7300 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7301 = data
  i7300.m_LowerTranslation = i7301[0]
  i7300.m_UpperTranslation = i7301[1]
  return i7300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7303 = data
  i7302.position = new pc.Vec3( i7303[0], i7303[1], i7303[2] )
  i7302.scale = new pc.Vec3( i7303[3], i7303[4], i7303[5] )
  i7302.rotation = new pc.Quat(i7303[6], i7303[7], i7303[8], i7303[9])
  return i7302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7305 = data
  i7304.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7305[0], i7304.main)
  i7304.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7305[1], i7304.colorBySpeed)
  i7304.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7305[2], i7304.colorOverLifetime)
  i7304.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7305[3], i7304.emission)
  i7304.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7305[4], i7304.rotationBySpeed)
  i7304.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7305[5], i7304.rotationOverLifetime)
  i7304.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7305[6], i7304.shape)
  i7304.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7305[7], i7304.sizeBySpeed)
  i7304.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7305[8], i7304.sizeOverLifetime)
  i7304.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7305[9], i7304.textureSheetAnimation)
  i7304.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7305[10], i7304.velocityOverLifetime)
  i7304.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7305[11], i7304.noise)
  i7304.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7305[12], i7304.inheritVelocity)
  i7304.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7305[13], i7304.forceOverLifetime)
  i7304.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7305[14], i7304.limitVelocityOverLifetime)
  i7304.useAutoRandomSeed = !!i7305[15]
  i7304.randomSeed = i7305[16]
  return i7304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7306 = root || new pc.ParticleSystemMain()
  var i7307 = data
  i7306.duration = i7307[0]
  i7306.loop = !!i7307[1]
  i7306.prewarm = !!i7307[2]
  i7306.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[3], i7306.startDelay)
  i7306.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[4], i7306.startLifetime)
  i7306.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[5], i7306.startSpeed)
  i7306.startSize3D = !!i7307[6]
  i7306.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[7], i7306.startSizeX)
  i7306.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[8], i7306.startSizeY)
  i7306.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[9], i7306.startSizeZ)
  i7306.startRotation3D = !!i7307[10]
  i7306.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[11], i7306.startRotationX)
  i7306.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[12], i7306.startRotationY)
  i7306.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[13], i7306.startRotationZ)
  i7306.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7307[14], i7306.startColor)
  i7306.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7307[15], i7306.gravityModifier)
  i7306.simulationSpace = i7307[16]
  request.r(i7307[17], i7307[18], 0, i7306, 'customSimulationSpace')
  i7306.simulationSpeed = i7307[19]
  i7306.useUnscaledTime = !!i7307[20]
  i7306.scalingMode = i7307[21]
  i7306.playOnAwake = !!i7307[22]
  i7306.maxParticles = i7307[23]
  i7306.emitterVelocityMode = i7307[24]
  i7306.stopAction = i7307[25]
  return i7306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7308 = root || new pc.MinMaxCurve()
  var i7309 = data
  i7308.mode = i7309[0]
  i7308.curveMin = new pc.AnimationCurve( { keys_flow: i7309[1] } )
  i7308.curveMax = new pc.AnimationCurve( { keys_flow: i7309[2] } )
  i7308.curveMultiplier = i7309[3]
  i7308.constantMin = i7309[4]
  i7308.constantMax = i7309[5]
  return i7308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7310 = root || new pc.MinMaxGradient()
  var i7311 = data
  i7310.mode = i7311[0]
  i7310.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7311[1], i7310.gradientMin)
  i7310.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7311[2], i7310.gradientMax)
  i7310.colorMin = new pc.Color(i7311[3], i7311[4], i7311[5], i7311[6])
  i7310.colorMax = new pc.Color(i7311[7], i7311[8], i7311[9], i7311[10])
  return i7310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7313 = data
  i7312.mode = i7313[0]
  var i7315 = i7313[1]
  var i7314 = []
  for(var i = 0; i < i7315.length; i += 1) {
    i7314.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7315[i + 0]) );
  }
  i7312.colorKeys = i7314
  var i7317 = i7313[2]
  var i7316 = []
  for(var i = 0; i < i7317.length; i += 1) {
    i7316.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7317[i + 0]) );
  }
  i7312.alphaKeys = i7316
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7318 = root || new pc.ParticleSystemColorBySpeed()
  var i7319 = data
  i7318.enabled = !!i7319[0]
  i7318.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7319[1], i7318.color)
  i7318.range = new pc.Vec2( i7319[2], i7319[3] )
  return i7318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7323 = data
  i7322.color = new pc.Color(i7323[0], i7323[1], i7323[2], i7323[3])
  i7322.time = i7323[4]
  return i7322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7327 = data
  i7326.alpha = i7327[0]
  i7326.time = i7327[1]
  return i7326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7328 = root || new pc.ParticleSystemColorOverLifetime()
  var i7329 = data
  i7328.enabled = !!i7329[0]
  i7328.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7329[1], i7328.color)
  return i7328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7330 = root || new pc.ParticleSystemEmitter()
  var i7331 = data
  i7330.enabled = !!i7331[0]
  i7330.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7331[1], i7330.rateOverTime)
  i7330.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7331[2], i7330.rateOverDistance)
  var i7333 = i7331[3]
  var i7332 = []
  for(var i = 0; i < i7333.length; i += 1) {
    i7332.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7333[i + 0]) );
  }
  i7330.bursts = i7332
  return i7330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7336 = root || new pc.ParticleSystemBurst()
  var i7337 = data
  i7336.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7337[0], i7336.count)
  i7336.cycleCount = i7337[1]
  i7336.minCount = i7337[2]
  i7336.maxCount = i7337[3]
  i7336.repeatInterval = i7337[4]
  i7336.time = i7337[5]
  return i7336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7338 = root || new pc.ParticleSystemRotationBySpeed()
  var i7339 = data
  i7338.enabled = !!i7339[0]
  i7338.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7339[1], i7338.x)
  i7338.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7339[2], i7338.y)
  i7338.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7339[3], i7338.z)
  i7338.separateAxes = !!i7339[4]
  i7338.range = new pc.Vec2( i7339[5], i7339[6] )
  return i7338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7340 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7341 = data
  i7340.enabled = !!i7341[0]
  i7340.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7341[1], i7340.x)
  i7340.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7341[2], i7340.y)
  i7340.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7341[3], i7340.z)
  i7340.separateAxes = !!i7341[4]
  return i7340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7342 = root || new pc.ParticleSystemShape()
  var i7343 = data
  i7342.enabled = !!i7343[0]
  i7342.shapeType = i7343[1]
  i7342.randomDirectionAmount = i7343[2]
  i7342.sphericalDirectionAmount = i7343[3]
  i7342.randomPositionAmount = i7343[4]
  i7342.alignToDirection = !!i7343[5]
  i7342.radius = i7343[6]
  i7342.radiusMode = i7343[7]
  i7342.radiusSpread = i7343[8]
  i7342.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7343[9], i7342.radiusSpeed)
  i7342.radiusThickness = i7343[10]
  i7342.angle = i7343[11]
  i7342.length = i7343[12]
  i7342.boxThickness = new pc.Vec3( i7343[13], i7343[14], i7343[15] )
  i7342.meshShapeType = i7343[16]
  request.r(i7343[17], i7343[18], 0, i7342, 'mesh')
  request.r(i7343[19], i7343[20], 0, i7342, 'meshRenderer')
  request.r(i7343[21], i7343[22], 0, i7342, 'skinnedMeshRenderer')
  i7342.useMeshMaterialIndex = !!i7343[23]
  i7342.meshMaterialIndex = i7343[24]
  i7342.useMeshColors = !!i7343[25]
  i7342.normalOffset = i7343[26]
  i7342.arc = i7343[27]
  i7342.arcMode = i7343[28]
  i7342.arcSpread = i7343[29]
  i7342.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7343[30], i7342.arcSpeed)
  i7342.donutRadius = i7343[31]
  i7342.position = new pc.Vec3( i7343[32], i7343[33], i7343[34] )
  i7342.rotation = new pc.Vec3( i7343[35], i7343[36], i7343[37] )
  i7342.scale = new pc.Vec3( i7343[38], i7343[39], i7343[40] )
  return i7342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7344 = root || new pc.ParticleSystemSizeBySpeed()
  var i7345 = data
  i7344.enabled = !!i7345[0]
  i7344.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7345[1], i7344.x)
  i7344.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7345[2], i7344.y)
  i7344.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7345[3], i7344.z)
  i7344.separateAxes = !!i7345[4]
  i7344.range = new pc.Vec2( i7345[5], i7345[6] )
  return i7344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7346 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7347 = data
  i7346.enabled = !!i7347[0]
  i7346.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7347[1], i7346.x)
  i7346.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7347[2], i7346.y)
  i7346.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7347[3], i7346.z)
  i7346.separateAxes = !!i7347[4]
  return i7346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7348 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7349 = data
  i7348.enabled = !!i7349[0]
  i7348.mode = i7349[1]
  i7348.animation = i7349[2]
  i7348.numTilesX = i7349[3]
  i7348.numTilesY = i7349[4]
  i7348.useRandomRow = !!i7349[5]
  i7348.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7349[6], i7348.frameOverTime)
  i7348.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7349[7], i7348.startFrame)
  i7348.cycleCount = i7349[8]
  i7348.rowIndex = i7349[9]
  i7348.flipU = i7349[10]
  i7348.flipV = i7349[11]
  i7348.spriteCount = i7349[12]
  var i7351 = i7349[13]
  var i7350 = []
  for(var i = 0; i < i7351.length; i += 2) {
  request.r(i7351[i + 0], i7351[i + 1], 2, i7350, '')
  }
  i7348.sprites = i7350
  return i7348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7354 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7355 = data
  i7354.enabled = !!i7355[0]
  i7354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[1], i7354.x)
  i7354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[2], i7354.y)
  i7354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[3], i7354.z)
  i7354.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[4], i7354.radial)
  i7354.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[5], i7354.speedModifier)
  i7354.space = i7355[6]
  i7354.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[7], i7354.orbitalX)
  i7354.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[8], i7354.orbitalY)
  i7354.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[9], i7354.orbitalZ)
  i7354.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[10], i7354.orbitalOffsetX)
  i7354.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[11], i7354.orbitalOffsetY)
  i7354.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7355[12], i7354.orbitalOffsetZ)
  return i7354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7356 = root || new pc.ParticleSystemNoise()
  var i7357 = data
  i7356.enabled = !!i7357[0]
  i7356.separateAxes = !!i7357[1]
  i7356.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[2], i7356.strengthX)
  i7356.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[3], i7356.strengthY)
  i7356.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[4], i7356.strengthZ)
  i7356.frequency = i7357[5]
  i7356.damping = !!i7357[6]
  i7356.octaveCount = i7357[7]
  i7356.octaveMultiplier = i7357[8]
  i7356.octaveScale = i7357[9]
  i7356.quality = i7357[10]
  i7356.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[11], i7356.scrollSpeed)
  i7356.scrollSpeedMultiplier = i7357[12]
  i7356.remapEnabled = !!i7357[13]
  i7356.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[14], i7356.remapX)
  i7356.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[15], i7356.remapY)
  i7356.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[16], i7356.remapZ)
  i7356.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[17], i7356.positionAmount)
  i7356.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[18], i7356.rotationAmount)
  i7356.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7357[19], i7356.sizeAmount)
  return i7356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7358 = root || new pc.ParticleSystemInheritVelocity()
  var i7359 = data
  i7358.enabled = !!i7359[0]
  i7358.mode = i7359[1]
  i7358.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7359[2], i7358.curve)
  return i7358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7360 = root || new pc.ParticleSystemForceOverLifetime()
  var i7361 = data
  i7360.enabled = !!i7361[0]
  i7360.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7361[1], i7360.x)
  i7360.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7361[2], i7360.y)
  i7360.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7361[3], i7360.z)
  i7360.space = i7361[4]
  i7360.randomized = !!i7361[5]
  return i7360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7362 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7363 = data
  i7362.enabled = !!i7363[0]
  i7362.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7363[1], i7362.limit)
  i7362.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7363[2], i7362.limitX)
  i7362.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7363[3], i7362.limitY)
  i7362.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7363[4], i7362.limitZ)
  i7362.dampen = i7363[5]
  i7362.separateAxes = !!i7363[6]
  i7362.space = i7363[7]
  i7362.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7363[8], i7362.drag)
  i7362.multiplyDragByParticleSize = !!i7363[9]
  i7362.multiplyDragByParticleVelocity = !!i7363[10]
  return i7362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7365 = data
  i7364.enabled = !!i7365[0]
  request.r(i7365[1], i7365[2], 0, i7364, 'sharedMaterial')
  var i7367 = i7365[3]
  var i7366 = []
  for(var i = 0; i < i7367.length; i += 2) {
  request.r(i7367[i + 0], i7367[i + 1], 2, i7366, '')
  }
  i7364.sharedMaterials = i7366
  i7364.receiveShadows = !!i7365[4]
  i7364.shadowCastingMode = i7365[5]
  i7364.sortingLayerID = i7365[6]
  i7364.sortingOrder = i7365[7]
  i7364.lightmapIndex = i7365[8]
  i7364.lightmapSceneIndex = i7365[9]
  i7364.lightmapScaleOffset = new pc.Vec4( i7365[10], i7365[11], i7365[12], i7365[13] )
  i7364.lightProbeUsage = i7365[14]
  i7364.reflectionProbeUsage = i7365[15]
  request.r(i7365[16], i7365[17], 0, i7364, 'mesh')
  i7364.meshCount = i7365[18]
  i7364.activeVertexStreamsCount = i7365[19]
  i7364.alignment = i7365[20]
  i7364.renderMode = i7365[21]
  i7364.sortMode = i7365[22]
  i7364.lengthScale = i7365[23]
  i7364.velocityScale = i7365[24]
  i7364.cameraVelocityScale = i7365[25]
  i7364.normalDirection = i7365[26]
  i7364.sortingFudge = i7365[27]
  i7364.minParticleSize = i7365[28]
  i7364.maxParticleSize = i7365[29]
  i7364.pivot = new pc.Vec3( i7365[30], i7365[31], i7365[32] )
  request.r(i7365[33], i7365[34], 0, i7364, 'trailMaterial')
  return i7364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7371 = data
  i7370.name = i7371[0]
  i7370.tagId = i7371[1]
  i7370.enabled = !!i7371[2]
  i7370.isStatic = !!i7371[3]
  i7370.layer = i7371[4]
  return i7370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7372 = root || new pc.UnityMaterial()
  var i7373 = data
  i7372.name = i7373[0]
  request.r(i7373[1], i7373[2], 0, i7372, 'shader')
  i7372.renderQueue = i7373[3]
  i7372.enableInstancing = !!i7373[4]
  var i7375 = i7373[5]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 1) {
    i7374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7375[i + 0]) );
  }
  i7372.floatParameters = i7374
  var i7377 = i7373[6]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 1) {
    i7376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7377[i + 0]) );
  }
  i7372.colorParameters = i7376
  var i7379 = i7373[7]
  var i7378 = []
  for(var i = 0; i < i7379.length; i += 1) {
    i7378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7379[i + 0]) );
  }
  i7372.vectorParameters = i7378
  var i7381 = i7373[8]
  var i7380 = []
  for(var i = 0; i < i7381.length; i += 1) {
    i7380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7381[i + 0]) );
  }
  i7372.textureParameters = i7380
  var i7383 = i7373[9]
  var i7382 = []
  for(var i = 0; i < i7383.length; i += 1) {
    i7382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7383[i + 0]) );
  }
  i7372.materialFlags = i7382
  return i7372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7387 = data
  i7386.name = i7387[0]
  i7386.value = i7387[1]
  return i7386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7391 = data
  i7390.name = i7391[0]
  i7390.value = new pc.Color(i7391[1], i7391[2], i7391[3], i7391[4])
  return i7390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7395 = data
  i7394.name = i7395[0]
  i7394.value = new pc.Vec4( i7395[1], i7395[2], i7395[3], i7395[4] )
  return i7394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7399 = data
  i7398.name = i7399[0]
  request.r(i7399[1], i7399[2], 0, i7398, 'value')
  return i7398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7403 = data
  i7402.name = i7403[0]
  i7402.enabled = !!i7403[1]
  return i7402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7405 = data
  i7404.name = i7405[0]
  i7404.width = i7405[1]
  i7404.height = i7405[2]
  i7404.mipmapCount = i7405[3]
  i7404.anisoLevel = i7405[4]
  i7404.filterMode = i7405[5]
  i7404.hdr = !!i7405[6]
  i7404.format = i7405[7]
  i7404.wrapMode = i7405[8]
  i7404.alphaIsTransparency = !!i7405[9]
  i7404.alphaSource = i7405[10]
  i7404.graphicsFormat = i7405[11]
  i7404.sRGBTexture = !!i7405[12]
  i7404.desiredColorSpace = i7405[13]
  i7404.wrapU = i7405[14]
  i7404.wrapV = i7405[15]
  return i7404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7407 = data
  i7406.name = i7407[0]
  i7406.halfPrecision = !!i7407[1]
  i7406.useUInt32IndexFormat = !!i7407[2]
  i7406.vertexCount = i7407[3]
  i7406.aabb = i7407[4]
  var i7409 = i7407[5]
  var i7408 = []
  for(var i = 0; i < i7409.length; i += 1) {
    i7408.push( !!i7409[i + 0] );
  }
  i7406.streams = i7408
  i7406.vertices = i7407[6]
  var i7411 = i7407[7]
  var i7410 = []
  for(var i = 0; i < i7411.length; i += 1) {
    i7410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7411[i + 0]) );
  }
  i7406.subMeshes = i7410
  var i7413 = i7407[8]
  var i7412 = []
  for(var i = 0; i < i7413.length; i += 16) {
    i7412.push( new pc.Mat4().setData(i7413[i + 0], i7413[i + 1], i7413[i + 2], i7413[i + 3],  i7413[i + 4], i7413[i + 5], i7413[i + 6], i7413[i + 7],  i7413[i + 8], i7413[i + 9], i7413[i + 10], i7413[i + 11],  i7413[i + 12], i7413[i + 13], i7413[i + 14], i7413[i + 15]) );
  }
  i7406.bindposes = i7412
  var i7415 = i7407[9]
  var i7414 = []
  for(var i = 0; i < i7415.length; i += 1) {
    i7414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7415[i + 0]) );
  }
  i7406.blendShapes = i7414
  return i7406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7421 = data
  i7420.triangles = i7421[0]
  return i7420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7427 = data
  i7426.name = i7427[0]
  var i7429 = i7427[1]
  var i7428 = []
  for(var i = 0; i < i7429.length; i += 1) {
    i7428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7429[i + 0]) );
  }
  i7426.frames = i7428
  return i7426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7431 = data
  i7430.pivot = new pc.Vec2( i7431[0], i7431[1] )
  i7430.anchorMin = new pc.Vec2( i7431[2], i7431[3] )
  i7430.anchorMax = new pc.Vec2( i7431[4], i7431[5] )
  i7430.sizeDelta = new pc.Vec2( i7431[6], i7431[7] )
  i7430.anchoredPosition3D = new pc.Vec3( i7431[8], i7431[9], i7431[10] )
  i7430.rotation = new pc.Quat(i7431[11], i7431[12], i7431[13], i7431[14])
  i7430.scale = new pc.Vec3( i7431[15], i7431[16], i7431[17] )
  return i7430
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i7432 = root || request.c( 'ConfettiController' )
  var i7433 = data
  i7432.gameWin = !!i7433[0]
  return i7432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7435 = data
  i7434.cullTransparentMesh = !!i7435[0]
  return i7434
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7436 = root || request.c( 'UnityEngine.UI.Image' )
  var i7437 = data
  request.r(i7437[0], i7437[1], 0, i7436, 'm_Sprite')
  i7436.m_Type = i7437[2]
  i7436.m_PreserveAspect = !!i7437[3]
  i7436.m_FillCenter = !!i7437[4]
  i7436.m_FillMethod = i7437[5]
  i7436.m_FillAmount = i7437[6]
  i7436.m_FillClockwise = !!i7437[7]
  i7436.m_FillOrigin = i7437[8]
  i7436.m_UseSpriteMesh = !!i7437[9]
  i7436.m_PixelsPerUnitMultiplier = i7437[10]
  request.r(i7437[11], i7437[12], 0, i7436, 'm_Material')
  i7436.m_Maskable = !!i7437[13]
  i7436.m_Color = new pc.Color(i7437[14], i7437[15], i7437[16], i7437[17])
  i7436.m_RaycastTarget = !!i7437[18]
  i7436.m_RaycastPadding = new pc.Vec4( i7437[19], i7437[20], i7437[21], i7437[22] )
  return i7436
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i7438 = root || request.c( 'ConfettiFall' )
  var i7439 = data
  i7438.gameWin = !!i7439[0]
  request.r(i7439[1], i7439[2], 0, i7438, 'fallArea')
  i7438.fallDistance = i7439[3]
  i7438.fallDuration = i7439[4]
  i7438.resetDelay = i7439[5]
  i7438.horizontalFlutter = i7439[6]
  i7438.rotationAngle = i7439[7]
  i7438.startDelayMin = i7439[8]
  i7438.startDelayMax = i7439[9]
  return i7438
}

Deserializers["HexBase"] = function (request, data, root) {
  var i7440 = root || request.c( 'HexBase' )
  var i7441 = data
  var i7443 = i7441[0]
  var i7442 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i7443.length; i += 2) {
  request.r(i7443[i + 0], i7443[i + 1], 1, i7442, '')
  }
  i7440.nearbyBases = i7442
  request.r(i7441[1], i7441[2], 0, i7440, 'occupiedHex')
  i7440.occupied = !!i7441[3]
  request.r(i7441[4], i7441[5], 0, i7440, 'sparkleVFX')
  request.r(i7441[6], i7441[7], 0, i7440, 'originalColor')
  request.r(i7441[8], i7441[9], 0, i7440, 'clickedColor')
  return i7440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7447 = data
  i7446.center = new pc.Vec3( i7447[0], i7447[1], i7447[2] )
  i7446.size = new pc.Vec3( i7447[3], i7447[4], i7447[5] )
  i7446.enabled = !!i7447[6]
  i7446.isTrigger = !!i7447[7]
  request.r(i7447[8], i7447[9], 0, i7446, 'material')
  return i7446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7449 = data
  request.r(i7449[0], i7449[1], 0, i7448, 'sharedMesh')
  return i7448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7451 = data
  request.r(i7451[0], i7451[1], 0, i7450, 'additionalVertexStreams')
  i7450.enabled = !!i7451[2]
  request.r(i7451[3], i7451[4], 0, i7450, 'sharedMaterial')
  var i7453 = i7451[5]
  var i7452 = []
  for(var i = 0; i < i7453.length; i += 2) {
  request.r(i7453[i + 0], i7453[i + 1], 2, i7452, '')
  }
  i7450.sharedMaterials = i7452
  i7450.receiveShadows = !!i7451[6]
  i7450.shadowCastingMode = i7451[7]
  i7450.sortingLayerID = i7451[8]
  i7450.sortingOrder = i7451[9]
  i7450.lightmapIndex = i7451[10]
  i7450.lightmapSceneIndex = i7451[11]
  i7450.lightmapScaleOffset = new pc.Vec4( i7451[12], i7451[13], i7451[14], i7451[15] )
  i7450.lightProbeUsage = i7451[16]
  i7450.reflectionProbeUsage = i7451[17]
  return i7450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i7454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i7455 = data
  i7454.enabled = !!i7455[0]
  i7454.isTrigger = !!i7455[1]
  request.r(i7455[2], i7455[3], 0, i7454, 'material')
  request.r(i7455[4], i7455[5], 0, i7454, 'sharedMesh')
  i7454.convex = !!i7455[6]
  return i7454
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i7456 = root || request.c( 'HexGroup' )
  var i7457 = data
  i7456.GroupType = i7457[0]
  i7456.stackColor = i7457[1]
  i7456.draggerNum = i7457[2]
  i7456.boardStack = !!i7457[3]
  request.r(i7457[4], i7457[5], 0, i7456, 'dragReference')
  i7456.isTweening = !!i7457[6]
  i7456.isEmptying = !!i7457[7]
  i7456.isTransferring = !!i7457[8]
  var i7459 = i7457[9]
  var i7458 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i7459.length; i += 2) {
  request.r(i7459[i + 0], i7459[i + 1], 1, i7458, '')
  }
  i7456.nearbyHex = i7458
  i7456.PerTile = i7457[10]
  i7456.tilesNeeded = i7457[11]
  i7456.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i7457[12] )
  var i7461 = i7457[13]
  var i7460 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i7461.length; i += 2) {
  request.r(i7461[i + 0], i7461[i + 1], 1, i7460, '')
  }
  i7456.HexTiles = i7460
  request.r(i7457[14], i7457[15], 0, i7456, 'pointsPos')
  request.r(i7457[16], i7457[17], 0, i7456, 'pointsTxt')
  request.r(i7457[18], i7457[19], 0, i7456, 'pointsPrefab')
  i7456.oldPosition = new pc.Vec3( i7457[20], i7457[21], i7457[22] )
  i7456.isDragging = !!i7457[23]
  i7456.TransferTime = i7457[24]
  i7456.TransferDelay = i7457[25]
  i7456.MergeTime = i7457[26]
  i7456.MergeDelay = i7457[27]
  return i7456
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i7466 = root || request.c( 'HexTiles' )
  var i7467 = data
  i7466.tileColor = i7467[0]
  return i7466
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i7468 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i7469 = data
  i7468.m_hasFontAssetChanged = !!i7469[0]
  request.r(i7469[1], i7469[2], 0, i7468, 'm_baseMaterial')
  i7468.m_maskOffset = new pc.Vec4( i7469[3], i7469[4], i7469[5], i7469[6] )
  i7468.m_text = i7469[7]
  i7468.m_isRightToLeft = !!i7469[8]
  request.r(i7469[9], i7469[10], 0, i7468, 'm_fontAsset')
  request.r(i7469[11], i7469[12], 0, i7468, 'm_sharedMaterial')
  var i7471 = i7469[13]
  var i7470 = []
  for(var i = 0; i < i7471.length; i += 2) {
  request.r(i7471[i + 0], i7471[i + 1], 2, i7470, '')
  }
  i7468.m_fontSharedMaterials = i7470
  request.r(i7469[14], i7469[15], 0, i7468, 'm_fontMaterial')
  var i7473 = i7469[16]
  var i7472 = []
  for(var i = 0; i < i7473.length; i += 2) {
  request.r(i7473[i + 0], i7473[i + 1], 2, i7472, '')
  }
  i7468.m_fontMaterials = i7472
  i7468.m_fontColor32 = UnityEngine.Color32.ConstructColor(i7469[17], i7469[18], i7469[19], i7469[20])
  i7468.m_fontColor = new pc.Color(i7469[21], i7469[22], i7469[23], i7469[24])
  i7468.m_enableVertexGradient = !!i7469[25]
  i7468.m_colorMode = i7469[26]
  i7468.m_fontColorGradient = request.d('TMPro.VertexGradient', i7469[27], i7468.m_fontColorGradient)
  request.r(i7469[28], i7469[29], 0, i7468, 'm_fontColorGradientPreset')
  request.r(i7469[30], i7469[31], 0, i7468, 'm_spriteAsset')
  i7468.m_tintAllSprites = !!i7469[32]
  request.r(i7469[33], i7469[34], 0, i7468, 'm_StyleSheet')
  i7468.m_TextStyleHashCode = i7469[35]
  i7468.m_overrideHtmlColors = !!i7469[36]
  i7468.m_faceColor = UnityEngine.Color32.ConstructColor(i7469[37], i7469[38], i7469[39], i7469[40])
  i7468.m_fontSize = i7469[41]
  i7468.m_fontSizeBase = i7469[42]
  i7468.m_fontWeight = i7469[43]
  i7468.m_enableAutoSizing = !!i7469[44]
  i7468.m_fontSizeMin = i7469[45]
  i7468.m_fontSizeMax = i7469[46]
  i7468.m_fontStyle = i7469[47]
  i7468.m_HorizontalAlignment = i7469[48]
  i7468.m_VerticalAlignment = i7469[49]
  i7468.m_textAlignment = i7469[50]
  i7468.m_characterSpacing = i7469[51]
  i7468.m_wordSpacing = i7469[52]
  i7468.m_lineSpacing = i7469[53]
  i7468.m_lineSpacingMax = i7469[54]
  i7468.m_paragraphSpacing = i7469[55]
  i7468.m_charWidthMaxAdj = i7469[56]
  i7468.m_enableWordWrapping = !!i7469[57]
  i7468.m_wordWrappingRatios = i7469[58]
  i7468.m_overflowMode = i7469[59]
  request.r(i7469[60], i7469[61], 0, i7468, 'm_linkedTextComponent')
  request.r(i7469[62], i7469[63], 0, i7468, 'parentLinkedComponent')
  i7468.m_enableKerning = !!i7469[64]
  i7468.m_enableExtraPadding = !!i7469[65]
  i7468.checkPaddingRequired = !!i7469[66]
  i7468.m_isRichText = !!i7469[67]
  i7468.m_parseCtrlCharacters = !!i7469[68]
  i7468.m_isOrthographic = !!i7469[69]
  i7468.m_isCullingEnabled = !!i7469[70]
  i7468.m_horizontalMapping = i7469[71]
  i7468.m_verticalMapping = i7469[72]
  i7468.m_uvLineOffset = i7469[73]
  i7468.m_geometrySortingOrder = i7469[74]
  i7468.m_IsTextObjectScaleStatic = !!i7469[75]
  i7468.m_VertexBufferAutoSizeReduction = !!i7469[76]
  i7468.m_useMaxVisibleDescender = !!i7469[77]
  i7468.m_pageToDisplay = i7469[78]
  i7468.m_margin = new pc.Vec4( i7469[79], i7469[80], i7469[81], i7469[82] )
  i7468.m_isUsingLegacyAnimationComponent = !!i7469[83]
  i7468.m_isVolumetricText = !!i7469[84]
  request.r(i7469[85], i7469[86], 0, i7468, 'm_Material')
  i7468.m_Maskable = !!i7469[87]
  i7468.m_Color = new pc.Color(i7469[88], i7469[89], i7469[90], i7469[91])
  i7468.m_RaycastTarget = !!i7469[92]
  i7468.m_RaycastPadding = new pc.Vec4( i7469[93], i7469[94], i7469[95], i7469[96] )
  return i7468
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i7474 = root || request.c( 'TMPro.VertexGradient' )
  var i7475 = data
  i7474.topLeft = new pc.Color(i7475[0], i7475[1], i7475[2], i7475[3])
  i7474.topRight = new pc.Color(i7475[4], i7475[5], i7475[6], i7475[7])
  i7474.bottomLeft = new pc.Color(i7475[8], i7475[9], i7475[10], i7475[11])
  i7474.bottomRight = new pc.Color(i7475[12], i7475[13], i7475[14], i7475[15])
  return i7474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7477 = data
  i7476.name = i7477[0]
  i7476.atlasId = i7477[1]
  i7476.mipmapCount = i7477[2]
  i7476.hdr = !!i7477[3]
  i7476.size = i7477[4]
  i7476.anisoLevel = i7477[5]
  i7476.filterMode = i7477[6]
  var i7479 = i7477[7]
  var i7478 = []
  for(var i = 0; i < i7479.length; i += 4) {
    i7478.push( UnityEngine.Rect.MinMaxRect(i7479[i + 0], i7479[i + 1], i7479[i + 2], i7479[i + 3]) );
  }
  i7476.rects = i7478
  i7476.wrapU = i7477[8]
  i7476.wrapV = i7477[9]
  return i7476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7483 = data
  i7482.name = i7483[0]
  i7482.index = i7483[1]
  i7482.startup = !!i7483[2]
  return i7482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7485 = data
  i7484.enabled = !!i7485[0]
  i7484.aspect = i7485[1]
  i7484.orthographic = !!i7485[2]
  i7484.orthographicSize = i7485[3]
  i7484.backgroundColor = new pc.Color(i7485[4], i7485[5], i7485[6], i7485[7])
  i7484.nearClipPlane = i7485[8]
  i7484.farClipPlane = i7485[9]
  i7484.fieldOfView = i7485[10]
  i7484.depth = i7485[11]
  i7484.clearFlags = i7485[12]
  i7484.cullingMask = i7485[13]
  i7484.rect = i7485[14]
  request.r(i7485[15], i7485[16], 0, i7484, 'targetTexture')
  i7484.usePhysicalProperties = !!i7485[17]
  i7484.focalLength = i7485[18]
  i7484.sensorSize = new pc.Vec2( i7485[19], i7485[20] )
  i7484.lensShift = new pc.Vec2( i7485[21], i7485[22] )
  i7484.gateFit = i7485[23]
  i7484.commandBufferCount = i7485[24]
  i7484.cameraType = i7485[25]
  return i7484
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i7486 = root || request.c( 'CameraInfo' )
  var i7487 = data
  i7486.IntroCamera = !!i7487[0]
  var i7489 = i7487[1]
  var i7488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7489.length; i += 2) {
  request.r(i7489[i + 0], i7489[i + 1], 1, i7488, '')
  }
  i7486.TargetPaths = i7488
  i7486.pathDurations = i7487[2]
  i7486.introTime = i7487[3]
  return i7486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7493 = data
  i7492.enabled = !!i7493[0]
  i7492.type = i7493[1]
  i7492.color = new pc.Color(i7493[2], i7493[3], i7493[4], i7493[5])
  i7492.cullingMask = i7493[6]
  i7492.intensity = i7493[7]
  i7492.range = i7493[8]
  i7492.spotAngle = i7493[9]
  i7492.shadows = i7493[10]
  i7492.shadowNormalBias = i7493[11]
  i7492.shadowBias = i7493[12]
  i7492.shadowStrength = i7493[13]
  i7492.shadowResolution = i7493[14]
  i7492.lightmapBakeType = i7493[15]
  i7492.renderMode = i7493[16]
  request.r(i7493[17], i7493[18], 0, i7492, 'cookie')
  i7492.cookieSize = i7493[19]
  return i7492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7495 = data
  i7494.enabled = !!i7495[0]
  i7494.planeDistance = i7495[1]
  i7494.referencePixelsPerUnit = i7495[2]
  i7494.isFallbackOverlay = !!i7495[3]
  i7494.renderMode = i7495[4]
  i7494.renderOrder = i7495[5]
  i7494.sortingLayerName = i7495[6]
  i7494.sortingOrder = i7495[7]
  i7494.scaleFactor = i7495[8]
  request.r(i7495[9], i7495[10], 0, i7494, 'worldCamera')
  i7494.overrideSorting = !!i7495[11]
  i7494.pixelPerfect = !!i7495[12]
  i7494.targetDisplay = i7495[13]
  i7494.overridePixelPerfect = !!i7495[14]
  return i7494
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7496 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7497 = data
  i7496.m_UiScaleMode = i7497[0]
  i7496.m_ReferencePixelsPerUnit = i7497[1]
  i7496.m_ScaleFactor = i7497[2]
  i7496.m_ReferenceResolution = new pc.Vec2( i7497[3], i7497[4] )
  i7496.m_ScreenMatchMode = i7497[5]
  i7496.m_MatchWidthOrHeight = i7497[6]
  i7496.m_PhysicalUnit = i7497[7]
  i7496.m_FallbackScreenDPI = i7497[8]
  i7496.m_DefaultSpriteDPI = i7497[9]
  i7496.m_DynamicPixelsPerUnit = i7497[10]
  i7496.m_PresetInfoIsWorld = !!i7497[11]
  return i7496
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7498 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7499 = data
  i7498.m_IgnoreReversedGraphics = !!i7499[0]
  i7498.m_BlockingObjects = i7499[1]
  i7498.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7499[2] )
  return i7498
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i7500 = root || request.c( 'TutorialManager' )
  var i7501 = data
  i7500.IntroAnim = !!i7501[0]
  request.r(i7501[1], i7501[2], 0, i7500, 'handTool')
  request.r(i7501[3], i7501[4], 0, i7500, 'tutorialPanel')
  request.r(i7501[5], i7501[6], 0, i7500, 'tutorialText')
  request.r(i7501[7], i7501[8], 0, i7500, 'tutorialTiles')
  request.r(i7501[9], i7501[10], 0, i7500, 'dropTarget')
  i7500.oldStarter = new pc.Vec2( i7501[11], i7501[12] )
  i7500.starterPos = new pc.Vec2( i7501[13], i7501[14] )
  i7500.baseP = new pc.Vec2( i7501[15], i7501[16] )
  request.r(i7501[17], i7501[18], 0, i7500, 'dragger')
  var i7503 = i7501[19]
  var i7502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i7503.length; i += 2) {
  request.r(i7503[i + 0], i7503[i + 1], 1, i7502, '')
  }
  i7500.dragPos = i7502
  var i7505 = i7501[20]
  var i7504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i7505.length; i += 2) {
  request.r(i7505[i + 0], i7505[i + 1], 1, i7504, '')
  }
  i7500.basePos = i7504
  i7500.currentTimer = i7501[21]
  i7500.maxTimer = i7501[22]
  i7500.timerCalled = !!i7501[23]
  return i7500
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i7508 = root || request.c( 'UnityEngine.UI.Mask' )
  var i7509 = data
  i7508.m_ShowMaskGraphic = !!i7509[0]
  return i7508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7511 = data
  i7510.m_Alpha = i7511[0]
  i7510.m_Interactable = !!i7511[1]
  i7510.m_BlocksRaycasts = !!i7511[2]
  i7510.m_IgnoreParentGroups = !!i7511[3]
  i7510.enabled = !!i7511[4]
  return i7510
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7512 = root || request.c( 'UnityEngine.UI.Button' )
  var i7513 = data
  i7512.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7513[0], i7512.m_OnClick)
  i7512.m_Navigation = request.d('UnityEngine.UI.Navigation', i7513[1], i7512.m_Navigation)
  i7512.m_Transition = i7513[2]
  i7512.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7513[3], i7512.m_Colors)
  i7512.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7513[4], i7512.m_SpriteState)
  i7512.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7513[5], i7512.m_AnimationTriggers)
  i7512.m_Interactable = !!i7513[6]
  request.r(i7513[7], i7513[8], 0, i7512, 'm_TargetGraphic')
  return i7512
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7514 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7515 = data
  i7514.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7515[0], i7514.m_PersistentCalls)
  return i7514
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7516 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7517 = data
  var i7519 = i7517[0]
  var i7518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7519.length; i += 1) {
    i7518.add(request.d('UnityEngine.Events.PersistentCall', i7519[i + 0]));
  }
  i7516.m_Calls = i7518
  return i7516
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7522 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7523 = data
  request.r(i7523[0], i7523[1], 0, i7522, 'm_Target')
  i7522.m_TargetAssemblyTypeName = i7523[2]
  i7522.m_MethodName = i7523[3]
  i7522.m_Mode = i7523[4]
  i7522.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7523[5], i7522.m_Arguments)
  i7522.m_CallState = i7523[6]
  return i7522
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7524 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7525 = data
  request.r(i7525[0], i7525[1], 0, i7524, 'm_ObjectArgument')
  i7524.m_ObjectArgumentAssemblyTypeName = i7525[2]
  i7524.m_IntArgument = i7525[3]
  i7524.m_FloatArgument = i7525[4]
  i7524.m_StringArgument = i7525[5]
  i7524.m_BoolArgument = !!i7525[6]
  return i7524
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7526 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7527 = data
  i7526.m_Mode = i7527[0]
  i7526.m_WrapAround = !!i7527[1]
  request.r(i7527[2], i7527[3], 0, i7526, 'm_SelectOnUp')
  request.r(i7527[4], i7527[5], 0, i7526, 'm_SelectOnDown')
  request.r(i7527[6], i7527[7], 0, i7526, 'm_SelectOnLeft')
  request.r(i7527[8], i7527[9], 0, i7526, 'm_SelectOnRight')
  return i7526
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7528 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7529 = data
  i7528.m_NormalColor = new pc.Color(i7529[0], i7529[1], i7529[2], i7529[3])
  i7528.m_HighlightedColor = new pc.Color(i7529[4], i7529[5], i7529[6], i7529[7])
  i7528.m_PressedColor = new pc.Color(i7529[8], i7529[9], i7529[10], i7529[11])
  i7528.m_SelectedColor = new pc.Color(i7529[12], i7529[13], i7529[14], i7529[15])
  i7528.m_DisabledColor = new pc.Color(i7529[16], i7529[17], i7529[18], i7529[19])
  i7528.m_ColorMultiplier = i7529[20]
  i7528.m_FadeDuration = i7529[21]
  return i7528
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7530 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7531 = data
  request.r(i7531[0], i7531[1], 0, i7530, 'm_HighlightedSprite')
  request.r(i7531[2], i7531[3], 0, i7530, 'm_PressedSprite')
  request.r(i7531[4], i7531[5], 0, i7530, 'm_SelectedSprite')
  request.r(i7531[6], i7531[7], 0, i7530, 'm_DisabledSprite')
  return i7530
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7532 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7533 = data
  i7532.m_NormalTrigger = i7533[0]
  i7532.m_HighlightedTrigger = i7533[1]
  i7532.m_PressedTrigger = i7533[2]
  i7532.m_SelectedTrigger = i7533[3]
  i7532.m_DisabledTrigger = i7533[4]
  return i7532
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i7534 = root || request.c( 'LevelManager' )
  var i7535 = data
  i7534.levelPicking = !!i7535[0]
  request.r(i7535[1], i7535[2], 0, i7534, 'gameField')
  request.r(i7535[3], i7535[4], 0, i7534, 'currentLevel')
  request.r(i7535[5], i7535[6], 0, i7534, 'currentTutorial')
  request.r(i7535[7], i7535[8], 0, i7534, 'twoChoices')
  request.r(i7535[9], i7535[10], 0, i7534, 'medChoice')
  request.r(i7535[11], i7535[12], 0, i7534, 'hardChoice')
  request.r(i7535[13], i7535[14], 0, i7534, 'onePos')
  request.r(i7535[15], i7535[16], 0, i7534, 'twoPos')
  request.r(i7535[17], i7535[18], 0, i7534, 'levelLayout')
  request.r(i7535[19], i7535[20], 0, i7534, 'easyLevel')
  request.r(i7535[21], i7535[22], 0, i7534, 'easyTutorial')
  request.r(i7535[23], i7535[24], 0, i7534, 'easySprite')
  request.r(i7535[25], i7535[26], 0, i7534, 'mediumLevel')
  request.r(i7535[27], i7535[28], 0, i7534, 'mediumTutorial')
  request.r(i7535[29], i7535[30], 0, i7534, 'mediumSprite')
  request.r(i7535[31], i7535[32], 0, i7534, 'hardLevel')
  request.r(i7535[33], i7535[34], 0, i7534, 'hardTutorial')
  request.r(i7535[35], i7535[36], 0, i7534, 'hardSprite')
  return i7534
}

Deserializers["ButtonInfo"] = function (request, data, root) {
  var i7536 = root || request.c( 'ButtonInfo' )
  var i7537 = data
  return i7536
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7538 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7539 = data
  request.r(i7539[0], i7539[1], 0, i7538, 'm_FirstSelected')
  i7538.m_sendNavigationEvents = !!i7539[2]
  i7538.m_DragThreshold = i7539[3]
  return i7538
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7540 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7541 = data
  i7540.m_HorizontalAxis = i7541[0]
  i7540.m_VerticalAxis = i7541[1]
  i7540.m_SubmitButton = i7541[2]
  i7540.m_CancelButton = i7541[3]
  i7540.m_InputActionsPerSecond = i7541[4]
  i7540.m_RepeatDelay = i7541[5]
  i7540.m_ForceModuleActive = !!i7541[6]
  i7540.m_SendPointerHoverToParent = !!i7541[7]
  return i7540
}

Deserializers["GameManager"] = function (request, data, root) {
  var i7542 = root || request.c( 'GameManager' )
  var i7543 = data
  var i7545 = i7543[0]
  var i7544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i7545.length; i += 2) {
  request.r(i7545[i + 0], i7545[i + 1], 1, i7544, '')
  }
  i7542.tileMats = i7544
  request.r(i7543[1], i7543[2], 0, i7542, 'Ground')
  var i7547 = i7543[3]
  var i7546 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i7547.length; i += 2) {
  request.r(i7547[i + 0], i7547[i + 1], 1, i7546, '')
  }
  i7542.hexBases = i7546
  var i7549 = i7543[4]
  var i7548 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i7549.length; i += 2) {
  request.r(i7549[i + 0], i7549[i + 1], 1, i7548, '')
  }
  i7542.hexBoard = i7548
  var i7551 = i7543[5]
  var i7550 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i7551.length; i += 2) {
  request.r(i7551[i + 0], i7551[i + 1], 1, i7550, '')
  }
  i7542.hexDraggers = i7550
  var i7553 = i7543[6]
  var i7552 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i7553.length; i += 2) {
  request.r(i7553[i + 0], i7553[i + 1], 1, i7552, '')
  }
  i7542.currentMixers = i7552
  request.r(i7543[7], i7543[8], 0, i7542, 'emptyDrag')
  request.r(i7543[9], i7543[10], 0, i7542, 'currentHexDrag')
  i7542.currentScore = i7543[11]
  i7542.requiredScore = i7543[12]
  request.r(i7543[13], i7543[14], 0, i7542, 'pointsCanvas')
  request.r(i7543[15], i7543[16], 0, i7542, 'levelComplete')
  request.r(i7543[17], i7543[18], 0, i7542, 'hexDragPrefab')
  request.r(i7543[19], i7543[20], 0, i7542, 'hexDragParent')
  request.r(i7543[21], i7543[22], 0, i7542, 'scoreTxt')
  request.r(i7543[23], i7543[24], 0, i7542, 'scoreFill')
  request.r(i7543[25], i7543[26], 0, i7542, 'completeVFX')
  i7542.easyMode = !!i7543[27]
  i7542.mediumMode = !!i7543[28]
  i7542.hardMode = !!i7543[29]
  return i7542
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i7556 = root || request.c( 'AudioManager' )
  var i7557 = data
  request.r(i7557[0], i7557[1], 0, i7556, 'library')
  i7556.sfxPoolSize = i7557[2]
  i7556.sfxMultiplier = i7557[3]
  return i7556
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i7558 = root || request.c( 'CTAManager' )
  var i7559 = data
  i7558.GameOver = !!i7559[0]
  request.r(i7559[1], i7559[2], 0, i7558, 'WinPanel')
  request.r(i7559[3], i7559[4], 0, i7558, 'LosePanel')
  request.r(i7559[5], i7559[6], 0, i7558, 'playNow')
  request.r(i7559[7], i7559[8], 0, i7558, 'tryAgain')
  i7558.iosLink = i7559[9]
  i7558.androidLink = i7559[10]
  return i7558
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i7560 = root || request.c( 'IterationManager' )
  var i7561 = data
  i7560.numClicks = i7561[0]
  i7560.maxNumClicks = i7561[1]
  i7560.Iterations = i7561[2]
  i7560.currentTimer = i7561[3]
  i7560.maxTimer = i7561[4]
  return i7560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7563 = data
  i7562.ambientIntensity = i7563[0]
  i7562.reflectionIntensity = i7563[1]
  i7562.ambientMode = i7563[2]
  i7562.ambientLight = new pc.Color(i7563[3], i7563[4], i7563[5], i7563[6])
  i7562.ambientSkyColor = new pc.Color(i7563[7], i7563[8], i7563[9], i7563[10])
  i7562.ambientGroundColor = new pc.Color(i7563[11], i7563[12], i7563[13], i7563[14])
  i7562.ambientEquatorColor = new pc.Color(i7563[15], i7563[16], i7563[17], i7563[18])
  i7562.fogColor = new pc.Color(i7563[19], i7563[20], i7563[21], i7563[22])
  i7562.fogEndDistance = i7563[23]
  i7562.fogStartDistance = i7563[24]
  i7562.fogDensity = i7563[25]
  i7562.fog = !!i7563[26]
  request.r(i7563[27], i7563[28], 0, i7562, 'skybox')
  i7562.fogMode = i7563[29]
  var i7565 = i7563[30]
  var i7564 = []
  for(var i = 0; i < i7565.length; i += 1) {
    i7564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7565[i + 0]) );
  }
  i7562.lightmaps = i7564
  i7562.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7563[31], i7562.lightProbes)
  i7562.lightmapsMode = i7563[32]
  i7562.mixedBakeMode = i7563[33]
  i7562.environmentLightingMode = i7563[34]
  i7562.ambientProbe = new pc.SphericalHarmonicsL2(i7563[35])
  i7562.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7563[36])
  i7562.useReferenceAmbientProbe = !!i7563[37]
  request.r(i7563[38], i7563[39], 0, i7562, 'customReflection')
  request.r(i7563[40], i7563[41], 0, i7562, 'defaultReflection')
  i7562.defaultReflectionMode = i7563[42]
  i7562.defaultReflectionResolution = i7563[43]
  i7562.sunLightObjectId = i7563[44]
  i7562.pixelLightCount = i7563[45]
  i7562.defaultReflectionHDR = !!i7563[46]
  i7562.hasLightDataAsset = !!i7563[47]
  i7562.hasManualGenerate = !!i7563[48]
  return i7562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7569 = data
  request.r(i7569[0], i7569[1], 0, i7568, 'lightmapColor')
  request.r(i7569[2], i7569[3], 0, i7568, 'lightmapDirection')
  return i7568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7570 = root || new UnityEngine.LightProbes()
  var i7571 = data
  return i7570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7579 = data
  var i7581 = i7579[0]
  var i7580 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7581.length; i += 1) {
    i7580.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7581[i + 0]));
  }
  i7578.ShaderCompilationErrors = i7580
  i7578.name = i7579[1]
  i7578.guid = i7579[2]
  var i7583 = i7579[3]
  var i7582 = []
  for(var i = 0; i < i7583.length; i += 1) {
    i7582.push( i7583[i + 0] );
  }
  i7578.shaderDefinedKeywords = i7582
  var i7585 = i7579[4]
  var i7584 = []
  for(var i = 0; i < i7585.length; i += 1) {
    i7584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7585[i + 0]) );
  }
  i7578.passes = i7584
  var i7587 = i7579[5]
  var i7586 = []
  for(var i = 0; i < i7587.length; i += 1) {
    i7586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7587[i + 0]) );
  }
  i7578.usePasses = i7586
  var i7589 = i7579[6]
  var i7588 = []
  for(var i = 0; i < i7589.length; i += 1) {
    i7588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7589[i + 0]) );
  }
  i7578.defaultParameterValues = i7588
  request.r(i7579[7], i7579[8], 0, i7578, 'unityFallbackShader')
  i7578.readDepth = !!i7579[9]
  i7578.isCreatedByShaderGraph = !!i7579[10]
  i7578.compiled = !!i7579[11]
  return i7578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7593 = data
  i7592.shaderName = i7593[0]
  i7592.errorMessage = i7593[1]
  return i7592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7598 = root || new pc.UnityShaderPass()
  var i7599 = data
  i7598.id = i7599[0]
  i7598.subShaderIndex = i7599[1]
  i7598.name = i7599[2]
  i7598.passType = i7599[3]
  i7598.grabPassTextureName = i7599[4]
  i7598.usePass = !!i7599[5]
  i7598.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[6], i7598.zTest)
  i7598.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[7], i7598.zWrite)
  i7598.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[8], i7598.culling)
  i7598.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7599[9], i7598.blending)
  i7598.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7599[10], i7598.alphaBlending)
  i7598.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[11], i7598.colorWriteMask)
  i7598.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[12], i7598.offsetUnits)
  i7598.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[13], i7598.offsetFactor)
  i7598.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[14], i7598.stencilRef)
  i7598.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[15], i7598.stencilReadMask)
  i7598.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7599[16], i7598.stencilWriteMask)
  i7598.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7599[17], i7598.stencilOp)
  i7598.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7599[18], i7598.stencilOpFront)
  i7598.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7599[19], i7598.stencilOpBack)
  var i7601 = i7599[20]
  var i7600 = []
  for(var i = 0; i < i7601.length; i += 1) {
    i7600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7601[i + 0]) );
  }
  i7598.tags = i7600
  var i7603 = i7599[21]
  var i7602 = []
  for(var i = 0; i < i7603.length; i += 1) {
    i7602.push( i7603[i + 0] );
  }
  i7598.passDefinedKeywords = i7602
  var i7605 = i7599[22]
  var i7604 = []
  for(var i = 0; i < i7605.length; i += 1) {
    i7604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7605[i + 0]) );
  }
  i7598.passDefinedKeywordGroups = i7604
  var i7607 = i7599[23]
  var i7606 = []
  for(var i = 0; i < i7607.length; i += 1) {
    i7606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7607[i + 0]) );
  }
  i7598.variants = i7606
  var i7609 = i7599[24]
  var i7608 = []
  for(var i = 0; i < i7609.length; i += 1) {
    i7608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7609[i + 0]) );
  }
  i7598.excludedVariants = i7608
  i7598.hasDepthReader = !!i7599[25]
  return i7598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7611 = data
  i7610.val = i7611[0]
  i7610.name = i7611[1]
  return i7610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7613 = data
  i7612.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7613[0], i7612.src)
  i7612.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7613[1], i7612.dst)
  i7612.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7613[2], i7612.op)
  return i7612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7615 = data
  i7614.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7615[0], i7614.pass)
  i7614.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7615[1], i7614.fail)
  i7614.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7615[2], i7614.zFail)
  i7614.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7615[3], i7614.comp)
  return i7614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7619 = data
  i7618.name = i7619[0]
  i7618.value = i7619[1]
  return i7618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7623 = data
  var i7625 = i7623[0]
  var i7624 = []
  for(var i = 0; i < i7625.length; i += 1) {
    i7624.push( i7625[i + 0] );
  }
  i7622.keywords = i7624
  i7622.hasDiscard = !!i7623[1]
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7629 = data
  i7628.passId = i7629[0]
  i7628.subShaderIndex = i7629[1]
  var i7631 = i7629[2]
  var i7630 = []
  for(var i = 0; i < i7631.length; i += 1) {
    i7630.push( i7631[i + 0] );
  }
  i7628.keywords = i7630
  i7628.vertexProgram = i7629[3]
  i7628.fragmentProgram = i7629[4]
  i7628.exportedForWebGl2 = !!i7629[5]
  i7628.readDepth = !!i7629[6]
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7635 = data
  request.r(i7635[0], i7635[1], 0, i7634, 'shader')
  i7634.pass = i7635[2]
  return i7634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7639 = data
  i7638.name = i7639[0]
  i7638.type = i7639[1]
  i7638.value = new pc.Vec4( i7639[2], i7639[3], i7639[4], i7639[5] )
  i7638.textureValue = i7639[6]
  i7638.shaderPropertyFlag = i7639[7]
  return i7638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7641 = data
  i7640.name = i7641[0]
  request.r(i7641[1], i7641[2], 0, i7640, 'texture')
  i7640.aabb = i7641[3]
  i7640.vertices = i7641[4]
  i7640.triangles = i7641[5]
  i7640.textureRect = UnityEngine.Rect.MinMaxRect(i7641[6], i7641[7], i7641[8], i7641[9])
  i7640.packedRect = UnityEngine.Rect.MinMaxRect(i7641[10], i7641[11], i7641[12], i7641[13])
  i7640.border = new pc.Vec4( i7641[14], i7641[15], i7641[16], i7641[17] )
  i7640.transparency = i7641[18]
  i7640.bounds = i7641[19]
  i7640.pixelsPerUnit = i7641[20]
  i7640.textureWidth = i7641[21]
  i7640.textureHeight = i7641[22]
  i7640.nativeSize = new pc.Vec2( i7641[23], i7641[24] )
  i7640.pivot = new pc.Vec2( i7641[25], i7641[26] )
  i7640.textureRectOffset = new pc.Vec2( i7641[27], i7641[28] )
  return i7640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7643 = data
  i7642.name = i7643[0]
  return i7642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7645 = data
  i7644.name = i7645[0]
  i7644.ascent = i7645[1]
  i7644.originalLineHeight = i7645[2]
  i7644.fontSize = i7645[3]
  var i7647 = i7645[4]
  var i7646 = []
  for(var i = 0; i < i7647.length; i += 1) {
    i7646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7647[i + 0]) );
  }
  i7644.characterInfo = i7646
  request.r(i7645[5], i7645[6], 0, i7644, 'texture')
  i7644.originalFontSize = i7645[7]
  return i7644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7651 = data
  i7650.index = i7651[0]
  i7650.advance = i7651[1]
  i7650.bearing = i7651[2]
  i7650.glyphWidth = i7651[3]
  i7650.glyphHeight = i7651[4]
  i7650.minX = i7651[5]
  i7650.maxX = i7651[6]
  i7650.minY = i7651[7]
  i7650.maxY = i7651[8]
  i7650.uvBottomLeftX = i7651[9]
  i7650.uvBottomLeftY = i7651[10]
  i7650.uvBottomRightX = i7651[11]
  i7650.uvBottomRightY = i7651[12]
  i7650.uvTopLeftX = i7651[13]
  i7650.uvTopLeftY = i7651[14]
  i7650.uvTopRightX = i7651[15]
  i7650.uvTopRightY = i7651[16]
  return i7650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i7652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i7653 = data
  i7652.name = i7653[0]
  i7652.bytes64 = i7653[1]
  i7652.data = i7653[2]
  return i7652
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i7654 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i7655 = data
  i7654.hashCode = i7655[0]
  request.r(i7655[1], i7655[2], 0, i7654, 'material')
  i7654.materialHashCode = i7655[3]
  request.r(i7655[4], i7655[5], 0, i7654, 'atlas')
  i7654.normalStyle = i7655[6]
  i7654.normalSpacingOffset = i7655[7]
  i7654.boldStyle = i7655[8]
  i7654.boldSpacing = i7655[9]
  i7654.italicStyle = i7655[10]
  i7654.tabSize = i7655[11]
  i7654.m_Version = i7655[12]
  i7654.m_SourceFontFileGUID = i7655[13]
  request.r(i7655[14], i7655[15], 0, i7654, 'm_SourceFontFile_EditorRef')
  request.r(i7655[16], i7655[17], 0, i7654, 'm_SourceFontFile')
  i7654.m_AtlasPopulationMode = i7655[18]
  i7654.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7655[19], i7654.m_FaceInfo)
  var i7657 = i7655[20]
  var i7656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i7657.length; i += 1) {
    i7656.add(request.d('UnityEngine.TextCore.Glyph', i7657[i + 0]));
  }
  i7654.m_GlyphTable = i7656
  var i7659 = i7655[21]
  var i7658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i7659.length; i += 1) {
    i7658.add(request.d('TMPro.TMP_Character', i7659[i + 0]));
  }
  i7654.m_CharacterTable = i7658
  var i7661 = i7655[22]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 2) {
  request.r(i7661[i + 0], i7661[i + 1], 2, i7660, '')
  }
  i7654.m_AtlasTextures = i7660
  i7654.m_AtlasTextureIndex = i7655[23]
  i7654.m_IsMultiAtlasTexturesEnabled = !!i7655[24]
  i7654.m_ClearDynamicDataOnBuild = !!i7655[25]
  var i7663 = i7655[26]
  var i7662 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7663.length; i += 1) {
    i7662.add(request.d('UnityEngine.TextCore.GlyphRect', i7663[i + 0]));
  }
  i7654.m_UsedGlyphRects = i7662
  var i7665 = i7655[27]
  var i7664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i7665.length; i += 1) {
    i7664.add(request.d('UnityEngine.TextCore.GlyphRect', i7665[i + 0]));
  }
  i7654.m_FreeGlyphRects = i7664
  i7654.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i7655[28], i7654.m_fontInfo)
  i7654.m_AtlasWidth = i7655[29]
  i7654.m_AtlasHeight = i7655[30]
  i7654.m_AtlasPadding = i7655[31]
  i7654.m_AtlasRenderMode = i7655[32]
  var i7667 = i7655[33]
  var i7666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i7667.length; i += 1) {
    i7666.add(request.d('TMPro.TMP_Glyph', i7667[i + 0]));
  }
  i7654.m_glyphInfoList = i7666
  i7654.m_KerningTable = request.d('TMPro.KerningTable', i7655[34], i7654.m_KerningTable)
  i7654.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i7655[35], i7654.m_FontFeatureTable)
  var i7669 = i7655[36]
  var i7668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7669.length; i += 2) {
  request.r(i7669[i + 0], i7669[i + 1], 1, i7668, '')
  }
  i7654.fallbackFontAssets = i7668
  var i7671 = i7655[37]
  var i7670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7671.length; i += 2) {
  request.r(i7671[i + 0], i7671[i + 1], 1, i7670, '')
  }
  i7654.m_FallbackFontAssetTable = i7670
  i7654.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i7655[38], i7654.m_CreationSettings)
  var i7673 = i7655[39]
  var i7672 = []
  for(var i = 0; i < i7673.length; i += 1) {
    i7672.push( request.d('TMPro.TMP_FontWeightPair', i7673[i + 0]) );
  }
  i7654.m_FontWeightTable = i7672
  var i7675 = i7655[40]
  var i7674 = []
  for(var i = 0; i < i7675.length; i += 1) {
    i7674.push( request.d('TMPro.TMP_FontWeightPair', i7675[i + 0]) );
  }
  i7654.fontWeights = i7674
  return i7654
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i7676 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i7677 = data
  i7676.m_FaceIndex = i7677[0]
  i7676.m_FamilyName = i7677[1]
  i7676.m_StyleName = i7677[2]
  i7676.m_PointSize = i7677[3]
  i7676.m_Scale = i7677[4]
  i7676.m_UnitsPerEM = i7677[5]
  i7676.m_LineHeight = i7677[6]
  i7676.m_AscentLine = i7677[7]
  i7676.m_CapLine = i7677[8]
  i7676.m_MeanLine = i7677[9]
  i7676.m_Baseline = i7677[10]
  i7676.m_DescentLine = i7677[11]
  i7676.m_SuperscriptOffset = i7677[12]
  i7676.m_SuperscriptSize = i7677[13]
  i7676.m_SubscriptOffset = i7677[14]
  i7676.m_SubscriptSize = i7677[15]
  i7676.m_UnderlineOffset = i7677[16]
  i7676.m_UnderlineThickness = i7677[17]
  i7676.m_StrikethroughOffset = i7677[18]
  i7676.m_StrikethroughThickness = i7677[19]
  i7676.m_TabWidth = i7677[20]
  return i7676
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i7680 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i7681 = data
  i7680.m_Index = i7681[0]
  i7680.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7681[1], i7680.m_Metrics)
  i7680.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7681[2], i7680.m_GlyphRect)
  i7680.m_Scale = i7681[3]
  i7680.m_AtlasIndex = i7681[4]
  i7680.m_ClassDefinitionType = i7681[5]
  return i7680
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i7682 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i7683 = data
  i7682.m_Width = i7683[0]
  i7682.m_Height = i7683[1]
  i7682.m_HorizontalBearingX = i7683[2]
  i7682.m_HorizontalBearingY = i7683[3]
  i7682.m_HorizontalAdvance = i7683[4]
  return i7682
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i7684 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i7685 = data
  i7684.m_X = i7685[0]
  i7684.m_Y = i7685[1]
  i7684.m_Width = i7685[2]
  i7684.m_Height = i7685[3]
  return i7684
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i7688 = root || request.c( 'TMPro.TMP_Character' )
  var i7689 = data
  i7688.m_ElementType = i7689[0]
  i7688.m_Unicode = i7689[1]
  i7688.m_GlyphIndex = i7689[2]
  i7688.m_Scale = i7689[3]
  return i7688
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i7694 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i7695 = data
  i7694.Name = i7695[0]
  i7694.PointSize = i7695[1]
  i7694.Scale = i7695[2]
  i7694.CharacterCount = i7695[3]
  i7694.LineHeight = i7695[4]
  i7694.Baseline = i7695[5]
  i7694.Ascender = i7695[6]
  i7694.CapHeight = i7695[7]
  i7694.Descender = i7695[8]
  i7694.CenterLine = i7695[9]
  i7694.SuperscriptOffset = i7695[10]
  i7694.SubscriptOffset = i7695[11]
  i7694.SubSize = i7695[12]
  i7694.Underline = i7695[13]
  i7694.UnderlineThickness = i7695[14]
  i7694.strikethrough = i7695[15]
  i7694.strikethroughThickness = i7695[16]
  i7694.TabWidth = i7695[17]
  i7694.Padding = i7695[18]
  i7694.AtlasWidth = i7695[19]
  i7694.AtlasHeight = i7695[20]
  return i7694
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i7698 = root || request.c( 'TMPro.TMP_Glyph' )
  var i7699 = data
  i7698.id = i7699[0]
  i7698.x = i7699[1]
  i7698.y = i7699[2]
  i7698.width = i7699[3]
  i7698.height = i7699[4]
  i7698.xOffset = i7699[5]
  i7698.yOffset = i7699[6]
  i7698.xAdvance = i7699[7]
  i7698.scale = i7699[8]
  return i7698
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i7700 = root || request.c( 'TMPro.KerningTable' )
  var i7701 = data
  var i7703 = i7701[0]
  var i7702 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i7703.length; i += 1) {
    i7702.add(request.d('TMPro.KerningPair', i7703[i + 0]));
  }
  i7700.kerningPairs = i7702
  return i7700
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i7706 = root || request.c( 'TMPro.KerningPair' )
  var i7707 = data
  i7706.xOffset = i7707[0]
  i7706.m_FirstGlyph = i7707[1]
  i7706.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7707[2], i7706.m_FirstGlyphAdjustments)
  i7706.m_SecondGlyph = i7707[3]
  i7706.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i7707[4], i7706.m_SecondGlyphAdjustments)
  i7706.m_IgnoreSpacingAdjustments = !!i7707[5]
  return i7706
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i7708 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i7709 = data
  var i7711 = i7709[0]
  var i7710 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i7711.length; i += 1) {
    i7710.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i7711[i + 0]));
  }
  i7708.m_GlyphPairAdjustmentRecords = i7710
  return i7708
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i7714 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i7715 = data
  i7714.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7715[0], i7714.m_FirstAdjustmentRecord)
  i7714.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i7715[1], i7714.m_SecondAdjustmentRecord)
  i7714.m_FeatureLookupFlags = i7715[2]
  return i7714
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i7718 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i7719 = data
  i7718.sourceFontFileName = i7719[0]
  i7718.sourceFontFileGUID = i7719[1]
  i7718.pointSizeSamplingMode = i7719[2]
  i7718.pointSize = i7719[3]
  i7718.padding = i7719[4]
  i7718.packingMode = i7719[5]
  i7718.atlasWidth = i7719[6]
  i7718.atlasHeight = i7719[7]
  i7718.characterSetSelectionMode = i7719[8]
  i7718.characterSequence = i7719[9]
  i7718.referencedFontAssetGUID = i7719[10]
  i7718.referencedTextAssetGUID = i7719[11]
  i7718.fontStyle = i7719[12]
  i7718.fontStyleModifier = i7719[13]
  i7718.renderMode = i7719[14]
  i7718.includeFontFeatures = !!i7719[15]
  return i7718
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i7722 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i7723 = data
  request.r(i7723[0], i7723[1], 0, i7722, 'regularTypeface')
  request.r(i7723[2], i7723[3], 0, i7722, 'italicTypeface')
  return i7722
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i7724 = root || request.c( 'AudioLibrary' )
  var i7725 = data
  var i7727 = i7725[0]
  var i7726 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i7727.length; i += 1) {
    i7726.add(request.d('AudioLibrary+ClipEntry', i7727[i + 0]));
  }
  i7724.clips = i7726
  return i7724
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i7730 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i7731 = data
  i7730.key = i7731[0]
  i7730.channel = i7731[1]
  request.r(i7731[2], i7731[3], 0, i7730, 'clip')
  i7730.volume = i7731[4]
  i7730.loop = !!i7731[5]
  return i7730
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7732 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7733 = data
  i7732.useSafeMode = !!i7733[0]
  i7732.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7733[1], i7732.safeModeOptions)
  i7732.timeScale = i7733[2]
  i7732.unscaledTimeScale = i7733[3]
  i7732.useSmoothDeltaTime = !!i7733[4]
  i7732.maxSmoothUnscaledTime = i7733[5]
  i7732.rewindCallbackMode = i7733[6]
  i7732.showUnityEditorReport = !!i7733[7]
  i7732.logBehaviour = i7733[8]
  i7732.drawGizmos = !!i7733[9]
  i7732.defaultRecyclable = !!i7733[10]
  i7732.defaultAutoPlay = i7733[11]
  i7732.defaultUpdateType = i7733[12]
  i7732.defaultTimeScaleIndependent = !!i7733[13]
  i7732.defaultEaseType = i7733[14]
  i7732.defaultEaseOvershootOrAmplitude = i7733[15]
  i7732.defaultEasePeriod = i7733[16]
  i7732.defaultAutoKill = !!i7733[17]
  i7732.defaultLoopType = i7733[18]
  i7732.debugMode = !!i7733[19]
  i7732.debugStoreTargetId = !!i7733[20]
  i7732.showPreviewPanel = !!i7733[21]
  i7732.storeSettingsLocation = i7733[22]
  i7732.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7733[23], i7732.modules)
  i7732.createASMDEF = !!i7733[24]
  i7732.showPlayingTweens = !!i7733[25]
  i7732.showPausedTweens = !!i7733[26]
  return i7732
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7734 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7735 = data
  i7734.logBehaviour = i7735[0]
  i7734.nestedTweenFailureBehaviour = i7735[1]
  return i7734
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7736 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7737 = data
  i7736.showPanel = !!i7737[0]
  i7736.audioEnabled = !!i7737[1]
  i7736.physicsEnabled = !!i7737[2]
  i7736.physics2DEnabled = !!i7737[3]
  i7736.spriteEnabled = !!i7737[4]
  i7736.uiEnabled = !!i7737[5]
  i7736.textMeshProEnabled = !!i7737[6]
  i7736.tk2DEnabled = !!i7737[7]
  i7736.deAudioEnabled = !!i7737[8]
  i7736.deUnityExtendedEnabled = !!i7737[9]
  i7736.epoOutlineEnabled = !!i7737[10]
  return i7736
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i7738 = root || request.c( 'TMPro.TMP_Settings' )
  var i7739 = data
  i7738.m_enableWordWrapping = !!i7739[0]
  i7738.m_enableKerning = !!i7739[1]
  i7738.m_enableExtraPadding = !!i7739[2]
  i7738.m_enableTintAllSprites = !!i7739[3]
  i7738.m_enableParseEscapeCharacters = !!i7739[4]
  i7738.m_EnableRaycastTarget = !!i7739[5]
  i7738.m_GetFontFeaturesAtRuntime = !!i7739[6]
  i7738.m_missingGlyphCharacter = i7739[7]
  i7738.m_warningsDisabled = !!i7739[8]
  request.r(i7739[9], i7739[10], 0, i7738, 'm_defaultFontAsset')
  i7738.m_defaultFontAssetPath = i7739[11]
  i7738.m_defaultFontSize = i7739[12]
  i7738.m_defaultAutoSizeMinRatio = i7739[13]
  i7738.m_defaultAutoSizeMaxRatio = i7739[14]
  i7738.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i7739[15], i7739[16] )
  i7738.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i7739[17], i7739[18] )
  i7738.m_autoSizeTextContainer = !!i7739[19]
  i7738.m_IsTextObjectScaleStatic = !!i7739[20]
  var i7741 = i7739[21]
  var i7740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i7741.length; i += 2) {
  request.r(i7741[i + 0], i7741[i + 1], 1, i7740, '')
  }
  i7738.m_fallbackFontAssets = i7740
  i7738.m_matchMaterialPreset = !!i7739[22]
  request.r(i7739[23], i7739[24], 0, i7738, 'm_defaultSpriteAsset')
  i7738.m_defaultSpriteAssetPath = i7739[25]
  i7738.m_enableEmojiSupport = !!i7739[26]
  i7738.m_MissingCharacterSpriteUnicode = i7739[27]
  i7738.m_defaultColorGradientPresetsPath = i7739[28]
  request.r(i7739[29], i7739[30], 0, i7738, 'm_defaultStyleSheet')
  i7738.m_StyleSheetsResourcePath = i7739[31]
  request.r(i7739[32], i7739[33], 0, i7738, 'm_leadingCharacters')
  request.r(i7739[34], i7739[35], 0, i7738, 'm_followingCharacters')
  i7738.m_UseModernHangulLineBreakingRules = !!i7739[36]
  return i7738
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7742 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i7743 = data
  i7742.m_GlyphIndex = i7743[0]
  i7742.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i7743[1], i7742.m_GlyphValueRecord)
  return i7742
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i7744 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i7745 = data
  i7744.m_XPlacement = i7745[0]
  i7744.m_YPlacement = i7745[1]
  i7744.m_XAdvance = i7745[2]
  i7744.m_YAdvance = i7745[3]
  return i7744
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i7746 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i7747 = data
  i7746.hashCode = i7747[0]
  request.r(i7747[1], i7747[2], 0, i7746, 'material')
  i7746.materialHashCode = i7747[3]
  request.r(i7747[4], i7747[5], 0, i7746, 'spriteSheet')
  var i7749 = i7747[6]
  var i7748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i7749.length; i += 1) {
    i7748.add(request.d('TMPro.TMP_Sprite', i7749[i + 0]));
  }
  i7746.spriteInfoList = i7748
  var i7751 = i7747[7]
  var i7750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i7751.length; i += 2) {
  request.r(i7751[i + 0], i7751[i + 1], 1, i7750, '')
  }
  i7746.fallbackSpriteAssets = i7750
  i7746.m_Version = i7747[8]
  i7746.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i7747[9], i7746.m_FaceInfo)
  var i7753 = i7747[10]
  var i7752 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i7753.length; i += 1) {
    i7752.add(request.d('TMPro.TMP_SpriteCharacter', i7753[i + 0]));
  }
  i7746.m_SpriteCharacterTable = i7752
  var i7755 = i7747[11]
  var i7754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i7755.length; i += 1) {
    i7754.add(request.d('TMPro.TMP_SpriteGlyph', i7755[i + 0]));
  }
  i7746.m_SpriteGlyphTable = i7754
  return i7746
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i7758 = root || request.c( 'TMPro.TMP_Sprite' )
  var i7759 = data
  i7758.name = i7759[0]
  i7758.hashCode = i7759[1]
  i7758.unicode = i7759[2]
  i7758.pivot = new pc.Vec2( i7759[3], i7759[4] )
  request.r(i7759[5], i7759[6], 0, i7758, 'sprite')
  i7758.id = i7759[7]
  i7758.x = i7759[8]
  i7758.y = i7759[9]
  i7758.width = i7759[10]
  i7758.height = i7759[11]
  i7758.xOffset = i7759[12]
  i7758.yOffset = i7759[13]
  i7758.xAdvance = i7759[14]
  i7758.scale = i7759[15]
  return i7758
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i7764 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i7765 = data
  i7764.m_Name = i7765[0]
  i7764.m_HashCode = i7765[1]
  i7764.m_ElementType = i7765[2]
  i7764.m_Unicode = i7765[3]
  i7764.m_GlyphIndex = i7765[4]
  i7764.m_Scale = i7765[5]
  return i7764
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i7768 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i7769 = data
  request.r(i7769[0], i7769[1], 0, i7768, 'sprite')
  i7768.m_Index = i7769[2]
  i7768.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i7769[3], i7768.m_Metrics)
  i7768.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i7769[4], i7768.m_GlyphRect)
  i7768.m_Scale = i7769[5]
  i7768.m_AtlasIndex = i7769[6]
  i7768.m_ClassDefinitionType = i7769[7]
  return i7768
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i7770 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i7771 = data
  var i7773 = i7771[0]
  var i7772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i7773.length; i += 1) {
    i7772.add(request.d('TMPro.TMP_Style', i7773[i + 0]));
  }
  i7770.m_StyleList = i7772
  return i7770
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i7776 = root || request.c( 'TMPro.TMP_Style' )
  var i7777 = data
  i7776.m_Name = i7777[0]
  i7776.m_HashCode = i7777[1]
  i7776.m_OpeningDefinition = i7777[2]
  i7776.m_ClosingDefinition = i7777[3]
  i7776.m_OpeningTagArray = i7777[4]
  i7776.m_ClosingTagArray = i7777[5]
  i7776.m_OpeningTagUnicodeArray = i7777[6]
  i7776.m_ClosingTagUnicodeArray = i7777[7]
  return i7776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7779 = data
  var i7781 = i7779[0]
  var i7780 = []
  for(var i = 0; i < i7781.length; i += 1) {
    i7780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7781[i + 0]) );
  }
  i7778.files = i7780
  i7778.componentToPrefabIds = i7779[1]
  return i7778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7785 = data
  i7784.path = i7785[0]
  request.r(i7785[1], i7785[2], 0, i7784, 'unityObject')
  return i7784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7787 = data
  var i7789 = i7787[0]
  var i7788 = []
  for(var i = 0; i < i7789.length; i += 1) {
    i7788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7789[i + 0]) );
  }
  i7786.scriptsExecutionOrder = i7788
  var i7791 = i7787[1]
  var i7790 = []
  for(var i = 0; i < i7791.length; i += 1) {
    i7790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7791[i + 0]) );
  }
  i7786.sortingLayers = i7790
  var i7793 = i7787[2]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 1) {
    i7792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7793[i + 0]) );
  }
  i7786.cullingLayers = i7792
  i7786.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7787[3], i7786.timeSettings)
  i7786.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7787[4], i7786.physicsSettings)
  i7786.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7787[5], i7786.physics2DSettings)
  i7786.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7787[6], i7786.qualitySettings)
  i7786.enableRealtimeShadows = !!i7787[7]
  i7786.enableAutoInstancing = !!i7787[8]
  i7786.enableDynamicBatching = !!i7787[9]
  i7786.lightmapEncodingQuality = i7787[10]
  i7786.desiredColorSpace = i7787[11]
  var i7795 = i7787[12]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 1) {
    i7794.push( i7795[i + 0] );
  }
  i7786.allTags = i7794
  return i7786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7799 = data
  i7798.name = i7799[0]
  i7798.value = i7799[1]
  return i7798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7803 = data
  i7802.id = i7803[0]
  i7802.name = i7803[1]
  i7802.value = i7803[2]
  return i7802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7807 = data
  i7806.id = i7807[0]
  i7806.name = i7807[1]
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7809 = data
  i7808.fixedDeltaTime = i7809[0]
  i7808.maximumDeltaTime = i7809[1]
  i7808.timeScale = i7809[2]
  i7808.maximumParticleTimestep = i7809[3]
  return i7808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7811 = data
  i7810.gravity = new pc.Vec3( i7811[0], i7811[1], i7811[2] )
  i7810.defaultSolverIterations = i7811[3]
  i7810.bounceThreshold = i7811[4]
  i7810.autoSyncTransforms = !!i7811[5]
  i7810.autoSimulation = !!i7811[6]
  var i7813 = i7811[7]
  var i7812 = []
  for(var i = 0; i < i7813.length; i += 1) {
    i7812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7813[i + 0]) );
  }
  i7810.collisionMatrix = i7812
  return i7810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7817 = data
  i7816.enabled = !!i7817[0]
  i7816.layerId = i7817[1]
  i7816.otherLayerId = i7817[2]
  return i7816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7819 = data
  request.r(i7819[0], i7819[1], 0, i7818, 'material')
  i7818.gravity = new pc.Vec2( i7819[2], i7819[3] )
  i7818.positionIterations = i7819[4]
  i7818.velocityIterations = i7819[5]
  i7818.velocityThreshold = i7819[6]
  i7818.maxLinearCorrection = i7819[7]
  i7818.maxAngularCorrection = i7819[8]
  i7818.maxTranslationSpeed = i7819[9]
  i7818.maxRotationSpeed = i7819[10]
  i7818.baumgarteScale = i7819[11]
  i7818.baumgarteTOIScale = i7819[12]
  i7818.timeToSleep = i7819[13]
  i7818.linearSleepTolerance = i7819[14]
  i7818.angularSleepTolerance = i7819[15]
  i7818.defaultContactOffset = i7819[16]
  i7818.autoSimulation = !!i7819[17]
  i7818.queriesHitTriggers = !!i7819[18]
  i7818.queriesStartInColliders = !!i7819[19]
  i7818.callbacksOnDisable = !!i7819[20]
  i7818.reuseCollisionCallbacks = !!i7819[21]
  i7818.autoSyncTransforms = !!i7819[22]
  var i7821 = i7819[23]
  var i7820 = []
  for(var i = 0; i < i7821.length; i += 1) {
    i7820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7821[i + 0]) );
  }
  i7818.collisionMatrix = i7820
  return i7818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7825 = data
  i7824.enabled = !!i7825[0]
  i7824.layerId = i7825[1]
  i7824.otherLayerId = i7825[2]
  return i7824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7827 = data
  var i7829 = i7827[0]
  var i7828 = []
  for(var i = 0; i < i7829.length; i += 1) {
    i7828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7829[i + 0]) );
  }
  i7826.qualityLevels = i7828
  var i7831 = i7827[1]
  var i7830 = []
  for(var i = 0; i < i7831.length; i += 1) {
    i7830.push( i7831[i + 0] );
  }
  i7826.names = i7830
  i7826.shadows = i7827[2]
  i7826.anisotropicFiltering = i7827[3]
  i7826.antiAliasing = i7827[4]
  i7826.lodBias = i7827[5]
  i7826.shadowCascades = i7827[6]
  i7826.shadowDistance = i7827[7]
  i7826.shadowmaskMode = i7827[8]
  i7826.shadowProjection = i7827[9]
  i7826.shadowResolution = i7827[10]
  i7826.softParticles = !!i7827[11]
  i7826.softVegetation = !!i7827[12]
  i7826.activeColorSpace = i7827[13]
  i7826.desiredColorSpace = i7827[14]
  i7826.masterTextureLimit = i7827[15]
  i7826.maxQueuedFrames = i7827[16]
  i7826.particleRaycastBudget = i7827[17]
  i7826.pixelLightCount = i7827[18]
  i7826.realtimeReflectionProbes = !!i7827[19]
  i7826.shadowCascade2Split = i7827[20]
  i7826.shadowCascade4Split = new pc.Vec3( i7827[21], i7827[22], i7827[23] )
  i7826.streamingMipmapsActive = !!i7827[24]
  i7826.vSyncCount = i7827[25]
  i7826.asyncUploadBufferSize = i7827[26]
  i7826.asyncUploadTimeSlice = i7827[27]
  i7826.billboardsFaceCameraPosition = !!i7827[28]
  i7826.shadowNearPlaneOffset = i7827[29]
  i7826.streamingMipmapsMemoryBudget = i7827[30]
  i7826.maximumLODLevel = i7827[31]
  i7826.streamingMipmapsAddAllCameras = !!i7827[32]
  i7826.streamingMipmapsMaxLevelReduction = i7827[33]
  i7826.streamingMipmapsRenderersPerFrame = i7827[34]
  i7826.resolutionScalingFixedDPIFactor = i7827[35]
  i7826.streamingMipmapsMaxFileIORequests = i7827[36]
  i7826.currentQualityLevel = i7827[37]
  return i7826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7837 = data
  i7836.weight = i7837[0]
  i7836.vertices = i7837[1]
  i7836.normals = i7837[2]
  i7836.tangents = i7837[3]
  return i7836
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7838 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7839 = data
  i7838.xPlacement = i7839[0]
  i7838.yPlacement = i7839[1]
  i7838.xAdvance = i7839[2]
  i7838.yAdvance = i7839[3]
  return i7838
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[25],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[25],"86":[18],"87":[88],"89":[88],"29":[7],"90":[7],"91":[7],"31":[29],"12":[10,7],"92":[7],"30":[29],"93":[7],"94":[7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[7],"34":[7],"100":[7],"101":[10,7],"102":[7],"103":[7],"104":[7],"105":[7],"106":[10,7],"107":[7],"108":[39],"109":[39],"40":[39],"110":[39],"111":[25],"112":[25],"113":[7],"114":[18,7],"23":[7,10],"115":[7],"116":[10,7],"117":[18],"118":[10,7],"119":[7],"120":[121],"122":[121],"123":[121]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","HexBase","UnityEngine.BoxCollider","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","HexGroup","UnityEngine.GameObject","HexTiles","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","CameraInfo","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","LevelManager","ButtonInfo","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","IterationManager","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "13.8";

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

Deserializers.buildID = "e7f619de-c73a-4346-9585-153309c8e299";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

