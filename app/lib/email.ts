import nodemailer from 'nodemailer'

interface EmailData {
  name: string
  phone: string
  location: string
  university: string
  feedback?: string
}

export async function sendWaitlistEmail(data: EmailData) {
  const transporter = nodemailer.createTransporter({
    host: process.env.ZOHO_SMTP_HOST,
    port: parseInt(process.env.ZOHO_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.ZOHO_EMAIL, // Send to yourself for admin notification
    subject: 'New Waitlist Signup - Plourg',
    html: `
      <h2>New Waitlist Signup</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>University:</strong> ${data.university}</p>
      ${data.feedback ? `<p><strong>Feedback:</strong> ${data.feedback}</p>` : ''}
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Waitlist email sent successfully')
  } catch (error) {
    console.error('Error sending waitlist email:', error)
    throw error
  }
}

export async function sendWelcomeEmail(email: string, name: string) {
  const transporter = nodemailer.createTransporter({
    host: process.env.ZOHO_SMTP_HOST,
    port: parseInt(process.env.ZOHO_SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.ZOHO_EMAIL,
    to: email,
    subject: 'Welcome to Plourg Waitlist!',
    html: `
      <h2>Welcome to Plourg, ${name}!</h2>
      <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
      <p>We'll notify you as soon as we launch our campus marketplace platform.</p>
      <p>Best regards,<br>The Plourg Team</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Welcome email sent successfully')
  } catch (error) {
    console.error('Error sending welcome email:', error)
    // Don't throw error for welcome email to avoid breaking the main flow
  }
}
