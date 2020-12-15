import "./Song.css"

const Song = ({title, artist}) => {
  return (
    <>
      <li className="SongElement">
        {title} - {artist} 
      </li>
    </>
  )
}

export default Song;