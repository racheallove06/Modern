import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Stay Informed with Our Latest Insights</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Nov 15, 2023"
          text="Unlocking the Potential of ExpenseEase: A Comprehensive Guide"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Nov 12, 2023"
          text="Simplifying Budgeting: How ExpenseEase Is Changing the Game"
        />
        <Article
          imgUrl={blog03}
          date="Nov 8, 2023"
          text="The Future of Financial Management: A Glimpse into ExpenseEase"
        />
        <Article
          imgUrl={blog04}
          date="Nov 5, 2023"
          text="Empowering Users: The Intelligent Features of ExpenseEase"
        />
        <Article
          imgUrl={blog05}
          date="Nov 1, 2023"
          text="ExpenseEase in Action: Real Stories from Our Early Users"
        />
      </div>
    </div>
  </div>
);

export default Blog;
