import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Modelo3D() {
  const { scene } = useGLTF('../public/3dModels/cartoon_tv.glb');
  return <primitive object={scene} scale={0.3}/>;
}

export default function TV() {
  return (
    <Canvas className='TV' camera={{ position: [-30, 30, 90], fov: 25, scale: 0.1 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1}/>
      <Modelo3D />
      <OrbitControls enableZoom={false}  />
    </Canvas>
  );
}
