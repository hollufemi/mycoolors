import "./HeroTwo.css";
import HeroProps from "../Components/HeroProps";
import iOS from "../assets/Images/apple-black-logo.svg";
import Andrd from "../assets/Images/android-logo-svgrepo-com.svg";
import Figma from "../assets/Images/figma-svgrepo-com.svg";
import Chrome from "../assets/Images/chrome-svgrepo-com.svg";
import Adobe from "../assets/Images/adobe-svgrepo-com.svg";
const HeroTwo = () => {
    return ( 
        <div className="folds">
            <HeroProps Image={iOS} Title="iOS APP" Texts="Create , browse and save palettes on the go"/>
            <HeroProps Image={Andrd} Title="Android APP" Texts="Thousands of palettes in your pocket"/>
            <HeroProps Image={Figma} Title="Figma PlugIN" Texts="All Palettes right in your workplace"/>
            <HeroProps Image={Chrome} Title="Chrome Extension" Texts="Get and edit a palette every new tab."/>
            <HeroProps Image={Adobe} Title="Adobe Extension" Texts="Use coolors with your favourite tools"/>
        </div>
     );
};
 
export default HeroTwo;