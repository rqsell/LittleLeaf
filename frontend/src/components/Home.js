import React, { Component, useState, useEffect } from "react";
import actions from "../api/index";

const Home = (props) => {
  let [fruit, setFruit] = useState("kiwi");

  useEffect(() => {
    setFruit("passion fruit");
  }, []);

  const changeFruit = () => {
    setFruit("pineapple");
  };

  return (
    <div>
      <header class="headerTotal">
        <nav>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <img
              src="./images/Copy of Little Leaf Big Tree Logo.png"
              alt="our logo"
              class="logo"
            />
          </a>

          <ul class="headerList" id="links">
            <li>Home</li>
            <li>Sign Up</li>
            <li>Log In</li>
            <li>About Us</li>
            <li>Profile</li>
          </ul>
        </nav>

        <div class="textInHeader">
          <h3 class="title1">little leaf</h3>
          <br />
          <br />
          <h4 class="title2">big tree</h4>
        </div>
      </header>
      <div class="homeIntro">
        <h1>Let's Grow Together</h1>
        <h2 id="homeIT2">We're here to help you reach your goals!</h2>
      </div>
      <div class="bigTreeClass">
        <img
          src="./images/bigTree.png"
          alt="bit tree image"
          class="bigTreeImg"
        />
      </div>
      <div class="bodyText"></div>

      <footer>
        <p>Created by: Ashtyn Czapansky, Rebecca Sell, & Jada Woody</p>

        <p>Ironhack Class of Aug 2020</p>
      </footer>
    </div>
  );
};

export default Home;
