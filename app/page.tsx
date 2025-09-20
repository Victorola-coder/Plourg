import {
  Hero,
  FAQs,
  Features,
  CTAWaitlist,
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
      <CTAWaitlist />
      <FAQs />
      <Footer />
    </main>
  );
}
