import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "../Images/indoutsav.png";
import { Footer } from "../Components/Footer";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { FestProps } from "../Props/FestProps";

import Diwali from '../Images/karamparab.jpeg'
import Holi from '../Images/sakewa.jpeg'
import Ganesh from '../Images/shigmo.jpeg'
import Janma from '../Images/jhandafair.jpeg'
import Dushera from '../Images/dushera.jpeg'

import "./HeroStyle.css";

export function Hero() {
  return (
    <>
      <section className="Hero1">
        <div className="background">
          <div className="backLogo">
            <img src={SiteLogo} alt="" className="Logo" />
          </div>
        </div>
      </section>
      <section className="Hero2">
        <div className="caption">
          <h2>Sparking the spirits of Great Indian Festival</h2>
        </div>
        <div className="buttons">
          <Link to="/Festivals">
            <button className="btn1 b1">Join Celebrations</button>
          </Link>
          <Link to="/Discover">
            <button className="btn1 b2">Discover Festivals</button>
          </Link>
        </div>
      </section>
      <section className="Hero3">
        <h2 className="">Festive Splendors</h2>
        <h4>
          Take a virtual tour of India, unveiling the festive extravaganzas
          celebrated across various states.
        </h4>
        <div className="ticker">
          <div className="fest">
          <FestProps imgsrc={Diwali} name="karamparab"/>
          <FestProps imgsrc={Holi} name={"sakewa"}/>
          <FestProps imgsrc={Dushera} name={"shigmo"}/>
          <FestProps imgsrc={Janma} name={"jhandafair"}/>
          <FestProps imgsrc={Diwali} name="karamparab"/>
          <FestProps imgsrc={Holi} name={"sakewa"}/>
          <FestProps imgsrc={Dushera} name={"shigmo"}/>
          <FestProps imgsrc={Ganesh} name={"jhandafair"}/>
          </div>
        </div>
      </section>
      <section className="Hero4">
        <h2 className=""> ~ Question Busted ~ </h2>
        <AccordionGroup sx={{ maxWidth: 600 }}>
          <Accordion>
            <AccordionSummary className='question'>What is the significance of Diwali in Indian culture?</AccordionSummary>
            <AccordionDetails>
              Diwali, the festival of lights, symbolizes the triumph of light over darkness and good over evil.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary className='question'>What is the story behind the festival of Holi?</AccordionSummary>
            <AccordionDetails>
              Holi celebrates the victory of good over evil, as told in the legend of Hiranyakashyap and his son Prahlad.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary className='question'>What is the importance of Navratri in Indian tradition?</AccordionSummary>
            <AccordionDetails>
              Navratri is a nine-day celebration honoring the divine feminine, with each day dedicated to a different form of the goddess Durga.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary className='question'>What is the significance of the festival of Raksha Bandhan?</AccordionSummary>
            <AccordionDetails>
              Raksha Bandhan celebrates the bond between brothers and sisters, with sisters tying a sacred thread around their brothers' wrists for protection.
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </section>
      <section className="Hero5">
        <h2>Got Curious ?</h2>
        <p>Well then , what are you waiting for? Hop in and join this enchanting journey of vibrants celebrations. Click below to plunge into the pleasure of Festivities !</p>
        <div className="bt">
          <button className="btn bt1">Dive In</button>
          <Link to={"\Contactus"}><button className="btn bt2">Contact Us</button></Link>
        </div>
      </section>
      <Footer />
    </>
  );
}