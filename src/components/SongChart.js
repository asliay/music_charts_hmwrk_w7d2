import Song from "./Song"
import "./SongChart.css"

const SongChart = ({chart}) => {
  
  const songItems = chart.map((song, index) => {
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
      <ul className="ChartList">
        {songItems}
      </ul>
    </>
  )
  
}

export default SongChart;

