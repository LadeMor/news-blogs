import React, {useMemo, useEffect} from "react";

import Container from "../../components/container/Container";

import "./CreateArticle.css"
import { useState } from "react";

const CreateArticle = () => {
    // Title
    // Date
    // TextContent
    // Author
    // Tags Array

 

    const [selectedTags, setSelectedTags] = useState([]);

    const tagList = useMemo(() => [
        "ADVENTURE", "NATURE", "SPORT", "TRAVEL", "FASHON", "TECHNOLOGY", "ART", "BEAUTY"
    ], [])

    useEffect(() => {
        console.log(selectedTags);
    }, [selectedTags]);

    const onTagClick = (tagName) => {
        if(!selectedTags.includes(tagName)){
            setSelectedTags([...selectedTags, tagName]); 
        }else{
            const updatedSelectedTagList = selectedTags.filter((item) => item != tagName);
            setSelectedTags(updatedSelectedTagList);
        }
    }

    return(
        <Container width={1300}>
            <section id="create-article">
                <h1 className="create-article-title">Create article</h1>
                <form>
                    <div className="form-input">
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div className="form-input">
                        <label>Date</label>
                        <input type="date"/>
                    </div>
                    <div className="form-input">
                        <label>Author</label>
                        <input type="text"/>
                    </div>
                    <div className="form-input">
                        <label>Tags</label>
                        <div className="form-input-tag-list">
                            {tagList.map((item, index) => (
                                <div 
                                className={`tag ${selectedTags.includes(item) ? "selected-tag" : ""}`}
                                key={index}
                                onClick={() => onTagClick(item)}
                                >{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="form-input">
                        <label>Article content</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button className="form-input-submit">Publish</button>
                    </div>
                </form>
            </section>
        </Container>
    );
}

export default CreateArticle;