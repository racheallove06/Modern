import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />;
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        Unlock Limitless Financial <br /> Possibilities with ExpenseEase
      </h1>
      <p>
        Simplify your financial journey with ExpenseEase. Experience joy in
        managing expenses, altering the way you approach budgeting. Indulge in a
        seamless and pleasurable financial experience.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
