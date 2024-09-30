import "./About.scss";
import profile from "../../assets/profile.jpeg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";


function About() {

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={profile} alt="About Me" className="about-image" />
          </div>
          <div className="col-12 col-md-6">
            <div className="about-text-box">
              <h2>About Me</h2>
              <p className="about-text">
                Hello! I am Dave Ejezie, a passionate web developer with a keen
                eye for detail. I specialize in creating pixel-perfect websites
                that not only look great but also provide seamless user
                experiences. With expertise in modern web technologies and a
                strong foundation in design principles, I strive to bridge the
                gap between aesthetics and functionality. My goal is to craft
                digital solutions that make a lasting impact. When I am not
                coding, you can find me exploring new design trends,
                contributing to open-source projects, or enjoying a good cup of
                coffee while brainstorming my next creative endeavor.
              </p>
              <Link to="/portfolio">
                <Button className="btn-secondary" type="button">go to portfolio</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
