import React from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowBarRight, ArrowRight } from "react-bootstrap-icons";
import BlogCard from "../components/BlogCard";

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

const RecentBlogs = (mainBlog: Blog) => {
  return (
    <div className="recent-blogs-section">
      {[mainBlog, mainBlog].map((blog, i) => (
        <BlogCard key={i} Blog={blog} withTime={false} withImage={true} />
      ))}
      <div className="recent-blogs-sidebar">
        {[mainBlog, mainBlog, mainBlog].map((blog, i) => (
          <div key={i} className="recent-blogs-sidebar-blog">
            <div className="recent-blogs-sidebar-title">{blog.title}</div>
            <div className="recent-blogs-sidebar-description">
              {blog.description.length > 150
                ? `${blog.description.slice(0, 150)}...`
                : blog.description}
            </div>
            <div className="recent-blogs-sidebar-read">Read Article <ArrowBarRight /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
