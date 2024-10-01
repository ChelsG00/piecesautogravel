// pages/api/send-email.js

import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, phoneNumber, email, employmentDate, cv } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Job Application from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Phone: ${phoneNumber}
        Email: ${email}
        Employment Date: ${employmentDate}
      `,
      attachments: [
        {
          filename: cv.name,
          content: cv.content,
          contentType: cv.type,
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;



