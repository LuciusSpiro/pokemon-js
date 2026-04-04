import { useState, useEffect, useCallback } from 'react'
import { useBattleStore } from '../../stores/useBattleStore'
import { fetchPokemon } from '../../api/pokeClient'
import HPBar from './HPBar'
import BattleDialogue from './BattleDialogue'
import BattleQuiz from './BattleQuiz'
import BattleCode from './BattleCode'
import TypeBadge from '../ui/TypeBadge'

export default function BattleScene() {
  const {
    phase, playerHP, playerMaxHP, playerTeam,
    leaderName, leaderPokemon, currentLeaderPokemon,
    questions, bossChallenge, currentQuestion,
    log, lastMultiplier,
  } = useBattleStore()

  const answerCorrect = useBattleStore((s) => s.answerCorrect)
  const answerWrong = useBattleStore((s) => s.answerWrong)
  const nextRound = useBattleStore((s) => s.nextRound)
  const bossSolved = useBattleStore((s) => s.bossSolved)
  const bossFailed = useBattleStore((s) => s.bossFailed)
  const startFight = useBattleStore((s) => s.startFight)

  const [leaderSprite, setLeaderSprite] = useState(null)
  const currentPoke = leaderPokemon[currentLeaderPokemon]

  // Fetch leader pokemon sprite
  useEffect(() => {
    if (currentPoke?.id) {
      fetchPokemon(currentPoke.id).then((data) => {
        setLeaderSprite(data.sprite)
      }).catch(() => {})
    }
  }, [currentPoke?.id])

  const handleQuizResult = useCallback((correct) => {
    if (correct) {
      const defeated = answerCorrect()
      setTimeout(() => nextRound(), defeated ? 1500 : 1000)
    } else {
      const playerDefeated = answerWrong()
      if (!playerDefeated) {
        setTimeout(() => nextRound(), 1200)
      }
    }
  }, [answerCorrect, answerWrong, nextRound])

  const currentQ = questions[currentQuestion]

  return (
    <div className="flex flex-col h-full gap-3">
      {/* Battle Field */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        {/* Leader side */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-center">
            {leaderSprite ? (
              <img
                src={leaderSprite}
                alt={currentPoke?.name}
                className={`w-16 h-16 sm:w-20 sm:h-20 ${
                  currentPoke?.hp <= 0 ? 'animate-faint' : ''
                } ${phase === 'playerAttack' ? 'animate-hit-shake' : ''}`}
                style={{ imageRendering: 'pixelated' }}
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded animate-pulse" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold capitalize">{currentPoke?.name}</span>
              {currentPoke?.types.map((t) => <TypeBadge key={t} type={t} />)}
            </div>
            <HPBar current={currentPoke?.hp || 0} max={currentPoke?.maxHp || 100} label={leaderName} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-2" />

        {/* Player side */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <HPBar current={playerHP} max={playerMaxHP} label="Du" />
            {/* Team pokemon */}
            <div className="flex gap-1 mt-2">
              {playerTeam.map((p) => (
                <div
                  key={p.id}
                  className={`w-8 h-8 rounded border ${
                    p.used ? 'border-gray-700 opacity-30 grayscale' : 'border-gray-600'
                  }`}
                  title={`${p.name}${p.used ? ' (verbraucht)' : ''}`}
                >
                  <img
                    src={p.sprite}
                    alt={p.name}
                    className="w-full h-full"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              ))}
              {playerTeam.length === 0 && (
                <span className="text-xs text-gray-600">Kein Team</span>
              )}
            </div>
          </div>
          <div className={`text-4xl ${phase === 'opponentAttack' ? 'animate-hit-shake' : ''}`}>
            🧑‍💻
          </div>
        </div>
      </div>

      {/* Dialogue / Action Area */}
      <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-y-auto">
        {/* Intro */}
        {phase === 'intro' && (
          <div className="text-center">
            <BattleDialogue
              text={log[log.length - 1] || ''}
              onComplete={startFight}
            />
          </div>
        )}

        {/* Quiz Round */}
        {phase === 'question' && currentQ && (
          <BattleQuiz
            question={currentQ}
            playerTeam={playerTeam}
            leaderPokemonTypes={currentPoke?.types || []}
            onResult={handleQuizResult}
          />
        )}

        {/* Attack animations / feedback */}
        {(phase === 'playerAttack' || phase === 'opponentAttack') && (
          <div className={`text-center py-4 font-bold text-lg animate-bounce-in ${
            phase === 'playerAttack' ? 'text-green-400' : 'text-red-400'
          }`}>
            {log[log.length - 1]}
          </div>
        )}

        {/* Boss Round */}
        {phase === 'bossRound' && bossChallenge && (
          <BattleCode
            challenge={bossChallenge}
            onSolved={bossSolved}
            onFailed={bossFailed}
          />
        )}
      </div>
    </div>
  )
}
