import { Outlet } from "react-router-dom";
import Footer from "./lib/footer/footer";
import NavBar from "./lib/navbar/NavBar";

function Layout() {
  return (
    <div className="bg-grey-08">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
