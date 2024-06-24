import React from "react";
import "./HomeAll.scss";
import UserComponent from "../UserComponent/UserComponent";
const HomeAll = () => {
    const userComponents = Array.from({ length: 20 });

  return (
    <div  style={{padding:20}}>
      <div className="HomeAll-top d-flex justify-content-between">
        <div  className="HomeAll-top-left d-flex justify-content-between">
          <p>
            Bạn bè <span>40</span>
          </p>
          <p>
            Nhóm <span>40</span>
          </p>
          <p>
            Chưa đọc <span>40</span>
          </p>
        </div>
        <div className="HomeAll-top-right d-flex justify-content-between">
          <p>Sắp xếp</p>
          <select>
            <option>Gần đây</option>
            <option>Chưa đọc</option>
            <option>Danh sách 03</option>
            <option>Danh sách 04</option>
          </select>
        </div>
      </div>
      <div style={{height:'auto'}} className="row">
      {userComponents.map((_, index) => (
        <UserComponent key={index} />
      ))}

      </div>
    </div>
  );
};

export default HomeAll;
