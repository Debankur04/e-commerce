
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Product/>
      <CartPage/>
      <Footer/>
    </div>
  );
}