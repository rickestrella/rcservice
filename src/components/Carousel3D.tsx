import { brandIcons } from "../constants";
import "./carousel3d.css";

const Carousel3D: React.FC = () => {
  const quantity = 7;
  return (
    <div className="banner">
      <div
        className="slider"
        style={{ "--quantity": quantity } as React.CSSProperties}
      >
        {brandIcons.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ "--position": item.position } as React.CSSProperties}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
