import React from "react";
import VideoPlayer from "react-video-js-player";
import Car from "https://www.youtube.com/watch?v=21DCn9kWcfM";
const VideoJS = () => {
  const videoSrc = Car;
  const poster =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.giving.sg%2Fimage%2Forganization_logo%3Fimg_id%3D6572572%261522901965000&imgrefurl=https%3A%2F%2Fwww.giving.sg%2Fweb%2Fblossom-world-society&tbnid=YFPeMmHLEzPNmM&vet=12ahUKEwjkp_b96KfsAhUE7JQKHYwxD_IQMygBegQIARBi..i&docid=F3nVyQMEvTR9gM&w=4183&h=2900&q=blossomworldsociety&ved=2ahUKEwjkp_b96KfsAhUE7JQKHYwxD_IQMygBegQIARBi"
  return(
    <div className="App">
      <h1>Videojs</h1>
      <VideoPlayer src={videoSrc} poster={poster} width="720" heights="420" />
  
    </div>
  );

};
export default VideoJS;