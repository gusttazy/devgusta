"use client";

// Componente que renderiza o modelo 3D no Hero
// Usa react-three-fiber e drei para carregar e exibir o GLB

import { useRef, memo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";

// Carrega e anima o modelo GLB
const Model = memo(function Model() {
  const group = useRef<Group>(null);
  const gltf = useGLTF("/object3d.glb");

  // Rotação automática lenta no eixo Y
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  // Centraliza e ajusta a altura do modelo
  return <primitive ref={group} object={gltf.scene} scale={1.2} position={[0, -0.7, 0]} />;
});

export default memo(function Hero3DObject() {
  return (
    // Centraliza o canvas 3D na tela
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 2, 7], fov: 45 }}
        className="w-full h-full"
        dpr={[1, 1.5]}
        performance={{ min: 0.6 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {/* Luz ambiente e direcional para iluminar o modelo */}
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        {/* Carrega o modelo 3D com fallback nulo */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* Controles de rotação apenas no eixo Y (vertical) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.1}
        />
      </Canvas>
    </div>
  );
});
