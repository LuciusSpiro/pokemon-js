import { memo } from 'react'
import Tile from './Tile'
import PlayerSprite from './PlayerSprite'

const TileGrid = memo(function TileGrid({ tiles, playerX, playerY, facing, isMoving }) {
  return (
    <div className="relative w-full h-full">
      {/* Tile Grid */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: 'repeat(20, 1fr)',
          gridTemplateRows: 'repeat(15, 1fr)',
        }}
      >
        {tiles.flatMap((row, y) =>
          row.map((tileType, x) => (
            <Tile key={`${x}-${y}`} type={tileType} />
          ))
        )}
      </div>

      {/* Player */}
      <PlayerSprite x={playerX} y={playerY} facing={facing} isMoving={isMoving} />
    </div>
  )
})

export default TileGrid
