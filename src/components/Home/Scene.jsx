import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

const Scene = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh]">
      <h1 className="stroke z-[10] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[25vw] md:text-[21vw] font-semibold lg:font-black">
        Refokus
      </h1>

      <Canvas>
        <directionalLight position={[50, 3, -10]} intensity={70} />
        <directionalLight position={[2, -200, 60]} intensity={500} />
        <directionalLight position={[-4, -5, 5]} intensity={10} />
        <directionalLight position={[10, -10, 2]} intensity={50} />
        <directionalLight position={[20, 3, -10]} intensity={30} />
        <directionalLight position={[300, 20, -40]} intensity={40} />
        <directionalLight position={[-40, -50, 10]} intensity={80} />
        <directionalLight position={[0, 100, 0]} intensity={200} />

        <Environment preset="city" />

        <Model />
      </Canvas>

      <h1 className="z-[-10] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[25vw] md:text-[21vw] font-semibold lg:font-black">
        Refokus
      </h1>
    </div>
  );
};

export default Scene;
