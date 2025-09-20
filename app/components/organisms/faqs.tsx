import FAQItem from "../molecules/faq-item";

const faqs = [
  {
    q: "What exactly is Plourg?",
    a: "A campus‑focused marketplace to buy, sell, and connect with trusted local vendors.",
  },
  {
    q: "Do I need to be a student to use Plourg?",
    a: "No. While Plourg is built for campus communities, anyone living or working around campus can join and use the platform.",
  },
  {
    q: "Is there a cost to join the waitlist?",
    a: "Nope. Joining the waitlist is completely free.",
  },
  {
    q: "How will I know when it's my turn to join?",
    a: "We’ll notify you by email using the details you provided when it’s time to onboard.",
  },
  {
    q: "I'm a vendor, how does Plourg help me?",
    a: "Plourg gives you a simple toolkit to showcase your products or services, manage orders efficiently, and connect with a steady stream of buyers without juggling multiple channels.",
  },
];

export default function FAQs() {
  return (
    <section className="mx-auto justify-center flex flex-col md:mx-[48px] my-[64px]">
      <h2 className="text-[#000000] font-semibold font-franklin text-[28px] md:text-[32spx] mb-6">
        FAQs
      </h2>
      <div className="grid gap-3">
        {faqs.map((f) => (
          <FAQItem key={f.q} question={f.q} answer={f.a} />
        ))}
      </div>
    </section>
  );
}
