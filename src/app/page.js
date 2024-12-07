
import Form from "./Components/Checkout";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Form/>
      <Product/>
      <Footer/>
    </div>
  );
}
