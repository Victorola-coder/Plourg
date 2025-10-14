// Database seeding script for testing
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const sampleData = [
  {
    name: "John Doe",
    phone: "+1234567890",
    location: "Student",
    university: "Harvard University",
    feedback: "Looking forward to the platform launch!",
  },
  {
    name: "Jane Smith",
    phone: "+1987654321",
    location: "Graduate Student",
    university: "MIT",
    feedback: "This will be great for campus commerce",
  },
  {
    name: "Mike Johnson",
    phone: "+1555123456",
    location: "Undergraduate",
    university: "Stanford University",
    feedback: "Excited to buy and sell on campus",
  },
  {
    name: "Sarah Wilson",
    phone: "+1444333222",
    location: "PhD Student",
    university: "UC Berkeley",
    feedback: "Perfect timing for my research needs",
  },
  {
    name: "Alex Brown",
    phone: "+1777888999",
    location: "Postgraduate",
    university: "Yale University",
    feedback: "This will revolutionize campus life",
  },
];

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing data
    await prisma.waitlist.deleteMany({});
    console.log("🗑️ Cleared existing waitlist data");

    // Insert sample data
    for (const data of sampleData) {
      await prisma.waitlist.create({ data });
      console.log(`✅ Created entry for ${data.name}`);
    }

    console.log("🎉 Database seeding completed successfully!");
    console.log(`📊 Total entries: ${sampleData.length}`);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
