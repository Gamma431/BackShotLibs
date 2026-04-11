import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <HashRouter>   
        <div className='w-[100%] bg-gray-900 h-[100vh] '>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>

        <div className='w-full h-[85vh] pb-[4%] px-[5%] bg-gray-900'>
          <Footer />
        </div>
        </div> 
      </HashRouter>
    </>
  )
}

export default App
