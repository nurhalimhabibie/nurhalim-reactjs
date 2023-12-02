import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../home");
  };

  return (
    <div>
      <h1>ini adalah halaman about</h1>

      <Button onClick={handleClick}>Klik menuju Home</Button>
    </div>
  );
};

export default About;
