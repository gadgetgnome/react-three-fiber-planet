// import logo from './logo.svg';
import "./App.css";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import useScroll from "../utils/useScroll";
import useMouse from "../utils/useMouse";


function App() {
  const group = useRef();
  const { camera } = useThree();

  const scroll = useScroll();
  const mouse = useMouse();

  useFrame((state, delta) => {
    const s = scroll.current;

    camera.position.y = -s * 30;
    const mouseDestX =  mouse.current * 2;
    camera.position.x += ((mouseDestX - camera.position.x) / 20);
    
    group.current.children.forEach(c => {
      c.rotation.x = scroll.current * 40;
    });
    window.state = state;
  });

  const primitives = useMemo(() => {
    const randomPos =  () => {
      const s = {x : 4, y: -50, z: -2};
      return [ .1 + Math.random() * s.x, 5 + Math.random() * s.y, Math.random() * s.z];
    }
    const a = new Array(50).fill().map((a, i) => (
      <mesh scale={1} position={randomPos()} key={i}>
        { i % 2 === 0 ? <boxGeometry args={[1,1,1,4,4,4]}  /> : <sphereGeometry args={[.4]} />}
        <meshStandardMaterial color={"green"} wireframe={true} />
      </mesh>
    ));
    return a;
  }, []);

  return (
    <>
      <directionalLight position={[0, -10, 0]} />
      <ambientLight intensity={0.2} />
      <group ref={group}>
        {primitives}
      </group>
    </>
  );
}

export default App;
