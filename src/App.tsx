import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
