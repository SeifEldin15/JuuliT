  
import Navbar from '../components/Navbar/Navbar';
import FirstSection from '../components/FirstSection/FirstSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import SolutionsSection from '../components/SolutionsSection/SolutionsSection';
import SimplifiySection from '../components/SimplifiySection/SimplifiySection';
import ReviewSection from '../components/ReviewSection/ReviewSection';
import ScheduleSection from '../components/ScheduleSection/ScheduleSection';
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';
 
function home() {
  return (
    <>
      <Navbar />
      <FirstSection />  
      <SimplifiySection />
      <ServicesSection />
       <SolutionsSection />
       <Pricing />
       <ScheduleSection />
      <Footer />
     </>
  );
}

export default home;
