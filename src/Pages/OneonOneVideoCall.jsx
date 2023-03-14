import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Peer from "simple-peer";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";
import { app, auth, db } from "../ConfigFirebase/Firebase";

const VideoCall = ({ currentUser, otherUserId }) => {
  const [stream, setStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callerSignal, setCallerSignal] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const { reciverId } = useParams();
  const userVideo = useRef();
  const partnerVideo = useRef();
  const user = auth.currentUser;
  const [isCalling, setIsCalling] = useState(false); // fix variable name

  useEffect(() => {
    // Get user media
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      })
      .catch((err) => {
        setErrorMsg("Could not get media stream");
      });

    // Set up peer connection
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      // Send the signal to the other peer

      setDoc(doc(db, "calls", reciverId), {
        userId: user.uid,
        signalData: data,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    setPeer(peer);

    // Listen for incoming call
    const unsubscribe = onSnapshot(doc(db, "calls", user.uid), (doc) => {
      if (doc.exists() && doc.data().userId === reciverId) {
        setCallerSignal(doc.data().signalData);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [reciverId, stream, user.uid]); // fix missing dependencies

  // Make a call to the other user
  const callUser = () => {
    setIsCalling(true); // fix variable name
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      // Send the signal to the other peer
      setDoc(doc(db, "calls", otherUserId), {
        userId: user.uid,
        signalData: data,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    setPeer(peer);
  };

  // Accept incoming call
  const acceptCall = () => {
    setCallAccepted(true);
    peer.signal(callerSignal);
    setDoc(doc(db, "calls", user.uid), {
      userId: otherUserId,
      accepted: true,
    });
  };

  // End call
  const endCall = () => {
    setCallAccepted(false);
    setCallerSignal(null);
    peer.destroy();
    doc(db, "calls", user.uid).delete();
    doc(db, "calls", otherUserId).delete();
  };

  return (
    <div>
      <div>
        <video playsInline muted ref={userVideo} autoPlay />
        {callAccepted && <video playsInline ref={partnerVideo} autoPlay />}
      </div>
      <h3>We are experiencing some issues come back later</h3>
      {errorMsg && <p>{errorMsg}</p>}
      {isCalling && (
        <div>
          <p>Calling {otherUserId}...</p>
          <button onClick={() => endCall()}>End Call</button>
        </div>
      )}
      {!callAccepted && callerSignal && (
        <div>
          <p>{otherUserId} is calling you...</p>
          <button onClick={() => acceptCall()}>Answer Call</button>
        </div>
      )}
      {!callAccepted && !callerSignal && !isCalling && (
        <div>
          <button onClick={() => callUser()}>Call {otherUserId}</button>
        </div>
      )}
      {callAccepted && (
        <div>
          <button onClick={() => endCall()}>End Call</button>
        </div>
      )}
    </div>
  );
      }    
export default VideoCall;
