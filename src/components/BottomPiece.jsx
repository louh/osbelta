import React from 'react'

function BottomPiece(props) {
  return (
    <div className="h-6 flex flex-row justify-between space-x-2">
      <div className="flex flex-row space-x-2 leading-none text-xs text-white">
        <div className="flex items-center justify-center border border-yellow bg-yellow-t px-2 py-1 uppercase">meta</div>
        <div className="flex items-center justify-center border border-yellow bg-blue-t px-2 py-1 uppercase">inv</div>
        <div className="flex items-center justify-center border border-yellow bg-yellow-t px-2 py-1 uppercase">nav</div>
      </div>
      <div className="flex flex-row space-x-1">
        <div className="w-2.5 h-2.5 rounded-full border border-blue mt-0.5" />
        <div className="w-4 h-full border border-blue bg-yellow" />
        <div className="w-4 h-full border border-blue bg-yellow" />
        <div className="w-4 h-full border border-blue" />
        <div className="w-4 h-full border border-blue" />
        <div className="w-4 h-full border border-blue" />
      </div>
    </div>
  )
}

export default BottomPiece
