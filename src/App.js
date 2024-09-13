import "./index.css";
import { Environment, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import model from "./assets/newHamburger.glb";

function App() {
  const gltf = useLoader(GLTFLoader, model);

  return (
    <>
      <OrbitControls />
      <Environment preset="city" />

      <primitive object={gltf.scene} />
    </>
  );
}

export default App;
