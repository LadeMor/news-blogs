import "./Main.css";

import blog1 from "../../assets/images/blog/blog-image1.png";

const Main = () => {
    return (
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
                <div className="article-list-card">
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
            </div>
        </section>
    );
}

export default Main;