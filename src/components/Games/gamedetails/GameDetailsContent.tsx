import React from 'react'
import GameDetailsLeft from './GameDetailsLeft'
import GameDetailsRight from './GameDetailsRight'

const GameDetailsContent = () => {
  return (
    <>
    <div className="flex flex-col gap-4 p-4 md:flex-row md:px-24">
        <GameDetailsLeft />
        <GameDetailsRight />
      </div>
    </>
  )
}

export default GameDetailsContent