import React from 'react';
import './slider.css';

const Range_Slider = ({ onSliderChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onSliderChange(value); 
    console.log(value);
  };

  return (
    <input
      type="range"
      className="win10-thumb"
      onChange={handleChange}
    />
  );
};

export default Range_Slider;
