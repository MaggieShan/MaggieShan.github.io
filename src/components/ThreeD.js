import variables from "../styles/_variables.module.scss";
import "../styles/_ThreeD.scss";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef }  from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSpring, animated } from '@react-spring/three'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const Model = (props) => {
  const { viewport } = useThree();
  const hello = useLoader(GLTFLoader, 'hello.gltf');
  const coin = useLoader(GLTFLoader, 'coin.gltf');
  const coinref = useRef();
  const modelref = useRef(); 
  
  var scrolly = 0; 
  function onScroll(e) { 
    scrolly = e.path[1].scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); // unmount
    };
  });

  // For model to follow mouse 
  useFrame(({ mouse }) => {
    const vec = new THREE.Vector3();

    if(props.coinDrop) {
      coinref.current.position.lerp(vec.set(0, -4, 1.5), 0.1); 
      coinref.current.rotation.set(-0.40,0,0);
      modelref.current.rotation.set(0,0,0);
    } else {
      coinref.current.rotation.set(0,0,0);
      coinref.current.position.lerp(vec.set(0,0,0), 0.1);
      const sy = (scrolly * viewport.height) / 2;
      coinref.current.position.lerp(vec.set(0, -sy/100, 0), 0.05);
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      modelref.current.rotation.set(-y/50, x/20, 0);
    }
  });

  return (
    <group ref={modelref} position={[-2,0,-1]}>
      <mesh position={[0,0,0]}>
        <primitive ref={coinref} object={coin.scene} scale={125}/>
        <primitive object={hello.scene} scale={125} />
      </mesh>
    </group>
  )
}

function ThreeD(props) {   
  return (
    <Canvas camera={{position: [-1, 3, 5]}}>
      <ambientLight intensity={0.25} />
      {/* <OrbitControls enableZoom={false} /> */}
      <directionalLight intensity={0.5} /> 
      <pointLight distance={10} position={[0,10,10]} />
      <Suspense fallback={<Loader />}>
          <Model coinDrop={props.coinDrop} />
      </Suspense>
    </Canvas>
  );
}
  
  export default ThreeD;