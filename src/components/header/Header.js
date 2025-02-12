import "./Header.css";

import burger from "../../assets/icons/burger-menu-svgrepo-com.svg";

import Container from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const selectActiveLink = (isActive) => {
        return isActive ? "active-link" : "";
    }

    const onSideMenuOpen = () => {setIsSideNavOpen(true)}
    const onSideMenuClose = () => {setIsSideNavOpen(false)}

    const NavigationLink = ({link, label}) => {
        return(
            <NavLink to={link} className={(navData) =>
                selectActiveLink(navData.isActive)}
                onClick={onSideMenuClose}>{label}</NavLink>
        );
    }

    return (
        <>
            <Container width={1440}>
                <header>
                    <h1 className="header-title">RUNO</h1>
                    <nav>
                        <div className="header-links">
                            <NavigationLink link={"/"} label={"Home"}/>
                            <NavigationLink link={"/about"} label={"About"}/>
                            <NavigationLink link={"/create"} label={"Create"}/>
                            <NavigationLink link={"/articles"} label={"Articles"}/>
                        </div>
                        <span className="vertical-line"></span>
                        <img src={burger} 
                        alt="Burger icon" 
                        class="burger-icon"
                        onClick={onSideMenuOpen} />
                    </nav>
                </header>
                <div className="side-nav-container" style={
                        {display: isSideNavOpen ? "block" : "none"
                    }}
                    onClick={onSideMenuClose}>
                    <nav className={`side-nav ${isSideNavOpen ? 
                    "side-nav-open-animation" :
                    "side-nav-close-animation"}`}>
                        <NavigationLink link={"/"} label={"Home"}/>
                        <NavigationLink link={"/about"} label={"About"}/>
                        <NavigationLink link={"/create"} label={"Create"}/>
                        <NavigationLink link={"/articles"} label={"Articles"}/>
                    </nav>
                </div>
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