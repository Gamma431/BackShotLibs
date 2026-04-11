import type { Artist } from "../Data/Artists";

interface Props {
  artist: Artist;
}

export default function ArtistDock({ artist }: Props) {
  return (
    <div className="bg-black rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col items-center shadow-lg shadow-black">

      <img
        src={artist.img}
        alt={artist.name}
        className="w-24 h-24 object-cover rounded-full mb-3"
      />

      <h3 className="text-white font-semibold text-center">
        {artist.name}
      </h3>

    </div>
  );
}