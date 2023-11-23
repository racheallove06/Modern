import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Effortless Expense Tracking",
    text: "Experience effortless expense tracking with ExpenseEase. Say goodbye to manual data entry and eliminate errors. Our innovative solution makes managing expenses a breeze.",
  },
  {
    title: "Intelligent Spending Control",
    text: "Take control of your expenses intelligently. ExpenseEase simplifies the process, enhancing your overall experience. It's time to embark on a new era of hassle-free expense management.",
  },
  {
    title: "User-Friendly Budgeting",
    text: "Enjoy user-friendly budgeting with ExpenseEase. Our app provides a smarter way to manage your finances, making it easy to track and stay on top of your budget effortlessly.",
  },
  {
    title: "Simplify Your Financial Management",
    text: "ExpenseEase simplifies financial management. No more distrusts or uncertainties. Our solution is designed to make household budgeting and financial planning a seamless and enjoyable experience.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Revolutionize Your Finances with ExpenseEase. Step into Financial
        Freedom Today.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
