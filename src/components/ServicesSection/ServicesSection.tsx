import './ServicesSection.css';
import Orange from './pexels-photo-4974915.png';

function SecondSection() {
  return (
    <div className='ServicesSection container section-spacing'>
      <div className="ServicesSection-left-side">
        <p className="ServicesSection-left-side-header">
          Why Juul IT Hosting Is Different
        </p>
        <p className="ServicesSection-left-side-p">
          Most hosting providers cut corners by making you share the CPU and RAM resources you're paying for. Not us.
        </p>
        <div className="feature-container">
          <div className='icon-container'>
            <i className="fa-solid fa-droplet"></i>
          </div>
          <div className="feature-container-info">
            <h3>Full Customization</h3>
            <p>
              Get full FTP access for easy customization.
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="icon-container feature-container-middle">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div className="feature-container-info">
            <h3>Flexible Scaling</h3>
            <p>
              Scale your server as you grow.
            </p>
          </div>
        </div>
        <div className="feature-container">
          <div className="icon-container">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="feature-container-info">
            <h3>Always-on Support</h3>
            <p>
              Our team of experts is available 24/7 for support.
            </p>
          </div>
        </div>
      </div>
      <div className="ServicesSection-right-side">
         <img src={Orange} alt="" />
      </div>
    </div>
  );
}

export default SecondSection;
