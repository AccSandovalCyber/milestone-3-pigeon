import React from 'react';

const Searchbar = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"/>
      </div>
      <div className="userChat">
        {/* <img src="https://i1.sndcdn.com/avatars-000867944221-g1mgn0-t500x500.jpg" alt=""/> */}
        <div className="userChatInfo">
          <span>Pak</span>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;