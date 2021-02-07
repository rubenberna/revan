import { triggerEmail } from '../../../config/nodemailer';
import { db } from '../../../config/firebase'

export default async function handler(req, res) {
  const {body: { firstName, lastName, email, phone, description}} = req;

  const message = {
    from: `<${email}>`,
    to: '"Revan" <rubenberna.dev@gmail.com>',
    subject: 'New lead',
    html: `<p>Hi,</p>
      <p>A new lead has been created!</p>
      <p><span><b>First name:</b></span> ${firstName}</p>
      <p><span><b>Last name:</b></span> ${lastName}</p>
      <p><span><b>Email:</b></span> ${email}</p>
      <p><span><b>Phone:</b></span> ${phone}</p>
      <p><span><b>Description:</b></span> ${description}</p>
      <br />
     `
  };
  triggerEmail(message);

  const docRef = db.collection('leads').doc(email)

  try {
    await docRef.set({
      firstName,
      lastName,
      email,
      phone,
      description,
      timestamp: new Date()
    })

    res.status(200).json({message: "Created"});
  } catch (e) {
    res.status(404).json({ message: e.message })
  }
}