import Button from "../components/Button";
import Carousel2D from "../components/Carousel2D";
import Section from "../components/Section";
import WDPricing from "../components/WDPricing";

const WebDev = () => {
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
            <h1 className="h1 mb-6">Desarrollo Web</h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              ¿Necesitas un t&eacute;cnico de confianza, pero no encuentras uno?
            </p>
            <Button href="https://walink.co/9fe298" blank className="white">
              Contáctate conmigo
            </Button>
            <p className="body-1 max-w-3xl mx-auto mt-[1.875rem] mb-6 text-n-2 lg:mb-8">
              En cada desarrollo web, aplico un enfoque meticuloso y una
              pasi&oacute;n por el detalle, como si fuera mi propia obra
              maestra. Mi compromiso con la innovaci&oacute;n, la funcionalidad
              y la est&eacute;tica es evidente en cada proyecto. Con m&aacute;s
              de cuatro a&ntilde;os colaborando con diversas marcas y empresas,
              aseguro un desarrollo web que no s&oacute;lo cumple, sino que
              supera las expectativas, garantizando resultados &oacute;ptimos y
              experiencias en l&iacute;nea excepcionales.
            </p>
          </div>
          <Carousel2D />
        </div>
      </Section>
      <WDPricing />
    </>
  );
};

export default WebDev;
