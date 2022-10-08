import React, { useState } from 'react'
import SquareThing from './SquareThing'

const pieces = [{ label: 'GNDN' }, { label: 'WRTHG' }]

function SidePiece({ action = () => {} }) {
  const [activeThing, setActiveThing] = useState(pieces[0].label)

  function handleClick(label) {
    action() // toggle fullscreen here.
    setActiveThing(label)
  }

  return (
    <div className="flex flex-col w-10 py-2 space-y-2 align-center items-start">
      {pieces.map(({ label }) => (
        <SquareThing
          key={label}
          label={label}
          isActive={label === activeThing}
          isNotify={false}
          onClick={(e) => handleClick(label)}
        />
      ))}
    </div>
  )
}

export default SidePiece
