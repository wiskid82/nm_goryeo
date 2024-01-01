// src/components/ThreeScene.js
import React, { useMemo, useState, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Plane, Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import mapImage from "../../images/map.jpg";

const ThreeScene = () => {
    const mapTexture = useTexture(mapImage); // 지도 텍스처 로드
    useMemo(() => {
        mapTexture.wrapS = mapTexture.wrapT = THREE.RepeatWrapping;
        mapTexture.repeat.set(10, 10); // 여기서 이미지 반복 횟수를 설정
    }, [mapTexture]);

    const [targetPosition, setTargetPosition] = useState([0, 1, 0]);
    const characterRef = useRef();
    const { camera } = useThree();

    useFrame(() => {
        const character = characterRef.current;
        const speed = 0.1; // 이동 속도
        const cameraHeight = 10; // 카메라 높이 설정
        const halfMapSize = 50; // 맵의 한 변의 절반 크기

        if (character) {
            // 캐릭터의 새로운 위치 계산
            let newX = character.position.x + (targetPosition[0] - character.position.x) * speed;
            let newZ = character.position.z + (targetPosition[2] - character.position.z) * speed;

            // 캐릭터의 위치를 맵의 경계 내로 제한
            newX = Math.max(-halfMapSize, Math.min(halfMapSize, newX));
            newZ = Math.max(-halfMapSize, Math.min(halfMapSize, newZ));

            // 캐릭터의 위치 업데이트
            character.position.x = newX;
            character.position.z = newZ;

            // 카메라 위치 업데이트
            camera.position.x = newX;
            camera.position.y = character.position.y + cameraHeight;
            camera.position.z = newZ;
            camera.lookAt(newX, character.position.y, newZ);
        }
    });


    const onPlaneClick = (e) => {
        // 클릭된 지점의 위치를 가져와서 캐릭터의 위치로 설정
        const { x, z } = e.point;
        setTargetPosition([x, 1, z]);
    };

    return (
        <>
            <Plane onClick={onPlaneClick} args={[200, 200]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                <meshStandardMaterial attach="material" color="white" map={mapTexture} />
            </Plane>
            <Sphere ref={characterRef} args={[1, 32, 32]} position={[0, 1, 0]}>
                <meshStandardMaterial attach="material" color="red" />
            </Sphere>
        </>
    );
};

export default ThreeScene;
