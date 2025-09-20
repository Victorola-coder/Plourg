"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    university: "",
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
      className="bg-[#F7F7F7] w-full mt-[44px] rounded-[24px] p-8 space-y-6"
    >
      <fieldset className="flex flex-col gap-[16px]">
        <label
          htmlFor="name"
          className="block font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full bg-white rounded-full px-4 py-3 text-[#000000] border-0 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00BA59]"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-[16px]">
        <label
          htmlFor="phone"
          className="block font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted mb-2"
        >
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-white rounded-full px-4 py-3 text-[#000000] border-0 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00BA59]"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-[16px]">
        <label
          htmlFor="location"
          className="block font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted mb-2"
        >
          I am a
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleInputChange}
          className="w-full bg-white rounded-full px-4 py-3 text-[#000000] border-0 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00BA59]"
        />
      </fieldset>

      <div>
        <label
          htmlFor="university"
          className="block font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted mb-2"
        >
          University
        </label>
        <input
          type="text"
          id="university"
          name="university"
          placeholder="Enter your university"
          value={formData.university}
          onChange={handleInputChange}
          className="w-full bg-white rounded-full px-4 py-3 text-[#000000] border-0 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00BA59]"
        />
      </div>

      <div>
        <label
          htmlFor="feedback"
          className="block font-franklin font-normal text-[16px] leading-[120%] tracking-[-2%] text-ink-muted mb-2"
        >
          What would you like us to add to make your campus experience better
        </label>
        <input
          id="feedback"
          name="feedback"
          placeholder="I want you to help us with..."
          value={formData.feedback}
          onChange={handleInputChange}
          className="w-full bg-white rounded-full px-4 py-3 text-[#000000] border-0 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00BA59] resize-none"
        />
      </div>

      <button
        type="button"
        className=" block mx-auto bg-[#00BA59] text-[#FFFFFF] font-medium font-franklin px-[24px] py-[10px] rounded-[99px]"
      >
        Join our waitlist
      </button>
    </form>
  );
}
