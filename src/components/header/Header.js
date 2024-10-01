import "./Header.css";

import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";
import pinterest from "../../assets/icons/pinterest.png";
import behance from "../../assets/icons/behance.png";

import search from "../../assets/icons/Search Icon.png"

const Header = () => {
    return(
        <>
            <header>
                <h1>RUNO</h1>
                <nav>
                    <div className="header-links">
                        <a href="#">Home</a>
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
        </>
    )
}

export default Header;