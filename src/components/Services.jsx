import Heading from "./Heading";
import Section from "./Section";
import { check, service1, service2, facebookVideos } from "../assets";
import { developerServices, technicalServicesIcons } from "../constants";
import { PhotoChatMessage, Gradient, VideoBar } from "./design/Services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <Section crosses id="about">
      <div className="container">
        <Heading
          title="Nosotros"
          text="Digitalizamos tu negocio | Cuidamos tus equipos"
        />

        <div className="relative">
          <Link
            to="/web-development"
            className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right opacity-30 md:opacity-100"
                alt="Web development"
                loading="lazy"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Desarrollo Web</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                RCService tangibiliza tus ideas de manera elegante y adecuada a
                tu negocio.
              </p>
              <ul className="body-2">
                {developerServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img
                      src={check}
                      alt="checkmark"
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Link>

          <Link
            className="relative z-1 grid gap-5 lg:grid-cols-2"
            to="https://www.facebook.com/RCServices.tech/"
            target="_blank"
          >
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={facebookVideos}
                  className="h-full w-full px-7 py-[11rem] lg:w-2xl lg:h-2xl lg:py-[9rem] lg:px-[2rem]"
                  alt="reels"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Acompáñanos</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Entérate de lo último con nuestros reels.
                </p>
                <PhotoChatMessage />
                {/* <VideoBar /> */}
              </div>
            </div>

            <Link
              to="/tech-support"
              className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Servicio Técnico</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Te ofrecemos una amplia variedad de servicios; tus equipos
                  están en las mejores manos.
                  <br />
                  Contamos con 3 años de experiencia en el mercado e
                  innumerables clientes satisfechos con nuestros servicios.
                </p>

                <ul className="flex items-center justify-between">
                  {technicalServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center rounded-3xl justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-[0.27513rem] bg-conic-gradient rounded-2xl md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={item}
                          alt="Company Logo"
                          width={45}
                          height={24}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt=""
                  loading="lazy"
                />
              </div>
            </Link>
          </Link>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
