import React from "react";
import { Container, Button } from "react-bootstrap";

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

const MainBlog = (mainBlog: Blog) => {

  // Render
  return (
    <div className="main-blog-wrap">
      <img src={mainBlog.imageUrl} className="main-blog-img-bg" />
      <div className="main-blog-bg-gradient"></div>
      <div className="main-blog">
        <div className="title">{mainBlog.title}</div>
        <div className="description">
          {mainBlog.description.slice(0, 100)}...
        </div>
        <Button>Read Article</Button>
      </div>
    </div>
  );
};

export default MainBlog;
