import './Footer.css';
import Logo from '../Logo/Logo';

function Footer() {
  return (
     <div className='Footer container'>
        <div className="Footer-left-side">
        <Logo />
        <p className="Footer-info-header">
            Address:
        </p>
        <p className="Footer-info-p">
            the adress goes in here
        </p>
        <p className="Footer-info-header">
            Contact:
        </p>
        <p className="Footer-info-p">
            the Contact info goes in here
        </p>
        <div className="social-media-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>

        </div>
        </div>
        <div className="Footer-right-side">
            <div>
            <a href="">Link One</a>
        <a href="">Link Two</a>
        <a href="">Link Three</a>
        <a href="">Link Four</a>
        <a href="">Link Five</a>
            </div>
            <div>
            <a href="">Link Six</a>
        <a href="">Link Seven</a>
        <a href="">Link Eight</a>
        <a href="">Link Nine</a>
        <a href="">Link Ten</a>
            </div>
        </div>
      </div>
  );
}

export default Footer;
