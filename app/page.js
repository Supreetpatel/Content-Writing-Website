import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Services from "@/components/Services";
//import ShowcasingMyWork from "@/components/ShowcasingMyWork";

export default function page() {
  return (
    <div className="md:space-y-4">
      <Herosection />
      <Services />
      <AboutUs />
      {/*<ShowcasingMyWork />*/}
      <ContactUs />
      <Footer />
    </div>
  );
}
