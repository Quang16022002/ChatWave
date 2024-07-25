import React, { useEffect, useState } from "react";
import "./InvitationPage.scss";
import InvitationFriend from "../../components/InvitationFriend/InvitationFriend";
import InvitationGroup from "../../components/InvitationGroup/InvitationGroup";
import { message } from 'antd';
import { friendRequestsRoute } from "../../utils/APIRoutes";
import axios from "axios";
const InvitationPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentComponent, setCurrentComponent] = useState('friend');
  const [friendRequests, setFriendRequests] = useState([]); // Trạng thái lưu trữ lời mời kết bạn



const userId = JSON.parse(
  localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
)._id;
// console.log(userId)
useEffect(() => {
  if (currentComponent === 'friend') {
    const fetchFriendRequests = async () => {
      try {
        const response = await axios.get(friendRequestsRoute(userId));
        const { status, friendRequests } = response.data;

        if (status) {
          setFriendRequests(friendRequests);
        } else {
          setFriendRequests([]); 
        }
      } catch (error) {
        console.error("Lỗi khi lấy lời mời kết bạn:", error);
      }
    };

    fetchFriendRequests();
  }
}, [currentComponent, userId]);

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
      {currentComponent === 'friend' && <InvitationFriend friendRequests={friendRequests} userId={userId}/>}
      {currentComponent === 'group' && <InvitationGroup/>}
    </div>
  );
};

export default InvitationPage;
