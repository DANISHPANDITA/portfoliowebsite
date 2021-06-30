/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeNavSelection, selectNavSelection } from "./app/counterSlice";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import SkillPage from "./SkillPage";
import Contact from "./Contact";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNavSelection("Home"));
  }, [dispatch]);
  const navState = useSelector(selectNavSelection);
  return (
    <div className="App">
      <Header />
      {navState === "Home" ? (
        <Home />
      ) : navState === "Skills" ? (
        <SkillPage />
      ) : navState === "Profile" ? (
        <Profile />
      ) : (
        <Contact />
      )}
    </div>
  );
}

export default App;
