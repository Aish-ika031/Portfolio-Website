const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json()); 
app.use(cors()); 

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // change the below two info before running the code else server wont start//
    user: "Add your auser email",
    pass: "Add your APP Password"
  }
});

app.get("", async (req, res) => {
  res.send("Hello, this is a GET request!");
});

// API endpoint to send email
app.post("/send-email", async (req, res) => {
  try {
    console.log(req);
    console.log(req.body);
    const { name, email, message } = req.body;

    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "Add your recepient email",  // change it before running the code//
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });



    console.log("Email sent: " + info.response);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
