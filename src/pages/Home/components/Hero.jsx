import styles, { layout } from "../../../style";
import { discount, hero } from "../assets";
import GetStarted from "./GetStarted";
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
// import React, { Suspense, useRef, useState } from "react";

function Model({...props}) {
  // const ref = useRef()
  // const { nodes, materials } = useGLTF('/src/assets/scene.gltf')

  // return (
  //   <group {...props} dispose={null}>
  //     <directionalLight intensity={1} decay={2} color="#a3946c" position={[-190.882, 302.753, 108.161]} />
  //     <PerspectiveCamera makeDefault={true} far={1000.04} position={[294.113, 269.108, 409.377]} rotation={[-0.557, 0.654, 0.362]} />
  //     <group scale={0.01}>
  //       <mesh geometry={nodes.Windows_Material__4053_0.geometry} material={materials.Material__4053} position={[5704.957, 16957.371, 11647.982]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.FireExtinguishers_Material__4051_0.geometry} material={materials.Material__4051} position={[12.567, 14841.255, 5289.227]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Body_Material__4041_0.geometry} material={materials.Material__4041} position={[-354.995, 10261.182, 3439.871]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Platform_Material__4045_0.geometry} material={materials.Material__4045} position={[-832.162, 10136.021, 16143.405]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Trim_Material__4046_0.geometry} material={materials.Material__4046} position={[1826.256, 13367.258, 12331.716]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Chassis_Material__4043_0.geometry} material={materials.Material__4043} position={[25.341, 10411.041, 3100.883]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Tires_Material__4040_0.geometry} material={materials.Material__4040} position={[6.141, 5522.369, -5855.496]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.SeatsLights_Material__4049_0.geometry} material={materials.Material__4049} position={[778.855, 13537.125, 12107.189]} rotation={[Math.PI / 2, 0, 0]} />
  //       <mesh geometry={nodes.Part05_Material__4048_0.geometry} material={materials.Material__4048} position={[-195.327, 12475.196, 14126.983]} rotation={[Math.PI / 2, 0, 0]} />
  //     </group>
  //   </group>
  // )
}

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingYHome}`}>
      <div className={`${layout.paddingText} flex-1 ${styles.flexStart} ${styles.paddingX} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>          
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`font-poppins font-normal text-white text-[18px] leading-[30.8px] ml-2`}>
            <span className="text-white">20%</span> Desconto no{" "}
            <span className="text-white">1 Mês</span> de Contratação
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray ss:leading-[100.8px] leading-[75px]">
           Reduza<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Custos</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[46px] text-[30px] text-black ss:leading-[100.8px] leading-[75px] w-full">
          Racionalmente.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nosso time de especialistas possui larga experiência na manutenção e administração de frotas.
          Está pronto para te oferecer suporte em terraplanagem, agrícola, construção civil, tranportes, 
          logística, locação de veículos, alimentícia, industrial além de informática e análise de sistemas.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="" className="w-[89%] h-[89%] " />
        {/* <Canvas>
          <Suspense fallback={null}>
            <ambientLight/>
            <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow />
            <Model/>
            <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
          </Suspense>
        </Canvas> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
