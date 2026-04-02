import { useState, useEffect } from 'react'

export default function Notification({ message, type = 'info', duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose?.()
    }, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!visible) return null

  const colors = {
    info: 'bg-pokemon-blue',
    success: 'bg-green-600',
    warning: 'bg-pokemon-yellow text-gray-900',
    error: 'bg-pokemon-red',
    levelup: 'bg-gradient-to-r from-pokemon-yellow to-pokemon-gold text-gray-900',
  }

  return (
    <div
      className={`fixed top-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 px-4 sm:px-6 py-3 rounded-lg shadow-xl animate-bounce-in font-bold text-center sm:text-left text-sm sm:text-base ${colors[type]}`}
    >
      {message}
    </div>
  )
}
