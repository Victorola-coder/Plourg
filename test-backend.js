// Simple test script to verify backend setup
const testWaitlistSubmission = async () => {
  try {
    console.log("🧪 Testing waitlist submission...");

    const response = await fetch("http://localhost:3000/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Test User",
        phone: "+1234567890",
        location: "Test Location",
        university: "Test University",
        feedback: "This is a test submission",
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Waitlist submission successful:", data);
    } else {
      console.log("❌ Waitlist submission failed:", data);
    }
  } catch (error) {
    console.log("❌ Network error:", error.message);
  }
};

const testAdminEndpoint = async () => {
  try {
    console.log("🧪 Testing admin endpoint...");

    const response = await fetch(
      "http://localhost:3000/api/admin/waitlist?page=1&limit=5",
      {
        headers: {
          Authorization: "Bearer test-admin-key",
        },
      }
    );

    if (response.status === 401) {
      console.log("✅ Admin endpoint properly secured (401 Unauthorized)");
    } else {
      console.log("⚠️ Admin endpoint response:", response.status);
    }
  } catch (error) {
    console.log("❌ Admin endpoint error:", error.message);
  }
};

// Run tests
console.log("🚀 Starting backend tests...\n");

testWaitlistSubmission().then(() => {
  console.log("\n");
  testAdminEndpoint().then(() => {
    console.log("\n✨ Tests completed!");
    console.log("\n📝 Next steps:");
    console.log("1. Set up your environment variables in .env.local");
    console.log("2. Configure your database connection");
    console.log("3. Set up Zoho email credentials");
    console.log("4. Run: npm run dev");
    console.log("5. Visit: http://localhost:3000/admin");
  });
});
