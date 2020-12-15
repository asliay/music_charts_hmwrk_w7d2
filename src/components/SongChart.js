import Song from "./Song"

const SongChart = ({chart}) => {
  
  const songItems = chart.map((song, index) => {
    return (
      <Song title={song['im:name'].label} key={index} />
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

