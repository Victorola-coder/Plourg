import {
  Hero,
  FAQs,
  Features,
  CTAWaitlist,
  HowItWorks,
} from "./components/organisms";
import { Header, Footer } from "./components/atoms";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <CTAWaitlist />
      <FAQs />
      <Footer />
    </main>
  );
}
