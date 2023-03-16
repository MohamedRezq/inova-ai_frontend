import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import blogs from "../db/blogs.json";

interface Blog {
  id: string;
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  imageUrl: string;
  publishedAt: string;
  author: string;
  content: string;
}

const Home = () => {
  const [mainBlog, setMainBlog] = useState<Blog>({
    id: "00001",
    title: "",
    description: "",
    tags: [""],
    categories: [""],
    imageUrl: "",
    publishedAt: "",
    author: "",
    content: "",
  });
  useEffect(() => {
    setMainBlog(blogs[3]);
  }, []);

  return (
    <div className="home-container">
      <div className="main-article-wrap">
        <img src={mainBlog.imageUrl} className="main-article-img-bg" />
        <div className="main-article-bg-gradient"></div>
        <Container className="main-blog">
          <div className="title">{mainBlog.title}</div>
          <div className="description">
            {mainBlog.description.slice(0, 100)}...
          </div>
          <Button>Read Article</Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
