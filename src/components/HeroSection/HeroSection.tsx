import './HeroSection.css';
import ConsultaionBtn from '../ConsultaionBtn/ConsultaionBtn';
import HeroImg from "../../assets/pictures/HERO.png"
import heroshapes from "../../assets/pictures/Group 75.jpg"
import heroshapesbottom  from "../../assets/pictures/frameshapes.png"

 function FirstSection() {
  return (
     <div className='herosection'>
              <img src={heroshapes} alt="" className='heroshapes1'/>
              <img src={heroshapesbottom} alt="" className='heroshapes2'/>

      <div className='container FirstSection'>
      <div className="hero-section-information">
      <h1 className="img-text-header">
            Transform Your Business With Digital Solutions 
        </h1>
        <p className="img-text">
            Unlock the power of automation and streamline your daily corporations 
        </p>
        <div className="img-buttons">
                    <ConsultaionBtn />
         </div>
      </div>
         <div className="hero-section-img">
            <img src={HeroImg} alt="" className='HeroImg'/>
         </div>
       </div>
   </div>
  );
}

export default FirstSection;
