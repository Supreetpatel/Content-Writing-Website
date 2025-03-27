import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, contact, message } = await req.json();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.EMAIL,
      to: "supreetpatel2004@gmail.com", // Change to the recipient's email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\n\nMessage: ${message}`,
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
