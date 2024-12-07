import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";



export default function Home(props) {
  return (
    <div>
      <Navbar number={props.order_number}/>
      <Product/>
      <Footer/>
    </div>
  );
}
