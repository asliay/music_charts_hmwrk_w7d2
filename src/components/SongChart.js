import Song from "./Song"
import "./SongChart.css"

const SongChart = ({chart}) => {
  
  const songItems = chart.map((song, index) => {
    return (
      <Song 
        title={song['im:name'].label} 
        artist={song['im:artist'].label} 
        key={index} 
      />
    );
  });

  return (
    <>
      <ol className="ChartList">
        {songItems}
      </ol>
    </>
  )
  
}

export default SongChart;

