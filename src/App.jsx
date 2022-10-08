import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
import SidePiece from './components/SidePiece'
import BottomPiece from './components/BottomPiece'
import CommodityList from './components/CommodityList'
import './App.css'

function toggleFullscreen () {
  if (document.fullscreenEnabled) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
}

function App() {
  const [listIteration, setListIteration] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setListIteration((x) => x + 1)
    }, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="w-full h-full absolute top-0 left-0 p-5 overflow-hidden flex flex-row space-x-3 bg-black">
      <SidePiece action={toggleFullscreen} />
      <div className="flex flex-col flex-grow space-y-2">
        <div className="flex flex-col flex-grow border border-yellow py-2 px-5 space-y-2">
          {/* <Heading>Anyalisi</Heading> */}
          <Heading>Xaltewe Overview</Heading>
          {/* <Heading>Showxating</Heading> */}
          <div className="flex flex-row flex-grow space-x-5">
            <div className="w-2/3 h-full flex-none">{/* prevent changing width bc of content */}
              <CommodityList key={listIteration} />
            </div>
            <div className="w-1/3 h-full flex flex-col justify-between">
              <div className="space-y-2">
                <div className="border border-blue bg-blue-t py-1 px-2 uppercase text-right">Anyalisi</div>
                <div className="border border-blue bg-blue-t py-1 px-2 uppercase text-right">Showxating</div>
              </div>
              <div className="m-auto">
                <div className="text-center text-white mb-2">STUFF</div>
                <div class="grid grid-cols-3 gap-3">
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-white"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-white"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-white"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div className="w-10 h-10 m-auto flex items-center justify-center bg-blue-t"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomPiece />
      </div>
    </div>
  )
}

export default App
