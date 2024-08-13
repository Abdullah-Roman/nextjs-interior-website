import AboutCompany from "@/components/AboutCompany";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Testimonial from "@/components/Testimonial";
import SlickSection from "../components/SlickSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Review />
      <AboutCompany />
      <GallerySection />
      <SlickSection />
      <Testimonial />
    </>
  );
}
