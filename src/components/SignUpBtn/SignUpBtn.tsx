import './SignUpBtn.css';
import { Link } from 'react-router-dom';  

function SignUpBtn() {
  return (
    <Link to="/SignUp"> 
     <button className='SignUpBtn'>
       Sign Up
     </button>
     </Link>
  );
}

export default SignUpBtn;
