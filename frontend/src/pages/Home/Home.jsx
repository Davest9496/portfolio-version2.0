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
              Hey, I am{" "}
              <span className="hero-name">
                Dave
                <br /> Ejezie
              </span>{" "}
              and I<br /> love building pixel
              <br /> perfect websites!
            </h1>
            <Button
              className="btn-primary align-bottom-left"
              onClick={scrollToAbout}
              type="button"
              disabled={false}
            >
              About Me
              <PiArrowFatLinesDownThin className="btn-icon" />
            </Button>
          </div>
        </section>
      </div>
      <div className="container">
        <About id="about" />
        <CallToAction />
      </div>
    </div>
  );
}

export default Home;
