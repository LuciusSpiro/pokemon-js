import { useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useBattleStore } from '../../stores/useBattleStore'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { fetchPokemonList } from '../../api/pokeClient'
import { GYMS } from '../../utils/constants'
import { BATTLE_DATA } from '../../data/battleQuestions'
import TeamSelect from '../battle/TeamSelect'
import BattleScene from '../battle/BattleScene'
import Notification from '../ui/Notification'

export default function GymBattle() {
  const { gymId } = useParams()
  const gymIdNum = parseInt(gymId, 10)
  const navigate = useNavigate()
  const gym = GYMS.find((g) => g.id === gymIdNum)
  const battleData = BATTLE_DATA[gymIdNum]

  const phase = useBattleStore((s) => s.phase)
  const initBattle = useBattleStore((s) => s.initBattle)
  const setTeam = useBattleStore((s) => s.setTeam)
  const reset = useBattleStore((s) => s.reset)

  const earnBadge = usePlayerStore((s) => s.earnBadge)
  const gainXP = usePlayerStore((s) => s.gainXP)
  const badges = usePlayerStore((s) => s.badges)

  const [notification, setNotification] = useState(null)
  const [loading, setLoading] = useState(true)

  // Already have this badge?
  const alreadyWon = badges.includes(gym?.badge)

  // Initialize battle
  useEffect(() => {
    if (!gym || !battleData) return

    async function init() {
      try {
        const leaderPokemonData = await fetchPokemonList(gym.leaderPokemon)
        initBattle(
          gymIdNum,
          gym.leader,
          gym.badge,
          leaderPokemonData,
          battleData.questions,
          battleData.bossChallenge
        )
      } catch (err) {
        console.error('Fehler beim Laden:', err)
      } finally {
        setLoading(false)
      }
    }
    init()

    return () => reset()
  }, [gymIdNum])

  if (!gym || !battleData) {
    return <Navigate to="/map" replace />
  }

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">⚔️</div>
          <p className="text-gray-400">Arena-Kampf wird vorbereitet...</p>
        </div>
      </div>
    )
  }

  // Victory screen
  if (phase === 'victory') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md animate-bounce-in">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-pokemon-yellow mb-2">Sieg!</h2>
          <p className="text-white text-lg mb-4">
            Du hast {gym.leader} besiegt!
          </p>
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
            <p className="text-sm text-gray-400 mb-2">Du erhaeltst:</p>
            <p className="text-pokemon-yellow font-bold text-lg mb-1">★ {gym.badge}</p>
            <p className="text-green-400 font-bold">+500 XP</p>
          </div>
          <button
            onClick={() => {
              if (!alreadyWon) {
                earnBadge(gym.badge)
                gainXP(500)
              }
              navigate(`/gym/${gymId}`)
            }}
            className="btn-primary text-lg px-8"
          >
            Weiter
          </button>
        </div>
      </div>
    )
  }

  // Defeat screen
  if (phase === 'defeat') {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-md animate-bounce-in">
          <div className="text-6xl mb-4">💫</div>
          <h2 className="text-2xl font-bold text-red-400 mb-2">Niederlage...</h2>
          <p className="text-gray-400 text-lg mb-6">
            {gym.leader} war zu stark. Versuche es erneut!
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                reset()
                setLoading(true)
                fetchPokemonList(gym.leaderPokemon).then((data) => {
                  initBattle(gymIdNum, gym.leader, gym.badge, data, battleData.questions, battleData.bossChallenge)
                  setLoading(false)
                })
              }}
              className="btn-primary"
            >
              Nochmal versuchen
            </button>
            <button
              onClick={() => navigate(`/gym/${gymId}`)}
              className="btn-secondary"
            >
              Zurueck
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Team Select phase
  if (phase === 'teamSelect') {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate(`/gym/${gymId}`)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Zurueck
          </button>
          <h1 className="text-xl font-bold">Arena-Kampf: {gym.leader}</h1>
        </div>
        <div className="flex-1 min-h-0">
          <TeamSelect onConfirm={(team) => setTeam(team)} />
        </div>
      </div>
    )
  }

  // Battle phases
  return (
    <div className="h-full flex flex-col">
      {notification && (
        <Notification
          key={notification.message}
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <BattleScene />
    </div>
  )
}
