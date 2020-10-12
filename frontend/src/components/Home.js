import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import actions from "../api/index";

const Home = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="headerTotal">
        <nav>
          <img
            src="./images/Copy of Little Leaf Big Tree Logo.png"
            alt="our logo"
            id={open ? "clickedlogo" : ""}
            class="logo"
            onClick={() => setOpen(!open)}
          />

          {/* {open ? ( */}

          <ul className="hamburgerMenu" id={open ? "clickedmenu" : ""}>
            {/* <Menu> */}
            <div className="x" onClick={() => setOpen(!open)}>
              X
            </div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/AddAGoal" style={{ textDecoration: "none" }}>
              <li>Add a Goal</li>
            </Link>
            <Link style={{ textDecoration: "none" }}>
              <li>Log In</li>
            </Link>
            <li>About Us</li>
            <li>Profile</li>
            {/* </Menu> */}
          </ul>
          {/* ) : null} */}
        </nav>

        <div className="textInHeader">
          <h3 className="title1">little leaf</h3>
          <br />
          <br />
          <h4 className="title2">big tree</h4>
        </div>
      </header>
      <div className="homeIntro">
        <h1 id="homeIT1">Let's Grow Together</h1>
        <h2 id="homeIT2">We're here to help you reach your goals!</h2>
      </div>
      <div className="bigTreeClass">
        <img
          src="./images/bigTree.png"
          alt="bigTreeImage"
          className="bigTreeImg"
        />
      </div>
      <div className="bodyText">
        <h5>"True life is lived when tiny changes occur." -Leo Tolstoy</h5>
        <p className="bodyTextP1">
          At Little Leaf Big Tree, we strive to create an inspiring and easing
          environment for our users to not only accomplish tasks and goals they
          set out to achieve but to exceed their expectations and create a habit
          of success!
        </p>
        <br />
        <h6>Our Inspiration for Little Leaf Big Tree</h6>
        <p className="bodyTextP2">
          As young women in an executive world, we're constantly setting goals
          and working tirelessly to complete the tasks neccessary to achieve our
          ambitious dreams! We hope to provide a platform that offers an
          inspiring space for our fellow amazing humans to create and succeed!
        </p>
      </div>

      <footer>
        <p>Created by: Ashtyn Czapansky, Rebecca Sell, & Jada Woody</p>
        <p>Ironhack Class of Aug 2020</p>
      </footer>
    </div>
  );
};

export default Home;
