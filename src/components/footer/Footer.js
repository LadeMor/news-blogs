import Container from "../container/Container";

import "./Footer.css";

import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import pinterest from "../../assets/icons/pinterest.png";
import behance from "../../assets/icons/behance.png";


const Footer = () => {
    return(
        <Container width={1440}>
            <footer>
                <div className="footer-contact">
                    <div className="footer-contacts-item">
                        <h1 className="footer-contact-title">Contact the Publisher</h1>
                        <a href="#">mike@runo.com</a>
                        <a href="#">+944 450 904 505</a>
                    </div>
                    <div className="footer-contacts-item">
                        <h1 className="footer-contact-title">Explorate</h1>
                        <a href="#">About</a>
                        <a href="#">Partners</a>
                        <a href="#">Job Opportunities</a>
                        <a href="#">Advertise</a>
                        <a href="#">Membership</a>
                    </div>
                    <div className="footer-contacts-item">
                        <h1 className="footer-contact-title">Headquarter</h1>
                        <a href="#">191 Middleville Road,<br/> NY 1001, Sydney<br/> Australia</a>
                    </div>
                    <div className="footer-contacts-item">
                        <h1 className="footer-contact-title">Connections</h1>
                        <div className="footer-contacts-item-icons">
                            <img src={facebook} alt="Facebook logo"/>
                            <img src={twitter} alt="Twitter logo"/>
                            <img src={youtube} alt="Youtube logo"/>
                            <img src={pinterest} alt="Pinterest logo"/>
                            <img src={behance} alt="Behance logo"/>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <h3>2021 | RUNO Publisher Studio</h3>
                    <p>Subscribe Now</p>
                </div>
            </footer>
        </Container>
    );
}

export default Footer;