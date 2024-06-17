import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, MeshTransmissionMaterial } from "@react-three/drei";

const Model = () => {
  const { nodes } = useGLTF("/home/torrus.glb");
  const { viewport } = useThree();

  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.0075;
  });

  return (
    <group scale={viewport.width / 3.3}>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1}
          backside={false}
        />
      </mesh>
    </group>
  );
};

export default Model;
