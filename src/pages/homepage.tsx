import NavBar from "../lib/navbar/NavBar";
import Hero from "../lib/homepage/hero";
import Properties from "../lib/homepage/Properties";
import Testimonial from "../lib/homepage/Testimonial";
import Faq from "../lib/homepage/faq";
import Footer from "../lib/footer/footer";
function HomePage() {
  return (
    <div >
      
      <Hero></Hero>
      <Properties></Properties>
      <Testimonial></Testimonial>
      <Faq></Faq>
      
    </div>
  );
}

export default HomePage;
