import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface ItemProps {
  url?: string;
  image?: string;
  logo?: string;
  alt?: string;
}

interface MarqueeProps {
  items: ItemProps[];
}

const ContinuousMarquee: React.FC<MarqueeProps> = ({ items }) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  let position = 0;

  // Función que mueve el marquee
  const moveMarquee = () => {
    const container = marqueeRef.current;
    if (!container) return; // Verifica que la referencia no sea nula

    position -= 1; // Ajusta la velocidad del desplazamiento
    const maxScroll = container.scrollWidth / 2; // Mitad porque hay duplicados
    if (Math.abs(position) >= maxScroll) {
      position = 0; // Reiniciar posición para bucle infinito
    }
    container.style.transform = `translateX(${position}px)`;
    animationRef.current = requestAnimationFrame(moveMarquee);
  };

  // Iniciar la animación
  useEffect(() => {
    animationRef.current = requestAnimationFrame(moveMarquee);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Función para detener y reanudar el movimiento
  const stopMarquee = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };
  const startMarquee = () => {
    animationRef.current = requestAnimationFrame(moveMarquee);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: "55%",
        height: "auto",
        marginInline: "auto",
      }}
    >
      {/* Efecto de sombreado en los extremos */}
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-black via-transparent to-transparent pointer-events-none z-10"></div>

      {/* Contenedor del marquee */}
      <div
        ref={marqueeRef}
        className="flex"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
        onMouseEnter={stopMarquee} // Pausar al pasar el mouse
        onMouseLeave={startMarquee} // Reanudar al quitar el mouse
      >
        {/* Duplicamos los ítems para efecto continuo */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-none px-4"
            style={{
              width: "240px", // Ajusta el ancho según tus ítems
            }}
          >
            {item.url ? (
              <Link to={item.url} target="_blank">
                <img
                  src={item.logo}
                  alt={item.alt || `Slide ${index}`}
                  className="w-full h-full object-contain"
                />
              </Link>
            ) : (
              <img
                src={item.image}
                alt={item.alt || `Slide ${index}`}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousMarquee;
