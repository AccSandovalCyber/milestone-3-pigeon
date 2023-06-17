import React from "react";

const ChatBox = ({ user }) => {
    let content = null;
  
    if (user) {
      content = (
        <div>
          <h3>This is where the chat and messages will render {user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      );
    }
  
    return (
      <div className='chat'>
        {content}
      </div>
    );
  }
    
export default ChatBox;
