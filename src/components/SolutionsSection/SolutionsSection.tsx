import React from 'react';
import './SolutionsSection.css';
import PostsCard from '../PostsCard/PostsCard';
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn';
import SignUpBtn from '../SignUpBtn/SignUpBtn';
import pic2 from '../../assets/pictures/pexels-photo-574069.png';
import pic1 from '../../assets/pictures/pexels-photo-3760069.png';
import pic3 from '../../assets/pictures/pexels-photo-3861972.png';

function SolutionsSection() {
  return (
    <div className='SolutionsSection container section-spacing'>
      <p className="solutions">
        Solutions
      </p>
      <div className="SolutionsSection-information">
        <p className="SolutionsSection-information-header">
          Transform your business with our digital solutions
        </p>
        <p className="SolutionsSection-information-p">
          Our key features enable small and medium-sized businesses to achieve cost savings, improve efficiency, and scale their operations through digital transformation. With our innovative solutions, you can automate everyday tasks, streamline processes, and stay ahead of the competition.
        </p>
      </div>
      <div className="posts-container">
        <PostsCard
          heading="Cost Savings"
          paragraph="Reduce expenses and optimize your budget"
          imgSrc={pic1}
        />
        <PostsCard
          heading="Efficiency Boost"
          paragraph="Streamline operations and increase productivity"
          imgSrc={pic2}
        />
        <PostsCard
          heading="Scalability Options"
          paragraph="Grow your business without limitations"
          imgSrc={pic3}
        />
      </div>
      {/* <div className="buttons-container">
        <LearnMoreBtn />
        <SignUpBtn />
      </div> */}
    </div>
  );
}

export default SolutionsSection;
