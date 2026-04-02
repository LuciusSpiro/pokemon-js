import { useEffect, useRef, useCallback } from 'react'

export function useMovement(onMove, enabled = true) {
  const lastMoveRef = useRef(0)

  const handleMove = useCallback(
    (direction) => {
      if (!enabled) return
      const now = Date.now()
      if (now - lastMoveRef.current < 150) return
      lastMoveRef.current = now
      onMove(direction)
    },
    [onMove, enabled]
  )

  // Keyboard input
  useEffect(() => {
    if (!enabled) return

    const keyMap = {
      ArrowUp: 'up',
      ArrowDown: 'down',
      ArrowLeft: 'left',
      ArrowRight: 'right',
      w: 'up',
      W: 'up',
      s: 'down',
      S: 'down',
      a: 'left',
      A: 'left',
      d: 'right',
      D: 'right',
    }

    let held = null
    let interval = null

    function onKeyDown(e) {
      const direction = keyMap[e.key]
      if (!direction) return
      e.preventDefault()

      if (held === e.key) return // already held
      held = e.key

      handleMove(direction)
      interval = setInterval(() => handleMove(direction), 180)
    }

    function onKeyUp(e) {
      if (e.key === held) {
        held = null
        if (interval) {
          clearInterval(interval)
          interval = null
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      if (interval) clearInterval(interval)
    }
  }, [handleMove, enabled])

  return handleMove
}
