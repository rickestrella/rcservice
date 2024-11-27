import { Link } from "react-router-dom";
import { facebook, instagram } from "../assets";

const ContactForm = () => {
  return (
    <div className="h-full w-full p-8 md:p-12">
      <div className="md:grid grid-cols-2 rounded p-7 gap-11 bg-gray-950 shadow-lg shadow-indigo-950/70">
        <form action="" className="w-full  mx-auto flex gap-3 flex-col mb-8">
          <legend className="text-3xl font-semibold mb-5">
            ¿Necesitas m&aacute;s ayuda?
          </legend>

          <input
            type="email"
            placeholder="Email"
            id="email"
            className=" bg-transparent border-b-2 outline-none p-2"
          />

          <input
            type="text"
            placeholder="Asunto"
            id="subject"
            className="bg-transparent outline-none border-b-2 p-2"
          />

          <textarea
            rows={3}
            placeholder="Mensaje"
            id="message"
            className=" bg-transparent outline-none border-b-2 p-2"
          ></textarea>

          <button
            type="submit"
            className="w-32 bg-indigo-600 hover:bg-indigo-700 text-gray-300 mt-4 py-2 px-1 rounded-lg text-center text-lg font-semibold transition duration-300 hover:text-gray-200"
          >
            Enviar <i className="fa-solid fa-paper-plane    "></i>
          </button>
        </form>
        <div>
          <div className="flex flex-col items-center gap-2 p-6 ">
            <p className="text-neutral-300 mb-6">
              <span className="font-bold text-lg">
                {" "}
                Cont&aacute;ctanos y creemos algo incre&iacute;ble juntos!
                Si&eacute;ntete libre de enviarnos un correo que nosotros nos
                estaremos comunicando contigo lo antes posible.
              </span>{" "}
            </p>

            <div className="flex items-center">
              <i className="fas fa-envelope text-xl mr-2"></i>
              <Link
                to="mailto:info@rcservice.tech"
                className="text-lg font-medium text-neutral-300 hover:underline"
              >
                info@rcservice.tech
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                to="https://www.facebook.com/RCServices.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium "
              >
                <img src={facebook} alt="facebook" />
              </Link>
              <Link
                to="www.instagram.com/rcservice.ec/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium "
              >
                <img src={instagram} alt="instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
