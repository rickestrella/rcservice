import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WDPricing from "./components/WDPricing";

const App = () => {
  return (
    <>
      <h1>Hellooo</h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        {/* <WDPricing /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
