import "./Song.css"

const Song = ({chartPosition, title, artist, audio, image}) => {
  return (
    <>
      <li className="SongElement">
        <div className="SongDiv">
          <h2 className="ChartPosition">#{chartPosition}</h2>
          <img className="SongImage" src={image} alt="songCover" />
          <h3 className="SongInfo"> {title} <br/>
          - {artist}</h3>
          <audio className="SongClip" src={audio} controls>
            Your browser does not support this audio preview.
          </audio>
        </div>
      </li>
    </>
  )
}

export default Song;