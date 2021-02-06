import nodemailer from 'nodemailer'

export const triggerEmail = (message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: process.env.SEND_IN_BLUE_USER,
      pass: process.env.SEND_IN_BLUE_PASS
    }
  });

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log('Error occurred:' + err.message);
    }
    else console.log(info);
  })
}
