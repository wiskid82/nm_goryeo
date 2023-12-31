// src/pages/index.js
import React from "react";
import { Canvas } from '@react-three/fiber';
import ThreeScene from "../../components/three/ThreeScene"
import { OrbitControls } from '@react-three/drei';

const PlayPage = () => {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position:  [1.5, 10, 1.5], fov: 80 }}>
            <OrbitControls enableZoom={false} enableRotate={false} />
            <ambientLight intensity={1} />
            <spotLight position={[10, 10, 10]} angle={0.15} />
            <ThreeScene />
        </Canvas>
    )
}

export default PlayPage