import React from 'react'
import { Movie } from '../typing'
import Image from 'next/image'

interface Props {
  movie: Movie
}

const Thumbnail: React.FC<Props> = ({ movie }: Props) => {
  // const [currentMovie, setCurrentMovie] = React.useRecoilState(movieState)
  // const [showModal, setShowModal] = React.useRecoilState(modalState)

  return (
    <div
      className={`trainsition relative h-28 min-w-[180px] cursor-pointer duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      // onClick={() => {
      //   setCurrentMovie
      // }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="thumnail"
        className="object-cover rounded-sm md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
