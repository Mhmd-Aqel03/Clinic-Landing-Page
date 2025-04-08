const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { escape } = require("html-escaper");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.SMTP,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

const sendMails = (patientMail, doctorMail, date, time, name, pn) => {
  // Sanatise inputs
  const safeDate = escape(date);
  const safeTime = escape(time);
  const safeName = escape(name);
  const safePn = escape(pn);

  const patientMailOptions = {
    from: process.env.SMTP_MAIL,
    to: patientMail,
    subject: "Doctor Nabil appointment confirmation",
    html: `<p>Hello, this is to comform your appointment at Doctor Nabil's clinic on ${safeDate} at ${safeTime}</p>`,
    text: `Hello, this is to comform your appointment at Doctor Nabil's clinic on ${safeDate} at ${safeTime}`,
  };

  const doctorMailOptions = {
    from: process.env.SMTP_MAIL,
    to: doctorMail,
    subject: "Hellooo! You got an appontment from the website",
    html: `
        <p>The appointment is on ${safeDate} at ${safeTime}</p>
        <p>Pateint Details:</p>
        <p>Name: ${safeName}, Phone Number: ${safePn} </p> 
        <img src="https://media.giphy.com/media/aQwvKKi4Lv3t63nZl9/giphy.gif?cid=ecf05e47xqafx2j6vwnty6hbabx748hufsrbrplgxfb202zl&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="PEDROOOO"/>
    `,
    text: `The appointment is on ${safeDate} at ${safeTime}`,
  };
  try {
    // Send email to paitent
    transporter.sendMail(patientMailOptions, (error, info) => {
      if (error) {
        return console.log("Error sending email: ", error);
      }
      console.log("Email sent to pateint: ", info.response);
    });

    // Send email to doctor
    transporter.sendMail(doctorMailOptions, (error, info) => {
      if (error) {
        return console.log("Error sending email: ", error);
      }
      console.log("Email sent to dcotor: ", info.response);
    });
  } catch (error) {
    console.error("Error sending emails:", error);
  }
};

module.exports = sendMails;
