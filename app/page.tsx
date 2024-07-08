import Hero from "./_components/Hero";
import Products from "./_components/Products";
import Testimonials from "./_components/Testimonials";
export default function Home() {
  return (
    <div className="z-0">
      <Hero />
      <Products />
      <Testimonials />
    </div>
  );
}
