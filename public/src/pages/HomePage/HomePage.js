import React, { useState } from "react";
import "./HomePage.scss";
import HomeAll from "../../components/HomeAll/HomeAll";
import HomeFriends from "../../components/HomeFriends/HomeFriends";
import HomeMessageUnread from "../../components/HomeMessageUnread/HomeMessageUnread";
import HomeGroup from "../../components/HomeGroup/HomeGroup";
import HomeTag from "../../components/HomeTag/HomeTag";
import Robot from "../../assets/Robot2.gif";
import Homechannel from "../HomechannelPage/Homechannel";
const HomePage = () => {
  const [currentComponent, setCurrentComponent] = useState("homeAll");
  const [activeIcon, setActiveIcon] = useState("wallet");
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
    if (icon === "wallet") {
      setCurrentComponent("homeAll");
    } else if (icon === "message") {
      setCurrentComponent("homeMessageUnread");
    } else if (icon === "group") {
      setCurrentComponent("homegroup");
    } else if (icon === "user") {
      setCurrentComponent("homeFriends");
    } else if (icon === "tag") {
      setCurrentComponent("homeTag");
    } else if (icon === "channel") {
      setCurrentComponent("homechannel");
    } else {
      setCurrentComponent("homeAll");
    }
  };

  return (
    <div className="HomePage">
      <img className="Robot" src={Robot} />
      <div
        style={{
          color: "rgb(245, 196, 105)))",
          height: 70,
          padding: "0 15px",
          margin: "0 4px",
          borderBottom: "1px solid rgb(252, 205, 129)",
        }}
        className="d-flex justify-content-between align-items-center "
      >
        <div className="Heade-home-left">
          <input type="search" name="name" placeholder="Tìm kiếm" />
          <i className="fa-solid fa-magnifying-glass"></i>
          <i
            onClick={() => handleIconClick("wallet")}
            className={`fa-solid fa-wallet ${
              activeIcon === "wallet" ? "activeIcon" : ""
            }`}
          ></i>
          <i
            onClick={() => handleIconClick("message")}
            className={`fa-solid fa-message ${
              activeIcon === "message" ? "activeIcon" : ""
            }`}
          ></i>
          <i className="fa-solid fa-circle"></i>
          <i
            onClick={() => handleIconClick("group")}
            className={`fa-solid fa-user-group ${
              activeIcon === "group" ? "activeIcon" : ""
            }`}
          ></i>
          <i
            onClick={() => handleIconClick("user")}
            className={`fa-solid fa-user ${
              activeIcon === "user" ? "activeIcon" : ""
            }`}
          ></i>
          <i
            onClick={() => handleIconClick("channel")}
            className={`fa-solid fa-globe
        ${activeIcon === "channel" ? "activeIcon" : ""}`}
          ></i>
        </div>
        <div className="Heade-home-right">
          <i className="fa-solid fa-folder-open"></i>
          <i
            onClick={() => handleIconClick("tag")}
            className={`fa-solid fa-tag ${
              activeIcon === "tag" ? "activeIcon" : ""
            }`}
          ></i>
          <i className={`fa-solid fa-ellipsis `}></i>
        </div>
      </div>
      <div>
        {currentComponent === "homeAll" && <HomeAll />}
        {currentComponent === "homeMessageUnread" && <HomeMessageUnread />}
        {currentComponent === "homegroup" && <HomeGroup />}
        {currentComponent === "homeFriends" && <HomeFriends />}
        {currentComponent === "homeTag" && <HomeTag />}
        {currentComponent === "homechannel" && <Homechannel />}
      </div>
    </div>
  );
};

export default HomePage;
