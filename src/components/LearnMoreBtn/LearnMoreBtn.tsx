import './LearnMoreBtn.css';
import { Link } from 'react-router-dom';  

function LearnMoreBtn() {
  return (
   <Link to="/LearnMore"> 
     <button className='LearnMoreBtn'>
        Learn More
     </button>
     </Link>
  );
}

export default LearnMoreBtn;
