 import './SimplifiySection.css';
 import cube from '../../assets/pictures/3d.png'
 import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn';
 import SignUpBtn from '../SignUpBtn/SignUpBtn';
 import Line from '../Line/Line';

function SimplifiySection() {
  return (
    <div className='SimplifiySection container section-spacing'>
        <div className="SimplifiySection-information">
        <p className="SimplifiySection-information-header">
          Transform your business with our digital solutions with us
        </p>
        <div className="buttons-container">
        <LearnMoreBtn />
        <SignUpBtn />
      </div>
      </div>
      <div className="SimplifiySection-RightSide">
        <div className="SimplifiySection-RightSide-icons">
            <img src={cube} alt="" />
            <Line /> 
            <img src={cube} alt="" />
            <Line /> 
            <img src={cube} alt="" />
            <Line /> 
            <img src={cube} alt="" />
        </div>
        <div>
          <h3>Initial Consultation</h3>
          <p>We'll discuss your needs and goals, and create customized plans for your business.</p>
          <h3>Implementation</h3>
          <p>Our team will be working closely with you to implement the solutions and ensure a smooth transition.</p>
          <h3>Ongoing Support</h3>
          <p>We provide continuous support to help you maximize the benefits.</p>
          <h3>Success Monitoring</h3>
          <p>We'll monitor the performance of your digital transformation and make adjustments as needed.</p>
        </div>
      </div>
    </div>
  );
}

export default SimplifiySection;
