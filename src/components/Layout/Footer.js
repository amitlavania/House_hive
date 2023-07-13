import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className=" footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        HOUSE HIVE
      </h3>
      <h6>Discover your dream home or sell your property hassle-free</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4 " title="Github ">
          <Link to="/">
            <BsGithub color="white" size={30} />
          </Link>
          
        </p>
       <p>Made by: Amit, Divyansh, Garima and Himanshu</p>
      </div>
    </div>
  );
};

export default Footer;
