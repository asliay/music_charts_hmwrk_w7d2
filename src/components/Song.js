import "./Song.css"

const Song = ({chartPosition, title, artist, audio, image}) => {
  return (
    <>
      <li className="song-element">
        <div className="song-div">
          <h2 className="chart-position">#{chartPosition}</h2>
          <img className="song-image" src={image} alt="songCover" />
          <h3 className="song-info"> {title} <br/>
          - {artist}</h3>
          <audio className="song-clip" src={audio} controls/>
        </div>
      </li>
    </>
  )
}

export default Song;