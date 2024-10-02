import "./Header.css";

import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import pinterest from "../../assets/icons/pinterest.png";
import behance from "../../assets/icons/behance.png";

import search from "../../assets/icons/Search Icon.png"
import Container from "../container/Container";

const Header = () => {
    return(
        <>
            <Container width={1440}>
                <header>
                    <h1 className="header-title">RUNO</h1>
                    <nav>
                        <div className="header-links">
                            <a href="#" className="active-link">Home</a>
                            <a href="#">About</a>
                            <a href="#">Articles</a>
                            <a href="#">Contact Us</a>
                        </div>
                        <span className="vertical-line"></span>
                        <div className="header-links-icons">
                            <img src={facebook} alt="Facebook logo"/>
                            <img src={twitter} alt="Twitter logo"/>
                            <img src={youtube} alt="Youtube logo"/>
                            <img src={pinterest} alt="Pinterest logo"/>
                            <img src={behance} alt="Behance logo"/>
                        </div>
                        <span className="vertical-line"></span>
                        <img src={search} alt="Search"/>
                    </nav>
                </header>
                <section id="blog-slider">
                    <div className="blog-slider-wrapper">
                        <p className="tag-label">
                            ADVENTURE
                        </p>
                        <h1 className="blog-slider-title">Richird Norton photorealistic rendering as real photos</h1>
                        <div className="blog-slider-description">
                            <div className="blog-slider-description-date">
                                <p>08.08.2021</p>
                                <span className="blog-slider-horizontal-line"></span>
                            </div>
                            <p className="blog-slider-description-text">
                                Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                            </p>
                        </div>
                        <div className="dots">
                            <div className="dot active-dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Header;