import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
