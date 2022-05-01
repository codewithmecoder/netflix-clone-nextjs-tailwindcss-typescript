import Image from "next/image"
import { Movie } from "../typings"

interface Props{
  // movie: Movie | DocumentData
  movie: Movie
}
const style = {
  container: `relative h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`
}
function Thumbnail({movie}: Props) {
  return (
    <div className={style.container}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail