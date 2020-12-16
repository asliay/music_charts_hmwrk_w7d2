import Song from "./Song"
import "./SongChart.css"

const SongChart = ({songs}) => {
  
  const songItems = songs.map((song, index) => {
    return (
      <Song 
        chartPosition={index + 1}
        title={song['im:name'].label}
        artist={song['im:artist'].label} 
        image={song['im:image'][2].label}
        audio={song.link[1].attributes.href}
        key={index} 
      />
    );
  });

  return (
    <>
      <ul className="chart-list">
        {songItems}
      </ul>
    </>
  )
  
}

export default SongChart;

