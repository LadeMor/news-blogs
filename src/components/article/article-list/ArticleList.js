import React from "react";

import { NavLink } from "react-router-dom";

import "./ArticleList.css";

export const ArticleList = ({articlesList}) => {
    return (
        <div className="articles-list">
            {articlesList.map((item, index) => (
                <NavLink to="/article-page" style={{ textDecoration: "none" }}>
                    <div className="article-list-card" >
                        <div className="articles-list-image">
                            <img src={item.coverImageUrl} />
                            <div className="articles-tag-list">
                                {item.tags.map((label) => (
                                    <div className="tag-label articles-list-image-label">
                                        {label}
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="articles-list-text">
                            <p className="articles-list-text-date">{item.date}</p>
                            <h2 className="articles-list-text-title">{item.title}</h2>
                            <p className="articles-list-text-description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
}