"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const SnowEffect = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        particles: {
          color: { value: "#fff" },
          move: {
            direction: "bottom",
            enable: true,
            random: true,
            speed: 1.5, // Velocidad de caída
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 150, // Cantidad de copos
          },
          opacity: {
            value: { min: 0.1, max: 0.7 }, // Unos más transparentes que otros
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 4 }, // Tamaños variados
          },
          // Efecto de difuminado/suavidad
          shadow: {
            enable: true,
            color: "#ffffff",
            blur: 5,
          },
        },
        retina_detect: true,
      }}
      className="absolute inset-0 z-[1]"
    />
  );
};