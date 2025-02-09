import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface MousePosition {
  x: number;
  y: number;
}

export const ParticleBackground = () => {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [activeSide, setActiveSide] = useState<"left" | "right">("right");

  // Listen for mouse movements and update state.
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
    const screenMid = window.innerWidth / 2;
    setActiveSide(clientX < screenMid ? "left" : "right");
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Helper to compute an opacity value based on distance.
  // When the mouse is at the corner (distance = 0), the opacity will be maxOpacity.
  // It will fade linearly to 0 at distance = threshold.
  const computeOpacity = (cornerX: number, cornerY: number) => {
    const dx = mousePos.x - cornerX;
    const dy = mousePos.y - cornerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const threshold = 300; // adjust this value for the distance effect
    const maxOpacity = 0.5; // maximum overlay opacity when mouse is at the corner
    // Linearly decrease opacity; never go below 0.
    const opacity = Math.max(0, maxOpacity * (1 - distance / threshold));
    return opacity;
  };

  // Compute the opacity for each corner if it is active.
  // Corners not active will have an opacity of 0.
  const topLeftOpacity =
    activeSide === "left" ? computeOpacity(0, 0) : 0;
  const bottomLeftOpacity =
    activeSide === "left" ? computeOpacity(0, window.innerHeight) : 0;
  const topRightOpacity =
    activeSide === "right" ? computeOpacity(window.innerWidth, 0) : 0;
  const bottomRightOpacity =
    activeSide === "right" ? computeOpacity(window.innerWidth, window.innerHeight) : 0;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <>
      {/* The Particles background */}
      <Particles
        className="absolute inset-0 -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "light" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              light: {
                area: {
                  gradient: {
                    start: "rgba(74,144,226,0.2)",
                    stop: "rgba(74,144,226,0)",
                  },
                  radius: 200,
                },
                shadow: {
                  color: "rgba(74,144,226,0.3)",
                  length: 200,
                },
              },
            },
          },
          particles: {
            color: { value: "#4A90E2" },
            links: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 1.5,
              straight: false,
              bounce: true,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 150,
            },
            opacity: { value: { min: 0.3, max: 0.7 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Corner overlays */}
      {/* Top-left corner */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          zIndex: -5,
          background: `radial-gradient(circle at top left, rgba(74,144,226,${topLeftOpacity}) 0%, transparent 70%)`,
        }}
      />

      {/* Top-right corner */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          zIndex: -5,
          background: `radial-gradient(circle at top right, rgba(74,144,226,${topRightOpacity}) 0%, transparent 70%)`,
        }}
      />

      {/* Bottom-left corner */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          zIndex: -5,
          background: `radial-gradient(circle at bottom left, rgba(74,144,226,${bottomLeftOpacity}) 0%, transparent 70%)`,
        }}
      />

      {/* Bottom-right corner */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 300,
          height: 300,
          zIndex: -5,
          background: `radial-gradient(circle at bottom right, rgba(74,144,226,${bottomRightOpacity}) 0%, transparent 70%)`,
        }}
      />
    </>
  );
};
