import { useState, useEffect } from 'react'

export default function BattleDialogue({ text, onComplete, speed = 30 }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
        setTimeout(() => onComplete?.(), 500)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <div
      className="dialogue-box cursor-pointer min-h-[60px] flex items-center"
      onClick={() => {
        if (!done) {
          setDisplayed(text)
          setDone(true)
          onComplete?.()
        }
      }}
    >
      <p>{displayed}<span className={done ? 'hidden' : 'animate-pulse'}>|</span></p>
    </div>
  )
}
