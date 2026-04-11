export interface Lib {
  id: number;
  img: string;
  name: string;
  artist: string;
  followers: number;
}

export const libary: Lib[] = [
  {
    id: 1,
    name: "Blessings",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a2/LecraeBlessings.jpg",
    artist: "Lecrae",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 2,
    name: "Let You Down",
    img: "https://upload.wikimedia.org/wikipedia/en/4/42/NF_let_you_down_single_cover.jpg",
    artist: "NF",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 3,
    name: "10K",
    img: "https://images.genius.com/335fae121e992bda7755896379e83e3f.1000x1000x1.jpg",
    artist: "KB",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 4,
    name: "Coming In Hot",
    img: "https://i1.sndcdn.com/artworks-000407585085-c7c2zm-t500x500.jpg",
    artist: "Andy Mineo",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 5,
    name: "Reasons",
    img: "https://cdn-images.dzcdn.net/images/cover/2ffdd791432637cbd6a9435dae353402/0x1900-000000-80-0-0.jpg",
    artist: "Hulvey",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 6,
    name: "Sweet Victory",
    img: "https://i.scdn.co/image/ab67616d0000b27320a89d211a934f3b24942099",
    artist: "Trip Lee",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 7,
    name: "Dum Dum",
    img: "https://i1.sndcdn.com/artworks-000167897415-md55fd-t500x500.jpg",
    artist: "Tedashii",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 8,
    name: "Good Day",
    img: "https://shakingtheheavens.com/wp-content/uploads/2024/07/Forrest-Frank-Good-Day.jpg",
    artist: "Forrest Frank",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 9,
    name: "Light Shine Bright",
    img: "https://i.ytimg.com/vi/d17hi1s6Tgg/maxresdefault.jpg",
    artist: "TobyMac",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 10,
    name: "God Is Good",
    img: "https://assets.exclaim.ca/image/upload/v1704037963/macgod.jpg",
    artist: "Demarco",
    followers: Math.floor(Math.random() * 1000000),
  },
  {
    id: 11,
    name: "Peaceful Journey",
    img: "https://i.redd.it/thorfinn-sitting-and-his-goal-changing-v0-9e5yo0h924zd1.png?width=1245&format=png&auto=webp&s=269fa6d3750eb62ec92650a32ab10a1e8598b763",
    artist: "Vinland Sagamix",
    followers: Math.floor(Math.random() * 1000000),
  },
];

export function getLibMusic() {
  return libary;
}