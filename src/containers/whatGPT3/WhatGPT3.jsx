import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is ExpenseEase"
        text="Revolutionize expense management with ease. Streamline tracking, eliminate errors, and embark on a new era of hassle-free control. Our intelligent solution is designed to simplify the process and enhance your experience effortlessly."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Revolutionize Expense Management with Ease
      </h1>
      <p>Explore the Features</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Streamlined Expense Tracking"
        text="Effortlessly track and manage expenses, eliminating errors and saving time. Our intelligent solution makes expense management a breeze."
      />
      <Feature
        title="Intelligent Spending Control"
        text="Embark on a new era of hassle-free expense control. Our solution is designed to simplify the process, enhancing your overall expense management experience."
      />
      <Feature
        title="User-Friendly Budgeting"
        text="Experience user-friendly budgeting with our innovative app. Say goodbye to manual data entry and frustrating expense tracking—welcome a smarter way to manage your finances."
      />
    </div>
  </div>
);

export default WhatGPT3;
