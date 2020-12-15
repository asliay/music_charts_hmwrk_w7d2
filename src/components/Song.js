import "./Song.css"

const Song = ({title, artist, audio, image}) => {
  return (
    <>
      <li className="SongElement">
        <div className="SongDiv">
          <h2>{title} - {artist}</h2>
          <img className="SongImage" src={image} alt="songCover" />
          <audio className="SongClip" src={audio} controls>
            Your browser does not support this audio preview.
          </audio>
        </div>
      </li>
    </>
  )
}

export default Song;