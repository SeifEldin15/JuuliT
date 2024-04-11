import './ServicesSection.css';
import pictus from '../../assets/pictures/pexels-photo-3760069.png';

function SecondSection() {
  return (
     <div className='SecondSection container section-spacing'>
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
       Workflow Automation

            </p>
            <p className="SecondSection-information-p">
            bsuiness processes saving time and increasing efficiency bsuiness processes saving time and increasing efficiency
            </p>
            </div>
            <div className="SecondSection-information">
       <p className="SecondSection-information-header">
       Custom Software Solutions

            </p>
            <p className="SecondSection-information-p">
            We develop are seware solutions that address the unique needs of SMBs, empowering them to achieve their goals.            </p>
            </div>
        </div>
     </div>
  );
}

export default SecondSection;
