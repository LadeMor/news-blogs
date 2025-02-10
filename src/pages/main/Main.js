import "./Main.css";
import React, {useState} from "react";
import Container from "../../components/container/Container";

import blog1 from "../../assets/images/blog/blog1.png";
import blog2 from "../../assets/images/blog/blog2.png";
import blog3 from "../../assets/images/blog/blog3.png";
import blog4 from "../../assets/images/blog/blog4.png";
import blog5 from "../../assets/images/blog/blog5.png";
import blog6 from "../../assets/images/blog/blog6.png";
import blog7 from "../../assets/images/blog/blog7.png";
import blog8 from "../../assets/images/blog/blog8.png";

import blog_image1 from "../../assets/images/blog-metro/Blog_Image.png";
import { ArticleList } from "../../components/article/article-list/ArticleList";

const Main = () => {

    const placeholders = Array(8).fill(null);
    const blogMetroPlaceholder = Array(3).fill(null);

    const [articlesList, setArticlesList] = useState([
      {
        id: 1,
        title: "The Future of AI in Everyday Life",
        description: "Explore the growing role of artificial intelligence in everyday tasks and how it's shaping the future.",
        date: "12.05.2022",
        tags: ["TECHNOLOGY", "AI"],
        author: "Elon Musk",
        coverImageUrl: blog1,
        content: "Artificial intelligence is transforming..."
      },
      {
        id: 2,
        title: "Top 10 Beaches for Summer 2024",
        description: "Discover the best beaches around the world for your next summer vacation.",
        date: "21.06.2023",
        tags: ["TRAVEL", "BEACHES", "SUMMER"],
        author: "Emma Stone",
        coverImageUrl: blog2,
        content: "If you are looking for a paradise escape..."
      },
      {
        id: 3,
        title: "Healthy Eating Habits for a Better Life",
        description: "Learn the key tips to maintain a healthy diet and improve your overall well-being.",
        date: "08.03.2021",
        tags: ["HEALTH", "WELLNESS"],
        author: "Jamie Oliver",
        coverImageUrl: blog3,
        content: "Eating healthy is the foundation..."
      },
      {
        id: 4,
        title: "Exploring the Best Hiking Trails in 2024",
        description: "Find out about the top hiking destinations and trails for outdoor enthusiasts.",
        date: "15.08.2023",
        tags: ["ADVENTURE", "NATURE"],
        author: "Bear Grylls",
        coverImageUrl: blog4,
        content: "The beauty of hiking is the connection..."
      },
      {
        id: 5,
        title: "The Evolution of Fashion Through the Decades",
        description: "A retrospective look at how fashion has evolved over the years.",
        date: "04.09.2021",
        tags: ["FASHION", "HISTORY"],
        author: "Anna Wintour",
        coverImageUrl: blog5,
        content: "Fashion has always been a reflection..."
      },
      {
        id: 6,
        title: "Mastering Photography: Tips for Beginners",
        description: "Photography basics every beginner should know to get started.",
        date: "10.10.2022",
        tags: ["ART", "PHOTOGRAPHY"],
        author: "Annie Leibovitz",
        coverImageUrl: blog6,
        content: "Photography is an art form that..."
      },
      {
        id: 7,
        title: "How to Stay Fit at Home",
        description: "Tips for staying active and fit without leaving the house.",
        date: "05.11.2020",
        tags: ["FITNESS", "WELLNESS"],
        author: "Chris Hemsworth",
        coverImageUrl: blog7,
        content: "Staying fit doesn't require a gym..."
      },
      {
        id: 8,
        title: "Sustainable Living: How to Reduce Your Carbon Footprint",
        description: "Ways to live more sustainably and help combat climate change.",
        date: "23.07.2022",
        tags: ["ENVIRONMENT", "SUSTAINABILITY"],
        author: "Greta Thunberg",
        coverImageUrl: blog8,
        content: "Living sustainably is essential..."
      }
    ]);

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
                    <ArticleList articlesList={articlesList}/>
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
            </Container>
        </>
    );
}

export default Main;