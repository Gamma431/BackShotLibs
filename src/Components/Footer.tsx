export default function Footer() {
  return (
    <div className=" bg-black w-full border h-[80vh] flex flex-col rounded-[15px] shadow-xl shadow-black gap-[2%]">
      <div className="w-full flex justify-center">
        <p className="text-[180px] default-color">BackShotLibs</p>
      </div>
      <div className="w-full flex px-[7%] py-[2%] justify-center mt-[4%]">
        <div className="w-[25%] h-[40%] text-white">
          <h2 className="text-[25px]">Services</h2>
          <p className="text-[15px]">Music Podcast</p>
          <p className="text-[15px]">Music Libary</p>
          <p className="text-[15px]">Art Industry</p>
          <p className="text-[15px]">Free Listening</p>
        </div>

        <div className="w-[25%] h-[40%] text-white">
          <h2 className="text-[25px]">Contacts</h2>
          <p className="text-[15px]">+374 77 411441</p>
          <p className="text-[15px]">backshot@example.com</p>
          <p className="text-[15px]">Github: Gamma431</p>
        </div>

        <div className="w-[25%] h-[40%] text-white">
          <h2 className="text-[25px]">Libary</h2>
          <p className="text-[15px]">Favorite</p>
          <p className="text-[15px]">Playlist</p>
          <p className="text-[15px]">Local Mix</p>
          <p className="text-[15px]">Liked songs</p>
        </div>

        <div className="w-[25%] h-[40%] text-white">
          <h2 className="text-[25px]">Premium</h2>
          <p className="text-[15px]">Free Hnadleing</p>
          <p className="text-[15px]">No Ads</p>
          <p className="text-[15px]">Premium status</p>
          <p className="text-[15px]">Unlocked Limits</p>
        </div>
      </div>
    </div>
  )
}
