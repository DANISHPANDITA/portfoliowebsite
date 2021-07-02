/** @format */

import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Tooltip, Zoom } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeNavSelection } from "./app/counterSlice";
import { db } from "./firebase";
import { TransverseLoading } from "react-loadingg";

function Profile() {
  const [EducationDetails, setEducationDetails] = useState([]);
  const [ProjectsLists, setProjectsLists] = useState([]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    db.collection("PortfolioSite")
      .doc("3")
      .collection("Education")
      .doc("1")
      .collection("Schooling")
      .onSnapshot((snapshot) =>
        setEducationDetails(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  useEffect(() => {
    db.collection("PortfolioSite")
      .doc("3")
      .collection("Projects")
      .onSnapshot((snapshot) =>
        setProjectsLists(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  const dispatch = useDispatch();
  if (EducationDetails.length > 0 && ProjectsLists.length > 0) {
    return (
      <div className="profile">
        <h2> My Profile</h2>
        {EducationDetails.map((edu) => {
          if (edu.title === "Schooling") {
            return (
              <div
                key={EducationDetails.indexOf(edu)}
                className="schoolProfile">
                <div className="schoolProfileDetails">
                  <h3>{edu.title}</h3>
                  <p
                    className="linktootherpage"
                    onClick={() => {
                      window.open(`${edu.link}`);
                    }}>
                    {edu.desc}
                  </p>
                  <p>
                    <b>{edu.session}</b>
                  </p>
                  <p>
                    <b>{edu.score}</b>
                  </p>
                  <hr className="horRow" />
                  <p
                    className="linktootherpage"
                    onClick={() => {
                      window.open(`${edu.link}`);
                    }}>
                    {edu.desc2}
                  </p>
                  <p>
                    <b>{edu.session2}</b>
                  </p>
                  <p>
                    <b>{edu.score2}</b>
                  </p>
                  <p>{edu.fields12th}</p>
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
                        src={edu.schoolimg}
                        alt=""
                      />
                    </Tooltip>
                  </center>
                </div>
              </div>
            );
          } else {
            return (
              <div className="schoolProfile">
                <div className="schoolProfileDetails">
                  <h3>{edu.title}</h3>
                  <p
                    className="linktootherpage"
                    onClick={() => {
                      window.open(`${edu.link}`);
                    }}>
                    {edu.desc}
                  </p>
                  <p>{edu.descExt}</p>
                  <p>
                    <b>{edu.session}</b>
                  </p>
                  <p>
                    <b>{edu.field}</b>
                  </p>
                  <p>
                    <b>{edu.score}</b>
                  </p>
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
                        src={edu.schoolimg}
                        alt=""
                      />
                    </Tooltip>
                  </center>
                </div>
              </div>
            );
          }
        })}
        <div className="Projects">
          <h2>My Recent Projects </h2>
          {ProjectsLists.map((project) => (
            <div className="project">
              <h3>{project.name}</h3>
              <center>
                <img className="projectImage" src={project.photo} alt="" />
              </center>
              <p className="descProject">
                <b>Description : </b> {project.desc}
              </p>
              <p>
                Checkout the{" "}
                <span
                  className="linktootherpage"
                  onClick={() => {
                    window.open(`${project.link}`);
                  }}>
                  project
                </span>
              </p>
            </div>
          ))}
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
  } else {
    return <TransverseLoading />;
  }
}

export default Profile;
