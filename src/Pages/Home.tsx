import { getLibMusic } from "../Data/Libary"
import { getAlbums } from "../Data/Albums"
import { getArtists } from "../Data/Artists"
import MusicCard from "../Components/MusicCard"
import MusicDock from "../Components/MusicDock"
import AlbumDock from "../Components/AlbumDock"
import ArtistDock from "../Components/ArtistsDock"
import { motion } from "motion/react"

export default function Home() {

  const music = getLibMusic()
  const albums = getAlbums()
  const artists = getArtists()
  return (
    <div className="w-full h-auto bg-gray-900 px-[7.5%] py-[2%] pt-[15vh] ">
      <div className="w-full h-[400px] flex flex-col items-center rounded-[15px] p-[2%] mb-[2%]">
        <h2 className="text-[30px] mb-[2%] default-color font-bold text-shadow-xl text-shadow-gray-950">Top Music</h2>
        <div className="w-full grid grid-cols-6  gap-[1%] ">
        {music.slice(0,6).map((song) => (
          <MusicCard
            key={song.id}
            song={song}
          />
        ))}
      </div>
      </div>

      <div className="w-full h-[500px]  gap-[1%] flex">
        <div className="w-[55%] h-full overflow-scroll p-[0.5%]">
          <h2 className="text-[25px] mb-[2%] default-color font-bold text-shadow-xl text-shadow-gray-950">Newest</h2>
          <div className="w-full">
          {music.map((song) => (
          <MusicDock
            key={song.id}
            song={song}
          />
        ))}
        </div>
        </div>
        <div className="w-[45%] h-full p-[2%] flex flex-col bg-[url('/Img/blury-bg.jpg')] bg-cover bg-center rounded-[25px] shadow-xl shadow-black">
          <div className="w-fullh h-[10%] flex justify-between items-center">
            <h2 className="text-[25px] mb-[2%] default-color font-bold text-shadow-xl text-shadow-gray-950">PLaylists</h2>
            <p className="secondary-color">View All </p>
          </div>
          <div className=" grid grid-cols-2 gap-[2%] grid-rows-2 w-full h-[90%] text-white text-[30px]">
            <motion.div whileHover={{scale: 1.05,boxShadow:'20px 20px 90px #010101' }} className="   w-full h-full rounded-[15px] border border-white backdrop-blur-3xl flex justify-center items-center">Chill</motion.div>
            <motion.div whileHover={{scale: 1.05,boxShadow:'20px 20px 90px #010101' }} className=" w-full h-full rounded-[15px] border border-white backdrop-blur-3xl flex justify-center items-center">Rainy Day</motion.div>
            <motion.div whileHover={{scale: 1.05,boxShadow:'20px 20px 90px #010101' }} className=" w-full h-full rounded-[15px] border border-white backdrop-blur-3xl flex justify-center items-center">Drive Mode</motion.div>
            <motion.div whileHover={{scale: 1.05,boxShadow:'20px 20px 90px #010101' }} className=" w-full h-full rounded-[15px] border border-white backdrop-blur-3xl flex justify-center items-center">Party</motion.div>
          </div>
        </div>
      </div>

      
      <div className="w-full h-50vh flex flex-col my-[10%]">
        <div className="w-fullh h-[10%] flex justify-between items-center">
            <h2 className="text-[25px] mb-[2%] default-color font-bold text-shadow-xl text-shadow-gray-950">New Albums</h2>
            <p className="secondary-color">View All </p>
        </div>
        <div className="w-full h-[80%] flex gap-[0.3%]">
          {albums.map((album) => (
          <AlbumDock
            key={album.id}
            album={album}
          />
        ))}
        </div>
      </div>

      <div className="w-full h-60vh text-white text-[25px]">
        <h1 className="default-color text-center text-[40px]">About BackShotLibary</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam distinctio illum. Voluptate, praesentium! Repellat corporis blanditiis ex, perspiciatis nulla expedita magni nisi! Necessitatibus neque amet animi quibusdam quis totam officia vel minus inventore, in est, fuga exercitationem libero itaque illo recusandae, officiis dolorem! Explicabo exercitationem praesentium natus mollitia, tenetur dolorem sequi maxime, esse reprehenderit ipsum minima maiores debitis sunt.</p>
      </div>

     <div className="w-full min-h-screen  px-[7.5%] pt-[3%] my-[10%]">

      <h2 className="text-white text-2xl font-bold mb-6">
        Artists
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-[5%]">

        {artists.map((artist) => (
          <ArtistDock
            key={artist.id}
            artist={artist}
          />
        ))}

      </div>

    </div>
    </div>
  )
}
