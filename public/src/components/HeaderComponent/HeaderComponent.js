import React from 'react';
import './HeaderComponent.scss'
import {
    AppstoreOutlined
  } from "@ant-design/icons";
const HeaderComponent = () => {
  return (
    <div className='Header' >
      
      <div className='Header-left'><h2>ChatWave</h2></div>
      <div className='Header-center'>
      < AppstoreOutlined />
      <i style={{marginLeft:10}} class="fa-solid fa-map-location-dot"></i>
      </div>
      <div className='Header-right'>
      <i class="fa-solid fa-cloud-arrow-up"></i>
      <i style={{marginRight:5}}  class="fa-solid fa-moon"></i>
      <img style={{marginRight:15}} src='https://moc247.com/wp-content/uploads/2023/12/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg'/>

      </div>
    </div>
  );
};

export default HeaderComponent;
