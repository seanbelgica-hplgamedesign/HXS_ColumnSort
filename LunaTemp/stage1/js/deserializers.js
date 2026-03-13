var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.JointSpring' )
  var i1093 = data
  i1092.spring = i1093[0]
  i1092.damper = i1093[1]
  i1092.targetPosition = i1093[2]
  return i1092
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.JointMotor' )
  var i1095 = data
  i1094.m_TargetVelocity = i1095[0]
  i1094.m_Force = i1095[1]
  i1094.m_FreeSpin = i1095[2]
  return i1094
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.JointLimits' )
  var i1097 = data
  i1096.m_Min = i1097[0]
  i1096.m_Max = i1097[1]
  i1096.m_Bounciness = i1097[2]
  i1096.m_BounceMinVelocity = i1097[3]
  i1096.m_ContactDistance = i1097[4]
  i1096.minBounce = i1097[5]
  i1096.maxBounce = i1097[6]
  return i1096
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.JointDrive' )
  var i1099 = data
  i1098.m_PositionSpring = i1099[0]
  i1098.m_PositionDamper = i1099[1]
  i1098.m_MaximumForce = i1099[2]
  i1098.m_UseAcceleration = i1099[3]
  return i1098
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1101 = data
  i1100.m_Spring = i1101[0]
  i1100.m_Damper = i1101[1]
  return i1100
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1103 = data
  i1102.m_Limit = i1103[0]
  i1102.m_Bounciness = i1103[1]
  i1102.m_ContactDistance = i1103[2]
  return i1102
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1105 = data
  i1104.m_ExtremumSlip = i1105[0]
  i1104.m_ExtremumValue = i1105[1]
  i1104.m_AsymptoteSlip = i1105[2]
  i1104.m_AsymptoteValue = i1105[3]
  i1104.m_Stiffness = i1105[4]
  return i1104
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1107 = data
  i1106.m_LowerAngle = i1107[0]
  i1106.m_UpperAngle = i1107[1]
  return i1106
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1109 = data
  i1108.m_MotorSpeed = i1109[0]
  i1108.m_MaximumMotorTorque = i1109[1]
  return i1108
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1111 = data
  i1110.m_DampingRatio = i1111[0]
  i1110.m_Frequency = i1111[1]
  i1110.m_Angle = i1111[2]
  return i1110
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1113 = data
  i1112.m_LowerTranslation = i1113[0]
  i1112.m_UpperTranslation = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.width = i1115[1]
  i1114.height = i1115[2]
  i1114.mipmapCount = i1115[3]
  i1114.anisoLevel = i1115[4]
  i1114.filterMode = i1115[5]
  i1114.hdr = !!i1115[6]
  i1114.format = i1115[7]
  i1114.wrapMode = i1115[8]
  i1114.alphaIsTransparency = !!i1115[9]
  i1114.alphaSource = i1115[10]
  i1114.graphicsFormat = i1115[11]
  i1114.sRGBTexture = !!i1115[12]
  i1114.desiredColorSpace = i1115[13]
  i1114.wrapU = i1115[14]
  i1114.wrapV = i1115[15]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1117 = data
  i1116.position = new pc.Vec3( i1117[0], i1117[1], i1117[2] )
  i1116.scale = new pc.Vec3( i1117[3], i1117[4], i1117[5] )
  i1116.rotation = new pc.Quat(i1117[6], i1117[7], i1117[8], i1117[9])
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'sharedMesh')
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'additionalVertexStreams')
  i1120.enabled = !!i1121[2]
  request.r(i1121[3], i1121[4], 0, i1120, 'sharedMaterial')
  var i1123 = i1121[5]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.sharedMaterials = i1122
  i1120.receiveShadows = !!i1121[6]
  i1120.shadowCastingMode = i1121[7]
  i1120.sortingLayerID = i1121[8]
  i1120.sortingOrder = i1121[9]
  i1120.lightmapIndex = i1121[10]
  i1120.lightmapSceneIndex = i1121[11]
  i1120.lightmapScaleOffset = new pc.Vec4( i1121[12], i1121[13], i1121[14], i1121[15] )
  i1120.lightProbeUsage = i1121[16]
  i1120.reflectionProbeUsage = i1121[17]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.tagId = i1127[1]
  i1126.enabled = !!i1127[2]
  i1126.isStatic = !!i1127[3]
  i1126.layer = i1127[4]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.halfPrecision = !!i1129[1]
  i1128.useUInt32IndexFormat = !!i1129[2]
  i1128.vertexCount = i1129[3]
  i1128.aabb = i1129[4]
  var i1131 = i1129[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( !!i1131[i + 0] );
  }
  i1128.streams = i1130
  i1128.vertices = i1129[6]
  var i1133 = i1129[7]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1133[i + 0]) );
  }
  i1128.subMeshes = i1132
  var i1135 = i1129[8]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 16) {
    i1134.push( new pc.Mat4().setData(i1135[i + 0], i1135[i + 1], i1135[i + 2], i1135[i + 3],  i1135[i + 4], i1135[i + 5], i1135[i + 6], i1135[i + 7],  i1135[i + 8], i1135[i + 9], i1135[i + 10], i1135[i + 11],  i1135[i + 12], i1135[i + 13], i1135[i + 14], i1135[i + 15]) );
  }
  i1128.bindposes = i1134
  var i1137 = i1129[9]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1137[i + 0]) );
  }
  i1128.blendShapes = i1136
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1143 = data
  i1142.triangles = i1143[0]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1149 = data
  i1148.name = i1149[0]
  var i1151 = i1149[1]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1151[i + 0]) );
  }
  i1148.frames = i1150
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1152 = root || new pc.UnityMaterial()
  var i1153 = data
  i1152.name = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'shader')
  i1152.renderQueue = i1153[3]
  i1152.enableInstancing = !!i1153[4]
  var i1155 = i1153[5]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1155[i + 0]) );
  }
  i1152.floatParameters = i1154
  var i1157 = i1153[6]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1157[i + 0]) );
  }
  i1152.colorParameters = i1156
  var i1159 = i1153[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1159[i + 0]) );
  }
  i1152.vectorParameters = i1158
  var i1161 = i1153[8]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1161[i + 0]) );
  }
  i1152.textureParameters = i1160
  var i1163 = i1153[9]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1163[i + 0]) );
  }
  i1152.materialFlags = i1162
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.value = i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = new pc.Color(i1171[1], i1171[2], i1171[3], i1171[4])
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1175 = data
  i1174.name = i1175[0]
  i1174.value = new pc.Vec4( i1175[1], i1175[2], i1175[3], i1175[4] )
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1179 = data
  i1178.name = i1179[0]
  request.r(i1179[1], i1179[2], 0, i1178, 'value')
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.enabled = !!i1183[1]
  return i1182
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i1184 = root || request.c( 'HexGroup' )
  var i1185 = data
  i1184.GroupType = i1185[0]
  i1184.Replacer = !!i1185[1]
  var i1187 = i1185[2]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 1, i1186, '')
  }
  i1184.nearbyHex = i1186
  i1184.isTweening = !!i1185[3]
  i1184.oneColor = !!i1185[4]
  i1184.oneStack = !!i1185[5]
  i1184.isEmptying = !!i1185[6]
  i1184.draggable = !!i1185[7]
  request.r(i1185[8], i1185[9], 0, i1184, 'topTile')
  request.r(i1185[10], i1185[11], 0, i1184, 'secondTopTile')
  request.r(i1185[12], i1185[13], 0, i1184, 'thirdTopTile')
  var i1189 = i1185[14]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i1189.length; i += 2) {
  request.r(i1189[i + 0], i1189[i + 1], 1, i1188, '')
  }
  i1184.extraSameTiles = i1188
  i1184.stackNum = i1185[15]
  i1184.transferIndex = i1185[16]
  i1184.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1185[17] )
  var i1191 = i1185[18]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1184.HexTiles = i1190
  i1184.oldPosition = new pc.Vec3( i1185[19], i1185[20], i1185[21] )
  i1184.isDragging = !!i1185[22]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1197 = data
  i1196.enabled = !!i1197[0]
  i1196.isTrigger = !!i1197[1]
  request.r(i1197[2], i1197[3], 0, i1196, 'material')
  request.r(i1197[4], i1197[5], 0, i1196, 'sharedMesh')
  i1196.convex = !!i1197[6]
  return i1196
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i1198 = root || request.c( 'HexTiles' )
  var i1199 = data
  i1198.tileColor = i1199[0]
  var i1201 = i1199[1]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 1, i1200, '')
  }
  i1198.singleTile = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1205 = data
  i1204.center = new pc.Vec3( i1205[0], i1205[1], i1205[2] )
  i1204.size = new pc.Vec3( i1205[3], i1205[4], i1205[5] )
  i1204.enabled = !!i1205[6]
  i1204.isTrigger = !!i1205[7]
  request.r(i1205[8], i1205[9], 0, i1204, 'material')
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1207 = data
  i1206.pivot = new pc.Vec2( i1207[0], i1207[1] )
  i1206.anchorMin = new pc.Vec2( i1207[2], i1207[3] )
  i1206.anchorMax = new pc.Vec2( i1207[4], i1207[5] )
  i1206.sizeDelta = new pc.Vec2( i1207[6], i1207[7] )
  i1206.anchoredPosition3D = new pc.Vec3( i1207[8], i1207[9], i1207[10] )
  i1206.rotation = new pc.Quat(i1207[11], i1207[12], i1207[13], i1207[14])
  i1206.scale = new pc.Vec3( i1207[15], i1207[16], i1207[17] )
  return i1206
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i1208 = root || request.c( 'ConfettiController' )
  var i1209 = data
  i1208.gameWin = !!i1209[0]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1211 = data
  i1210.cullTransparentMesh = !!i1211[0]
  return i1210
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.UI.Image' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'm_Sprite')
  i1212.m_Type = i1213[2]
  i1212.m_PreserveAspect = !!i1213[3]
  i1212.m_FillCenter = !!i1213[4]
  i1212.m_FillMethod = i1213[5]
  i1212.m_FillAmount = i1213[6]
  i1212.m_FillClockwise = !!i1213[7]
  i1212.m_FillOrigin = i1213[8]
  i1212.m_UseSpriteMesh = !!i1213[9]
  i1212.m_PixelsPerUnitMultiplier = i1213[10]
  request.r(i1213[11], i1213[12], 0, i1212, 'm_Material')
  i1212.m_Maskable = !!i1213[13]
  i1212.m_Color = new pc.Color(i1213[14], i1213[15], i1213[16], i1213[17])
  i1212.m_RaycastTarget = !!i1213[18]
  i1212.m_RaycastPadding = new pc.Vec4( i1213[19], i1213[20], i1213[21], i1213[22] )
  return i1212
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i1214 = root || request.c( 'ConfettiFall' )
  var i1215 = data
  i1214.gameWin = !!i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'fallArea')
  i1214.fallDistance = i1215[3]
  i1214.fallDuration = i1215[4]
  i1214.resetDelay = i1215[5]
  i1214.horizontalFlutter = i1215[6]
  i1214.rotationAngle = i1215[7]
  i1214.startDelayMin = i1215[8]
  i1214.startDelayMax = i1215[9]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.atlasId = i1217[1]
  i1216.mipmapCount = i1217[2]
  i1216.hdr = !!i1217[3]
  i1216.size = i1217[4]
  i1216.anisoLevel = i1217[5]
  i1216.filterMode = i1217[6]
  var i1219 = i1217[7]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 4) {
    i1218.push( UnityEngine.Rect.MinMaxRect(i1219[i + 0], i1219[i + 1], i1219[i + 2], i1219[i + 3]) );
  }
  i1216.rects = i1218
  i1216.wrapU = i1217[8]
  i1216.wrapV = i1217[9]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1223 = data
  i1222.name = i1223[0]
  i1222.index = i1223[1]
  i1222.startup = !!i1223[2]
  return i1222
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i1224 = root || request.c( 'CameraInfo' )
  var i1225 = data
  i1224.IntroCamera = !!i1225[0]
  request.r(i1225[1], i1225[2], 0, i1224, 'PathParent')
  var i1227 = i1225[3]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1227.length; i += 2) {
  request.r(i1227[i + 0], i1227[i + 1], 1, i1226, '')
  }
  i1224.TargetPaths = i1226
  i1224.pathDurations = i1225[4]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1231 = data
  i1230.enabled = !!i1231[0]
  i1230.aspect = i1231[1]
  i1230.orthographic = !!i1231[2]
  i1230.orthographicSize = i1231[3]
  i1230.backgroundColor = new pc.Color(i1231[4], i1231[5], i1231[6], i1231[7])
  i1230.nearClipPlane = i1231[8]
  i1230.farClipPlane = i1231[9]
  i1230.fieldOfView = i1231[10]
  i1230.depth = i1231[11]
  i1230.clearFlags = i1231[12]
  i1230.cullingMask = i1231[13]
  i1230.rect = i1231[14]
  request.r(i1231[15], i1231[16], 0, i1230, 'targetTexture')
  i1230.usePhysicalProperties = !!i1231[17]
  i1230.focalLength = i1231[18]
  i1230.sensorSize = new pc.Vec2( i1231[19], i1231[20] )
  i1230.lensShift = new pc.Vec2( i1231[21], i1231[22] )
  i1230.gateFit = i1231[23]
  i1230.commandBufferCount = i1231[24]
  i1230.cameraType = i1231[25]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1233 = data
  i1232.enabled = !!i1233[0]
  i1232.type = i1233[1]
  i1232.color = new pc.Color(i1233[2], i1233[3], i1233[4], i1233[5])
  i1232.cullingMask = i1233[6]
  i1232.intensity = i1233[7]
  i1232.range = i1233[8]
  i1232.spotAngle = i1233[9]
  i1232.shadows = i1233[10]
  i1232.shadowNormalBias = i1233[11]
  i1232.shadowBias = i1233[12]
  i1232.shadowStrength = i1233[13]
  i1232.shadowResolution = i1233[14]
  i1232.lightmapBakeType = i1233[15]
  i1232.renderMode = i1233[16]
  request.r(i1233[17], i1233[18], 0, i1232, 'cookie')
  i1232.cookieSize = i1233[19]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1235 = data
  i1234.enabled = !!i1235[0]
  i1234.planeDistance = i1235[1]
  i1234.referencePixelsPerUnit = i1235[2]
  i1234.isFallbackOverlay = !!i1235[3]
  i1234.renderMode = i1235[4]
  i1234.renderOrder = i1235[5]
  i1234.sortingLayerName = i1235[6]
  i1234.sortingOrder = i1235[7]
  i1234.scaleFactor = i1235[8]
  request.r(i1235[9], i1235[10], 0, i1234, 'worldCamera')
  i1234.overrideSorting = !!i1235[11]
  i1234.pixelPerfect = !!i1235[12]
  i1234.targetDisplay = i1235[13]
  i1234.overridePixelPerfect = !!i1235[14]
  return i1234
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1237 = data
  i1236.m_UiScaleMode = i1237[0]
  i1236.m_ReferencePixelsPerUnit = i1237[1]
  i1236.m_ScaleFactor = i1237[2]
  i1236.m_ReferenceResolution = new pc.Vec2( i1237[3], i1237[4] )
  i1236.m_ScreenMatchMode = i1237[5]
  i1236.m_MatchWidthOrHeight = i1237[6]
  i1236.m_PhysicalUnit = i1237[7]
  i1236.m_FallbackScreenDPI = i1237[8]
  i1236.m_DefaultSpriteDPI = i1237[9]
  i1236.m_DynamicPixelsPerUnit = i1237[10]
  i1236.m_PresetInfoIsWorld = !!i1237[11]
  return i1236
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1239 = data
  i1238.m_IgnoreReversedGraphics = !!i1239[0]
  i1238.m_BlockingObjects = i1239[1]
  i1238.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1239[2] )
  return i1238
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1240 = root || request.c( 'TutorialManager' )
  var i1241 = data
  i1240.IntroAnim = !!i1241[0]
  request.r(i1241[1], i1241[2], 0, i1240, 'tutorialPanel')
  request.r(i1241[3], i1241[4], 0, i1240, 'tutorialText')
  request.r(i1241[5], i1241[6], 0, i1240, 'tutorialTiles')
  request.r(i1241[7], i1241[8], 0, i1240, 'handTool')
  i1240.starterPos = new pc.Vec2( i1241[9], i1241[10] )
  i1240.baseP = new pc.Vec2( i1241[11], i1241[12] )
  request.r(i1241[13], i1241[14], 0, i1240, 'dragger')
  var i1243 = i1241[15]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1240.dragPos = i1242
  var i1245 = i1241[16]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 1, i1244, '')
  }
  i1240.basePos = i1244
  i1240.currentTimer = i1241[17]
  i1240.maxTimer = i1241[18]
  i1240.timerCalled = !!i1241[19]
  return i1240
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1249 = data
  i1248.m_ShowMaskGraphic = !!i1249[0]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1251 = data
  i1250.m_Alpha = i1251[0]
  i1250.m_Interactable = !!i1251[1]
  i1250.m_BlocksRaycasts = !!i1251[2]
  i1250.m_IgnoreParentGroups = !!i1251[3]
  i1250.enabled = !!i1251[4]
  return i1250
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.UI.Button' )
  var i1253 = data
  i1252.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1253[0], i1252.m_OnClick)
  i1252.m_Navigation = request.d('UnityEngine.UI.Navigation', i1253[1], i1252.m_Navigation)
  i1252.m_Transition = i1253[2]
  i1252.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1253[3], i1252.m_Colors)
  i1252.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1253[4], i1252.m_SpriteState)
  i1252.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1253[5], i1252.m_AnimationTriggers)
  i1252.m_Interactable = !!i1253[6]
  request.r(i1253[7], i1253[8], 0, i1252, 'm_TargetGraphic')
  return i1252
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1255 = data
  i1254.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1255[0], i1254.m_PersistentCalls)
  return i1254
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('UnityEngine.Events.PersistentCall', i1259[i + 0]));
  }
  i1256.m_Calls = i1258
  return i1256
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1263 = data
  request.r(i1263[0], i1263[1], 0, i1262, 'm_Target')
  i1262.m_TargetAssemblyTypeName = i1263[2]
  i1262.m_MethodName = i1263[3]
  i1262.m_Mode = i1263[4]
  i1262.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1263[5], i1262.m_Arguments)
  i1262.m_CallState = i1263[6]
  return i1262
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'm_ObjectArgument')
  i1264.m_ObjectArgumentAssemblyTypeName = i1265[2]
  i1264.m_IntArgument = i1265[3]
  i1264.m_FloatArgument = i1265[4]
  i1264.m_StringArgument = i1265[5]
  i1264.m_BoolArgument = !!i1265[6]
  return i1264
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1267 = data
  i1266.m_Mode = i1267[0]
  i1266.m_WrapAround = !!i1267[1]
  request.r(i1267[2], i1267[3], 0, i1266, 'm_SelectOnUp')
  request.r(i1267[4], i1267[5], 0, i1266, 'm_SelectOnDown')
  request.r(i1267[6], i1267[7], 0, i1266, 'm_SelectOnLeft')
  request.r(i1267[8], i1267[9], 0, i1266, 'm_SelectOnRight')
  return i1266
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1269 = data
  i1268.m_NormalColor = new pc.Color(i1269[0], i1269[1], i1269[2], i1269[3])
  i1268.m_HighlightedColor = new pc.Color(i1269[4], i1269[5], i1269[6], i1269[7])
  i1268.m_PressedColor = new pc.Color(i1269[8], i1269[9], i1269[10], i1269[11])
  i1268.m_SelectedColor = new pc.Color(i1269[12], i1269[13], i1269[14], i1269[15])
  i1268.m_DisabledColor = new pc.Color(i1269[16], i1269[17], i1269[18], i1269[19])
  i1268.m_ColorMultiplier = i1269[20]
  i1268.m_FadeDuration = i1269[21]
  return i1268
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'm_HighlightedSprite')
  request.r(i1271[2], i1271[3], 0, i1270, 'm_PressedSprite')
  request.r(i1271[4], i1271[5], 0, i1270, 'm_SelectedSprite')
  request.r(i1271[6], i1271[7], 0, i1270, 'm_DisabledSprite')
  return i1270
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1273 = data
  i1272.m_NormalTrigger = i1273[0]
  i1272.m_HighlightedTrigger = i1273[1]
  i1272.m_PressedTrigger = i1273[2]
  i1272.m_SelectedTrigger = i1273[3]
  i1272.m_DisabledTrigger = i1273[4]
  return i1272
}

Deserializers["HexBase"] = function (request, data, root) {
  var i1274 = root || request.c( 'HexBase' )
  var i1275 = data
  var i1277 = i1275[0]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i1277.length; i += 2) {
  request.r(i1277[i + 0], i1277[i + 1], 1, i1276, '')
  }
  i1274.nearbyBases = i1276
  request.r(i1275[1], i1275[2], 0, i1274, 'occupiedHex')
  i1274.occupied = !!i1275[3]
  return i1274
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1281 = data
  request.r(i1281[0], i1281[1], 0, i1280, 'm_FirstSelected')
  i1280.m_sendNavigationEvents = !!i1281[2]
  i1280.m_DragThreshold = i1281[3]
  return i1280
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1283 = data
  i1282.m_HorizontalAxis = i1283[0]
  i1282.m_VerticalAxis = i1283[1]
  i1282.m_SubmitButton = i1283[2]
  i1282.m_CancelButton = i1283[3]
  i1282.m_InputActionsPerSecond = i1283[4]
  i1282.m_RepeatDelay = i1283[5]
  i1282.m_ForceModuleActive = !!i1283[6]
  i1282.m_SendPointerHoverToParent = !!i1283[7]
  return i1282
}

Deserializers["GameManager"] = function (request, data, root) {
  var i1284 = root || request.c( 'GameManager' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i1287.length; i += 2) {
  request.r(i1287[i + 0], i1287[i + 1], 1, i1286, '')
  }
  i1284.tileMats = i1286
  request.r(i1285[1], i1285[2], 0, i1284, 'Ground')
  request.r(i1285[3], i1285[4], 0, i1284, 'replacerParent')
  request.r(i1285[5], i1285[6], 0, i1284, 'hexNorth')
  var i1289 = i1285[7]
  var i1288 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i1289.length; i += 2) {
  request.r(i1289[i + 0], i1289[i + 1], 1, i1288, '')
  }
  i1284.hexBases = i1288
  var i1291 = i1285[8]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 1, i1290, '')
  }
  i1284.hexDraggers = i1290
  request.r(i1285[9], i1285[10], 0, i1284, 'emptyDrag')
  var i1293 = i1285[11]
  var i1292 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i1293.length; i += 2) {
  request.r(i1293[i + 0], i1293[i + 1], 1, i1292, '')
  }
  i1284.currentMixers = i1292
  request.r(i1285[12], i1285[13], 0, i1284, 'currentReplacer')
  var i1295 = i1285[14]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i1295.length; i += 2) {
  request.r(i1295[i + 0], i1295[i + 1], 1, i1294, '')
  }
  i1284.nearbyReplacerHexes = i1294
  i1284.IsTransferring = !!i1285[15]
  i1284.firstFullStack = !!i1285[16]
  request.r(i1285[17], i1285[18], 0, i1284, 'currentHexDrag')
  request.r(i1285[19], i1285[20], 0, i1284, 'hexDragPrefab')
  request.r(i1285[21], i1285[22], 0, i1284, 'hexDragParent')
  return i1284
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1298 = root || request.c( 'AudioManager' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'library')
  i1298.sfxPoolSize = i1299[2]
  return i1298
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i1300 = root || request.c( 'DontDestroy' )
  var i1301 = data
  return i1300
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i1302 = root || request.c( 'CTAManager' )
  var i1303 = data
  i1302.GameOver = !!i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'WinPanel')
  request.r(i1303[3], i1303[4], 0, i1302, 'LosePanel')
  i1302.iosLink = i1303[5]
  i1302.androidLink = i1303[6]
  return i1302
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i1304 = root || request.c( 'IterationManager' )
  var i1305 = data
  i1304.numClicks = i1305[0]
  i1304.maxNumClicks = i1305[1]
  i1304.Iterations = i1305[2]
  i1304.currentTimer = i1305[3]
  i1304.maxTimer = i1305[4]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1307 = data
  i1306.ambientIntensity = i1307[0]
  i1306.reflectionIntensity = i1307[1]
  i1306.ambientMode = i1307[2]
  i1306.ambientLight = new pc.Color(i1307[3], i1307[4], i1307[5], i1307[6])
  i1306.ambientSkyColor = new pc.Color(i1307[7], i1307[8], i1307[9], i1307[10])
  i1306.ambientGroundColor = new pc.Color(i1307[11], i1307[12], i1307[13], i1307[14])
  i1306.ambientEquatorColor = new pc.Color(i1307[15], i1307[16], i1307[17], i1307[18])
  i1306.fogColor = new pc.Color(i1307[19], i1307[20], i1307[21], i1307[22])
  i1306.fogEndDistance = i1307[23]
  i1306.fogStartDistance = i1307[24]
  i1306.fogDensity = i1307[25]
  i1306.fog = !!i1307[26]
  request.r(i1307[27], i1307[28], 0, i1306, 'skybox')
  i1306.fogMode = i1307[29]
  var i1309 = i1307[30]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1309[i + 0]) );
  }
  i1306.lightmaps = i1308
  i1306.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1307[31], i1306.lightProbes)
  i1306.lightmapsMode = i1307[32]
  i1306.mixedBakeMode = i1307[33]
  i1306.environmentLightingMode = i1307[34]
  i1306.ambientProbe = new pc.SphericalHarmonicsL2(i1307[35])
  i1306.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1307[36])
  i1306.useReferenceAmbientProbe = !!i1307[37]
  request.r(i1307[38], i1307[39], 0, i1306, 'customReflection')
  request.r(i1307[40], i1307[41], 0, i1306, 'defaultReflection')
  i1306.defaultReflectionMode = i1307[42]
  i1306.defaultReflectionResolution = i1307[43]
  i1306.sunLightObjectId = i1307[44]
  i1306.pixelLightCount = i1307[45]
  i1306.defaultReflectionHDR = !!i1307[46]
  i1306.hasLightDataAsset = !!i1307[47]
  i1306.hasManualGenerate = !!i1307[48]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1313 = data
  request.r(i1313[0], i1313[1], 0, i1312, 'lightmapColor')
  request.r(i1313[2], i1313[3], 0, i1312, 'lightmapDirection')
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1314 = root || new UnityEngine.LightProbes()
  var i1315 = data
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1323 = data
  var i1325 = i1323[0]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1325[i + 0]));
  }
  i1322.ShaderCompilationErrors = i1324
  i1322.name = i1323[1]
  i1322.guid = i1323[2]
  var i1327 = i1323[3]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( i1327[i + 0] );
  }
  i1322.shaderDefinedKeywords = i1326
  var i1329 = i1323[4]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1329[i + 0]) );
  }
  i1322.passes = i1328
  var i1331 = i1323[5]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1331[i + 0]) );
  }
  i1322.usePasses = i1330
  var i1333 = i1323[6]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1333[i + 0]) );
  }
  i1322.defaultParameterValues = i1332
  request.r(i1323[7], i1323[8], 0, i1322, 'unityFallbackShader')
  i1322.readDepth = !!i1323[9]
  i1322.isCreatedByShaderGraph = !!i1323[10]
  i1322.compiled = !!i1323[11]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1337 = data
  i1336.shaderName = i1337[0]
  i1336.errorMessage = i1337[1]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1342 = root || new pc.UnityShaderPass()
  var i1343 = data
  i1342.id = i1343[0]
  i1342.subShaderIndex = i1343[1]
  i1342.name = i1343[2]
  i1342.passType = i1343[3]
  i1342.grabPassTextureName = i1343[4]
  i1342.usePass = !!i1343[5]
  i1342.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[6], i1342.zTest)
  i1342.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[7], i1342.zWrite)
  i1342.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[8], i1342.culling)
  i1342.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1343[9], i1342.blending)
  i1342.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1343[10], i1342.alphaBlending)
  i1342.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[11], i1342.colorWriteMask)
  i1342.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[12], i1342.offsetUnits)
  i1342.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[13], i1342.offsetFactor)
  i1342.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[14], i1342.stencilRef)
  i1342.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[15], i1342.stencilReadMask)
  i1342.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1343[16], i1342.stencilWriteMask)
  i1342.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1343[17], i1342.stencilOp)
  i1342.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1343[18], i1342.stencilOpFront)
  i1342.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1343[19], i1342.stencilOpBack)
  var i1345 = i1343[20]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1345[i + 0]) );
  }
  i1342.tags = i1344
  var i1347 = i1343[21]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( i1347[i + 0] );
  }
  i1342.passDefinedKeywords = i1346
  var i1349 = i1343[22]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1349[i + 0]) );
  }
  i1342.passDefinedKeywordGroups = i1348
  var i1351 = i1343[23]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1351[i + 0]) );
  }
  i1342.variants = i1350
  var i1353 = i1343[24]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1353[i + 0]) );
  }
  i1342.excludedVariants = i1352
  i1342.hasDepthReader = !!i1343[25]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1355 = data
  i1354.val = i1355[0]
  i1354.name = i1355[1]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1357 = data
  i1356.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1357[0], i1356.src)
  i1356.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1357[1], i1356.dst)
  i1356.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1357[2], i1356.op)
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1359 = data
  i1358.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[0], i1358.pass)
  i1358.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[1], i1358.fail)
  i1358.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[2], i1358.zFail)
  i1358.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1359[3], i1358.comp)
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.value = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1367 = data
  var i1369 = i1367[0]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( i1369[i + 0] );
  }
  i1366.keywords = i1368
  i1366.hasDiscard = !!i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1373 = data
  i1372.passId = i1373[0]
  i1372.subShaderIndex = i1373[1]
  var i1375 = i1373[2]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( i1375[i + 0] );
  }
  i1372.keywords = i1374
  i1372.vertexProgram = i1373[3]
  i1372.fragmentProgram = i1373[4]
  i1372.exportedForWebGl2 = !!i1373[5]
  i1372.readDepth = !!i1373[6]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'shader')
  i1378.pass = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.type = i1383[1]
  i1382.value = new pc.Vec4( i1383[2], i1383[3], i1383[4], i1383[5] )
  i1382.textureValue = i1383[6]
  i1382.shaderPropertyFlag = i1383[7]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1385 = data
  i1384.name = i1385[0]
  request.r(i1385[1], i1385[2], 0, i1384, 'texture')
  i1384.aabb = i1385[3]
  i1384.vertices = i1385[4]
  i1384.triangles = i1385[5]
  i1384.textureRect = UnityEngine.Rect.MinMaxRect(i1385[6], i1385[7], i1385[8], i1385[9])
  i1384.packedRect = UnityEngine.Rect.MinMaxRect(i1385[10], i1385[11], i1385[12], i1385[13])
  i1384.border = new pc.Vec4( i1385[14], i1385[15], i1385[16], i1385[17] )
  i1384.transparency = i1385[18]
  i1384.bounds = i1385[19]
  i1384.pixelsPerUnit = i1385[20]
  i1384.textureWidth = i1385[21]
  i1384.textureHeight = i1385[22]
  i1384.nativeSize = new pc.Vec2( i1385[23], i1385[24] )
  i1384.pivot = new pc.Vec2( i1385[25], i1385[26] )
  i1384.textureRectOffset = new pc.Vec2( i1385[27], i1385[28] )
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1387 = data
  i1386.name = i1387[0]
  return i1386
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i1388 = root || request.c( 'AudioLibrary' )
  var i1389 = data
  var i1391 = i1389[0]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.add(request.d('AudioLibrary+ClipEntry', i1391[i + 0]));
  }
  i1388.clips = i1390
  return i1388
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i1394 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i1395 = data
  i1394.key = i1395[0]
  i1394.channel = i1395[1]
  request.r(i1395[2], i1395[3], 0, i1394, 'clip')
  i1394.volume = i1395[4]
  i1394.loop = !!i1395[5]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1397 = data
  var i1399 = i1397[0]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1399[i + 0]) );
  }
  i1396.files = i1398
  i1396.componentToPrefabIds = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1403 = data
  i1402.path = i1403[0]
  request.r(i1403[1], i1403[2], 0, i1402, 'unityObject')
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1405 = data
  var i1407 = i1405[0]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1407[i + 0]) );
  }
  i1404.scriptsExecutionOrder = i1406
  var i1409 = i1405[1]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1409[i + 0]) );
  }
  i1404.sortingLayers = i1408
  var i1411 = i1405[2]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1411[i + 0]) );
  }
  i1404.cullingLayers = i1410
  i1404.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1405[3], i1404.timeSettings)
  i1404.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1405[4], i1404.physicsSettings)
  i1404.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1405[5], i1404.physics2DSettings)
  i1404.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1405[6], i1404.qualitySettings)
  i1404.enableRealtimeShadows = !!i1405[7]
  i1404.enableAutoInstancing = !!i1405[8]
  i1404.enableDynamicBatching = !!i1405[9]
  i1404.lightmapEncodingQuality = i1405[10]
  i1404.desiredColorSpace = i1405[11]
  var i1413 = i1405[12]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( i1413[i + 0] );
  }
  i1404.allTags = i1412
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1417 = data
  i1416.name = i1417[0]
  i1416.value = i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1421 = data
  i1420.id = i1421[0]
  i1420.name = i1421[1]
  i1420.value = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1425 = data
  i1424.id = i1425[0]
  i1424.name = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1427 = data
  i1426.fixedDeltaTime = i1427[0]
  i1426.maximumDeltaTime = i1427[1]
  i1426.timeScale = i1427[2]
  i1426.maximumParticleTimestep = i1427[3]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1429 = data
  i1428.gravity = new pc.Vec3( i1429[0], i1429[1], i1429[2] )
  i1428.defaultSolverIterations = i1429[3]
  i1428.bounceThreshold = i1429[4]
  i1428.autoSyncTransforms = !!i1429[5]
  i1428.autoSimulation = !!i1429[6]
  var i1431 = i1429[7]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1431[i + 0]) );
  }
  i1428.collisionMatrix = i1430
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.layerId = i1435[1]
  i1434.otherLayerId = i1435[2]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'material')
  i1436.gravity = new pc.Vec2( i1437[2], i1437[3] )
  i1436.positionIterations = i1437[4]
  i1436.velocityIterations = i1437[5]
  i1436.velocityThreshold = i1437[6]
  i1436.maxLinearCorrection = i1437[7]
  i1436.maxAngularCorrection = i1437[8]
  i1436.maxTranslationSpeed = i1437[9]
  i1436.maxRotationSpeed = i1437[10]
  i1436.baumgarteScale = i1437[11]
  i1436.baumgarteTOIScale = i1437[12]
  i1436.timeToSleep = i1437[13]
  i1436.linearSleepTolerance = i1437[14]
  i1436.angularSleepTolerance = i1437[15]
  i1436.defaultContactOffset = i1437[16]
  i1436.autoSimulation = !!i1437[17]
  i1436.queriesHitTriggers = !!i1437[18]
  i1436.queriesStartInColliders = !!i1437[19]
  i1436.callbacksOnDisable = !!i1437[20]
  i1436.reuseCollisionCallbacks = !!i1437[21]
  i1436.autoSyncTransforms = !!i1437[22]
  var i1439 = i1437[23]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1439[i + 0]) );
  }
  i1436.collisionMatrix = i1438
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.layerId = i1443[1]
  i1442.otherLayerId = i1443[2]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1445 = data
  var i1447 = i1445[0]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1447[i + 0]) );
  }
  i1444.qualityLevels = i1446
  var i1449 = i1445[1]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( i1449[i + 0] );
  }
  i1444.names = i1448
  i1444.shadows = i1445[2]
  i1444.anisotropicFiltering = i1445[3]
  i1444.antiAliasing = i1445[4]
  i1444.lodBias = i1445[5]
  i1444.shadowCascades = i1445[6]
  i1444.shadowDistance = i1445[7]
  i1444.shadowmaskMode = i1445[8]
  i1444.shadowProjection = i1445[9]
  i1444.shadowResolution = i1445[10]
  i1444.softParticles = !!i1445[11]
  i1444.softVegetation = !!i1445[12]
  i1444.activeColorSpace = i1445[13]
  i1444.desiredColorSpace = i1445[14]
  i1444.masterTextureLimit = i1445[15]
  i1444.maxQueuedFrames = i1445[16]
  i1444.particleRaycastBudget = i1445[17]
  i1444.pixelLightCount = i1445[18]
  i1444.realtimeReflectionProbes = !!i1445[19]
  i1444.shadowCascade2Split = i1445[20]
  i1444.shadowCascade4Split = new pc.Vec3( i1445[21], i1445[22], i1445[23] )
  i1444.streamingMipmapsActive = !!i1445[24]
  i1444.vSyncCount = i1445[25]
  i1444.asyncUploadBufferSize = i1445[26]
  i1444.asyncUploadTimeSlice = i1445[27]
  i1444.billboardsFaceCameraPosition = !!i1445[28]
  i1444.shadowNearPlaneOffset = i1445[29]
  i1444.streamingMipmapsMemoryBudget = i1445[30]
  i1444.maximumLODLevel = i1445[31]
  i1444.streamingMipmapsAddAllCameras = !!i1445[32]
  i1444.streamingMipmapsMaxLevelReduction = i1445[33]
  i1444.streamingMipmapsRenderersPerFrame = i1445[34]
  i1444.resolutionScalingFixedDPIFactor = i1445[35]
  i1444.streamingMipmapsMaxFileIORequests = i1445[36]
  i1444.currentQualityLevel = i1445[37]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1455 = data
  i1454.weight = i1455[0]
  i1454.vertices = i1455[1]
  i1454.normals = i1455[2]
  i1454.tangents = i1455[3]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[20],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[20],"75":[3],"76":[77],"78":[77],"23":[12],"79":[12],"80":[12],"25":[23],"16":[14,12],"81":[12],"24":[23],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[12],"88":[12],"28":[12],"89":[12],"90":[14,12],"91":[12],"92":[12],"93":[12],"94":[12],"95":[14,12],"96":[12],"97":[32],"98":[32],"33":[32],"99":[32],"100":[20],"101":[20],"102":[12],"103":[3,12],"104":[12,14],"105":[12],"106":[14,12],"107":[3],"108":[14,12],"109":[12],"110":[111],"112":[111],"113":[111]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","CameraInfo","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","IterationManager","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "0.2";

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

Deserializers.buildID = "efd38e93-e17d-4882-beab-65713cb0557a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

