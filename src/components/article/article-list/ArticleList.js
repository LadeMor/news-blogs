import React from "react";

import "./ArticleList.css";
import { ArticleItem } from "../article-item/ArticleItem";

export const ArticleList = ({articlesList}) => {
    return (
        <div className="articles-list">
            {articlesList.map((item, index) => (
                <ArticleItem item={item}/>
            ))}
            <div className="paggination-handle">
                <button>Previous</button>
                <p className="page-count">1</p>
                <button>Next</button>
            </div>
        </div>
    );
}