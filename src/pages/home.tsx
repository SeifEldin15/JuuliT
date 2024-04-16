  
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
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
      <HeroSection />  
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
