import { check } from "../assets";
import { stPricing } from "../constants";
import Button from "./Button";

const STPricing = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {stPricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className={`w-full mb-6 ${
              item.price ? "bg-white hover:bg-transparent" : ""
            }`}
            href={item.price ? "/pricing" : "https://walink.co/276d5b"}
            white={!!item.price}
            blank={!item.price ? true : false}
          >
            {item.price ? "Elegir Plan" : "Contáctame"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default STPricing;
