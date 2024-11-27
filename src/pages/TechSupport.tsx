import Section from "../components/Section";
import Button from "../components/Button";
import Carousel3D from "../components/Carousel3D";
import { st } from "../constants";
import { check } from "../assets";
import STPricing from "../components/STPricing";

const TechSupport = () => {
  return (
    <>
      <Section
        className="pt-[8rem] px-10 lg:px-0"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">Servicio T&eacute;cnico</h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              ¿Necesitas un t&eacute;cnico de confianza, pero no encuentras uno?
            </p>
            <Button href="https://walink.co/276d5b" blank className="white">
              Contáctate conmigo
            </Button>
            <p className="body-1 max-w-3xl mx-auto mt-[1.875rem] mb-6 text-n-2 lg:mb-8">
              Trato tus dispositivos con el mismo cuidado y dedicaci&oacute;n
              que si fueran m&iacute;os. Mi compromiso con el tiempo, la
              precisi&oacute;n y el cuidado marca la diferencia. Con m&aacute;s
              de cuatro años de experiencia trabajando con marcas reconocidas y
              brindando servicio t&eacute;cnico en diversas empresas, garantizo
              un servicio &oacute;ptimo y confiable.
            </p>
          </div>
        </div>
        <div className="w-full px-12 -mt-24 ">
          <Carousel3D />
        </div>
      </Section>

      <Section className="lg:px-32 -mt-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black mb-16 -mt-14">Servicios</h2>
          <ul className="mb-16 columns-3">
            {st.map((item) => (
              <li key={item.id} className="flex items-start py-4">
                <img src={check} alt="checkmark" width={24} height={24} />
                <p className="ml-4">
                  <span className="text-md font-semibold">
                    {item.title}: &nbsp;{" "}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {item.description}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="lg:px-32 -mt-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black mb-16 -mt-14">Precios</h2>
          <STPricing />
        </div>
      </Section>
    </>
  );
};

export default TechSupport;
