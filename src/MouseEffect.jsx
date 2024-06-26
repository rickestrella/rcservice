import { useEffect, useRef } from "react";

const GridBackground = () => {
  const circleRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    const updateCirclePosition = () => {
      if (circleRef.current) {
        circleRef.current.style.left = `${mousePos.current.x}px`;
        circleRef.current.style.top = `${mousePos.current.y}px`;
      }
      requestAnimationFrame(updateCirclePosition);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(updateCirclePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="neon-bg">
      <div className="neon-grid"></div>
      <div className="neon-circle" ref={circleRef} />
    </div>
  );
};

export default GridBackground;
