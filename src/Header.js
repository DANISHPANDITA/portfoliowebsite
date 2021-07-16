/** @format */

import React, { useEffect, useState } from "react";
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
import FileSaver from "file-saver";

function Header() {
    const [navState, setNavState] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 599) {
      setSmallScreen(true);
    }
  }, []);
  const navSelected = useSelector(selectNavSelection);
  const dispatch = useDispatch();
  const resumeDownload = () => {
    FileSaver.saveAs(resume);
  };
  return (
    <div className="header">
      <Avatar className="avatar" src={avatarImage} alt="" />
      {!smallScreen ? (
        <div className="headerItems">
          <div
            onClick={() => {
              dispatch(changeNavSelection("Home"));
            }}
            className={`${
              navSelected === "Home" ? "headerItemActive" : "headerItem"
            }`}>
            <BsHouseFill className="iconSvg" size="3vw" color="#383E56" />
            <p className="HeaderItemText">Home</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Profile"));
            }}
            className={`${
              navSelected === "Profile" ? "headerItemActive" : "headerItem"
            }`}>
            <CgProfile className="iconSvg" size="3vw" color="#383E56" />
            <p className="HeaderItemText">Profile</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Skills"));
            }}
            className={`${
              navSelected === "Skills" ? "headerItemActive" : "headerItem"
            }`}>
            <AiFillProfile className="iconSvg" size="3vw" color="#383E56" />
            <p className="HeaderItemText">Skills</p>
          </div>
          <div
            onClick={() => {
              dispatch(changeNavSelection("Contact"));
            }}
            className={`${
              navSelected === "Contact" ? "headerItemActive" : "headerItem"
            }`}>
            <CgPhone className="iconSvg" size="3vw" color="#383E56" />
            <p className="HeaderItemText">Contact</p>
          </div>
          <p onClick={resumeDownload} className="downloadResume">
            Download Resume
          </p>
        </div>
      ) : navState && smallScreen ? (
        <div>
          <center>
            <ImCancelCircle
              size="6vw"
              className="optionsCancelIcon"
              onClick={() => {
                setNavState(false);
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
                <BsHouseFill className="iconSvg" size="6vw" color="#383E56" />
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
                <CgProfile className="iconSvg" size="6vw" color="#383E56" />
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
                <AiFillProfile className="iconSvg" size="6vw" color="#383E56" />
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
                <CgPhone className="iconSvg" size="6vw" color="#383E56" />
                <p className="HeaderItemText">Contact</p>
              </div>
            </Fade>
            <Fade bottom delay={2000}>
              <p onClick={resumeDownload} className="downloadResume">
                Download Resume
              </p>
            </Fade>
          </div>
        </div>
      ) : (
        <center>
          <IoIosOptions
            size="6vw"
            className="optionsIcon"
            onClick={() => {
              setNavState(true);
            }}
          />
        </center>
      )}
    </div>
  );
}

export default Header;
