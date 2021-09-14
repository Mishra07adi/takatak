import React, { useEffect, useState } from "react";
import './App.css';
import axios from "./axios";
import Video from "./Video";

function App() {
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      async function fetchPosts() {
         const responce = await axios.get("/v2/posts");
         setVideos(responce.data);

         return responce;
      }

      fetchPosts();

   }, []);

  return (
    <div className="app">
      <div className="app_videos"> 
         {videos.map(({url, channel, description, song, likes, messages, shares}) => (
            <Video
               url={url}
               channel={channel}
               song={song}
               likes={likes}
               messages={messages}
               description={description}
               shares={shares}
            />
         ))}
        
      </div>
    </div>
  );
}

export default App;
