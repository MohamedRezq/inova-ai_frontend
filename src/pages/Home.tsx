import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import blogs from "../db/blogs.json";

import MainBlog from "../components/MainBlog";
import RecentBlogs from "../sections/RecentBlogs";

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
    <Container className="home-container">
      <MainBlog {...mainBlog} />
      <RecentBlogs {...mainBlog} />
    </Container>
  );
};

export default Home;
