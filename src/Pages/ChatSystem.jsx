import React, { useState, useEffect, useRef } from 'react';
import {addDoc,getDocs,collection, onSnapshot,query,orderBy,deleteDoc,doc} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {app,auth,db} from "../ConfigFirebase/Firebase"
import { GoTrashcan} from 'react-icons/go';
import {BiMessage} from "react-icons/bi"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/chatsystem.css';

const ChatSystem = () => {
  const [messages, setMessages] = useState([{}]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  const collectionReference=collection(db,"MessagesDataStore");
  const q=query(collectionReference,orderBy("timestamp","asc"));

  useEffect(() => {
    const FetchData = onSnapshot(q,(snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {...data,username: data.username,timestamp: data.timestamp, newMessage: data.newMessage,Docid:doc.id};
        });
        
         console.log(data);
        setMessages(data);
    });
    return () => FetchData();
  }, []);

  const auth=getAuth(app);

  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage===" ") {
      alert("Please Enter the Message");
      return;
    } else {
      const timestamp = new Date();
      console.log(user);
      await addDoc(collectionReference,{newMessage,timestamp,username:user.email,userIdName:user.uid})
      setNewMessage(" ");
    }
  }

  const deletemessage=async(id)=>{
    const delReference=doc(db,"MessagesDataStore",id)
    await deleteDoc(delReference)
  }

  return (
    <div className='chat-page'>
    <div className='group-chat-container'>
      <div className='group-messages-container' ref={messagesEndRef}>
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === user.uid ? 'sender' : 'receiver'}`}>
            <div className="message-header">
            <div className="message-username">{user && user.uid===message.userIdName ? 
          <GoTrashcan className='DeleteButton' onClick={() => {deletemessage(message.Docid)}} />
            :<Link to={`Individualchat/${[user.uid+message.userIdName].sort().join("")}/${message.username}`}><BiMessage className="Direct"/></Link>}</div>

              <div className="message-username">{message.username}</div>
              <div className="message-time">{message.timestamp && message.timestamp.toDate().toLocaleString()}</div>
            </div>
            <div className="message-text">{message.newMessage}</div>
            {message.sender === user.uid ? <button className='delete-button' onClick={() => deletemessage(message.id)}><GoTrashcan /></button> : null}
          </div>
        ))}
      </div>
      <form className='group-message-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter message here' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button type='submit'><BiMessage /></button>
      </form>
    </div>
  </div>
  );
};

export default ChatSystem;
