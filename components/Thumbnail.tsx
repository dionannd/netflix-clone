import { DocumentData } from 'firebase/firestore'
import React from 'react'
import { Movie } from '../typing'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  movie: Movie | DocumentData
}

const Thumbnail: React.FC<Props> = ({ movie }: Props) => {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)

  return (
    <div
      className={`trainsition relative h-28 min-w-[180px] cursor-pointer duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
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
