const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const path = require("path");
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/send-message", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Send email
    await transporter.sendMail({
      from: `"Message Form" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending message" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
