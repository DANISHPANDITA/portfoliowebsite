/** @format */

import React, { useEffect, useState } from "react";
import "./SkillPage.css";
import { LinearProgress } from "@material-ui/core";
import { db } from "./firebase";
import { TransverseLoading } from "react-loadingg";

function SkillPage() {
  const [Skills, setSkills] = useState([]);
  useEffect(() => {
    db.collection("PortfolioSite")
      .doc("2")
      .collection("Skills")
      .onSnapshot((snapshot) =>
        setSkills(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  if (Skills.length > 0) {
    return (
      <div className="skillPage">
        <p className="skillListTitle">Skills / Programming Languages known</p>
        <ul className="skillsList">
          {Skills.map((skill) => (
            <li key={Skills.indexOf(skill)}>
              {skill.field}
              <LinearProgress
                color={parseInt(skill.percent) <= 80 ? "secondary" : "primary"}
                style={{
                  marginTop: "0.5vh",
                  height: "0.4vh",
                  borderRadius: "10vh",
                }}
                variant="determinate"
                value={parseInt(skill.percent)}
              />
              <p>{skill.percent} % </p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <TransverseLoading />;
  }
}

export default SkillPage;
