import Hero from "./components/Hero";
import AboutUs from "./components/about-us";
import FAQ from "./components/faq";
import OurServices from "./components/our-services";

export default function Home() {
  return (
    <div>
    <Hero/>
    <AboutUs/>
    <OurServices/>
    <FAQ/>
    </div>
  );
}
