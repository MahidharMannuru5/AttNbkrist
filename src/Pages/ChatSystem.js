import React, { useState, useEffect, useRef } from 'react';
import {addDoc,getDocs,collection, onSnapshot, orderBy} from 'firebase/firestore';
import {auth,db} from '../ConfigFirebase/Firebase';

const ChatSystem = () => {
  const [messages, setMessages] = useState([{}]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const collectionReference=collection(db,"MessagesDataStore");
  useEffect(() => {
    const FetchData = onSnapshot(collectionReference,orderBy("timestamp"),(snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        setMessages(data);
    });
    return () => FetchData();
}, []);

  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage===" ") {
      alert("Please Enter the Message");
      return;
    } else {
      const timestamp = new Date();
      await addDoc(collectionReference,{username:"mannuru",newMessage,timestamp: timestamp})
      setNewMessage(" ");
    }
  }
  return (
    <div className="container-fluid h-100 chat-system-container">
      <div className="row h-100">
        <div ref={messagesEndRef} className="col-sm-12 col-md-8 col-lg-9 h-100 messages-container">
          <div className="overflow-auto">
            {messages.map((message) => (
              <div key={message.timestamp} className="message-container">
                <div className="message-username">{message.username}</div>
                <div className="message-text">{message.newMessage}</div>
                <div className="message-timestamp">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 message-input-container">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Enter a message"
                className="form-control message-input"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary message-submit-button">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem;
