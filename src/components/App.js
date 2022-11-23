// import logo from './logo.svg';
import "./App.css";

import { useRef } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from './CustomObject';
import { Vector3 } from "three";


extend({ OrbitControls });

function App() {
  const cube = useRef();
  const sphere = useRef();

  const three = useThree();
  const { camera, gl } = three;
  console.log(three);

  useFrame((state, delta) => {
    // cube.current.rotation.x += 1 * delta;
    // sphere.current.position.y = Math.sin(state.clock.elapsedTime / 1) * 2;
    // cube.current.position.y = Math.cos(state.clock.elapsedTime / 1) * 2;
    
    camera.position.x = Math.cos(state.clock.elapsedTime) * 5;
    camera.position.z = Math.sin(state.clock.elapsedTime) * 5;
    camera.lookAt(0,0,0);
  });

  return (
    <>
      {/* <orbitControls args={[ camera, gl.domElement ]} autoRotate /> */}
      <directionalLight position={[0,2,0]}/>
      <ambientLight intensity={.2}/>
      <group>
        <mesh ref={sphere} position-x={1}>
          <sphereGeometry />
          <meshStandardMaterial color={"red"} />
        </mesh>
        <mesh ref={cube} scale={2} position-x={-1.2}>
          <boxGeometry />
          <meshStandardMaterial color={"green"} />
        </mesh>
        {/* <mesh rotation-x={-Math.PI * .5} scale={10} position-y={-1}>
          <planeGeometry />
          <meshPhongMaterial color="blue"/>
        </mesh> */}
        <CustomObject/>
      </group>
    </>
  );
}

export default App;
