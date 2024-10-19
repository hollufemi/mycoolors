import "./Header.css";
import LogoImg from "../assets/Images/logo.svg";

const Header = ()=>{
    return(
        <div className="head">
            <navleft>
            <img src={LogoImg} alt="logoImg"/>
            </navleft>

            <navright>
            <a href="">Tools</a>
            <a href="">Go Pro</a>
            <a href="">Sign In</a>
            <button className="btn">Sign Up</button>
            </navright>
        </div>
    );
  };
  export default Header;