import './ThreeD.scss';
import Shared from './shared.scss';
import React, { Suspense  }  from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Coin() {
    const materials = useLoader(MTLLoader, 'coin.mtl');
    const coin = useLoader(OBJLoader, 'coin.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
    console.log(coin);
    return <primitive object={coin} scale={0.4} />; 
}

function Hello() {
    const materials = useLoader(MTLLoader, 'hello.mtl');
    const hello = useLoader(OBJLoader, 'hello.obj', (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });
    return <primitive object={hello} scale={0.4} />; 
}

function ThreeD() {    
    return (
      <Canvas id='canvas'>
        <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
            <Coin />
            <Hello />
            <OrbitControls />
            <color attach='background' args={[Shared.backgroundColor]} />
        </Suspense>
      </Canvas>
    );
  }
  
  export default ThreeD;