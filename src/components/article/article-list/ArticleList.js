import React from "react";

import "./ArticleList.css";
import { ArticleItem } from "../article-item/ArticleItem";

export const ArticleList = ({articlesList}) => {
    return (
        <div className="articles-list">
            {articlesList.map((item, index) => (
                <ArticleItem item={item}/>
            ))}
        </div>
    );
}