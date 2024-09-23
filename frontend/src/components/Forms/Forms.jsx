import { useState } from "react";
import "./Forms.scss";
import Button from "../Button/Button";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      console.log("Sending form data:", formData);
      // const apiUrl = import.meta.env.VITE_API_URL;
      // console.log("API URL:", apiUrl);

      const response = await fetch(`/api/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Server error:", data);
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "An error occurred while sending the message."
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Dee Ugo"
            value={formData.name}
            onChange={handleChange}
            required
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
            value={formData.email}
            onChange={handleChange}
            required
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
            placeholder="Thanks for reaching out... How can I help?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {submitStatus === "success" && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="error-message">
          {errorMessage || "Error sending message. Please try again."}
        </p>
      )}
    </div>
  );
}

export default Forms;
