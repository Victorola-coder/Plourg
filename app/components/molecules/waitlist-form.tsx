"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "Name.inc",
    phone: "09013456723",
    location: "Ketu, Lagos",
    university: "Ketu, Lagos",
    feedback: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F8F8F8] rounded-[24px] p-8 space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-[#A3A3A3] text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full bg-white rounded-[12px] px-4 py-3 text-[#000000] border-0 focus:outline-none focus:ring-2 focus:ring-[#00BA59]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-[#A3A3A3] text-sm mb-2">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-white rounded-[12px] px-4 py-3 text-[#000000] border-0 focus:outline-none focus:ring-2 focus:ring-[#00BA59]"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-[#A3A3A3] text-sm mb-2">
          I am a
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          className="w-full bg-white rounded-[12px] px-4 py-3 text-[#000000] border-0 focus:outline-none focus:ring-2 focus:ring-[#00BA59]"
        />
      </div>

      <div>
        <label
          htmlFor="university"
          className="block text-[#A3A3A3] text-sm mb-2"
        >
          University
        </label>
        <input
          type="text"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleInputChange}
          className="w-full bg-white rounded-[12px] px-4 py-3 text-[#000000] border-0 focus:outline-none focus:ring-2 focus:ring-[#00BA59]"
        />
      </div>

      <div>
        <label htmlFor="feedback" className="block text-[#A3A3A3] text-sm mb-2">
          What would you like us to add to make your campus experience better
        </label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
          placeholder="I want you to help us with..."
          rows={4}
          className="w-full bg-white rounded-[12px] px-4 py-3 text-[#000000] border-0 focus:outline-none focus:ring-2 focus:ring-[#00BA59] resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#00BA59] text-white font-medium font-franklin py-4 rounded-[12px] hover:bg-[#00A550] transition-colors"
      >
        Join the waitlist
      </button>
    </form>
  );
}
