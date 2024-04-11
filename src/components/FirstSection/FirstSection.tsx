import './FirstSection.css';
import ConsultaionBtn from '../ConsultaionBtn/ConsultaionBtn';
 function FirstSection() {
  return (
     <div className='FirstSection container'>
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
   
  );
}

export default FirstSection;
