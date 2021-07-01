/** @format */

import React, { useState } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { BsHouseFill } from "react-icons/bs";
import { CgProfile, CgPhone } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeNavSelection, selectNavSelection } from "./app/counterSlice";
import { IoIosOptions } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import Fade from "react-reveal/Fade";
function Header() {
  const [navState, setnavState] = useState(false);

  const navSelected = useSelector(selectNavSelection);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Avatar
        className="avatar"
        src="https://lh3.googleusercontent.com/ogw/ADea4I4UGcPdO9yqMJQFDRRmXDXstgJYEHMxt3aUg1n9Tg=s83-c-mo"
        alt=""
      />
      {window.innerWidth > 599 ? (
        <div className="headerItems">
          <div
            onClick={() => {
              dispatch(changeNavSelection("Home"));
            }}
            className={`${
              navSelected === "Home" ? "headerItemActive" : "headerItem"
            }`}>
            <BsHouseFill
              className="iconSvg"
              size={window.innerWidth > 599 ? "3vw" : "6vw"}
              color="#383E56"
            />
            <p className="HeaderItemText">Home</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Profile"));
            }}
            className={`${
              navSelected === "Profile" ? "headerItemActive" : "headerItem"
            }`}>
            <CgProfile
              className="iconSvg"
              size={window.innerWidth > 599 ? "3vw" : "6vw"}
              color="#383E56"
            />
            <p className="HeaderItemText">Profile</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Skills"));
            }}
            className={`${
              navSelected === "Skills" ? "headerItemActive" : "headerItem"
            }`}>
            <AiFillProfile
              className="iconSvg"
              size={window.innerWidth > 599 ? "3vw" : "6vw"}
              color="#383E56"
            />
            <p className="HeaderItemText">Skills</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Contact"));
            }}
            className={`${
              navSelected === "Contact" ? "headerItemActive" : "headerItem"
            }`}>
            <CgPhone
              className="iconSvg"
              size={window.innerWidth > 599 ? "3vw" : "6vw"}
              color="#383E56"
            />
            <p className="HeaderItemText">Contact</p>
          </div>
        </div>
      ) : navState ? (
        <div>
          <center>
            <ImCancelCircle
              size="6vw"
              className="optionsCancelIcon"
              onClick={() => {
                setnavState(false);
              }}
            />
          </center>
          <div className="headerItems">
            <Fade bottom>
              <div
                onClick={() => {
                  dispatch(changeNavSelection("Home"));
                }}
                className={`${
                  navSelected === "Home" ? "headerItemActive" : "headerItem"
                }`}>
                <BsHouseFill
                  className="iconSvg"
                  size={window.innerWidth > 599 ? "3vw" : "6vw"}
                  color="#383E56"
                />
                <p className="HeaderItemText">Home</p>
              </div>
            </Fade>
            <Fade bottom delay={500}>
              <div
                onClick={() => {
                  dispatch(changeNavSelection("Profile"));
                }}
                className={`${
                  navSelected === "Profile" ? "headerItemActive" : "headerItem"
                }`}>
                <CgProfile
                  className="iconSvg"
                  size={window.innerWidth > 599 ? "3vw" : "6vw"}
                  color="#383E56"
                />
                <p className="HeaderItemText">Profile</p>
              </div>
            </Fade>{" "}
            <Fade bottom delay={1000}>
              <div
                onClick={() => {
                  dispatch(changeNavSelection("Skills"));
                }}
                className={`${
                  navSelected === "Skills" ? "headerItemActive" : "headerItem"
                }`}>
                <AiFillProfile
                  className="iconSvg"
                  size={window.innerWidth > 599 ? "3vw" : "6vw"}
                  color="#383E56"
                />
                <p className="HeaderItemText">Skills</p>
              </div>
            </Fade>{" "}
            <Fade bottom delay={1500}>
              <div
                onClick={() => {
                  dispatch(changeNavSelection("Contact"));
                }}
                className={`${
                  navSelected === "Contact" ? "headerItemActive" : "headerItem"
                }`}>
                <CgPhone
                  className="iconSvg"
                  size={window.innerWidth > 599 ? "3vw" : "6vw"}
                  color="#383E56"
                />
                <p className="HeaderItemText">Contact</p>
              </div>
            </Fade>
          </div>
        </div>
      ) : (
        <center>
          <IoIosOptions
            size="6vw"
            className="optionsIcon"
            onClick={() => {
              setnavState(true);
            }}
          />
        </center>
      )}
    </div>
  );
}

export default Header;
