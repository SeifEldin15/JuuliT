import './Logo.css';
import { Link } from 'react-router-dom';  

function Logo() {
  return (
    <Link to="/"> 
      <h2 className='Logo'>
          JuuliT
      </h2>
    </Link>

  );
}

export default Logo;
