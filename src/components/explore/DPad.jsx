import { useRef, useCallback } from 'react'

export default function DPad({ onMove }) {
  const intervalRef = useRef(null)

  const startMove = useCallback((direction) => {
    onMove(direction)
    intervalRef.current = setInterval(() => onMove(direction), 200)
  }, [onMove])

  const stopMove = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const btnClass =
    'w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-lg active:bg-gray-600 select-none border border-gray-600/50 shadow-lg'

  return (
    <div className="fixed bottom-6 right-6 z-30 md:hidden">
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {/* Row 1 */}
        <div />
        <button
          className={btnClass}
          onTouchStart={(e) => { e.preventDefault(); startMove('up') }}
          onTouchEnd={stopMove}
          onTouchCancel={stopMove}
        >
          ▲
        </button>
        <div />

        {/* Row 2 */}
        <button
          className={btnClass}
          onTouchStart={(e) => { e.preventDefault(); startMove('left') }}
          onTouchEnd={stopMove}
          onTouchCancel={stopMove}
        >
          ◀
        </button>
        <div className="w-12 h-12 sm:w-14 sm:h-14" />
        <button
          className={btnClass}
          onTouchStart={(e) => { e.preventDefault(); startMove('right') }}
          onTouchEnd={stopMove}
          onTouchCancel={stopMove}
        >
          ▶
        </button>

        {/* Row 3 */}
        <div />
        <button
          className={btnClass}
          onTouchStart={(e) => { e.preventDefault(); startMove('down') }}
          onTouchEnd={stopMove}
          onTouchCancel={stopMove}
        >
          ▼
        </button>
        <div />
      </div>
    </div>
  )
}
