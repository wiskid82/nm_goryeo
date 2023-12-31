import React, { useRef } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Box = (props) => {
    // 이 메쉬는 회전할 것입니다
    const meshRef = useRef();

    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef} {...props}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="orange" />
        </mesh>
    );
};

const CameraControls = () => {
    const { camera, gl: { domElement } } = useThree();
    return <orbitControls args={[camera, domElement]} />;
};

const Land = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            <CameraControls />
        </Canvas>
    );
};

export default Land;