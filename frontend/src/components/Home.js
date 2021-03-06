import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../api/index";


const Home = (props) => {
  const [open, setOpen] = useState(false);
  // hi

  // { swal("Sign your butt in!") }

  return (
    <div>
      {/* <div className="textInHeader">
        <h3 className="title1">little leaf</h3>
        <br />
        <br />
        <h4 className="title2">big tree</h4>
      </div> */}

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
