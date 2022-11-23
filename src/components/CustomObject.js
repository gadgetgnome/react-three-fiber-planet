import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const verticesCount = 10 * 3; // 10 triangles, 3 corners

export default function CustomObject() {
  const bufferGeoRef = useRef();
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3); // xyz

    for (let i = 0; i < verticesCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    bufferGeoRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={bufferGeoRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color="yellow" side={THREE.DoubleSide} />
    </mesh>
  );
}
