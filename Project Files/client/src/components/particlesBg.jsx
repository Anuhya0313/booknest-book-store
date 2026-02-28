import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
          }
        }
      }}
      style={{
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: 0
}}

    />
  );
}

export default ParticlesBg;
