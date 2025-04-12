import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstName, email, contactNumber, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // your Gmail
      pass: process.env.MAIL_PASS, // your App Password
    },
  });

  // const mailOptions = {
  //   from: email,
  //   to: process.env.MAIL_USER,
  //   subject: `Portfolio Contact from ${firstName}`,
  //   text: `Name: ${firstName}\nEmail: ${email}\nPhone: ${contactNumber}\nMessage:\n${message}`,
  // };

  const mailOptions = {
    from: process.env.MAIL_USER,   // Sender (your email)
    to: process.env.MAIL_USER,     // Receiver (your email)
    subject: `New message from ${firstName}`,
    replyTo: email,                // So when you click reply, it goes to the user
    text: `
      Name: ${firstName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
