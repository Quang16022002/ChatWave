import React, { useState } from 'react';
import './ChatPage.scss'
import TrendComponent from '../../components/TrendComponent/TrendComponent';
import ChatFriendsComponent from '../../components/ChatFriendsComponent/ChatFriendsComponent';

const ChatPage = () => {
  const [activeTab, setActiveTab] = useState('chat-friends');
  const [currentComponent, setCurrentComponent] = useState('chatFriends');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'chat-friends') {
      setCurrentComponent('chatFriends');
    }
    if (tab === 'Chat-1') {
      setCurrentComponent('chat1');
    }
    if (tab === 'Chat-2') {
      setCurrentComponent('chat2');
    }
    if (tab === 'Chat-3') {
      setCurrentComponent('chat3');
    }
    if (tab === 'Chat-4') {
      setCurrentComponent('chat4');
    }
    // Add more conditions if you have other components to show for different tabs
  };
  return (
    <div className="ChatPage">
      <div className='ChatPage-header d-flex'>
        <ul className='d-flex'>
          <li
          className={activeTab === 'chat-friends' ? 'active-chat' : ''} 
          onClick={() => handleTabClick('chat-friends')}
          ><i style={{marginRight:5, color:'rgb(2, 230, 161)', fontSize:20}} class="fa-solid fa-droplet"></i>Bạn bè</li>
          <li
          className={activeTab === 'chat-1' ? 'active-chat' : ''} 
          onClick={() => handleTabClick('chat-1')}
          >
            <img src='https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg'/>
            Nguyễn Tuân</li>
          <li
           className={activeTab === 'chat-2' ? 'active-chat' : ''} 
           onClick={() => handleTabClick('chat-2')}
          >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYwyHQmE53Lfk8lPBtwL4CGA80jpbKVESEI84g2QktFGxJvgnWKlFbt1N3s0gzaEykKY&usqp=CAU'/>
            Văn Thịnh</li>
          <li
           className={activeTab === 'chat-3' ? 'active-chat' : ''} 
           onClick={() => handleTabClick('chat-3')}
          >
            <img src='https://i.pinimg.com/736x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg'/>
            Đình Quang</li>
          <li 
             className={activeTab === 'chat-4' ? 'active-chat' : ''} 
             onClick={() => handleTabClick('chat-4')}
          ><i style={{marginRight:5, color:'rgb(7, 37, 230)', fontSize:20}} class="fa-solid fa-droplet"></i>KH Đức</li>
          
       <li> <i class="fa-solid fa-plus"></i></li>
        </ul>
      </div>

      {currentComponent === 'chatFriends' && <ChatFriendsComponent/>}
      {}
    </div>
  );
};

export default ChatPage;
