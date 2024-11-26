import { Link } from "react-router-dom";
import { companyLogos, affiliates } from "../constants";
import { useState } from "react";
import Modal from "./Modal";
import { createPortal } from "react-dom";

const CompanyLogos = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">
          Marcas que confiaron en nosotros
        </h5>
        <ul className="flex flex-wrap justify-evenly items-center">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-evenly flex-1 h-[8.5rem]"
              key={index}
            >
              <img
                src={logo}
                width={134}
                height={28}
                alt={logo}
                className="w-auto max-w-32 my-0 py-0"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={`${className} -mt-[0px]`}>
        <h5 className="tagline text-center text-n-1/50">Nuestra Red</h5>
        {/* <Carousel items={affiliates} /> */}

        <ul className="flex flex-wrap justify-evenly items-center">
          {affiliates.map((item) => (
            <li
              className="flex items-center justify-evenly flex-1 h-[8.5rem]"
              key={item.id}
            >
              {!item.url && (
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  <img
                    src={item.logo}
                    width={134}
                    height={28}
                    alt={item.name}
                    loading="lazy"
                    className="w-auto max-w-32 png-shadow"
                  />
                </button>
              )}
              {item.url && (
                <Link
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-all duration-150"
                >
                  <img
                    src={item.logo}
                    width={134}
                    height={28}
                    alt={item.name}
                    loading="lazy"
                    className="w-auto max-w-32 png-shadow"
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {showModal &&
        createPortal(
          <Modal
            title="¡Oops!"
            body="Parece que nuestro asociado todavía no cuenta con una página web. ¡Esp&eacute;rala pronto!"
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
};

export default CompanyLogos;
