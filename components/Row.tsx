import { ChevronLeftIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { useRef, useState } from "react"
import { Movie } from "../typings"
import Thumbnail from "./Thumbnail"
const style = {
  icon: `absolute top-0 bottom-0 w-9 z-40 m-auto h-9 cursor-pointer opacity-0 translate hover:scale-125 group-hover:opacity-100`,
  title: `w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl`,
  devThumpnail: `flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide`
}
interface Props{
  title: string,
  // movies: Movie[] | DocumentData[]
  movies: Movie[]
}
function Row({title, movies}: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className={style.title}>{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={`${style.icon} ${!isMoved && 'hidden'} left-2`}
        onClick = {()=> handleClick("left")}
        />
        <div className={style.devThumpnail} ref={rowRef}>
          {movies.map(i=> (
            <Thumbnail key={i.id} movie={i}/>
          ))}
        </div>
        <ChevronRightIcon className={`${style.icon} right-2`}
        onClick = {()=> handleClick("right")}/>
      </div>
    </div>
  )
} 

export default Row