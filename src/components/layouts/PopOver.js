import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from '@chakra-ui/core';
import useDate from './useDate';

function PopOver({ children, users, tweet }) {
  const user = users ? users.find((user) => user.id === tweet.p_id) : null;
  // console.log(user.dateJoined.toDate().getFullYear());

  if (user) {
  }
  return (
    <Popover trigger="hover">
      <PopoverTrigger>{children}</PopoverTrigger>

      <PopoverContent border="40px" zIndex={4} width="250px">
        <div className="pop-over-parent">
          <div className="pop-over">
            <div className="pop-img">
              {user.profileImg ? (
                <img src={user.profileImg} className="imgg" alt="" />
              ) : (
                <Avatar
                  name="swyx"
                  src="https://pbs.twimg.com/profile_images/990728399873232896/CMPn3IxT_reasonably_small.jpg"
                />
              )}
            </div>
            <div className="pop-content">
              <p className="pop-name">@{user.name}</p>
              <p className="pop-bio">{user.bio}</p>
              <p className="pop-date">
                <i className="far fa-calendar-alt"></i> Joined{' '}
                {useDate(user.dateJoined.toDate().getMonth())}{' '}
                {user.dateJoined.toDate().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default PopOver;
