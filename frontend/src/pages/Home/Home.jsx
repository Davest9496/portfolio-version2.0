import { useCallback } from "react";
import "./Home.scss";
import Button from "../../components/Button/Button";
import { PiArrowFatLinesDownThin } from "react-icons/pi";
import About from "../About/About";
import CallToAction from "../../components/CallToAction/CallToAction";

function Home() {
  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-text">
              Hey, I am <span className="hero-name">Dave Ejezie</span> and I
              build pixel perfect websites!
            </h1>
            <Button
              className="btn-primary"
              onClick={scrollToAbout}
              type="button"
              disabled={false}
            >
              About Me
              <PiArrowFatLinesDownThin className="btn-icon" />
            </Button>
          </div>
          <div className="hero-image"></div>
        </section>
        <section>
          <About id="about" />
          <CallToAction />
        </section>
      </div>
    </div>
  );
}

export default Home;
