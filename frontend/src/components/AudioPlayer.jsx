import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = () => {
    return (
      <div class="container-xs">
        <div class="d-flex justify-content-center">
          <h1>Audio Player</h1>
        </div>
        <div class="d-flex justify-content-center">
          <ReactAudioPlayer
          src=""
          autoPlay="true"
          controls
          />
        </div>
        
      </div>
    );
  };
    
  export default AudioPlayer;