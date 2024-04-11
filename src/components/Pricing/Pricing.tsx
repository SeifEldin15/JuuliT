import './Pricing.css';
import BuyNowBtn from '../BuyNowBtn/BuyNowBtn';

  function Pricing() {
  return (
     <div className='Pricing container section-spacing'>
      <div className="Pricing-heading-container">
        <p className='Pricing-heading'>
            Our pricing plans
        </p>
        <p className="Pricing-p">
          We have three pricing plans below, you can also start by getting 
        </p>
        <p className="Pricing-p Pricing-p2">
        our free trial, no credit card needed.
        </p>
      </div>
      <div className="pricing-card-container">
      <div className='pricing-div'>
      <div className="pricing-card">
        <p className="Price-type">
              Basic plan
          </p>
          <p className="Price-p">
            For small team needs
          </p>
          <div className="Price-container">
              <p className="Price-number">
                $10
              </p>
              <p className="Price-date">
                /mo
              </p>
          </div>
          <div className="Pricing-benefits">
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
          </div>
          <BuyNowBtn />
      </div>
      <div className="pricing-card middle">
        <p className="Price-type">
              Business plan
          </p>
          <p className="Price-p">
            For average team needs
          </p>
          <div className="Price-container">
              <p className="Price-number">
                $20
              </p>
              <p className="Price-date">
                /mo
              </p>
          </div>
          <div className="Pricing-benefits">
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
          </div>
          <BuyNowBtn />
      </div>
      <div className="pricing-card">
        <p className="Price-type">
              Enterprise plan
          </p>
          <p className="Price-p">
            For bigger team needs
          </p>
          <div className="Price-container">
              <p className="Price-number">
                $40
              </p>
              <p className="Price-date">
                /mo
              </p>
          </div>
          <div className="Pricing-benefits">
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
            <div><span><i className="fa-solid fa-check"></i> </span> <p>Serivce here</p></div>
          </div>
          <BuyNowBtn />
      </div>
      </div>
      </div>
 

     </div>
  );
}

export default Pricing;
