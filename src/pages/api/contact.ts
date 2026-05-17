// /api/contact
import nodemailer from "nodemailer";

async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };

    try {
      await transporter.sendMail(mailData);
      res.status(200).send(); // successfully sent
    } catch {
      res.status(400).send(); // something went wrong
    }
  }
}

export default handler;
