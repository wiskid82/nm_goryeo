// src/pages/index.js
import React from "react";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import ThreeScene from "../../components/three/ThreeScene"


const PlayPage = () => {
    return (
        <Canvas style={{width: '100vw', height: '100vh'}}
                camera={{position: [1.5, 10, 1.5], fov: 80}}
                gl={{ antialias: true, physicallyCorrectLights: true, outputEncoding: THREE.sRGBEncoding }}
        >
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <ambientLight intensity={1.5}/>
            <spotLight position={[10, 15, 10]} angle={0.3} intensity={1}/>
            <ThreeScene/>
        </Canvas>
    )
}

export default PlayPage