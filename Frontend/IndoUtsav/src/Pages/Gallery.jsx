import React from "react";
import { TiltCard } from "../Components/TiltCard";
import { Link } from "react-router-dom";
import './GalleryStyle.css'

import Summer from '../Images/summer.jpeg'
import Winter from '../Images/winter.jpeg'
import Autumn from '../Images/autumn.jpeg'
import Spring from '../Images/spring.jpeg'
import Monsoon from '../Images/monsoon.jpeg'


export function Gallery() {
  return (
    <section>
      <div className="seasons">
      <h1 className="GalleryHead">Seasons</h1>
        <div className="tiltcard">
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
            <TiltCard imgsrc={Winter} festivename={"Winter"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Autumn} festivename={"Autumn"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
            <TiltCard imgsrc={Summer} festivename={"Summer"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Spring} festivename={"Spring"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Monsoon} festivename={"Monsoon"}/>
          </Link>
        </div>
      </div>

      <div className="seasons">
      <h1 className="GalleryHead">State</h1>
        <div className="tiltcard">
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
            <TiltCard imgsrc={Winter} festivename={"Winter"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Autumn} festivename={"Autumn"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
            <TiltCard imgsrc={Summer} festivename={"Summer"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Spring} festivename={"Spring"}/>
          </Link>
          <Link to={"https://heyzine.com/flip-book/8e8bedcd5e.html"}>
          <TiltCard imgsrc={Monsoon} festivename={"Monsoon"}/>
          </Link>
        </div>
      </div>
    </section>
  );
}
