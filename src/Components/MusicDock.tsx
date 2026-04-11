import type { Lib } from "../Data/Libary";
import { motion } from "motion/react";

interface Props {
  song: Lib;
}

export default function MusicDock({ song }: Props) {
  return (
    <motion.div whileHover={{scale:1.02, boxShadow:"none"}} className="w-[100%] h-full flex mb-[0.5%] text-white object-cover bg-gray-950 p-[1%] rounded-[15px] shadow-xs shadow-black">
      <img src={song.img} className="rounded-[15px]  w-[10%] object-cover"/>
      <div className="w-full px-[2%] text-[16px]">
        <motion.h2 whileHover={{scale: 2,textAlign:"center"}}>{song.name}</motion.h2>
        <p className="default-color">{song.artist}</p>
        <p className="text-gray-600">{song.followers} followers</p>
      </div>
    </motion.div>
  )
}
