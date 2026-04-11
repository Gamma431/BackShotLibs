import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <div className="w-full h-[12vh] flex justify-center items-center fixed mb-[10%] z-1 backdrop-blur-xs">
        
      <nav className="w-[85%] h-[70%] bg-black rounded-[150px] shadow-lg shadow-gray-950 flex justify-between items-center px-[1%]">
        
        <div className="w-[6%] h-full">
          <img src="/Img/backshot-default.png" alt="" className="w-[60%] h-[100%] object-cover rounded-[150px]"/>
        </div>
        
        <div className="w-[40%] h-full gap-[2%] flex items-center default-color justify-center gap-[10%]">
          
          <div className="w-[20%] h-full flex gap-[10%] items-center">
            <p className="secondary-hover"><Link to="/" >Home</Link></p>
            <p className="secondary-hover"><Link to="/Libary" >Libary</Link></p>
          </div>
          <input type="search" className="border-none bg-gray-700 h-[50%] w-[50%] rounded-[10px] secondary-color inp-padding " placeholder="Find your beat..."/>
        </div>

        <div className="w-[3.8%] h-[70%] bg-[#798dfe] rounded-[150px] flex justify-center items-center text-[30px] border border-white shadow-md shadow-violet-500/50">
          A
        </div>
      </nav>
    
    </div>
  )
}