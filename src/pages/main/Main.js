import "./Main.css";
import Container from "../../components/container/Container";

import blog1 from "../../assets/images/blog/blog-image1.png";
import blog_image1 from "../../assets/images/blog-metro/Blog_Image.png";

const Main = () => {

    const placeholders = Array(8).fill(null);
    const blogMetroPlaceholder = Array(3).fill(null);

    return (
        <>
            <Container width={1300}>
                <section id="articles">
                    <div className="articles-header">
                        <h1 className="articles-header-title">Popular topics</h1>
                        <div className="articles-filter">
                            <div className="articles-filter-list">
                                <button style={{ color: "var(--focus-color)" }}>All</button>
                                <button>Adventure</button>
                                <button>Travel</button>
                                <button>Fashon</button>
                                <button>Technology</button>
                                <button>Branding</button>
                            </div>
                            <button className="filter-btn">View All</button>
                        </div>
                    </div>
                    <div className="articles-list">
                        {placeholders.map((_, index) => (
                            <div className="article-list-card" key={index}>
                                <div className="articles-list-image">
                                    <img src={blog1} />
                                    <div className="tag-label articles-list-image-label">
                                        ADVENTURE
                                    </div>
                                </div>
                                <div className="articles-list-text">
                                    <p className="articles-list-text-date">08.08.2021</p>
                                    <h2 className="articles-list-text-title">Dream destinations to visit this year in Paris</h2>
                                    <p className="articles-list-text-description">Progressively incentivize cooperative systems through
                                        technically sound functionalities. Credibly productivate
                                        seamless data with flexible schemas.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
            <Container width={1440}>
                <section id="big-post">
                        <div className="big-post-content">
                            <p className="tag-label big-post-tag">FASHON</p>
                            <h1 className="big-post-title">
                                Richird Norton photorealistic rendering as real photos
                            </h1>
                            <p className="big-post-text">
                            Progressively incentivize cooperative systems through technically sound functionalities. 
                            The credibly productivate seamless data.
                            </p>
                            <div className="horizontal-line"></div>
                            <p className="big-post-date">08.08.2021</p>
                        </div>
                </section>
            </Container>
            <Container width={1300}>
                <section id="blog-metro">
                    <h1 className="blog-metro-title">Editor’s Pick</h1>
                    <div className="blog-metro-card-list">
                        {/* <div className="blog-metro-card">
                            <img src={blog_image1}/>
                            <a className="tag-label blog-metro-card-tag">FASHON</a>
                            <div className="blog-metro-card-content">
                                <a className="blog-metro-card-date">08.08.2021</a>
                                <h2 className="blog-metro-card-title">Richird Norton photorealistic rendering as real photos</h2>
                                <p className="blog-metro-card-text">Progressively incentivize cooperative systems 
                                    through technically sound functionalities. 
                                    The credibly productivate seamless data.</p>
                            </div>
                        </div> */}
                        {blogMetroPlaceholder.map((_, index) => (
                            <div className="blog-metro-card" key={index}>
                                <img src={blog_image1}/>
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
            </Container>
        </>
    );
}

export default Main;