import NavBar from "../lib/navbar/NavBar";
import Hero from "../lib/homepage/hero";
import Properties from "../lib/homepage/Properties";
function HomePage() {
  return (
    <div className="bg-grey-08">
      <NavBar></NavBar>
      <Hero></Hero>
      <Properties></Properties>

    </div>
  );
}

export default HomePage;
