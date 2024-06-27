import React, { useState } from 'react';
import './HomeTag.scss';
import { BookOutlined, MessageOutlined, FolderOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Contacts from '../ContactTag/ContactTag';
import Messages from '../MessageTag/MessageTag';
import Documents from '../DocumentTag/DocumentTag';

const HomeTag = () => {
  const [currentComponent, setCurrentComponent] = useState('contacts');

  const renderContent = () => {
    switch (currentComponent) {
      case 'contacts':
        return <Contacts />;
      case 'messages':
        return <Messages />;
      case 'documents':
        return <Documents />;
      default:
        return null;
    }
  };

  return (
    <div className='tag_all'>
      <div className='tag-menu'>
        <div className='tag-menu-left'>
          <a className={`menu-item ${currentComponent === 'contacts' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('contacts')}>
            <p><BookOutlined />Danh bạ</p>
          </a>
          <a className={`menu-item ${currentComponent === 'messages' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('messages')}>
            <p><MessageOutlined />Tin nhắn</p>
          </a>
          <a className={`menu-item ${currentComponent === 'documents' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('documents')}>
            <p><FolderOutlined />Tài liệu</p>
          </a>
        </div>
        <div className='tag-menu-right'>
          <div className='menu-right-1'>
            <div className='menu-tag-add'>
              <PlusCircleOutlined /> Thêm phân loại
            </div>
          </div>
          <div className='menu-right-2'>
            <h5>Sắp xếp</h5>
            <div className='menu-tag-add' style={{border: '1px solid black'}}>
              Gần đây
            </div>
          </div>
        </div>
      </div>
      {renderContent()}
    </div>
  );
};

export default HomeTag;
