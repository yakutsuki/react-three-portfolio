import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a as three } from "@react-spring/three";

const Mac = ({ ...props }) => {
  const group = useRef<THREE.Group>(null);
  const gltf: any = useGLTF("/mac-draco.glb");
  const { nodes, materials } = gltf;

  return (
    <group ref={group} {...props}  dispose={null}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
};

export default Mac;
