import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/solid"
interface Props{
  netflixOriginals: Movie[]
}
function Banner({netflixOriginals}: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(()=> {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65ch] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover" />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">{movie?.title || movie?.name}</h1>
      <p className="max-w-sm text-shadow-md text-sm md:max-w-3xl md:min-w-lg md:text-lg lg:max-w-5xl lg:min-w-2xl lg:text-2xl">{movie?.overview}</p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">More Info <InformationCircleIcon className="h-5 w-5 text-white md:h-8 md:w-8"/></button>
      </div>
    </div>
  )
}

export default Banner