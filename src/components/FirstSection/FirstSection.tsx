import './FirstSection.css';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';
import pictu from '../../assets/pictures/pexels-photo-574069.png';
function FirstSection() {
  return (
     <div className='FirstSection'>
        <div className="img-overlay"></div>
        <img src={pictu} className='background' alt="" />
       <div className="img-text-container">
       <p className="img-text-header">
            Transform Your Business With Digital Solutions 
        </p>
        <p className="img-text">
            Unlock the power of automation and streamline your daily corporations 
        </p>
        <div className="img-buttons">
                    <LearnMoreBtn />
                    <SignUpBtn />
        </div>
       </div>
     </div>
  );
}

export default FirstSection;
