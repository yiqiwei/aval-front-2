import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function Imgslider() {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3>Slider Image 1</h3>
      </div>
      <div>
        <h3>Slider Image 2</h3>
      </div>
      <div>
        <h3>Slider Image 3</h3>
      </div>
      <div>
        <h3>Slider Image 4</h3>
      </div>
    </Carousel>
  );
}
