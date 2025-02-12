import "./BlogMetro.css";

import blog_image1 from "../../assets/images/blog-metro/Blog_Image.png";

export const BlogMetro = () => {

    const blogMetroPlaceholder = Array(3).fill(null);

    return (
        <section id="blog-metro">
            <h1 className="blog-metro-title">Editor’s Pick</h1>
            <div className="blog-metro-card-list">
                {blogMetroPlaceholder.map((item, index) => (
                    <div className="blog-metro-card" key={index}>
                        <img src={blog_image1} />
                        <a className="tag-label blog-metro-card-tag">FASHON</a>
                        <div className="blog-metro-card-content">
                            <a className="blog-metro-card-date">08.08.2021</a>
                            <h2 className="blog-metro-card-title">Richird Norton photorealistic rendering as real photos</h2>
                            <p className="blog-metro-card-text">Progressively incentivize cooperative systems
                                through technically sound functionalities.
                                The credibly productivate seamless data.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}