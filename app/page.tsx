import {
  Hero,
  FAQs,
  Features,
  CTAWaitlist,
  HowItWorks,
  WaitlistSection,
} from "./components/organisms";
import { Header, Footer } from "./components/atoms";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <WaitlistSection />
      <Features />
      <HowItWorks />
      <CTAWaitlist />
      <FAQs />
      <Footer />
    </main>
  );
}
