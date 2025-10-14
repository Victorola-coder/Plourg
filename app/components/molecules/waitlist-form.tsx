"use client";

import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    university: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🎉 Successfully joined our waitlist!", {
          description: "We'll notify you when we launch our platform.",
          duration: 5000,
        });
        setFormData({
          name: "",
          phone: "",
          location: "",
          university: "",
          feedback: "",
        });
      } else {
        toast.error("❌ Failed to join waitlist", {
          description: data.error || "Something went wrong. Please try again.",
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("❌ Network Error", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#F7F7F7] w-full mt-[24px] md:mt-[44px] rounded-[16px] md:rounded-[24px] p-4 md:p-8 space-y-4 md:space-y-6"
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

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`block mx-auto font-medium font-franklin px-[24px] py-[10px] rounded-[99px] transition-colors duration-300 ${
          isSubmitting
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-[#00BA59] text-[#FFFFFF] hover:bg-[#00A550]"
        }`}
        whileHover={!isSubmitting ? { scale: 1.05 } : {}}
        whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {isSubmitting ? "Joining..." : "Join our waitlist"}
      </motion.button>
    </form>
  );
}
