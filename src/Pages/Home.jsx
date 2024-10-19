import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroOne from "../Hero/HeroOne";
import HeroTwo from "../Hero/HeroTwo";
import HeroThree from "../Hero/HeroThree";
import HeroFour from "../Hero/HeroFour";


const Home = ()=>{
    return(
        <div>
        <Header/>
        <HeroOne/>
        <HeroTwo/>
        <HeroThree/>
        <HeroFour/>
        <Footer/>  
        </div>
    );
  };
  export default Home;