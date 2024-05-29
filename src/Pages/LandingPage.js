import AboutUs from "../components/AboutUs";
import Body from "../components/Body";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="App" id="home">
      <Header />
      <Body />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
