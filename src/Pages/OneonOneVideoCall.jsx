import React, { useState, useEffect, useRef } from 'react';
import Peer from 'peerjs';

const OneonOneVideoCall = () => {
  const [peerId, setPeerId] = useState('');
  const [remotePeerId, setRemotePeerId] = useState('');
  const [peer, setPeer] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    const newPeer = new Peer();
    setPeer(newPeer);

    newPeer.on('open', (id) => {
      setPeerId(id);
    });

    newPeer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setLocalStream(stream);
          call.answer(stream);
          call.on('stream', (remoteStream) => {
            setRemoteStream(remoteStream);
          });
        })
        .catch((error) => {
          console.error('Error getting user media:', error);
        });
    });
  }, []);

  const handleCallClick = () => {
    const call = peer.call(remotePeerId, localStream);
    call.on('stream', (remoteStream) => {
      setRemoteStream(remoteStream);
    });
  };

  const handleRemotePeerIdChange = (event) => {
    setRemotePeerId(event.target.value);
  };

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localVideoRef, remoteVideoRef, localStream, remoteStream]);

  return (
    <div>
      <h1>Video Call</h1>
      <p>My Peer ID: {peerId}</p>
      <div>
        <label htmlFor="remotePeerId">Enter Remote Peer ID:</label>
        <input type="text" id="remotePeerId" value={remotePeerId} onChange={handleRemotePeerIdChange} />
        <button onClick={handleCallClick}>Call</button>
      </div>
      <div>
        <h2>Local Video</h2>
        <video ref={localVideoRef} autoPlay muted></video>
      </div>
      <div>
        <h2>Remote Video</h2>
        <video ref={remoteVideoRef} autoPlay></video>
      </div>
    </div>
  );
};

export default OneonOneVideoCall;
