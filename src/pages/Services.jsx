import { Link } from "react-router-dom";
import { service1bg, service2bg } from "../assets";
import Section from "../components/Section";

const Services = () => {
  return (
    <Section className="font-code" crosses>
      <div className="flex flex-col md:flex-row flex-wrap px-12 py-3 gap-4 items-center justify-around">
        <Link
          to="https://walink.co/9fe298"
          target="_blank"
          className="border border-slate-800 px-8 py-3 rounded-md w-2xl lg:w-auto lg:max-w-2xl hover:shadow-lg hover:shadow-slate-900"
        >
          <div className="flex flex-col w-full min-h-5 overflow-hidden">
            <img
              src={service1bg}
              alt="Imagen referencial"
              className="object-cover w-full h-2xl lg:h-52"
            />
          </div>
          <h3 className="text-lg mt-4 font-bold">Desarrollo Web</h3>
          <p className="text-md relative">
            Creamos sitios y aplicaciones web impecables y funcionales,
            adaptados a sus necesidades. Desde una página de aterrizaje hasta un
            sistema CRM completo, y mucho más.{" "}
            <span className="text-3xl absolute -bottom-1 right-0"> &rarr;</span>
          </p>
        </Link>
        <Link
          to="https://walink.co/276d5b"
          target="_blank"
          className="border border-slate-800 px-8 py-3 rounded-md w-2xl lg:w-auto lg:max-w-2xl hover:shadow-lg hover:shadow-slate-900"
        >
          <div className="flex flex-col w-full min-h-5 overflow-hidden">
            <img
              src={service2bg}
              alt="Imagen referencial"
              className="object-cover w-full h-2xl lg:h-52"
            />
          </div>
          <h3 className="text-lg mt-4 font-bold">Servicio Técnico</h3>
          <p className="text-md relative">
            Brindamos soporte técnico de excelencia para mantener sus
            dispositivos en perfecto estado. Realizamos visitas, consultas
            telefónicas, soporte en línea y más.{" "}
            <span className="text-3xl absolute -bottom-1 right-0"> &rarr;</span>
          </p>
        </Link>
      </div>
    </Section>
  );
};

export default Services;
