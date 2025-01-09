const nodemailer = require("nodemailer");
require("dotenv").config();

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (name, email, message) => {
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  try {
    const mailOptions = {
      from: process.env.SMTP_USER, // Use the authenticated email as sender
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
    return info;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw error;
  }
};

module.exports = sendEmail;
