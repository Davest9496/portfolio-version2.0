import "./About.scss";
import profile from "../../assets/dee.jpeg";


function About() {

  return (
    <div className="about">
      <img
        src={profile}
        alt="About Me"
        className="about-image"
      />
      <div className="about-text-box">
        <h2>About Me</h2>
        <p className="about-text">
          Hello! I am Dave Ejezie, a passionate web developer with a keen eye
          for detail. I specialize in creating pixel-perfect websites that not
          only look great but also provide seamless user experiences. With
          expertise in modern web technologies and a strong foundation in design
          principles, I strive to bridge the gap between aesthetics and
          functionality. My goal is to craft digital solutions that make a
          lasting impact. When I am not coding, you can find me exploring new
          design trends, contributing to open-source projects, or enjoying a
          good cup of coffee while brainstorming my next creative endeavor.
        </p>
        <button className="btn btn-secondary">Download Resume</button>
      </div>
    </div>
  );
}

export default About;
