import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export const AnimatedBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ec4899", // rose (tu peux changer)
          },
          links: {
            color: "#ec4899",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};
