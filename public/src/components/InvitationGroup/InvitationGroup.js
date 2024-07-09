/* eslint-disable react/jsx-no-undef */
import React from 'react'
import "./InvitationGroup.scss";
import { UserOutlined, MoreOutlined, CommentOutlined } from "@ant-design/icons";
import InvitationJoinGroup from '../InvitationComponent/InvitationJoinGroup';

function InvitationGroup() {
  const invitationJoinGroup = Array.from({ length: 4 });

  return (
    <div className='Invitation'>
      <div className='invitation-phanloai'>
        <div className='invitation-header'>
          <p>Lời mời đã nhận</p>
          <span>4</span>
        </div>

        <div className='invitation-content'>
          <div style={{ height: 'auto' }} className="row">
            {invitationJoinGroup.map((_, index) => (
              <InvitationJoinGroup key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationGroup