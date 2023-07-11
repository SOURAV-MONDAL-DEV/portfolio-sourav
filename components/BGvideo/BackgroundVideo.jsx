import React, { useEffect } from 'react';

const BackgroundVideo = () => {

  useEffect(() => {
    const video = document.getElementById('background-video');
    video.play();
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });

    return () => {
      video.removeEventListener('ended', () => {});
    };
  }, []);



  return (
    <div className='video-container'>
      <video id="background-video" autoPlay muted loop>
      <source src="/video/bgvdo.mp4" type="video/mp4" />
      {/* <source src="/path/to/video.webm" type="video/webm" />
      Your browser does not support the video tag. */}
      </video>
      {/* <div className='overlay'></div> */}
    </div>
  );
};

export default BackgroundVideo;
