import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function Imgslider() {
  return (
    <Carousel afterChange={onChange} className="margin-1">
      <div>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <h3>Slider Image 1</h3>
      </div>
      <div>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <h3>Slider Image 2</h3>
      </div>
      <div>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <h3>Slider Image3</h3>
      </div>
      <div>
        <img
          className="carousel-image"
          src="https://images.unsplash.com/photo-1525230071276-4a87f42f469e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        />
        <h3>Slider Image 4</h3>
      </div>
    </Carousel>
  );
}
