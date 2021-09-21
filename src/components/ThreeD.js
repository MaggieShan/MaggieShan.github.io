import variables from "../styles/_variables.module.scss";
import "../styles/_ThreeD.scss";
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState }  from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

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

  useFrame(({ mouse }) => {
    const vec = new THREE.Vector3();
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    coinref.current.position.lerp(vec.set(0, y/10, 0), 0.1);
    modelref.current.rotation.set(0.85 + -y/20, 0.25 + x/20, -0.1);
  });

  return (
    <group ref={modelref} position={[-2,0,0]}>
      <mesh position={[0,0,0]}>
        <primitive ref={coinref} object={coin.scene} scale={100} />
        <primitive object={hello.scene} scale={100} />
      </mesh>
    </group>
  )
}

function ThreeD(props) {   
  return (
    <Canvas camera={{position: [0,0,5.5]}}>
      <ambientLight intensity={0.25} />
      <directionalLight intensity={0.1} position={[0,3,1]} /> 
      {/* <pointLight distance={10} position={[0,10,10]} /> */}
      <Suspense fallback={<Loader />}>
          <Model coinDrop={props.coinDrop} pActive={props.pActive} />
      </Suspense>
    </Canvas>
  );
}
  
  export default ThreeD;