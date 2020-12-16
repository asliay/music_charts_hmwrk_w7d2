import {useEffect, useState} from "react";
import SongChart from "../components/SongChart"
import "./SongContainer.css"

const SongContainer = () => {
  
  const [songs, setSongs] = useState(null);

  const getChart = () => {
    
    console.log("Getting song info..");
    fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSongs(data.feed.entry);
      })
  };

  useEffect(() => {
    getChart();
  }, [])

  if (!songs) return null;
  return (
    <div className="song-container">
      <SongChart songs={songs} />
    </div>
  )
}

export default SongContainer;