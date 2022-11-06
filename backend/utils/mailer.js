"use-strict";
const nodemailer = require("nodemailer");

async function send365Email(from, to, subject, html, text) {
  try {
    const transportOptions = {
      host: "smtp.office365.com",
      port: "587",
      auth: { user: "gametigo9@gmail.com", pass: "Pikisuhi123" },
      secureConnection: true,
      tls: { ciphers: "SSLv3" },
    };

    const mailTransport = nodemailer.createTransport(transportOptions);

    await mailTransport.sendMail({
      from,
      to,
      replyTo: from,
      subject,
      html,
      text,
    });
  } catch (err) {
    console.error(`send365Email: An error occurred:`, err);
  }
}

module.exports = { send365Email };
