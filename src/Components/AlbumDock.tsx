import type { Album } from "../Data/Albums";

interface Props {
  album: Album;
}

export default function AlbumDock({ album }: Props) {
  return (
    <div className="w-full h-[90%] text-[16px] rounded-[15px] p-[1%] ">

      <img
        src={album.img}
        alt={album.title}
        className="w-full h-full rounded-[15px] -z-1 shadow-lg shadow-black"
      />

      <h3 className="text-white font-semibold text-shadow-lg shadow-black">
        {album.title}
      </h3>

      <p className="text-gray-400 text-sm text-shadow-lg shadow-black">
        {album.artist}
      </p>

    </div>
  );
}