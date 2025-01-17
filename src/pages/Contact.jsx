import Form from "../components/Contacts/Form";
import AboutAccordion from '../components/About/AboutAccordion/AboutAccordion'
import Ftl from '../components/General/Ftl'
import Banner from '../components/General/Banner'
const Contact = () => {
  return (
    <div>
      <Form/>
      <AboutAccordion />
      <Ftl/>
      <Banner/>
    </div>
  );
};

export default Contact;