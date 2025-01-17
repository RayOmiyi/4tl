import AboutAccordion from "../components/About/AboutAccordion/AboutAccordion";
import Aboutftl from "../components/About/Aboutftl/Aboutftl";
import AboutGallery from "../components/About/AboutGallery/AboutGallery";
import Banner from '../components/General/Banner'
const About = () => {
  return (
    <div>
      <AboutGallery/>
      <AboutAccordion/>
      <Aboutftl/>
      <Banner/>
    </div>
  );
};

export default About;