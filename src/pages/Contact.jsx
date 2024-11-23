import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import Section from "../components/Section";

const Contact = () => {
  return (
    <Section className="lg:px-32" crosses>
      <div className="lg:w-2/4 lg:mx-auto">
        <h2 className="text-3xl font-black font-code mb-16 px-4 lg:px-0">
          Contacto
        </h2>
        <p className="px-4 lg:px-0">
          Estamos aqu&iacute; para ayudarte. No dudes en ponerte en contacto con
          nosotros a trav&eacute;s de nuestras redes sociales o nuestro
          formulario de contacto. Estamos comprometidos a responder tus
          consultas y ofrecerte el mejor servicio posible.
        </p>
        <div className=" my-7 flex flex-col lg:flex-row items-center justify-center gap-16">
          <Button
            className="font-code border border-white rounded-lg hover:bg-slate-700/30"
            href="/"
            blank
          >
            Necesito servicio t&eacute;cnico{" "}
            <span className="absolute -right-5 -top-[0.6rem] text-2xl">
              &rarr;
            </span>
          </Button>
          <Button
            className="font-code border border-white rounded-lg hover:bg-slate-700/30"
            href="/"
            blank
          >
            Necesito una p&aacute;gina/Aplicaci&oacute;n Web{" "}
            <span className="absolute -right-5 -top-[0.6rem] text-2xl">
              &rarr;
            </span>
          </Button>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
