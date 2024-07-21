import Navbar from "../../components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Event from "./Components/Event";
import Wayang from "./Components/Wayang";
import Museum from "./Components/Museum";
import Article from "./Components/Article";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Wayang />
      <Museum />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
