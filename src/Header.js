/** @format */

import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { BsHouseFill } from "react-icons/bs";
import { CgProfile, CgPhone } from "react-icons/cg";
import { AiFillProfile } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeNavSelection, selectNavSelection } from "./app/counterSlice";

function Header() {
  const navSelected = useSelector(selectNavSelection);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Avatar
        className="avatar"
        src="https://lh3.googleusercontent.com/ogw/ADea4I4UGcPdO9yqMJQFDRRmXDXstgJYEHMxt3aUg1n9Tg=s83-c-mo"
        alt=""
      />
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
    </div>
  );
}

export default Header;
