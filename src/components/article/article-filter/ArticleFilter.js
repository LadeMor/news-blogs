import "./ArticleFilter.css";

import arrow_down from "../../../assets/icons/arrow-down.svg";
import search from "../../../assets/icons/search.svg";
import { useState } from "react";

export const ArticleFilter = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const [tagList, setTagList] = useState(["ADVENTURE",
    "NATURE","SPORT","TRAVEL",
    "FASHION","TECHNOLOGY","ART","BEAUTY",
    "BEACHES","SUMMER","WELLNESS",
    "PHOTOGRAPHY","AI"]);

    const [selectedTag, setSelectedTag] = useState(null);

    const capitalizeFirstLetter = (word) => {
        const firstLetter = word[0];
        const secondPart = word.slice(1, word.length).toLowerCase();

        return firstLetter + secondPart;
    }

    const onDropDownClick = () => {
        setDropDownOpen(!dropDownOpen);
    }

    const onDropDownOptionClick = (filterTag) => {
        setSelectedTag(filterTag);
        setDropDownOpen(false);
    } 

    return (
        <div className="articles-header">
            <div className="articles-filter">
                <div className="articles-filter-left-part">
                    <div className="filter-selector">
                        <button onClick={onDropDownClick}>
                            {selectedTag ? selectedTag : "All"}
                            <img src={arrow_down} alt="Arrow down" />
                        </button>
                        <ul className={`dropdown-options ${dropDownOpen ? "dropdown-animation-open" : "dropdown-animation-hide"}`}>
                            {tagList.map((tag, index) => (
                                <li 
                                onClick={() => onDropDownOptionClick(capitalizeFirstLetter(tag))}
                                key={index}
                                >{capitalizeFirstLetter(tag)}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="articles-filter-search-block">
                        <input type="text" placeholder="Search..."/>
                        <img src={search} alt="Search" />
                    </div>
                </div>
                <button 
                onClick={() => setSelectedTag(null)}
                className="filter-btn">View All</button>
            </div>
        </div>
    );
}