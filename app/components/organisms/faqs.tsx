import FAQItem from "../molecules/faq-item";

const faqs = [
  {
    q: "What exactly is Plourg?",
    a: "Plourg is a campus-focused marketplace that makes it easy to buy, sell, or find anything you need—food, services, or one-off items—from people on or around your campus.",
  },
  {
    q: "Do I need to be a student to use Plourg?",
    a: "No. While Plourg is designed for campus communities, anyone living or working around campus can join and use the platform.",
  },
  {
    q: "Is there a cost to join the waitlist?",
    a: "Nope. Joining the waitlist is completely free.",
  },
  {
    q: "How will I know when it's my turn to join?",
    a: "We'll notify you by SMS or email using the details you provided when it's time to onboard.",
  },
  {
    q: "I'm a vendor, how does Plourg help me?",
    a: "Plourg gives you a central place to showcase your products or services, manage orders efficiently, and connect with a steady stream of buyers without juggling random chats.",
  },
  {
    q: "Can I post second-hand items or things I'm no longer using?",
    a: "Yes! We're building Plourg Thrift for exactly that. Sell your unused items to others on or near campus.",
  },
  {
    q: "What if I need help or have feedback?",
    a: "You can reach out through our social media channels. We value your input and will respond as quickly as possible.",
  },
];

export default function FAQs() {
  return (
    <section className="justify-center flex flex-col mx-[308px]">
      <h2 className="text-[#000000] font-semibold font-franklin text-[28px] md:text-[32px]">
        FAQs
      </h2>
      <p className="text-[#A3A3A3]">Common questions from shoppers like you</p>
      <div className="grid gap-3 p-[40px] rounded-[24px] bg-[#F7F7F7] border-b border-[#E5E5E5] mt-[32px]">
        {faqs.map((f) => (
          <FAQItem key={f.q} question={f.q} answer={f.a} />
        ))}
      </div>
    </section>
  );
}
