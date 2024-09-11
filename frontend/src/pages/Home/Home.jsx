import "./Home.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
// import { PiHandTapThin } from "react-icons/pi";
import { PiArrowFatLinesDownThin } from "react-icons/pi";
import About from "../About/About";
import CallToAction from "../../components/CallToAction/CallToAction";


function Home() {
  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-text">
              Hey, I am{" "}
              <span>
                Dave
                <br /> Ejezie
              </span>{" "}
              and I<br /> love building pixel
              <br /> perfect websites!
            </h1>
            <Link to="/contact">
              <Button
                className="btn-primary"
                onClick={() => (window.location.href = "/contact")}
                type="button"
                disabled={false}
              >
                About Me
                {/* <PiHandTapThin className="btn-icon" />
                 */}
                <PiArrowFatLinesDownThin className="btn-icon" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <div className="container">
        <About />
        <CallToAction />
      </div>
    </div>
  );
}

export default Home;
