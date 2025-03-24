import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";
import ShowcasingMyWork from "@/components/ShowcasingMyWork";

export default function page() {
  return (
    <>
      <Herosection />
      <Services />
      <AboutUs />
      <ShowcasingMyWork />
      <ContactUs />
    </>
  );
}
