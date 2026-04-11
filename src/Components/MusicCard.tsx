import type { Lib } from "../Data/Libary";
import { motion } from "motion/react";

interface Props {
  song: Lib;
}

export default function MusicCard({ song }: Props) {
  return (
    <motion.div whileHover={{scale:1.1, boxShadow:"none"}} className="w-[100%] h-full border-2 border-secondary bg-gray-950 text-white p-[2%] flex flex-col justify-center items-center rounded-[20px] shadow-lg shadow-black">
      <img src={song.img} className="rounded-[15px]"/>
      <div className="w-full px-[2%] text-[16px]">
        < motion.h2 whileHover={{scale: 2,marginLeft:"30%"}}>{song.name}</motion.h2>
        <p className="default-color">{song.artist}</p>
        <p className="text-gray-600">{song.followers} followers</p>
      </div>
    </motion.div>
  );
}