const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Test the connection
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

const sendEmail = async (name, email, message) => {
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  console.log("Attempting to send email with credentials:", {
    user: process.env.SMTP_USER ? "Set" : "Not set",
    pass: process.env.SMTP_PASS ? "Set" : "Not set",
  });

  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw error;
  }
};

module.exports = sendEmail;
