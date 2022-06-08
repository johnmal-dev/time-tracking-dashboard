import React from 'react';
import userImg from '../../images/avatar.png';

import './userInfo.css';

const UserInfo = () => {
  return (
    <div className="userInfo">
      <img src={userImg} alt="John Malapit"/>
      <div className="text-container">
        <h4>Report for</h4>
        <h1>John Malapit</h1>
      </div>
    </div>
  );
};

export default UserInfo;
