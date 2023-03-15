import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
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
    setMainBlog(blogs[0]);
  }, []);

  return (
    <div>
      <img src={mainBlog?.imageUrl} alt={mainBlog?.title} className='main-blog-img' />
      <div>dfd</div>
    </div>
  );
};

export default Home;
