import React, { useEffect, useRef, useState } from "react"; // Hooks are used to manage state in functional components, 
import {
  query,
  collection,
  orderBy,
  onSnapshot, // onSnapshot listens for changes in the database in real time 
  limit,
} from "firebase/firestore"; // Utilizing Firestore's library functions to fetch data from the database. 
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {     // In this unsubscribe function we are unsubscribing from the onSnapshot listener, when the component unmounts to prevent memory leaks.

      const fetchedMessages = [];       
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id }); // Here we are pushing fetchedMessages object into the fetchedMessages array. 
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt // Sorting our messages by the createdAt timestamp in ascending order.
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe; //  Over time memory leaks can cause an application to slow down or crash due to a lack of available memory.
  }, []);

  return (    // On the return function, we are mapping through the messages array and rendering the Message component for each message. 
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} /> // here we are passing the message object as a prop to the Message component.
        ))}
      </div>
      {/* When a new message enters the chat, the screen scrolls down to the scroll div  */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;