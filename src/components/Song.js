import "./Song.css"

const Song = ({title, artist, audio}) => {
  return (
    <>
      <li className="SongElement">
        <h2>{title} - {artist}</h2>
        <audio className="SongClip" src={audio} controls>
          Your browser does not support this audio preview.
        </audio>
      </li>
    </>
  )
}

export default Song;