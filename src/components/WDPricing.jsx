import { pricing, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import WDPricingList from "./WDPricingList";

const WDPricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={pricing}
            className="relative z-1"
            alt="pricing"
            width={255}
            height={255}
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>

        <Heading
          tag="Inicia con nosotros"
          title="Invierte de manera inteligente con nosotros"
        />

        <div className="relative">
          <WDPricingList />
        </div>
      </div>
    </Section>
  );
};

export default WDPricing;
