import AboutAccordion from "../components/About/AboutAccordion/AboutAccordion";
import AboutGallery from "../components/About/AboutGallery/AboutGallery";
import Banner from '../components/General/Banner'
import Ftl from "../components/General/Ftl";
const About = () => {
  return (
    <div>
      <AboutGallery/>
      <AboutAccordion/>
      <Ftl/>
      <Banner/>
    </div>
  );
};

export default About;