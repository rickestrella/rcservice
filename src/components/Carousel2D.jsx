import { WDIcons } from "../constants";
import "./carousel__2d.css";

const Carousel2D = () => {
  const quantity = 8;
  const width = "50px";
  const height = "50px";

  return (
    <div
      className="sliderContainer"
      style={{ "--width": width, "--height": height, "--quantity": quantity }}
    >
      <div className="items">
        {WDIcons.map((item) => (
          <div
            className="element"
            key={item.id}
            style={{ "--position": item.position }}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel2D;
