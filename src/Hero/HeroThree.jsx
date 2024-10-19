import "./HeroThree.css";
import Img1 from "../assets/Images/disney.svg";
import Img2 from "../assets/Images/dreamworks.svg";
import Img3 from "../assets/Images/warner-bros.svg";
import Img4 from "../assets/Images/netflix.svg";
import Img5 from "../assets/Images/airbnb.svg";
import Img6 from "../assets/Images/dropbox.svg";
import Img7 from "../assets/Images/Hasbro.png";
import Img8 from "../assets/Images/ubisoft.svg";
import Img9 from "../assets/Images/ea.svg";
import Img10 from "../assets/Images/apple.svg";
import Img11 from "../assets/Images/windows.png";
const HeroThree = ()=>{
    return(
        <div className="three">
            <h5>Used by 5+ million designers and by top companies</h5>
            <a href="https://disney.com/"><img src={Img1} alt=""/></a>
            <a href="https://dreamworks.com/"><img src={Img2} alt=""/></a>
            <a href="https://warnerbros.com/"><img src={Img3} alt=""/></a>
            <a href="https://airbnb.com/"><img src={Img4} alt=""/></a>
            <a href="https://dropbox.com/"><img src={Img5} alt=""/></a>
            <a href="https://dropbox.com/"><img src={Img6} alt=""/></a>
            <a href="https://hasbro.com/"><img src={Img7} alt=""/></a>
            <a href="https://ubisoft.com/"><img src={Img8} alt=""/></a>
            <a href="https://ea.com/"><img src={Img9} alt=""/></a>
            <a href="https://apple.com/"><img src={Img10} alt=""/></a>
            <a href="https://microsoft.com/"><img src={Img11} alt=""/></a>
        </div>
    );
  };
  export default HeroThree;