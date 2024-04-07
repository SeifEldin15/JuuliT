import './SecondSection.css';
import pictus from '../../assets/pictures/pexels-photo-574069.png';

function SecondSection() {
  return (
     <div className='SecondSection container'>
        <img src={pictus} className='background' alt="" />
        <div className="SecondSection-information-container">
            <div className="SecondSection-information first">
       <p className="SecondSection-information-header">
            digital transofrmations services
            </p>
            <p className="SecondSection-information-p">
                Our workflow automation solutions simplifiy and optimize bsuiness processes saving time and increasing efficiency
            </p>
            </div>
            <div className="SecondSection-information">
       <p className="SecondSection-information-header">
            digital transofrmations services
            </p>
            <p className="SecondSection-information-p">
                Our workflow automation solutions simplifiy and optimize bsuiness processes saving time and increasing efficiency
            </p>
            </div>
            <div className="SecondSection-information">
       <p className="SecondSection-information-header">
            digital transofrmations services
            </p>
            <p className="SecondSection-information-p">
                Our workflow automation solutions simplifiy and optimize bsuiness processes saving time and increasing efficiency
            </p>
            </div>
        </div>
     </div>
  );
}

export default SecondSection;
