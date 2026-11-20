import { useEffect, useState } from 'preact/hooks'

import { Heading } from './components/Heading.js'
import { SidePiece } from './components/SidePiece.js'
import { BottomPiece } from './components/BottomPiece.js'
import { CommodityList } from './components/CommodityList.js'
import './App.css'

function toggleFullscreen() {
  if (document.fullscreenEnabled) {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }
}

export function App() {
  const [listIteration, setListIteration] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setListIteration((x) => x + 1)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div class="w-full h-full absolute top-0 left-0 p-5 overflow-hidden flex flex-row space-x-3 bg-black">
      <SidePiece action={toggleFullscreen} />
      <div class="flex flex-col grow space-y-2">
        <div class="flex flex-col grow border border-yellow pt-2 pb-3 px-5 space-y-3">
          {/* <Heading>Anyalisi</Heading> */}
          <Heading>Xaltewe Overview</Heading>
          {/* <Heading>Showxating</Heading> */}
          {/* <Heading>Navigeshang</Heading> */}
          {/* <Heading>Seva Fokaso</Heading> */}
          <div class="flex flex-row grow space-x-5">
            <div class="w-2/3 h-full flex-none">
              {/* prevent changing width bc of content */}
              <CommodityList key={listIteration} />
            </div>
            <div class="w-1/3 h-full flex flex-col justify-between">
              <div class="space-y-2">
                <div class="border border-blue bg-blue-t py-1 px-2 uppercase text-right">
                  Anyalisi
                </div>
                <div class="border border-blue bg-blue-t py-1 px-2 uppercase text-right">
                  Seva Fokaso
                </div>
              </div>
              <div class="mx-auto">
                <div class="text-center text-white mb-1 uppercase">
                  depelésh
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-white-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-white-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-white-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
                  <div class="w-9 h-9 m-auto flex items-center justify-center bg-blue-t"></div>
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
