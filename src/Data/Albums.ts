export interface Album {
  id: number;
  title: string;
  artist: string;
  img: string;
}

export const albums: Album[] = [
  {
    id: 1,
    title: "Anomaly",
    artist: "Lecrae",
    img: "https://upload.wikimedia.org/wikipedia/en/e/ea/Anomaly_%28Lecrae_album%29.jpeg",
  },
  {
    id: 2,
    title: "Perception",
    artist: "NF",
    img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Nf_perception_album_cover.jpg",
  },
  {
    id: 3,
    title: "His Glory Alone",
    artist: "KB",
    img: "https://i.scdn.co/image/ab67616d0000b27359f0932d9896423ce96df6ab",
  },
  {
    id: 4,
    title: "Uncomfortable",
    artist: "Andy Mineo",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3d/Uncomfortable_by_Andy_Mineo.jpg",
  },
  {
    id: 5,
    title: "Christopher",
    artist: "Hulvey",
    img: "https://i.scdn.co/image/ab67616d0000b2733aaaeab5117e8b8f776596cb",
  },
  {
    id: 6,
    title: "Rise",
    artist: "Trip Lee",
    img: "https://i.scdn.co/image/ab67616d0000b27320a89d211a934f3b24942099",
  },
  {
    id: 7,
    title: "Never Fold",
    artist: "Tedashii",
    img: "https://i.scdn.co/image/ab67616d0000b273e4874d2909126ef61799b7ad",
  },
  {
    id: 8,
    title: "The Elements",
    artist: "TobyMac",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Elements_TobyMac_official_album_cover.jpg",
  },
];

export function getAlbums(): Album[] {
  return albums;
}