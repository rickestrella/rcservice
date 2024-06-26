import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import MouseEffect from "./MouseEffect";

const App = () => {
  return (
    <div className="relative">
      <MouseEffect />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
