import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  id: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ id }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: ["#00ffff", "#00ff9f"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
        background: {
          color: {
            value: "transparent",
          },
        },
      }}
    />
  );
};

export default ParticleBackground;