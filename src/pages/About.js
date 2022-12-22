import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <div className="navigation">
        <h1 className="about">About</h1>
      </div>
      <div className="aboutstyle">
        Welcome to the Bookcase Application. <br />
        This application was created by a booker lover for book lovers to add
        all their favourite books.
        <br /> Click on the 'Add + ' button to add a book to your bookcase and
        use the search bar to find the latest books by name, author, or
        description.
      </div>
    </>
  );
};

export default About;
