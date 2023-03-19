import React, { FC } from "react";
import { Badge } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

interface BlogCardProps {
  Blog: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    categories: string[];
    imageUrl: string;
    publishedAt: string;
    author: string;
    content: string;
  };
  withTime: Boolean;
  withImage: Boolean;
}

const BlogCard: FC<BlogCardProps> = (props): JSX.Element => {
  console.log("rx at section: ", props.Blog);
  return (
    <div className="blog-card-container">
      {props.withImage && (
        <div className="blog-card-img-container">
          <div className="blog-card-img-overlay">Read Article</div>
          <img
            src={props.Blog.imageUrl}
            alt={props.Blog.title}
            className="blog-card-img"
          />
        </div>
      )}
      <div className="blog-card-tags">
        {props.Blog.tags.slice(0, 3).map((tag, i) => (
          <Badge bg="warning">{tag}</Badge>
        ))}
      </div>
      <div className="blog-card-title">
        {props.Blog.title.length > 60
          ? `${props.Blog.title.slice(0, 60)}...`
          : props.Blog.title}
      </div>
      <div className="blog-card-publish">
        <img
          src="assets/account.png"
          alt="author"
          className="blog-card-publish-author-img"
        />
        Mohamed Rezq
      </div>
      <div className="blog-card-footer">
        <button className="blog-card-btn">Read Article</button>
        <div className="blog-card-publish-date">25 Mar 2023</div>
      </div>
    </div>
  );
};

export default BlogCard;
