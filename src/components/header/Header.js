import "./Header.css";

import facebook from "../../assets/icons/social/facebook.png";
import twitter from "../../assets/icons/social/twitter.png";
import youtube from "../../assets/icons/social/youtube.png";
import pinterest from "../../assets/icons/social/pinterest.png";
import behance from "../../assets/icons/social/behance.png";

import burger from "../../assets/icons/burger-menu-svgrepo-com.svg";

import search from "../../assets/icons/Search Icon.png"
import Container from "../container/Container";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return(
        <>
            <Container width={1440}>
                <header>
                    <h1 className="header-title">RUNO</h1>
                    <nav>
                        <div className="header-links">
                            <NavLink to="/" className={(navData) => navData.isActive ? "active-link" : ""}>Home</NavLink>
                            <NavLink to="/about" className={(navData) => navData.isActive ? "active-link" : ""}>About</NavLink>
                            <NavLink to="/create" className={(navData) => navData.isActive ? "active-link" : ""}>Create</NavLink>
                            <a href="#">Articles</a>
                        </div>
                        <span className="vertical-line"></span>
                        <img src={burger} alt="Burger icon" class="burger-icon"/>
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
                                Progressively incentivize cooperative systems through 
                                -technically sound functionalities. 
                                The credibly productivate seamless data.
                            </p>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Header;