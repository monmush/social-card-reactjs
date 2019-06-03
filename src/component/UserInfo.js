import React from 'react';

const UserInfo = () => {
  return (
    <div className="userinfo">
      <div className="content">
        <span className="bold">Minh Pham</span>
        <span >
          <a className="special" href="">@minh.meo.55</a>
        </span>
        <span className="grey">. Sept 10</span>
      </div>
      <div className="button">
        <i class="fas fa-sort-down"></i>
      </div>
    </div>
  )
}

export default UserInfo;
