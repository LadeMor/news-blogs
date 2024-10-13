import React, { useMemo, useEffect } from "react";

import Container from "../../components/container/Container";

import media_image from "../../assets/icons/media-image.svg";

import "./CreateArticle.css"
import { useState } from "react";

const CreateArticle = () => {
    // Title
    // Date
    // TextContent
    // Author
    // Tags Array

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const [selectedTags, setSelectedTags] = useState([]);

    const tagList = useMemo(() => [
        "ADVENTURE", "NATURE", "SPORT", "TRAVEL", "FASHON", "TECHNOLOGY", "ART", "BEAUTY", "BEACHES", "SUMMER", "WELLNESS", "PHOTOGRAPHY"
    ], [])

    const [data, setData] = useState({
        title: null,
        imageUrl: null,
        author: null,
        tags: null,
        articleText: null
    })

    const [errorMessages, setErrorMessages] = useState({
        titleError: null,
        imageError: null,
        authorError: null,
        tagsError: null,
        articleTextError: null
    });

    useEffect(() => {
        console.log(selectedTags);
    }, [selectedTags]);

    const onTagClick = (tagName) => {
        let updatedSelectedTags;
        if (!selectedTags.includes(tagName)) {
            updatedSelectedTags = [...selectedTags, tagName];

        } else {
            updatedSelectedTags = selectedTags.filter((item) => item != tagName);

        }
        setSelectedTags(updatedSelectedTags);
        setData({ ...data, tags: updatedSelectedTags })
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(file);
                setImageUrl(reader.result);
                setData({ ...data, imageUrl: reader.result })
            }
            reader.readAsDataURL(file);
        }
    }

    const onArticleSubmit = (e) => {
        e.preventDefault();

        if (!data.title) {
            setErrorMessages({ ...errorMessages, titleError: "Fill the title input!" })
        }
    }

    return (
        <Container width={1300}>
            <section id="create-article">
                <h1 className="create-article-title">Create article</h1>
                <form onSubmit={onArticleSubmit}>
                    <div className="form_input-group">
                        <div className="form_labels-group">
                            <label>Title</label>
                            <label className="form-input-error-msg">{errorMessages.titleError}</label>
                        </div>
                        <input className="form-input" type="text" onChange={(e) => { setData({ ...data, title: e.target.value }) }} />
                    </div>
                    <div className="form_input-group">
                        <div className="form_labels-group">
                            <label>Image</label>
                            <label className="form-input-error-msg">{errorMessages.imageError}</label>
                        </div>
                        <div className="form-input-image-preview">
                            {imageUrl ?
                                <img src={imageUrl} className="cover-image-preview" />
                                :
                                <img src={media_image} />}
                        </div>
                        <input  className=" form-input-image" type="file" accept="image/*"  onChange={handleImageChange} />
                    </div>
                    <div className="form_input-group">
                        <div className="form_labels-group">
                            <label>Author</label>
                            <label className="form-input-error-msg">{errorMessages.authorError}</label>
                        </div>
                        <input  className="form-input" type="text" onChange={(e) => { setData({ ...data, author: e.target.value }) }} />
                    </div>
                    <div className="form_input-group">
                        <div className="form_labels-group">
                            <label>Tags</label>
                            <label className="form-input-error-msg">{errorMessages.tagsError}</label>
                        </div>
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
                    <div className="form_input-group">
                        <div className="form_labels-group">
                            <label>Article text</label>
                            <label className="form-input-error-msg">{errorMessages.articleTextError}</label>
                        </div>
                        <textarea  className="form-input" onChange={(e) => { setData({ ...data, articleText: e.target.value }) }}></textarea>
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