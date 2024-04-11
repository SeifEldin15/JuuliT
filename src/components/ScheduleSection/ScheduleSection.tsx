import './ScheduleSection.css';
import pictus from '../../assets/pictures/pexels-denys-gromov-4491951.jpg';
import ScheduleBtn from '../ScheduleBtn/ScheduleBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';

function ScheduleSection() {
  return (
     <div className='ScheduleSection  section-spacing'>
                <div className="ScheduleSection-info">
            <p className="ScheduleSection-header">
                Transform Your Business Today
            </p>
            <p className="ScheduleSection-p">
                Schedule a free consultation to discuss your digital transformation needs and automate your everyday tasks.
            </p>
            <div className="buttons-container">
                <ScheduleBtn />
                <SignUpBtn />
            </div>
        </div>
        <div className="overaly"></div>
        <img src={pictus} alt="" />
     </div>
  );
}

export default ScheduleSection;
