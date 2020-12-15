import {useEffect, useState} from "react";
import SongChart from "../components/SongChart"
import "./SongContainer.css"

const SongContainer = () => {
  
  const [chart, setChart] = useState(null);

  const getChart = () => {
    
    console.log("Getting song info..");
    fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChart(data.feed.entry);
      })
  };

  useEffect(() => {
    getChart();
  }, [])

  if (!chart) return null;
  return (
    <div className="SongContainer">
      <SongChart chart={chart} />
    </div>
  )
}

export default SongContainer;