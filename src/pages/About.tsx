import { Link } from "react-router-dom";
import { check, yeyo } from "../assets";
import Section from "../components/Section";

const About = () => {
  return (
    <>
      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code -mt-24 mb-16 text-center">
            Nosotros
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
              <Link
                to="mailto:restrella@rcservice.tech"
                className="flex flex-col hover:scale-105 transition-all duration-150"
              >
                <div className="rounded-full border-[4px] border-slate-200/60 overflow-hidden h-[16rem] w-[16rem] bg-[#24203b]/40">
                  <img
                    src=""
                    alt="Ricardo Estrella"
                    className="object-contain h-full w-full text-center"
                  />
                </div>
                <p className="font-code text-center text-white text-lg mt-2">
                  Ricardo Estrella
                </p>
              </Link>
              <Link
                to="mailto:cviteri@rcservice.tech"
                className="flex flex-col hover:scale-105 transition-all duration-150"
              >
                <div className="rounded-full border-[4px] border-slate-200/60 overflow-hidden h-[16rem] w-[16rem] bg-[#24203b]/40">
                  <img
                    src={yeyo}
                    alt="Carlos Viteri"
                    className="object-contain h-full w-full object-bottom text-center"
                  />
                </div>
                <p className="font-code text-center text-white text-lg mt-2">
                  Carlos Viteri
                </p>
              </Link>
            </div>
            <p className="text-md mt-16">
              RCService nace de la visi&oacute;n y el esfuerzo conjunto de sus
              fundadores, Ricardo Estrella y Carlos Viteri. Con una
              s&oacute;lida experiencia en el sector, nos dedicamos a ofrecer
              servicios profesionales de alta calidad, siempre comprometidos con
              la satisfacci&oacute;n de nuestros clientes.
            </p>
          </div>
        </div>
      </Section>

      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code mb-16">
            Nuestra Historia
          </h2>
          <p className="text-md mt-16">
            RCService fue fundado en 2024 con la idea de brindar soluciones
            tecnol&oacute;gicas confiables y eficientes. Desde nuestros inicios,
            hemos trabajado arduamente para convertirnos en un referente en el
            sector, ayudando a nuestros clientes a alcanzar sus objetivos con
            nuestros servicios especializados.
          </p>
        </div>
      </Section>
      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code mb-16">
            Nuestros Valores
          </h2>
          <ul className="body-2">
            <li className="flex items-start py-4">
              <img src={check} alt="checkmark" width={24} height={24} />
              <p className="ml-4">
                <span className="font-bold">Calidad:&nbsp;</span> Nos esforzamos
                por ofrecer un servicio excepcional en cada proyecto y trabajo.
              </p>
            </li>
            <li className="flex items-start py-4">
              <img src={check} alt="checkmark" width={24} height={24} />
              <p className="ml-4">
                <span className="font-bold">Compromiso:&nbsp;</span> Nos
                dedicamos a satisfacer las necesidades de nuestros clientes.
              </p>
            </li>
            <li className="flex items-start py-4">
              <img src={check} alt="checkmark" width={24} height={24} />
              <p className="ml-4">
                <span className="font-bold">Innovaci&oacute;n:&nbsp;</span>{" "}
                Buscamos continuamente mejorar y ofrecer soluciones creativas.
              </p>
            </li>
            <li className="flex items-start py-4">
              <img src={check} alt="checkmark" width={24} height={24} />
              <p className="ml-4">
                <span className="font-bold">Integridad:&nbsp;</span>Actuamos con
                transparencia y &eacute;tica en todas nuestras acciones.
              </p>
            </li>
          </ul>
        </div>
      </Section>
      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code mb-16">El Equipo</h2>
          <p className="my-8">
            <span className="font-black text-lg">Ricardo Estrella:</span> Con
            más de siete años de experiencia en el sector, Ricardo se encarga de
            la gesti&oacute;n y coordinaci&oacute;n de proyectos, asegurando que
            cada detalle cumpla con nuestros altos est&aacute;ndares de calidad.
          </p>
          <p className="my-8">
            <span className="font-black text-lg">Carlos Viteri:</span>{" "}
            Especialista en la parte de hardware, Carlos aporta su conocimiento
            y habilidades t&eacute;cnicas para garantizar soluciones innovadoras
            y efectivas ante la mayor parte de problemas con tus equipos o a su
            vez, a construirlos seg&uacute;n tus necesidades con sus m&aacute;s
            de cinco a&ntilde;os de trayectoria en su campo.
          </p>
        </div>
      </Section>
      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code mb-16">
            Nuestros Servicios
          </h2>
          <p>
            Ofrecemos una amplia gama de servicios t&eacute;cnicos, adaptados a
            las necesidades espec&iacute;ficas de cada cliente. Nuestra
            especializaci&oacute;n y atenci&oacute;n al detalle nos permiten
            ofrecer resultados &oacute;ptimos y duraderos. Puedes ver entre{" "}
            <Link
              className="text-indigo-500 underline hover:text-indigo-700"
              to="/web-development"
            >
              Software
            </Link>{" "}
            y{" "}
            <Link
              className="text-indigo-500 underline hover:text-indigo-700"
              to="/tech-support"
            >
              Hardware o Equipos
            </Link>{" "}
            para obtener m&aacute;s informaci&oacute;n sobre el servicio
            espec&iacute;fico que desees.
          </p>
        </div>
      </Section>
      <Section className="px-8 lg:px-32" crosses>
        <div className="lg:w-2/4 lg:mx-auto">
          <h2 className="text-3xl font-black font-code mb-16">
            Compromiso con la calidad
          </h2>
          <p>
            En RCService, la satisfacci&oacute;n del cliente es nuestra
            prioridad. Trabajamos arduamente para superar las expectativas y
            ofrecer un servicio que marque la diferencia. Contamos con
            testimonios de clientes satisfechos y diversas certificaciones que
            avalan nuestra profesionalidad.
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
