import React, { useState } from "react";
import "./InvitationPage.scss";
import InvitationFriend from "../../components/InvitationFriend/InvitationFriend";
import InvitationGroup from "../../components/InvitationGroup/InvitationGroup";
const InvitationPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentComponent, setCurrentComponent] = useState('friend');
const handClick = (item) => {
  setActiveTab(item)
  if(item=== 1){
    setCurrentComponent('friend')
  }
  if(item=== 2){
    setCurrentComponent('group')
  }
  
}
  return (
    <div className="InvitationPage">
      <ul>
        <li
        className={activeTab ===  1 ? 'activeA' : ''}
        onClick={() => handClick(1)}
        >
          
          Lời mời kết bạn</li>
        <li
          className={activeTab ===  2 ? 'activeA' : ''}
          onClick={() => handClick(2)}
        >Lời mời vào nhóm</li>
      </ul>
      {currentComponent === 'friend' && <InvitationFriend/>}
      {currentComponent === 'group' && <InvitationGroup/>}
    </div>
  );
};

export default InvitationPage;
