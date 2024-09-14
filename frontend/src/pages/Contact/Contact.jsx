import "./Contact.scss";
import Forms from "../../components/Forms/Forms";


function Contact() {
    return (
      <section id="contact">
        <div className="container" style={{ border: "1px solid red" }}>
          <div className="row" style={{ border: "1px solid blue" }}>
            <hr style={{ margin: "3em 0" }} />
            <div className="col-md-6" style={{ border: "1px solid green" }}>
              <div className="get-in-touch">
                <h1>Get In Touch</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="get-in-touch-text">
                <p>
                  I would love to hear about what you are working on and how I
                  could help. I am currently looking for a new role and am open
                  to a wide range of opportunities. My preference would be to
                  find a position in a company in London. But I am also happy to
                  hear about opportunites that do not fit that description. I am
                  a hard-working and positive person who will always approach
                  each task with a sense of purpose and attention to detail.
                  Please do feel free to check out my online profiles below and
                  get in touch
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <hr style={{ margin: "3em 0" }} />
            <div className="col-md-6">
              <div className="contact">
                <h1>Contact Me</h1>
              </div>
            </div>
            <div className="col-md-6">
              <Forms />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;