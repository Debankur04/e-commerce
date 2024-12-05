import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import Signin from "./Components/Signin";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}
