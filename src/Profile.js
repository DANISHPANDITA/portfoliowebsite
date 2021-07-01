/** @format */

import React from "react";
import "./Profile.css";
import image1 from "./img/buspass.png";
import image2 from "./img/gitajibysharnagat.png";
import image3 from "./img/shoppingapp.png";
import image4 from "./img/kv.png";
import image5 from "./img/uiet.png";
import { Tooltip, Zoom } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";

function Profile() {
  const dispatch = useDispatch();
  return (
    <div className="profile">
      <h2> My Profile</h2>
      <div className="schoolProfile">
        <div className="schoolProfileDetails">
          <h3>Schooling</h3>
          <p>
            Done Class Xth from{" "}
            <span
              className="linktootherpage"
              onClick={() => {
                window.open("https://crpfbantalab.kvs.ac.in/");
              }}>
              Kendriya Vidyalaya Bantalab , Jammu
            </span>
          </p>
          <p>
            (<b>Session</b> : 2014-15)
          </p>
          <p>
            Scored <b>10</b> C.G.P.A
          </p>
          <hr className="horRow" />
          <p>
            Done Class XIIth from{" "}
            <span
              className="linktootherpage"
              onClick={() => {
                window.open("https://crpfbantalab.kvs.ac.in/");
              }}>
              Kendriya Vidyalaya Bantalab , Jammu
            </span>
          </p>
          <p>
            (<b>Session</b> : 2016-17)
          </p>
          <p>
            Scored <b>85.6%</b>
          </p>
          <p>(P.C.M + C.S)</p>
        </div>
        <div className="schoolImgMap">
          <center>
            <Tooltip TransitionComponent={Zoom} title="Show on map">
              <img
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/@32.7792039,74.825689,19z"
                  );
                }}
                className="schoolImgMapImage"
                src={image4}
                alt=""
              />
            </Tooltip>
          </center>
        </div>
      </div>
      <div className="schoolProfile">
        <div className="schoolProfileDetails">
          <h3>College</h3>
          <p
            className="linktootherpage"
            onClick={() => {
              window.open("https://www.uietkuk.ac.in");
            }}>
            University Institute of Engineering and Technology
          </p>
          <p>Kurukshetra University, Kurukshetra</p>
          <p>
            (<b>Session</b> : 2017-21)
          </p>
          <p>
            (<b>Branch</b> : B.Tech CSE)
          </p>
          <p>
            Scored C.G.P.A - <b>7.44</b>
          </p>
          <p> (Till 7th Sem) </p>
        </div>
        <div className="schoolImgMap">
          <center>
            <Tooltip TransitionComponent={Zoom} title="Show on map">
              <img
                onClick={() => {
                  window.open(
                    "https://www.google.com/maps/@29.9591369,76.818732,15.89z"
                  );
                }}
                className="schoolImgMapImage"
                src={image5}
                alt=""
              />
            </Tooltip>
          </center>
        </div>
      </div>
      <div className="Projects">
        <h2>My Recent Projects </h2>
        <div className="project">
          <h3>Automated Bus Pass Using Q-R Code</h3>
          <center>
            <img className="projectImage" src={image1} alt="" />
          </center>
          <p className="descProject">
            <b>Description : </b> This project is developed to minimize the
            pressure put on conductors of local buses who have to book tickets
            for everyone. This project is similar to IRCTC website for booking
            tickets as here, tickets will be booked by passengers themselves
            before booking.
          </p>
          <p>
            Checkout the{" "}
            <span
              className="linktootherpage"
              onClick={() => {
                window.open("https://busapp-aabdc.firebaseapp.com/");
              }}>
              project
            </span>
          </p>
        </div>
        <div className="project">
          <h3>Bhagavad-Gita in Kashmiri</h3>
          <center>
            <img className="projectImage" src={image2} alt="" />
          </center>
          <p className="descProject">
            <b>Description : </b> This project provides you with all the shlokas
            from Bhagavad-Gita with their meanings.It also has commentary in the
            kashmiri language by Sh. Bhushan Lal Bhat (Sharnagat).
          </p>
          <p>
            Checkout the{" "}
            <span
              className="linktootherpage"
              onClick={() => {
                window.open("https://gitajibysharnagat.web.app/");
              }}>
              project
            </span>
          </p>
        </div>
        <div className="project">
          <h3>Online Shopping App Project</h3>
          <center>
            <img className="projectImage" src={image3} alt="" />
          </center>
          <p className="descProject">
            <b>Description : </b> This is a shopping app project for online
            shopping purposes created to understand the concepts of react,redux
            and APIs.
          </p>
          <p>
            Checkout the{" "}
            <span
              className="linktootherpage"
              onClick={() => {
                window.open("https://shoppingapp-96a4d.web.app/");
              }}>
              project
            </span>
          </p>
        </div>
        <p>
          For more projects ->{" "}
          <span
            onClick={() => {
              dispatch(changeNavSelection("Contact"));
            }}
            className="gotocontact">
            {" "}
            GO TO Contact
          </span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
