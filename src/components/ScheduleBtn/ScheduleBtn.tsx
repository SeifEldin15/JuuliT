import './ScheduleBtn.css';
import { Link } from 'react-router-dom';  

function ScheduleBtn() {
  return (
   <Link to="/Schedule"> 
     <button className='ScheduleBtn'>
        Schedule
     </button>
     </Link>
  );
}

export default ScheduleBtn;
