import React from "react";
import AudioPlayer from "./AudioPlayer";  
import Upload from "./Upload";

const Dashboard = () => {
  return (
    <div class="container-xs">
        <div class="d-flex justify-content-center">
            <h1>Welcome </h1>
        </div>
        <div>
          {<AudioPlayer/>}
        </div>

        <span class="d-flex justify-content-center">
          <h2>Your list of uploaded audio files:</h2>
          {/* Ideally would want to implement pagination here */}
        </span>

        <span class="d-flex justify-content-center">
          <h2>Upload Audio Files Here:</h2>
        </span>
        <div>
          {<Upload/>}
        </div>
    </div>
  );
};
  
export default Dashboard;