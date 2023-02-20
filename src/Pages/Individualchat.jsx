import { useParams } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react';
import {addDoc,getDocs,collection, onSnapshot,query,orderBy,deleteDoc,doc, setDoc} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {app,auth,db} from "../ConfigFirebase/Firebase"
import { GoTrashcan} from 'react-icons/go';
import {BiMessage} from "react-icons/bi"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Styles/Individual.css"

const Individualchat = () => {
  const {UserId}=useParams()
  const {UserName}=useParams()
  const user=auth.currentUser
  const [Messages, SetMessages] = useState([{}]);
  const [NewMessage, SetNewMessage] = useState("");
  const messagesRef = doc(db, "MessagesDataStore", UserId);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(messagesRef, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      SetMessages(data);
    });
    return unsubscribe;
  }, [messagesRef]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [Messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (NewMessage.trim() === "") {
      alert("Please Enter the Message");
      return;
    }
    const timestamp = new Date();
    const newDocRef = await addDoc(collection(messagesRef, "messages"), {
      NewMessage,
      timestamp,
      sender: user.uid,
      receiver: UserId,
    }); 
    console.log(Messages)
    SetNewMessage("");
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(collection(messagesRef, "messages"), id));
  };

  return (
    <div className='Individualmessages'>
      <div className='chat-container'>
        <div className='chat-header'>{UserName}</div>
        <div className='chat-messages'>
          {Messages.map((message) => (
            <div key={message.id} className={`chat-message ${message.sender === user.uid ? 'sender' : 'receiver'}`}>
              {message.NewMessage}
              <button className='delete-button' onClick={() => deleteMessage(message.id)}><GoTrashcan /></button>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <form className='chat-form' onSubmit={handleSubmit}>
          <input type='text' placeholder='Enter message here' value={NewMessage} onChange={(e) => SetNewMessage(e.target.value)} />
          <button type='submit'><BiMessage /></button>
        </form>
      </div>
    </div>
  )
}

export default Individualchat;
