import React from 'react'

function BottomPiece(props) {
  return (
    <div className="h-6 flex flex-row justify-end space-x-1">
      <div className="w-2.5 h-2.5 rounded-full border border-blue mt-0.5" />
      <div className="w-4 h-full border border-blue bg-yellow" />
      <div className="w-4 h-full border border-blue bg-yellow" />
      <div className="w-4 h-full border border-blue" />
      <div className="w-4 h-full border border-blue" />
      <div className="w-4 h-full border border-blue" />
    </div>
  )
}

export default BottomPiece
