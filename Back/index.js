import express from "express"
import cors from "cors"
import path from "path"
import { fileURLToPath } from "url"

const app = express()
const PORT = process.env.PORT || 3001

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())
app.use("/audio",express.static(path.join(__dirname,"public/audio")))
app.use("/covers",express.static(path.join(__dirname,"public/covers")))
app.use("/artists",express.static(path.join(__dirname,"public/artists")))

const baseUrl = (process.env.PUBLIC_BASE_URL || `http://localhost:${PORT}`).replace(/\/$/,"")

const img = (folder,file) => {
  if(!file) return ""
  const fixedFile = String(file).trim().replaceAll("\\","/").replace(/^\/+/,"")
  if(fixedFile.startsWith("http://") || fixedFile.startsWith("https://")) return fixedFile
  if(fixedFile.startsWith("Back/public/")) return `${baseUrl}/${fixedFile.replace("Back/public/","")}`
  if(fixedFile.startsWith("public/")) return `${baseUrl}/${fixedFile.replace("public/","")}`
  return `${baseUrl}/${folder}/${fixedFile}`
}

const songs = [
  { id:1,title:"The Beginning",artist:"Flawed Mangoes",mood:"Guitar",type:"Instrumental",genre:"Calm Instrumental",album:"Killswitch Melodies",keyName:"3B",bpm:156,duration:"2:55",img:img("covers","Back/public/covers/SongImages/thebegining.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/flwdmangoes.jpg"),audio:img("audio","Back/public/audio/thebeggining.mp3") },
  { id:2,title:"Fragility",artist:"Flawed Mangoes",mood:"Guitar",type:"Instrumental",genre:"Calm Instrumental",album:"Dramamine / Fragility",keyName:"7B",bpm:130,duration:"2:57",img:img("covers","Back/public/covers/SongImages/fragility.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/flwdmangoes.jpg"),audio:img("audio","Back/public/audio/fragility.mp3" )},
  { id:3,title:"this feeling",artist:"øneheart",mood:"Peace",type:"Ambient",genre:"Calm Ambient",album:"this feeling",keyName:"4A",bpm:180,duration:"1:34",img:img("covers","Back/public/covers/SongImages/thisfeeling.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/oneheart.jpg"),audio:img("audio","Back/public/audio/thisfeeling.mp3") },
  { id:4,title:"aruarian dance",artist:"Nujabes",mood:"Peace",type:"Instrumental",genre:"Calm Instrumental",album:"samurai champloo music record",keyName:"1A",bpm:198,duration:"4:10",img:img("covers","Back/public/covers/SongImages/aruariandance.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/nujabes.jpg"),audio:img("audio","Back/public/audio/auriandance.mp3") },
  { id:5,title:"Violino",artist:"Piero Piccioni",mood:"Peace",type:"Orchestral",genre:"Calm Instrumental",album:"Amore Mio Aiutami",keyName:"5B",bpm:82,duration:"3:36",img:img("covers","Back/public/covers/SongImages/Violino.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/Piccioni.jpg"),audio:img("audio","Back/public/audio/violino.mp3") },
  { id:6,title:"Luminary",artist:"Joel Sunny",mood:"Instrumental",type:"Violin",genre:"Cinematic Instrumental",album:"Luminary",keyName:"6A",bpm:120,duration:"2:43",img:img("covers","Back/public/covers/SongImages/luminary.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/joelsunny.jpg"),audio:img("audio","Back/public/audio/luminary.mp3" )},
  { id:7,title:"Need 2",artist:"vagabond",mood:"Guitar",type:"Ambient",genre:"Calm Ambient",album:"vagabond",keyName:"8A",bpm:90,duration:"2:40",img:img("covers","Back/public/covers/SongImages/need2.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/vagabondartistcover.jpg"),audio:img("audio","Back/public/audio/need2.mp3") },
  { id:8,title:"Waiting",artist:"leverfall",mood:"Drum",type:"Instrumental",genre:"Calm Ambient",album:"still morning",keyName:"2B",bpm:72,duration:"3:12",img:img("covers","Back/public/covers/SongImages/stillmorning.jpg"),artistImg:img("artists","Back/public/covers/ArtistImages/leverfall.jpg"),audio:img("audio","Back/public/audio/waiting.mp3") }
]

const albums = [
  { id:1,title:"Killswitch Melodies",artist:"Flawed Mangoes",mood:"Guitar",genre:"Calm Instrumental",img:img("covers","flawed-mangoes-the-beginning.jpg") },
  { id:2,title:"Dramamine / Fragility",artist:"Flawed Mangoes",mood:"Guitar",genre:"Calm Instrumental",img:img("covers","flawed-mangoes-fragility.jpg") },
  { id:3,title:"this feeling",artist:"øneheart",mood:"Peace",genre:"Calm Ambient",img:img("covers","oneheart-this-feeling.jpg") },
  { id:4,title:"Amore Mio Aiutami",artist:"Piero Piccioni",mood:"Peace",genre:"Orchestral",img:img("covers","piero-piccioni-violino.jpg") },
  { id:5,title:"Luminary",artist:"Joel Sunny",mood:"Instrumental",genre:"Cinematic Instrumental",img:img("covers","joel-sunny-luminary.jpg") },
  { id:6,title:"Vagabond Collection",artist:"vagabond",mood:"Peace",genre:"Calm Ambient",img:img("covers","vagabond-vagabond.jpg") },
  { id:7,title:"Still Morning",artist:"leverfall",mood:"Piano",genre:"Calm Piano",img:img("covers","leverfall-still-morning.jpg") }
]

const artists = [
  { id:1,name:"Flawed Mangoes",style:"Calm guitar / instrumental",genre:"Instrumental",img:img("artists","Back/public/covers/ArtistImages/flwdmangoes.jpg") },
  { id:2,name:"øneheart",style:"Ambient / calm electronic",genre:"Ambient",img:img("artists","Back/public/covers/ArtistImages/oneheart.jpg") },
  { id:3,name:"leverfall",style:"Calm piano / ambient",genre:"Piano",img:img("artists","Back/public/covers/ArtistImages/leverfall.jpg") },
  { id:4,name:"Joel Sunny",style:"Violin / cinematic instrumental",genre:"Instrumental",img:img("artists","Back/public/covers/ArtistImages/joelsunny.jpg") },
  { id:5,name:"vagabond",style:"Calm ambient",genre:"Ambient",img:img("artists","Back/public/covers/ArtistImages/vagabondartistcover.jpg") },
  { id:6,name:"Piero Piccioni",style:"Orchestral / film score",genre:"Orchestral",img:img("artists","Back/public/covers/ArtistImages/Piccioni.jpg") }
]

app.get("/",(req,res) => {
  res.json({ message:"BackShotLibs backend is running" })
})

app.get("/api/library",(req,res) => {
  res.json({ songs,albums,artists })
})

app.get("/api/songs",(req,res) => {
  res.json(songs)
})

app.get("/api/albums",(req,res) => {
  res.json(albums)
})

app.get("/api/artists",(req,res) => {
  res.json(artists)
})

app.listen(PORT,() => {
  console.log(`BackShotLibs backend running on http://localhost:${PORT}`)
})