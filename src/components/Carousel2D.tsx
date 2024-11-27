import { WDIcons } from "../constants";
import "./carousel__2d.css";

const Carousel2D: React.FC = () => {
  const quantity = 8;
  const width = "50px";
  const height = "50px";

  return (
    <div
      className="sliderContainer"
      style={
        {
          "--width": width,
          "--height": height,
          "--quantity": quantity,
        } as React.CSSProperties
      }
    >
      <div className="items">
        {WDIcons.map((item) => (
          <div
            className="element"
            key={item.id}
            style={{ "--position": item.position } as React.CSSProperties}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2D;
