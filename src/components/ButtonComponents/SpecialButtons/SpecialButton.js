import React from "react";

import "./Special.css";

const SpecialButton = ({ special }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className='specialButton'>{special}</div>
    </>
  );
};

export default SpecialButton;
