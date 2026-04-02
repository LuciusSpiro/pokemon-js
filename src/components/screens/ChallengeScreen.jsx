import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import { usePlayerStore } from '../../stores/usePlayerStore'
import { useChallengeStore } from '../../stores/useChallengeStore'
import { usePokedexStore } from '../../stores/usePokedexStore'
import { runCode } from '../../engine/SandboxRunner'
import { gym1Challenges } from '../../data/challenges/gym1-variables'
import Notification from '../ui/Notification'

const allChallenges = [...gym1Challenges]

export default function ChallengeScreen() {
  const { gymId, challengeId } = useParams()
  const challenge = allChallenges.find((c) => c.id === challengeId)
  const gainXP = usePlayerStore((s) => s.gainXP)
  const completeChallenge = useChallengeStore((s) => s.completeChallenge)
  const isCompleted = useChallengeStore((s) => s.isCompleted)
  const catchPokemon = usePokedexStore((s) => s.catchPokemon)

  const [code, setCode] = useState(challenge?.starterCode || '')
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [notification, setNotification] = useState(null)
  const [hintIndex, setHintIndex] = useState(-1)
  const [activeTab, setActiveTab] = useState('instructions') // mobile tab: instructions | editor
  const completed = isCompleted(challengeId)

  if (!challenge) {
    return <Navigate to={`/gym/${gymId}`} replace />
  }

  async function handleRun() {
    setRunning(true)
    setOutput(null)

    try {
      const result = await runCode(code, challenge.tests)
      setOutput(result)

      if (result.success && result.testResults?.every((t) => t.passed)) {
        if (!completed) {
          const isFirstTry = !useChallengeStore.getState().completed[challengeId]?.attempts
          const xp = isFirstTry
            ? Math.floor(challenge.xpReward * 1.5)
            : challenge.xpReward

          completeChallenge(challengeId, xp)
          const newLevel = gainXP(xp)

          if (challenge.pokemonReward) {
            catchPokemon(challenge.pokemonReward, challenge.gymId)
            setNotification({
              message: `+${xp} XP! Neues Pokemon gefangen!`,
              type: 'success',
            })
          } else {
            setNotification({
              message: `+${xp} XP!${isFirstTry ? ' (First-Try Bonus!)' : ''}`,
              type: 'success',
            })
          }

          if (newLevel) {
            setTimeout(() => {
              setNotification({
                message: `Level Up! Du bist jetzt Level ${newLevel}!`,
                type: 'levelup',
              })
            }, 1500)
          }
        }
      }
    } catch (err) {
      setOutput({
        success: false,
        error: { message: 'Unerwarteter Fehler: ' + err.message },
        logs: [],
        testResults: [],
      })
    } finally {
      setRunning(false)
    }
  }

  function showNextHint() {
    if (hintIndex < challenge.hints.length - 1) {
      setHintIndex(hintIndex + 1)
    }
  }

  const allPassed = output?.success && output?.testResults?.every((t) => t.passed)

  // Find next challenge
  const currentIndex = allChallenges.findIndex((c) => c.id === challengeId)
  const nextChallenge = allChallenges[currentIndex + 1]
  const nextInSameGym = nextChallenge?.gymId === parseInt(gymId, 10) ? nextChallenge : null

  const instructionsPanel = (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 overflow-y-auto border border-gray-700">
      <div className="prose prose-invert prose-sm max-w-none">
        <ReactMarkdown>{challenge.description}</ReactMarkdown>
      </div>

      {challenge.hints.length > 0 && (
        <div className="mt-6 border-t border-gray-700 pt-4">
          <button
            onClick={showNextHint}
            disabled={hintIndex >= challenge.hints.length - 1}
            className="text-sm text-pokemon-yellow hover:text-yellow-300 transition-colors disabled:opacity-50"
          >
            Tipp anzeigen ({hintIndex + 1}/{challenge.hints.length})
          </button>
          {hintIndex >= 0 && (
            <div className="mt-2 space-y-2">
              {challenge.hints.slice(0, hintIndex + 1).map((hint, i) => (
                <div
                  key={i}
                  className="text-sm text-gray-400 bg-gray-700/50 rounded p-2"
                >
                  {hint}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )

  const editorPanel = (
    <div className="flex flex-col gap-3 sm:gap-4 min-h-0">
      {/* Code Editor */}
      <div className="min-h-[200px] lg:flex-1 rounded-lg overflow-hidden border border-gray-700" style={{ height: '300px' }}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: 'on',
            glyphMargin: false,
            folding: false,
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 3,
          }}
        />
      </div>

      {/* Run Button */}
      <div className="flex gap-2">
        <button
          onClick={handleRun}
          disabled={running}
          className="btn-primary flex-1 py-3 sm:py-3"
        >
          {running ? 'Laeuft...' : '▶ Code ausfuehren'}
        </button>
        {allPassed && nextInSameGym && (
          <Link
            to={`/gym/${gymId}/challenge/${nextInSameGym.id}`}
            className="btn-secondary text-sm"
            onClick={() => {
              setCode(nextInSameGym.starterCode)
              setOutput(null)
              setHintIndex(-1)
              setActiveTab('instructions')
            }}
          >
            Weiter →
          </Link>
        )}
      </div>

      {/* Output Panel */}
      {output && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-3 sm:p-4 overflow-y-auto max-h-[250px] sm:max-h-[300px]">
          {output.logs?.length > 0 && (
            <div className="mb-3">
              <h3 className="text-xs text-gray-500 uppercase mb-2">Konsole</h3>
              {output.logs.map((log, i) => (
                <div
                  key={i}
                  className={`text-xs sm:text-sm font-mono break-all ${
                    log.type === 'error'
                      ? 'text-red-400'
                      : log.type === 'warn'
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                >
                  {log.args.join(' ')}
                </div>
              ))}
            </div>
          )}

          {output.error && (
            <div className="mb-3 text-red-400 text-xs sm:text-sm font-mono bg-red-900/20 rounded p-2 break-all">
              {output.error.message}
            </div>
          )}

          {output.testResults?.length > 0 && (
            <div>
              <h3 className="text-xs text-gray-500 uppercase mb-2">Tests</h3>
              <div className="space-y-1">
                {output.testResults.map((test, i) => (
                  <div
                    key={i}
                    className={`text-xs sm:text-sm flex items-start gap-2 ${
                      test.passed ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    <span className="shrink-0">{test.passed ? '✓' : '✗'}</span>
                    <div>
                      <span>{test.name}</span>
                      {!test.passed && (
                        <div className="text-gray-500 text-xs mt-0.5">
                          {test.failMessage}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {allPassed && (
                <div className="mt-3 text-green-400 font-bold text-center text-sm">
                  Alle Tests bestanden!
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )

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

      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link
            to={`/gym/${gymId}`}
            className="text-gray-400 hover:text-white transition-colors shrink-0"
          >
            ←
          </Link>
          <h1 className="text-base sm:text-xl font-bold truncate">{challenge.title}</h1>
          {completed && (
            <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded shrink-0">
              ✓
            </span>
          )}
        </div>
        <div className="text-xs sm:text-sm text-gray-400 shrink-0">
          {challenge.xpReward} XP
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex gap-1 mb-3 lg:hidden">
        <button
          onClick={() => setActiveTab('instructions')}
          className={`flex-1 py-2 text-sm rounded-lg font-medium transition-colors ${
            activeTab === 'instructions'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Aufgabe
        </button>
        <button
          onClick={() => setActiveTab('editor')}
          className={`flex-1 py-2 text-sm rounded-lg font-medium transition-colors ${
            activeTab === 'editor'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Code Editor
        </button>
      </div>

      {/* Desktop: Side-by-side */}
      <div className="flex-1 hidden lg:grid lg:grid-cols-2 gap-4 min-h-0">
        {instructionsPanel}
        {editorPanel}
      </div>

      {/* Mobile: Tabbed */}
      <div className="flex-1 lg:hidden min-h-0 overflow-y-auto">
        {activeTab === 'instructions' ? instructionsPanel : editorPanel}
      </div>
    </div>
  )
}
