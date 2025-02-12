import { useState } from "react";

import { ArticleFilter } from "../../components/article/article-filter/ArticleFilter";
import { ArticleList } from "../../components/article/article-list/ArticleList";

import blog1 from "../../assets/images/blog/blog1.png";
import blog2 from "../../assets/images/blog/blog2.png";
import blog3 from "../../assets/images/blog/blog3.png";
import blog4 from "../../assets/images/blog/blog4.png";
import blog5 from "../../assets/images/blog/blog5.png";
import blog6 from "../../assets/images/blog/blog6.png";
import blog7 from "../../assets/images/blog/blog7.png";
import blog8 from "../../assets/images/blog/blog8.png";
import Container from "../../components/container/Container";

export const Articles = () => {

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
        <Container width={1300}>
            <section id="articles">
                <ArticleFilter/>
                <ArticleList articlesList={articlesList}/>
            </section>
        </Container>
    );
}