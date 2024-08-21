import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaInstagram} from "react-icons/fa6";
import SectionHeader from "../../component/sectionHeader/SectionHeader";
import PortfolioImageBox from "../../component/about/portfolioImage/PortfolioImageBox";
import ContactInfo from "../../component/about/contactInfo/ContactInfo";
const About = () => {
  return (
    <section id="about">
      <SectionHeader title = "About Me"/>
       <div className="about_items">
        <PortfolioImageBox/>
        <ContactInfo/>
       </div>
        <div className="socail_box">
          <div className="socail_item">
            <FaFacebook/>
          </div>
          <div className="socail_item">
            <FaWhatsapp />
          </div>
          <div className="socail_item">
            <FaLinkedin />
             
          </div>
          <div className="socail_item">
            <SiFiverr />
          </div>
          <div className="socail_item">
            <FaInstagram />
          </div>
        </div>
    </section>
  )
}

export default About