import React from "react";
import "./SeeMoreButton.css";


const SeeMoreButton = (props) => {

  const {handler} = props;

  const buttonClicked = (e) => {
    handler();
    hideElement(e); 
  }
  const hideElement = (e) => {
    var el = e.target;
    el.classList.add('hidden');
    console.log("E Of Button",);
  }


  return(
    <button id="btn" className="see-more-button" onClick={buttonClicked}>{"See more"}</button>
  );
}

export default SeeMoreButton;