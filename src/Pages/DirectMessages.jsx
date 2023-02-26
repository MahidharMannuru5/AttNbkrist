import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../ConfigFirebase/Firebase';
import "../Styles/DirectMessages.css"

const DirectMessages = () => {
  const [directMessages, setDirectMessages] = useState([]);
  const currentuser=auth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, 'MessagesDataStore'),
      where('userIdName', '==', currentuser.uid),
      orderBy('timestamp', 'desc'),
      limit(1),
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const directMessagesList = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          username: data.username,
          timestamp: data.timestamp,
          newMessage: data.newMessage,
          docId: doc.id,
        };
      });
      setDirectMessages(directMessagesList);
    });

    return () => unsubscribe();
  }, [currentuser]);

  return (
    <div className="direct-messages-container">
      <h5>Direct Messages</h5>
      <ul className="direct-messages-list">
        {directMessages.map((message) => (
          <li key={message.docId}>
            <Link
              to={`ChatSystem/Individualchat/${currentuser.uid + message.userIdName}/${message.username}`}
            >
              <div className="direct-message">
                <div className="direct-message-username">{message.username}</div>
                <div className="direct-message-content">{message.newMessage}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectMessages;
