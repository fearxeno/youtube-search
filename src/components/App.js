import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDeatil from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import "./App.css";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("react");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    
      <div className="ui container">
        <SearchBar onTermSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDeatil video={selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
