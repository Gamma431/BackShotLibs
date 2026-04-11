export interface Artist {
  id: number;
  name: string;
  img: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "Lecrae",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhIWfkxR18MOe_zfxhOrRb8hMtqWSn-HAK0A&s",
  },
  {
    id: 2,
    name: "NF",
    img: "https://i.guim.co.uk/img/media/8752ced487fc0ac9e5856a172f2d9c72a2ef776d/0_2065_5792_3475/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d5d4c677734c5ab3aa5b2af49588f869",
  },
  {
    id: 3,
    name: "KB",
    img: "https://images.squarespace-cdn.com/content/v1/5344deb7e4b060ad6f2805f2/e420db4e-8652-41ac-a56a-983a3cc68070/KB.jpeg",
  },
  {
    id: 4,
    name: "Andy Mineo",
    img: "https://cdn.rapzilla.com/wp-content/uploads/2018/04/23132550/andyMineo_newalbumFT-e1534304321610.jpg",
  },
  {
    id: 5,
    name: "Hulvey",
    img: "https://cdn.rapzilla.com/wp-content/uploads/2019/11/23111808/hulveyofficial_72336552_179649489836813_8133887804666469782_n.jpg",
  },
  {
    id: 6,
    name: "Trip Lee",
    img: "https://cdn.prod.website-files.com/633dcd0dfc767ad8b2f6ebef/662fa8d160950e037c25e29b_Trip%20Lee.png",  
  },
  {
    id: 7,
    name: "Tedashii",
    img: "https://cdn.rapzilla.com/wp-content/uploads/2019/03/23120256/tedashii_52105102_445238452889188_4889390665569667973_n-e1552543656854.jpg",
  },
  {
    id: 8,
    name: "Forrest Frank",
    img: "https://www.weekend22.com/wp-content/uploads/2025/08/2024ForrestCoverImage.jpg",
  },
  {
    id: 9,
    name: "TobyMac",
    img: "https://i.iheart.com/v3/catalog/artist/386996?ops=fit(720%2C720)",
  },
  {
    id: 10,
    name: "Bizzle",
    img: "https://s.topmusic.net/media/filer_public/b7/7b/b77b6fe6-eb3b-4de4-bb98-8a78c6861073/ab6761610000e5eb34199c6e5282c9beda788c38.jpg",
  },
  {
    id: 11,
    name: "Derek Minor",
    img: "https://marmosetmusic-com.s3.amazonaws.com/uploads/artist/photo/4039/homepage_large_88f68ce4-34e2-4129-8459-6234127e8d60.jpg",
  },
  {
    id: 12,
    name: "Flame",
    img: "https://jeffroberts.com/wp-content/uploads/2022/04/Flame%20Thumb%202021.png",
  },
  {
    id: 13,
    name: "Sevin",
    img: "https://cdn.rapzilla.com/wp-content/uploads/2018/08/23125430/20180605_035514-e1535140244778.jpg",
  },
  {
    id: 14,
    name: "Canon",
    img: "https://artlist-artistpage.imgix.net/590139_Canon_-_P.jpg?auto=format&fit=max&w=3840&q=75",
  },
  {
    id: 15,
    name: "1K Phew",
    img: "https://i.iheart.com/v3/catalog/artist/31474381?ops=fit(720%2C720)",
  },
  {
    id: 16,
    name: "Aaron Cole",
    img: "https://yt3.googleusercontent.com/JYwAn4AoPVSQHvHIfd34iQgQvukWLUYAo3tb8JtVWhx22oi0qb14GKbORN9yTLt2RO8PhFZ3xQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 17,
    name: "WHATUPRG",
    img: "https://images.genius.com/4c61905b15a0b11e4279ea214177529b.832x832x1.png",
  },
  {
    id: 18,
    name: "Ty Brasel",
    img: "https://images.genius.com/1f7523d55bbfa34086a711165f849df1.1000x1000x1.jpg",
  },
  {
    id: 19,
    name: "Jon Keith",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpXyD6vJ_BnG-BwhUy7A7J9TDdnU8tI5LRw&s",
  },
  {
    id: 20,
    name: "Miles Minnick",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwgEAy2ZE8ywvaGZNPL3czU_5eH8TdTDRsg&s",
  },
];

export function getArtists(): Artist[] {
  return artists;
}