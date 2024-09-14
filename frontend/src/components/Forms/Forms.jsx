import "./Forms.scss";
import Button from "../Button/Button";

function Forms() {
    return (
      <div className="contact-form">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Dee Ugo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="How can I help?"
            ></textarea>
          </div>
          <Button className="btn btn-primary" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    );
}

export default Forms;