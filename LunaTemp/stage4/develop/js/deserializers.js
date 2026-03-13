var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.JointSpring' )
  var i1821 = data
  i1820.spring = i1821[0]
  i1820.damper = i1821[1]
  i1820.targetPosition = i1821[2]
  return i1820
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1822 = root || request.c( 'UnityEngine.JointMotor' )
  var i1823 = data
  i1822.m_TargetVelocity = i1823[0]
  i1822.m_Force = i1823[1]
  i1822.m_FreeSpin = i1823[2]
  return i1822
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.JointLimits' )
  var i1825 = data
  i1824.m_Min = i1825[0]
  i1824.m_Max = i1825[1]
  i1824.m_Bounciness = i1825[2]
  i1824.m_BounceMinVelocity = i1825[3]
  i1824.m_ContactDistance = i1825[4]
  i1824.minBounce = i1825[5]
  i1824.maxBounce = i1825[6]
  return i1824
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.JointDrive' )
  var i1827 = data
  i1826.m_PositionSpring = i1827[0]
  i1826.m_PositionDamper = i1827[1]
  i1826.m_MaximumForce = i1827[2]
  i1826.m_UseAcceleration = i1827[3]
  return i1826
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1829 = data
  i1828.m_Spring = i1829[0]
  i1828.m_Damper = i1829[1]
  return i1828
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1830 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1831 = data
  i1830.m_Limit = i1831[0]
  i1830.m_Bounciness = i1831[1]
  i1830.m_ContactDistance = i1831[2]
  return i1830
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1833 = data
  i1832.m_ExtremumSlip = i1833[0]
  i1832.m_ExtremumValue = i1833[1]
  i1832.m_AsymptoteSlip = i1833[2]
  i1832.m_AsymptoteValue = i1833[3]
  i1832.m_Stiffness = i1833[4]
  return i1832
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1835 = data
  i1834.m_LowerAngle = i1835[0]
  i1834.m_UpperAngle = i1835[1]
  return i1834
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1837 = data
  i1836.m_MotorSpeed = i1837[0]
  i1836.m_MaximumMotorTorque = i1837[1]
  return i1836
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1839 = data
  i1838.m_DampingRatio = i1839[0]
  i1838.m_Frequency = i1839[1]
  i1838.m_Angle = i1839[2]
  return i1838
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1841 = data
  i1840.m_LowerTranslation = i1841[0]
  i1840.m_UpperTranslation = i1841[1]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.width = i1843[1]
  i1842.height = i1843[2]
  i1842.mipmapCount = i1843[3]
  i1842.anisoLevel = i1843[4]
  i1842.filterMode = i1843[5]
  i1842.hdr = !!i1843[6]
  i1842.format = i1843[7]
  i1842.wrapMode = i1843[8]
  i1842.alphaIsTransparency = !!i1843[9]
  i1842.alphaSource = i1843[10]
  i1842.graphicsFormat = i1843[11]
  i1842.sRGBTexture = !!i1843[12]
  i1842.desiredColorSpace = i1843[13]
  i1842.wrapU = i1843[14]
  i1842.wrapV = i1843[15]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1845 = data
  i1844.position = new pc.Vec3( i1845[0], i1845[1], i1845[2] )
  i1844.scale = new pc.Vec3( i1845[3], i1845[4], i1845[5] )
  i1844.rotation = new pc.Quat(i1845[6], i1845[7], i1845[8], i1845[9])
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'sharedMesh')
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'additionalVertexStreams')
  i1848.enabled = !!i1849[2]
  request.r(i1849[3], i1849[4], 0, i1848, 'sharedMaterial')
  var i1851 = i1849[5]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 2) {
  request.r(i1851[i + 0], i1851[i + 1], 2, i1850, '')
  }
  i1848.sharedMaterials = i1850
  i1848.receiveShadows = !!i1849[6]
  i1848.shadowCastingMode = i1849[7]
  i1848.sortingLayerID = i1849[8]
  i1848.sortingOrder = i1849[9]
  i1848.lightmapIndex = i1849[10]
  i1848.lightmapSceneIndex = i1849[11]
  i1848.lightmapScaleOffset = new pc.Vec4( i1849[12], i1849[13], i1849[14], i1849[15] )
  i1848.lightProbeUsage = i1849[16]
  i1848.reflectionProbeUsage = i1849[17]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1855 = data
  i1854.name = i1855[0]
  i1854.tagId = i1855[1]
  i1854.enabled = !!i1855[2]
  i1854.isStatic = !!i1855[3]
  i1854.layer = i1855[4]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.halfPrecision = !!i1857[1]
  i1856.useUInt32IndexFormat = !!i1857[2]
  i1856.vertexCount = i1857[3]
  i1856.aabb = i1857[4]
  var i1859 = i1857[5]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( !!i1859[i + 0] );
  }
  i1856.streams = i1858
  i1856.vertices = i1857[6]
  var i1861 = i1857[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1861[i + 0]) );
  }
  i1856.subMeshes = i1860
  var i1863 = i1857[8]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 16) {
    i1862.push( new pc.Mat4().setData(i1863[i + 0], i1863[i + 1], i1863[i + 2], i1863[i + 3],  i1863[i + 4], i1863[i + 5], i1863[i + 6], i1863[i + 7],  i1863[i + 8], i1863[i + 9], i1863[i + 10], i1863[i + 11],  i1863[i + 12], i1863[i + 13], i1863[i + 14], i1863[i + 15]) );
  }
  i1856.bindposes = i1862
  var i1865 = i1857[9]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1865[i + 0]) );
  }
  i1856.blendShapes = i1864
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1871 = data
  i1870.triangles = i1871[0]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1877 = data
  i1876.name = i1877[0]
  var i1879 = i1877[1]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1879[i + 0]) );
  }
  i1876.frames = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1880 = root || new pc.UnityMaterial()
  var i1881 = data
  i1880.name = i1881[0]
  request.r(i1881[1], i1881[2], 0, i1880, 'shader')
  i1880.renderQueue = i1881[3]
  i1880.enableInstancing = !!i1881[4]
  var i1883 = i1881[5]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1883[i + 0]) );
  }
  i1880.floatParameters = i1882
  var i1885 = i1881[6]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1885[i + 0]) );
  }
  i1880.colorParameters = i1884
  var i1887 = i1881[7]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1887[i + 0]) );
  }
  i1880.vectorParameters = i1886
  var i1889 = i1881[8]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1889[i + 0]) );
  }
  i1880.textureParameters = i1888
  var i1891 = i1881[9]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1891[i + 0]) );
  }
  i1880.materialFlags = i1890
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.value = i1895[1]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1899 = data
  i1898.name = i1899[0]
  i1898.value = new pc.Color(i1899[1], i1899[2], i1899[3], i1899[4])
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.value = new pc.Vec4( i1903[1], i1903[2], i1903[3], i1903[4] )
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1907 = data
  i1906.name = i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'value')
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1911 = data
  i1910.name = i1911[0]
  i1910.enabled = !!i1911[1]
  return i1910
}

Deserializers["HexGroup"] = function (request, data, root) {
  var i1912 = root || request.c( 'HexGroup' )
  var i1913 = data
  i1912.GroupType = i1913[0]
  i1912.Replacer = !!i1913[1]
  var i1915 = i1913[2]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 1, i1914, '')
  }
  i1912.nearbyHex = i1914
  i1912.isTweening = !!i1913[3]
  i1912.oneColor = !!i1913[4]
  i1912.oneStack = !!i1913[5]
  i1912.isEmptying = !!i1913[6]
  i1912.draggable = !!i1913[7]
  request.r(i1913[8], i1913[9], 0, i1912, 'topTile')
  request.r(i1913[10], i1913[11], 0, i1912, 'secondTopTile')
  request.r(i1913[12], i1913[13], 0, i1912, 'thirdTopTile')
  var i1917 = i1913[14]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 1, i1916, '')
  }
  i1912.extraSameTiles = i1916
  i1912.stackNum = i1913[15]
  i1912.transferIndex = i1913[16]
  i1912.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1913[17] )
  var i1919 = i1913[18]
  var i1918 = new (System.Collections.Generic.List$1(Bridge.ns('HexTiles')))
  for(var i = 0; i < i1919.length; i += 2) {
  request.r(i1919[i + 0], i1919[i + 1], 1, i1918, '')
  }
  i1912.HexTiles = i1918
  i1912.oldPosition = new pc.Vec3( i1913[19], i1913[20], i1913[21] )
  i1912.isDragging = !!i1913[22]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.isTrigger = !!i1925[1]
  request.r(i1925[2], i1925[3], 0, i1924, 'material')
  request.r(i1925[4], i1925[5], 0, i1924, 'sharedMesh')
  i1924.convex = !!i1925[6]
  return i1924
}

Deserializers["HexTiles"] = function (request, data, root) {
  var i1926 = root || request.c( 'HexTiles' )
  var i1927 = data
  i1926.tileColor = i1927[0]
  var i1929 = i1927[1]
  var i1928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 1, i1928, '')
  }
  i1926.singleTile = i1928
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1933 = data
  i1932.center = new pc.Vec3( i1933[0], i1933[1], i1933[2] )
  i1932.size = new pc.Vec3( i1933[3], i1933[4], i1933[5] )
  i1932.enabled = !!i1933[6]
  i1932.isTrigger = !!i1933[7]
  request.r(i1933[8], i1933[9], 0, i1932, 'material')
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1935 = data
  i1934.pivot = new pc.Vec2( i1935[0], i1935[1] )
  i1934.anchorMin = new pc.Vec2( i1935[2], i1935[3] )
  i1934.anchorMax = new pc.Vec2( i1935[4], i1935[5] )
  i1934.sizeDelta = new pc.Vec2( i1935[6], i1935[7] )
  i1934.anchoredPosition3D = new pc.Vec3( i1935[8], i1935[9], i1935[10] )
  i1934.rotation = new pc.Quat(i1935[11], i1935[12], i1935[13], i1935[14])
  i1934.scale = new pc.Vec3( i1935[15], i1935[16], i1935[17] )
  return i1934
}

Deserializers["ConfettiController"] = function (request, data, root) {
  var i1936 = root || request.c( 'ConfettiController' )
  var i1937 = data
  i1936.gameWin = !!i1937[0]
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1939 = data
  i1938.cullTransparentMesh = !!i1939[0]
  return i1938
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.UI.Image' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Sprite')
  i1940.m_Type = i1941[2]
  i1940.m_PreserveAspect = !!i1941[3]
  i1940.m_FillCenter = !!i1941[4]
  i1940.m_FillMethod = i1941[5]
  i1940.m_FillAmount = i1941[6]
  i1940.m_FillClockwise = !!i1941[7]
  i1940.m_FillOrigin = i1941[8]
  i1940.m_UseSpriteMesh = !!i1941[9]
  i1940.m_PixelsPerUnitMultiplier = i1941[10]
  request.r(i1941[11], i1941[12], 0, i1940, 'm_Material')
  i1940.m_Maskable = !!i1941[13]
  i1940.m_Color = new pc.Color(i1941[14], i1941[15], i1941[16], i1941[17])
  i1940.m_RaycastTarget = !!i1941[18]
  i1940.m_RaycastPadding = new pc.Vec4( i1941[19], i1941[20], i1941[21], i1941[22] )
  return i1940
}

Deserializers["ConfettiFall"] = function (request, data, root) {
  var i1942 = root || request.c( 'ConfettiFall' )
  var i1943 = data
  i1942.gameWin = !!i1943[0]
  request.r(i1943[1], i1943[2], 0, i1942, 'fallArea')
  i1942.fallDistance = i1943[3]
  i1942.fallDuration = i1943[4]
  i1942.resetDelay = i1943[5]
  i1942.horizontalFlutter = i1943[6]
  i1942.rotationAngle = i1943[7]
  i1942.startDelayMin = i1943[8]
  i1942.startDelayMax = i1943[9]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1945 = data
  i1944.name = i1945[0]
  i1944.atlasId = i1945[1]
  i1944.mipmapCount = i1945[2]
  i1944.hdr = !!i1945[3]
  i1944.size = i1945[4]
  i1944.anisoLevel = i1945[5]
  i1944.filterMode = i1945[6]
  var i1947 = i1945[7]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 4) {
    i1946.push( UnityEngine.Rect.MinMaxRect(i1947[i + 0], i1947[i + 1], i1947[i + 2], i1947[i + 3]) );
  }
  i1944.rects = i1946
  i1944.wrapU = i1945[8]
  i1944.wrapV = i1945[9]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1951 = data
  i1950.name = i1951[0]
  i1950.index = i1951[1]
  i1950.startup = !!i1951[2]
  return i1950
}

Deserializers["CameraInfo"] = function (request, data, root) {
  var i1952 = root || request.c( 'CameraInfo' )
  var i1953 = data
  i1952.IntroCamera = !!i1953[0]
  request.r(i1953[1], i1953[2], 0, i1952, 'PathParent')
  var i1955 = i1953[3]
  var i1954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 1, i1954, '')
  }
  i1952.TargetPaths = i1954
  i1952.pathDurations = i1953[4]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.aspect = i1959[1]
  i1958.orthographic = !!i1959[2]
  i1958.orthographicSize = i1959[3]
  i1958.backgroundColor = new pc.Color(i1959[4], i1959[5], i1959[6], i1959[7])
  i1958.nearClipPlane = i1959[8]
  i1958.farClipPlane = i1959[9]
  i1958.fieldOfView = i1959[10]
  i1958.depth = i1959[11]
  i1958.clearFlags = i1959[12]
  i1958.cullingMask = i1959[13]
  i1958.rect = i1959[14]
  request.r(i1959[15], i1959[16], 0, i1958, 'targetTexture')
  i1958.usePhysicalProperties = !!i1959[17]
  i1958.focalLength = i1959[18]
  i1958.sensorSize = new pc.Vec2( i1959[19], i1959[20] )
  i1958.lensShift = new pc.Vec2( i1959[21], i1959[22] )
  i1958.gateFit = i1959[23]
  i1958.commandBufferCount = i1959[24]
  i1958.cameraType = i1959[25]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1961 = data
  i1960.enabled = !!i1961[0]
  i1960.type = i1961[1]
  i1960.color = new pc.Color(i1961[2], i1961[3], i1961[4], i1961[5])
  i1960.cullingMask = i1961[6]
  i1960.intensity = i1961[7]
  i1960.range = i1961[8]
  i1960.spotAngle = i1961[9]
  i1960.shadows = i1961[10]
  i1960.shadowNormalBias = i1961[11]
  i1960.shadowBias = i1961[12]
  i1960.shadowStrength = i1961[13]
  i1960.shadowResolution = i1961[14]
  i1960.lightmapBakeType = i1961[15]
  i1960.renderMode = i1961[16]
  request.r(i1961[17], i1961[18], 0, i1960, 'cookie')
  i1960.cookieSize = i1961[19]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.planeDistance = i1963[1]
  i1962.referencePixelsPerUnit = i1963[2]
  i1962.isFallbackOverlay = !!i1963[3]
  i1962.renderMode = i1963[4]
  i1962.renderOrder = i1963[5]
  i1962.sortingLayerName = i1963[6]
  i1962.sortingOrder = i1963[7]
  i1962.scaleFactor = i1963[8]
  request.r(i1963[9], i1963[10], 0, i1962, 'worldCamera')
  i1962.overrideSorting = !!i1963[11]
  i1962.pixelPerfect = !!i1963[12]
  i1962.targetDisplay = i1963[13]
  i1962.overridePixelPerfect = !!i1963[14]
  return i1962
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1965 = data
  i1964.m_UiScaleMode = i1965[0]
  i1964.m_ReferencePixelsPerUnit = i1965[1]
  i1964.m_ScaleFactor = i1965[2]
  i1964.m_ReferenceResolution = new pc.Vec2( i1965[3], i1965[4] )
  i1964.m_ScreenMatchMode = i1965[5]
  i1964.m_MatchWidthOrHeight = i1965[6]
  i1964.m_PhysicalUnit = i1965[7]
  i1964.m_FallbackScreenDPI = i1965[8]
  i1964.m_DefaultSpriteDPI = i1965[9]
  i1964.m_DynamicPixelsPerUnit = i1965[10]
  i1964.m_PresetInfoIsWorld = !!i1965[11]
  return i1964
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1967 = data
  i1966.m_IgnoreReversedGraphics = !!i1967[0]
  i1966.m_BlockingObjects = i1967[1]
  i1966.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1967[2] )
  return i1966
}

Deserializers["TutorialManager"] = function (request, data, root) {
  var i1968 = root || request.c( 'TutorialManager' )
  var i1969 = data
  i1968.IntroAnim = !!i1969[0]
  request.r(i1969[1], i1969[2], 0, i1968, 'tutorialPanel')
  request.r(i1969[3], i1969[4], 0, i1968, 'tutorialText')
  request.r(i1969[5], i1969[6], 0, i1968, 'tutorialTiles')
  request.r(i1969[7], i1969[8], 0, i1968, 'handTool')
  i1968.starterPos = new pc.Vec2( i1969[9], i1969[10] )
  i1968.baseP = new pc.Vec2( i1969[11], i1969[12] )
  request.r(i1969[13], i1969[14], 0, i1968, 'dragger')
  var i1971 = i1969[15]
  var i1970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 1, i1970, '')
  }
  i1968.dragPos = i1970
  var i1973 = i1969[16]
  var i1972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RectTransform')))
  for(var i = 0; i < i1973.length; i += 2) {
  request.r(i1973[i + 0], i1973[i + 1], 1, i1972, '')
  }
  i1968.basePos = i1972
  i1968.currentTimer = i1969[17]
  i1968.maxTimer = i1969[18]
  i1968.timerCalled = !!i1969[19]
  return i1968
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1977 = data
  i1976.m_ShowMaskGraphic = !!i1977[0]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1979 = data
  i1978.m_Alpha = i1979[0]
  i1978.m_Interactable = !!i1979[1]
  i1978.m_BlocksRaycasts = !!i1979[2]
  i1978.m_IgnoreParentGroups = !!i1979[3]
  i1978.enabled = !!i1979[4]
  return i1978
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.UI.Button' )
  var i1981 = data
  i1980.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1981[0], i1980.m_OnClick)
  i1980.m_Navigation = request.d('UnityEngine.UI.Navigation', i1981[1], i1980.m_Navigation)
  i1980.m_Transition = i1981[2]
  i1980.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1981[3], i1980.m_Colors)
  i1980.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1981[4], i1980.m_SpriteState)
  i1980.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1981[5], i1980.m_AnimationTriggers)
  i1980.m_Interactable = !!i1981[6]
  request.r(i1981[7], i1981[8], 0, i1980, 'm_TargetGraphic')
  return i1980
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1983 = data
  i1982.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1983[0], i1982.m_PersistentCalls)
  return i1982
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.add(request.d('UnityEngine.Events.PersistentCall', i1987[i + 0]));
  }
  i1984.m_Calls = i1986
  return i1984
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, 'm_Target')
  i1990.m_TargetAssemblyTypeName = i1991[2]
  i1990.m_MethodName = i1991[3]
  i1990.m_Mode = i1991[4]
  i1990.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1991[5], i1990.m_Arguments)
  i1990.m_CallState = i1991[6]
  return i1990
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1993 = data
  request.r(i1993[0], i1993[1], 0, i1992, 'm_ObjectArgument')
  i1992.m_ObjectArgumentAssemblyTypeName = i1993[2]
  i1992.m_IntArgument = i1993[3]
  i1992.m_FloatArgument = i1993[4]
  i1992.m_StringArgument = i1993[5]
  i1992.m_BoolArgument = !!i1993[6]
  return i1992
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1995 = data
  i1994.m_Mode = i1995[0]
  i1994.m_WrapAround = !!i1995[1]
  request.r(i1995[2], i1995[3], 0, i1994, 'm_SelectOnUp')
  request.r(i1995[4], i1995[5], 0, i1994, 'm_SelectOnDown')
  request.r(i1995[6], i1995[7], 0, i1994, 'm_SelectOnLeft')
  request.r(i1995[8], i1995[9], 0, i1994, 'm_SelectOnRight')
  return i1994
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1997 = data
  i1996.m_NormalColor = new pc.Color(i1997[0], i1997[1], i1997[2], i1997[3])
  i1996.m_HighlightedColor = new pc.Color(i1997[4], i1997[5], i1997[6], i1997[7])
  i1996.m_PressedColor = new pc.Color(i1997[8], i1997[9], i1997[10], i1997[11])
  i1996.m_SelectedColor = new pc.Color(i1997[12], i1997[13], i1997[14], i1997[15])
  i1996.m_DisabledColor = new pc.Color(i1997[16], i1997[17], i1997[18], i1997[19])
  i1996.m_ColorMultiplier = i1997[20]
  i1996.m_FadeDuration = i1997[21]
  return i1996
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1999 = data
  request.r(i1999[0], i1999[1], 0, i1998, 'm_HighlightedSprite')
  request.r(i1999[2], i1999[3], 0, i1998, 'm_PressedSprite')
  request.r(i1999[4], i1999[5], 0, i1998, 'm_SelectedSprite')
  request.r(i1999[6], i1999[7], 0, i1998, 'm_DisabledSprite')
  return i1998
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2001 = data
  i2000.m_NormalTrigger = i2001[0]
  i2000.m_HighlightedTrigger = i2001[1]
  i2000.m_PressedTrigger = i2001[2]
  i2000.m_SelectedTrigger = i2001[3]
  i2000.m_DisabledTrigger = i2001[4]
  return i2000
}

Deserializers["HexBase"] = function (request, data, root) {
  var i2002 = root || request.c( 'HexBase' )
  var i2003 = data
  var i2005 = i2003[0]
  var i2004 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i2005.length; i += 2) {
  request.r(i2005[i + 0], i2005[i + 1], 1, i2004, '')
  }
  i2002.nearbyBases = i2004
  request.r(i2003[1], i2003[2], 0, i2002, 'occupiedHex')
  i2002.occupied = !!i2003[3]
  return i2002
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2008 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'm_FirstSelected')
  i2008.m_sendNavigationEvents = !!i2009[2]
  i2008.m_DragThreshold = i2009[3]
  return i2008
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2011 = data
  i2010.m_HorizontalAxis = i2011[0]
  i2010.m_VerticalAxis = i2011[1]
  i2010.m_SubmitButton = i2011[2]
  i2010.m_CancelButton = i2011[3]
  i2010.m_InputActionsPerSecond = i2011[4]
  i2010.m_RepeatDelay = i2011[5]
  i2010.m_ForceModuleActive = !!i2011[6]
  i2010.m_SendPointerHoverToParent = !!i2011[7]
  return i2010
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2012 = root || request.c( 'GameManager' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Material')))
  for(var i = 0; i < i2015.length; i += 2) {
  request.r(i2015[i + 0], i2015[i + 1], 1, i2014, '')
  }
  i2012.tileMats = i2014
  request.r(i2013[1], i2013[2], 0, i2012, 'Ground')
  request.r(i2013[3], i2013[4], 0, i2012, 'replacerParent')
  request.r(i2013[5], i2013[6], 0, i2012, 'hexNorth')
  var i2017 = i2013[7]
  var i2016 = new (System.Collections.Generic.List$1(Bridge.ns('HexBase')))
  for(var i = 0; i < i2017.length; i += 2) {
  request.r(i2017[i + 0], i2017[i + 1], 1, i2016, '')
  }
  i2012.hexBases = i2016
  var i2019 = i2013[8]
  var i2018 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i2019.length; i += 2) {
  request.r(i2019[i + 0], i2019[i + 1], 1, i2018, '')
  }
  i2012.hexDraggers = i2018
  request.r(i2013[9], i2013[10], 0, i2012, 'emptyDrag')
  var i2021 = i2013[11]
  var i2020 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 1, i2020, '')
  }
  i2012.currentMixers = i2020
  request.r(i2013[12], i2013[13], 0, i2012, 'currentReplacer')
  var i2023 = i2013[14]
  var i2022 = new (System.Collections.Generic.List$1(Bridge.ns('HexGroup')))
  for(var i = 0; i < i2023.length; i += 2) {
  request.r(i2023[i + 0], i2023[i + 1], 1, i2022, '')
  }
  i2012.nearbyReplacerHexes = i2022
  i2012.IsTransferring = !!i2013[15]
  i2012.firstFullStack = !!i2013[16]
  request.r(i2013[17], i2013[18], 0, i2012, 'currentHexDrag')
  request.r(i2013[19], i2013[20], 0, i2012, 'hexDragPrefab')
  request.r(i2013[21], i2013[22], 0, i2012, 'hexDragParent')
  return i2012
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2026 = root || request.c( 'AudioManager' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, 'library')
  i2026.sfxPoolSize = i2027[2]
  return i2026
}

Deserializers["DontDestroy"] = function (request, data, root) {
  var i2028 = root || request.c( 'DontDestroy' )
  var i2029 = data
  return i2028
}

Deserializers["CTAManager"] = function (request, data, root) {
  var i2030 = root || request.c( 'CTAManager' )
  var i2031 = data
  i2030.GameOver = !!i2031[0]
  request.r(i2031[1], i2031[2], 0, i2030, 'WinPanel')
  request.r(i2031[3], i2031[4], 0, i2030, 'LosePanel')
  i2030.iosLink = i2031[5]
  i2030.androidLink = i2031[6]
  return i2030
}

Deserializers["IterationManager"] = function (request, data, root) {
  var i2032 = root || request.c( 'IterationManager' )
  var i2033 = data
  i2032.numClicks = i2033[0]
  i2032.maxNumClicks = i2033[1]
  i2032.Iterations = i2033[2]
  i2032.currentTimer = i2033[3]
  i2032.maxTimer = i2033[4]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2035 = data
  i2034.ambientIntensity = i2035[0]
  i2034.reflectionIntensity = i2035[1]
  i2034.ambientMode = i2035[2]
  i2034.ambientLight = new pc.Color(i2035[3], i2035[4], i2035[5], i2035[6])
  i2034.ambientSkyColor = new pc.Color(i2035[7], i2035[8], i2035[9], i2035[10])
  i2034.ambientGroundColor = new pc.Color(i2035[11], i2035[12], i2035[13], i2035[14])
  i2034.ambientEquatorColor = new pc.Color(i2035[15], i2035[16], i2035[17], i2035[18])
  i2034.fogColor = new pc.Color(i2035[19], i2035[20], i2035[21], i2035[22])
  i2034.fogEndDistance = i2035[23]
  i2034.fogStartDistance = i2035[24]
  i2034.fogDensity = i2035[25]
  i2034.fog = !!i2035[26]
  request.r(i2035[27], i2035[28], 0, i2034, 'skybox')
  i2034.fogMode = i2035[29]
  var i2037 = i2035[30]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2037[i + 0]) );
  }
  i2034.lightmaps = i2036
  i2034.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2035[31], i2034.lightProbes)
  i2034.lightmapsMode = i2035[32]
  i2034.mixedBakeMode = i2035[33]
  i2034.environmentLightingMode = i2035[34]
  i2034.ambientProbe = new pc.SphericalHarmonicsL2(i2035[35])
  i2034.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2035[36])
  i2034.useReferenceAmbientProbe = !!i2035[37]
  request.r(i2035[38], i2035[39], 0, i2034, 'customReflection')
  request.r(i2035[40], i2035[41], 0, i2034, 'defaultReflection')
  i2034.defaultReflectionMode = i2035[42]
  i2034.defaultReflectionResolution = i2035[43]
  i2034.sunLightObjectId = i2035[44]
  i2034.pixelLightCount = i2035[45]
  i2034.defaultReflectionHDR = !!i2035[46]
  i2034.hasLightDataAsset = !!i2035[47]
  i2034.hasManualGenerate = !!i2035[48]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, 'lightmapColor')
  request.r(i2041[2], i2041[3], 0, i2040, 'lightmapDirection')
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2042 = root || new UnityEngine.LightProbes()
  var i2043 = data
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2053[i + 0]));
  }
  i2050.ShaderCompilationErrors = i2052
  i2050.name = i2051[1]
  i2050.guid = i2051[2]
  var i2055 = i2051[3]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( i2055[i + 0] );
  }
  i2050.shaderDefinedKeywords = i2054
  var i2057 = i2051[4]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2057[i + 0]) );
  }
  i2050.passes = i2056
  var i2059 = i2051[5]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2059[i + 0]) );
  }
  i2050.usePasses = i2058
  var i2061 = i2051[6]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2061[i + 0]) );
  }
  i2050.defaultParameterValues = i2060
  request.r(i2051[7], i2051[8], 0, i2050, 'unityFallbackShader')
  i2050.readDepth = !!i2051[9]
  i2050.isCreatedByShaderGraph = !!i2051[10]
  i2050.compiled = !!i2051[11]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2065 = data
  i2064.shaderName = i2065[0]
  i2064.errorMessage = i2065[1]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2070 = root || new pc.UnityShaderPass()
  var i2071 = data
  i2070.id = i2071[0]
  i2070.subShaderIndex = i2071[1]
  i2070.name = i2071[2]
  i2070.passType = i2071[3]
  i2070.grabPassTextureName = i2071[4]
  i2070.usePass = !!i2071[5]
  i2070.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[6], i2070.zTest)
  i2070.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[7], i2070.zWrite)
  i2070.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[8], i2070.culling)
  i2070.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2071[9], i2070.blending)
  i2070.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2071[10], i2070.alphaBlending)
  i2070.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[11], i2070.colorWriteMask)
  i2070.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[12], i2070.offsetUnits)
  i2070.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[13], i2070.offsetFactor)
  i2070.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[14], i2070.stencilRef)
  i2070.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[15], i2070.stencilReadMask)
  i2070.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2071[16], i2070.stencilWriteMask)
  i2070.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2071[17], i2070.stencilOp)
  i2070.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2071[18], i2070.stencilOpFront)
  i2070.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2071[19], i2070.stencilOpBack)
  var i2073 = i2071[20]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2073[i + 0]) );
  }
  i2070.tags = i2072
  var i2075 = i2071[21]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( i2075[i + 0] );
  }
  i2070.passDefinedKeywords = i2074
  var i2077 = i2071[22]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2077[i + 0]) );
  }
  i2070.passDefinedKeywordGroups = i2076
  var i2079 = i2071[23]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2079[i + 0]) );
  }
  i2070.variants = i2078
  var i2081 = i2071[24]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2081[i + 0]) );
  }
  i2070.excludedVariants = i2080
  i2070.hasDepthReader = !!i2071[25]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2083 = data
  i2082.val = i2083[0]
  i2082.name = i2083[1]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2085 = data
  i2084.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[0], i2084.src)
  i2084.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[1], i2084.dst)
  i2084.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2085[2], i2084.op)
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2087 = data
  i2086.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[0], i2086.pass)
  i2086.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[1], i2086.fail)
  i2086.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[2], i2086.zFail)
  i2086.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2087[3], i2086.comp)
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.value = i2091[1]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2095 = data
  var i2097 = i2095[0]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( i2097[i + 0] );
  }
  i2094.keywords = i2096
  i2094.hasDiscard = !!i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2101 = data
  i2100.passId = i2101[0]
  i2100.subShaderIndex = i2101[1]
  var i2103 = i2101[2]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2100.keywords = i2102
  i2100.vertexProgram = i2101[3]
  i2100.fragmentProgram = i2101[4]
  i2100.exportedForWebGl2 = !!i2101[5]
  i2100.readDepth = !!i2101[6]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'shader')
  i2106.pass = i2107[2]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2111 = data
  i2110.name = i2111[0]
  i2110.type = i2111[1]
  i2110.value = new pc.Vec4( i2111[2], i2111[3], i2111[4], i2111[5] )
  i2110.textureValue = i2111[6]
  i2110.shaderPropertyFlag = i2111[7]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2113 = data
  i2112.name = i2113[0]
  request.r(i2113[1], i2113[2], 0, i2112, 'texture')
  i2112.aabb = i2113[3]
  i2112.vertices = i2113[4]
  i2112.triangles = i2113[5]
  i2112.textureRect = UnityEngine.Rect.MinMaxRect(i2113[6], i2113[7], i2113[8], i2113[9])
  i2112.packedRect = UnityEngine.Rect.MinMaxRect(i2113[10], i2113[11], i2113[12], i2113[13])
  i2112.border = new pc.Vec4( i2113[14], i2113[15], i2113[16], i2113[17] )
  i2112.transparency = i2113[18]
  i2112.bounds = i2113[19]
  i2112.pixelsPerUnit = i2113[20]
  i2112.textureWidth = i2113[21]
  i2112.textureHeight = i2113[22]
  i2112.nativeSize = new pc.Vec2( i2113[23], i2113[24] )
  i2112.pivot = new pc.Vec2( i2113[25], i2113[26] )
  i2112.textureRectOffset = new pc.Vec2( i2113[27], i2113[28] )
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2115 = data
  i2114.name = i2115[0]
  return i2114
}

Deserializers["AudioLibrary"] = function (request, data, root) {
  var i2116 = root || request.c( 'AudioLibrary' )
  var i2117 = data
  var i2119 = i2117[0]
  var i2118 = new (System.Collections.Generic.List$1(Bridge.ns('AudioLibrary+ClipEntry')))
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.add(request.d('AudioLibrary+ClipEntry', i2119[i + 0]));
  }
  i2116.clips = i2118
  return i2116
}

Deserializers["AudioLibrary+ClipEntry"] = function (request, data, root) {
  var i2122 = root || request.c( 'AudioLibrary+ClipEntry' )
  var i2123 = data
  i2122.key = i2123[0]
  i2122.channel = i2123[1]
  request.r(i2123[2], i2123[3], 0, i2122, 'clip')
  i2122.volume = i2123[4]
  i2122.loop = !!i2123[5]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2125 = data
  var i2127 = i2125[0]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2127[i + 0]) );
  }
  i2124.files = i2126
  i2124.componentToPrefabIds = i2125[1]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2131 = data
  i2130.path = i2131[0]
  request.r(i2131[1], i2131[2], 0, i2130, 'unityObject')
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2133 = data
  var i2135 = i2133[0]
  var i2134 = []
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2135[i + 0]) );
  }
  i2132.scriptsExecutionOrder = i2134
  var i2137 = i2133[1]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2137[i + 0]) );
  }
  i2132.sortingLayers = i2136
  var i2139 = i2133[2]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2139[i + 0]) );
  }
  i2132.cullingLayers = i2138
  i2132.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2133[3], i2132.timeSettings)
  i2132.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2133[4], i2132.physicsSettings)
  i2132.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2133[5], i2132.physics2DSettings)
  i2132.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2133[6], i2132.qualitySettings)
  i2132.enableRealtimeShadows = !!i2133[7]
  i2132.enableAutoInstancing = !!i2133[8]
  i2132.enableDynamicBatching = !!i2133[9]
  i2132.lightmapEncodingQuality = i2133[10]
  i2132.desiredColorSpace = i2133[11]
  var i2141 = i2133[12]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( i2141[i + 0] );
  }
  i2132.allTags = i2140
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2145 = data
  i2144.name = i2145[0]
  i2144.value = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2149 = data
  i2148.id = i2149[0]
  i2148.name = i2149[1]
  i2148.value = i2149[2]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2153 = data
  i2152.id = i2153[0]
  i2152.name = i2153[1]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2155 = data
  i2154.fixedDeltaTime = i2155[0]
  i2154.maximumDeltaTime = i2155[1]
  i2154.timeScale = i2155[2]
  i2154.maximumParticleTimestep = i2155[3]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2157 = data
  i2156.gravity = new pc.Vec3( i2157[0], i2157[1], i2157[2] )
  i2156.defaultSolverIterations = i2157[3]
  i2156.bounceThreshold = i2157[4]
  i2156.autoSyncTransforms = !!i2157[5]
  i2156.autoSimulation = !!i2157[6]
  var i2159 = i2157[7]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2159[i + 0]) );
  }
  i2156.collisionMatrix = i2158
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2163 = data
  i2162.enabled = !!i2163[0]
  i2162.layerId = i2163[1]
  i2162.otherLayerId = i2163[2]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'material')
  i2164.gravity = new pc.Vec2( i2165[2], i2165[3] )
  i2164.positionIterations = i2165[4]
  i2164.velocityIterations = i2165[5]
  i2164.velocityThreshold = i2165[6]
  i2164.maxLinearCorrection = i2165[7]
  i2164.maxAngularCorrection = i2165[8]
  i2164.maxTranslationSpeed = i2165[9]
  i2164.maxRotationSpeed = i2165[10]
  i2164.baumgarteScale = i2165[11]
  i2164.baumgarteTOIScale = i2165[12]
  i2164.timeToSleep = i2165[13]
  i2164.linearSleepTolerance = i2165[14]
  i2164.angularSleepTolerance = i2165[15]
  i2164.defaultContactOffset = i2165[16]
  i2164.autoSimulation = !!i2165[17]
  i2164.queriesHitTriggers = !!i2165[18]
  i2164.queriesStartInColliders = !!i2165[19]
  i2164.callbacksOnDisable = !!i2165[20]
  i2164.reuseCollisionCallbacks = !!i2165[21]
  i2164.autoSyncTransforms = !!i2165[22]
  var i2167 = i2165[23]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2167[i + 0]) );
  }
  i2164.collisionMatrix = i2166
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.layerId = i2171[1]
  i2170.otherLayerId = i2171[2]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2173 = data
  var i2175 = i2173[0]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2175[i + 0]) );
  }
  i2172.qualityLevels = i2174
  var i2177 = i2173[1]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( i2177[i + 0] );
  }
  i2172.names = i2176
  i2172.shadows = i2173[2]
  i2172.anisotropicFiltering = i2173[3]
  i2172.antiAliasing = i2173[4]
  i2172.lodBias = i2173[5]
  i2172.shadowCascades = i2173[6]
  i2172.shadowDistance = i2173[7]
  i2172.shadowmaskMode = i2173[8]
  i2172.shadowProjection = i2173[9]
  i2172.shadowResolution = i2173[10]
  i2172.softParticles = !!i2173[11]
  i2172.softVegetation = !!i2173[12]
  i2172.activeColorSpace = i2173[13]
  i2172.desiredColorSpace = i2173[14]
  i2172.masterTextureLimit = i2173[15]
  i2172.maxQueuedFrames = i2173[16]
  i2172.particleRaycastBudget = i2173[17]
  i2172.pixelLightCount = i2173[18]
  i2172.realtimeReflectionProbes = !!i2173[19]
  i2172.shadowCascade2Split = i2173[20]
  i2172.shadowCascade4Split = new pc.Vec3( i2173[21], i2173[22], i2173[23] )
  i2172.streamingMipmapsActive = !!i2173[24]
  i2172.vSyncCount = i2173[25]
  i2172.asyncUploadBufferSize = i2173[26]
  i2172.asyncUploadTimeSlice = i2173[27]
  i2172.billboardsFaceCameraPosition = !!i2173[28]
  i2172.shadowNearPlaneOffset = i2173[29]
  i2172.streamingMipmapsMemoryBudget = i2173[30]
  i2172.maximumLODLevel = i2173[31]
  i2172.streamingMipmapsAddAllCameras = !!i2173[32]
  i2172.streamingMipmapsMaxLevelReduction = i2173[33]
  i2172.streamingMipmapsRenderersPerFrame = i2173[34]
  i2172.resolutionScalingFixedDPIFactor = i2173[35]
  i2172.streamingMipmapsMaxFileIORequests = i2173[36]
  i2172.currentQualityLevel = i2173[37]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2183 = data
  i2182.weight = i2183[0]
  i2182.vertices = i2183[1]
  i2182.normals = i2183[2]
  i2182.tangents = i2183[3]
  return i2182
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[20],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[20],"75":[3],"76":[77],"78":[77],"23":[12],"79":[12],"80":[12],"25":[23],"16":[14,12],"81":[12],"24":[23],"82":[12],"83":[12],"84":[12],"85":[12],"86":[12],"87":[12],"88":[12],"28":[12],"89":[12],"90":[14,12],"91":[12],"92":[12],"93":[12],"94":[12],"95":[14,12],"96":[12],"97":[32],"98":[32],"33":[32],"99":[32],"100":[20],"101":[20],"102":[12],"103":[3,12],"104":[12,14],"105":[12],"106":[14,12],"107":[3],"108":[14,12],"109":[12],"110":[111],"112":[111],"113":[111]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.MonoBehaviour","HexGroup","UnityEngine.MeshCollider","HexTiles","UnityEngine.GameObject","UnityEngine.BoxCollider","UnityEngine.RectTransform","ConfettiController","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","ConfettiFall","CameraInfo","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TutorialManager","UnityEngine.CanvasGroup","UnityEngine.UI.Mask","UnityEngine.UI.Button","CTAManager","HexBase","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GameManager","AudioManager","AudioLibrary","DontDestroy","IterationManager","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.3f1";

Deserializers.productName = "HXS_ColumnSort";

Deserializers.lunaInitializationTime = "03/13/2026 07:02:06";

Deserializers.lunaDaysRunning = "0.3";

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

Deserializers.buildID = "67a2df0c-d509-480c-8f51-bbf9d34bcc85";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

