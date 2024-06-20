import React from 'react';
import Header_avt from '../Header/asset/img/avt2.jpg';
import styles from './styles.module.css';

function Header_content() {
  return (
    <div className={styles['container_mini_profile']}>
      
      <div className={styles['header__mini_profile']}>
        
        <img
          className={styles['header_avt']}
          src={Header_avt}
          alt="Profile Avatar"
        />
        <div className={styles['header__text']}>
          <p className={styles['header__text1']}>111</p>
          <p className={styles['header__text2']}>111</p>
        </div>
      </div>
      {/* {showLogout && <Logout style={{}} />} */}
    </div>
  );
}

export default Header_content;
