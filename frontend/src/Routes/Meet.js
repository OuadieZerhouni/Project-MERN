import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';
//import { get } from '../../../backend/routes/video';
//import axios from 'axios';

const socket = io("http://localhost:3000/",{
  transports: ['websocket' , 'polling' , 'flashsocket'],  
withCredentials: true })
 socket.emit("vi");

export default function VideoCall() {
    const videoRef = useRef(null);

  useEffect(() => {
    async function enableCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
      
    // socket.emit("vi",{
    //  msg : "hi"
    //  });
    
    }
    enableCamera();
   
  }, []);


  return (
    <>
    <h1>Video call</h1>
    <div  id='video-grid'>
        
        <video  ref={videoRef} autoPlay playsInline />
        <button><a href=''>click here</a></button>
        
    </div>
    </>
   
  )
}
