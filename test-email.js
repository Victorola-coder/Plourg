// Test script to verify Zoho email configuration
const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testEmail() {
  console.log("🧪 Testing Zoho email configuration...\n");

  // Check environment variables
  const requiredVars = [
    "ZOHO_EMAIL",
    "ZOHO_PASSWORD",
    "ZOHO_SMTP_HOST",
    "ZOHO_SMTP_PORT",
  ];
  const missingVars = requiredVars.filter((varName) => !process.env[varName]);

  if (missingVars.length > 0) {
    console.log("❌ Missing environment variables:", missingVars.join(", "));
    console.log("Please set these in your .env.local file");
    return;
  }

  console.log("✅ Environment variables found");
  console.log(`📧 Email: ${process.env.ZOHO_EMAIL}`);
  console.log(
    `🔗 SMTP Host: ${process.env.ZOHO_SMTP_HOST}:${process.env.ZOHO_SMTP_PORT}\n`
  );

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port: parseInt(process.env.ZOHO_SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  // Test connection
  try {
    console.log("🔌 Testing SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection successful!\n");

    // Send test email
    console.log("📤 Sending test email...");
    const info = await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL, // Send to yourself
      subject: "Plourg Email Test",
      html: `
        <h2>🎉 Email Test Successful!</h2>
        <p>Your Zoho email configuration is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>From:</strong> Plourg Backend</p>
      `,
    });

    console.log("✅ Test email sent successfully!");
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log("\n🎉 Your email setup is working perfectly!");
  } catch (error) {
    console.log("❌ Email test failed:");
    console.log(error.message);

    if (error.message.includes("Invalid login")) {
      console.log("\n💡 Troubleshooting tips:");
      console.log(
        "1. Make sure you're using an app-specific password, not your regular password"
      );
      console.log("2. Ensure 2FA is enabled on your Zoho account");
      console.log("3. Double-check your email address and password");
    }
  }
}

testEmail();
