import { triggerEmail } from '../../../config/nodemailer';

export default function handler(req, res) {
  const {body} = req;

  const message = {
    from: `<${body.email}>`,
    to: '"Revan" <rubenberna.dev@gmail.com>',
    subject: 'New lead',
    html: `<p>Hi,</p>
      <p>A new task has been created!</p>
      <p><span><b>First name:</b></span> ${body.firstName}</p>
      <p><span><b>Last name:</b></span> ${body.lastName}</p>
      <p><span><b>Email:</b></span> ${body.email}</p>
      <p><span><b>Phone:</b></span> ${body.phone}</p>
      <p><span><b>Description:</b></span> ${body.description}</p>
      <br />
     `
  };
  triggerEmail(message);

  res.status(200).json({message: "Created"});
}