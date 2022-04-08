import React, { useState } from "react";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Database from "./Database";
import Other from "./Other";
import downarrow from "../../images/downarrow.svg";
import Button from "@material-ui/core/Button";

const TechStack2 = () => {
  const [stack, setStack] = useState(0);

  const handleBackClick = (e) => {
    e.preventDefault();
    console.log("back");
    setStack((prevState) => {
      return prevState === 0 ? 2 : prevState - 1;
    });
    console.log(stack);
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    console.log("next");
    setStack((prevState) => {
      return prevState === 2 ? 0 : prevState + 1;
    });
    console.log(stack);
  };

  let stackRender;
  if (stack === 0) {
    stackRender = <FrontEnd />;
  } else if (stack === 1) {
    stackRender = <BackEnd />;
  } else if (stack === 2) {
    stackRender = <Other />;
  } 

  return (
    <>
      <div id="tech-stack-container">
        <div id="last-button-container">
          <Button
            variant="link"
            color="default"
            onClick={(e) => handleBackClick(e)}
            id="last-button" 
          >
            <img src={downarrow} />
          </Button>
        </div>
        {stackRender}
        <div id="next-button-container">
        <Button
            variant="link"
            color="default"
            onClick={(e) => handleNextClick(e)}
            id="next-button" 
          >
            <img src={downarrow} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TechStack2;
