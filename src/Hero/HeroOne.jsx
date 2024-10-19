import "./HeroOne.css";
import SideImg from "../assets/Images/screen.png";

const HeroOne = ()=>{
    return(
        <div className="space">
          <aside className="left">
            <h1>The Super fast color palettes generator!</h1>
            <p>Create the perfect palette or get inspired by thousands of beautiful color schemes</p>
            <div className="bttn">
            <button className="btn1">Start the generator!</button>
            <button className="btn2">Explore trending palettes</button>
            <button className="btn3"><small>PRODUCT HUNT</small>#1 Product of the Month</button>
            </div>
          </aside>

          <aside>
            <img src={SideImg} alt=""/>
          </aside>
        </div>
    );
  };
  export default HeroOne;