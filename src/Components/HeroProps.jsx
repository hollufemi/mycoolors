import "./HeroProps.css";
const HeroProps = ({Image,Title,Texts,}) => {
    return ( 
        <div className="fold">
        <img src={Image} alt="" />
        <h1>{Title}</h1>
        <p>{Texts}</p> 
    </div>
     );
};
 
export default HeroProps ;