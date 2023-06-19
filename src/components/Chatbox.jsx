import React from "react";


const ChatBox = ({ user }) => {
    let content = null;
  
    if (user) {
    //within conetent is where Stephen and Natalie will add their chat box code
    //content renders if the user is in true.
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



// Ricardo's code below , deleting later was testing out the code to see if it would work 


// import React, { useState } from "react";

// const ChatBox = ({ user }) => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== "") {
//       // Create a new message object with the user's information and the message content
//       const newMessage = {
//         user: user.displayName,
//         content: message,
//         timestamp: new Date().getTime(),
//       };

//       // Add the new message to the list of messages
//       setMessages((prevMessages) => [...prevMessages, newMessage]);

//       // Clear the input field
//       setMessage("");
//     }
//   };

//   return (
//     <div className="chat">
//       <div className="message-container">
//         {messages.map((msg, index) => (
//           <div key={index} className="message">
//             <div className="message-sender">{msg.user}</div>
//             <div className="message-content">{msg.content}</div>
//           </div>
//         ))}
//       </div>

//       <div className="input-container">
//         <input
//           type="text"
//           value={message}
//           onChange={handleMessageChange}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatBox;

