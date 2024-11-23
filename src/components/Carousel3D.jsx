import { brandIcons } from "../constants";
import "./carousel3d.css";

const Carousel3D = () => {
  const quantity = 7;
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": quantity }}>
        {brandIcons.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ "--position": item.position }}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
