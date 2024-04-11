import './ReviewSection.css';
import pictuss from '../../assets/pictures/pexels-photo-574069.png';
import Line from '../Line/Line';

function ReviewSection() {
  return (
     <div className='ReviewSection container section-spacing'>
        <div className="ReviewSection-img">
            <img src={pictuss} className='background' alt="" />
        </div>
        <div className="ReviewSection-RightSide">
            <div className="stars">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
            <p className="review">
                Our digital transformation journey with this company has been nothing short of amazing. They have helped us automate our everyday tasks, saving us time and increasing our efficiency. Highly recommended!
            </p>
            <div className="review-info">
                <div className="review-author">
                    <p className="author">John Doe</p>
                    <p className="author-info">CEO, ABC Company</p>
                </div>
                <div className="line2"></div>
                <p className="review-company">
                    WEBFLOW
                </p>
            </div>
        </div>
     </div>
  );
}

export default ReviewSection;
