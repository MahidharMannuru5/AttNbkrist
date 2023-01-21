import React, { useState, useEffect, useRef } from 'react';

const ChatSystem = () => {
  const [messages, setMessages] = useState([
    { username: 'User1', text: 'Hello', timestamp: new Date() },
    { username: 'User2', text: 'Hi', timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        username: 'You',
        text: newMessage,
        timestamp: new Date(),
      },
    ]);
    setNewMessage('');
  };

  return (
    <div className="container-fluid h-100 chat-system-container">
      <div className="row h-100">
        <div ref={messagesEndRef} className="col-sm-12 col-md-8 col-lg-9 h-100 messages-container">
          <div className="overflow-auto">
            {messages.map((message) => (
              <div key={message.timestamp} className="message-container">
                <div className="message-username">{message.username}</div>
                <div className="message-text">{message.text}</div>
                <div className="message-timestamp">{message.timestamp.toString()}</div>
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
