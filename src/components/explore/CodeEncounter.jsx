import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { runCode } from '../../engine/SandboxRunner'

export default function CodeEncounter({ pokemon, challenge, onResult }) {
  const [code, setCode] = useState(challenge.starterCode)
  const [running, setRunning] = useState(false)
  const [output, setOutput] = useState(null)

  async function handleRun() {
    setRunning(true)
    setOutput(null)

    try {
      const result = await runCode(code, challenge.tests)
      setOutput(result)

      const allPassed = result.success && result.testResults?.every((t) => t.passed)
      if (allPassed) {
        setTimeout(() => onResult(true), 1000)
      }
    } catch (err) {
      setOutput({
        success: false,
        error: { message: err.message },
        testResults: [],
      })
    } finally {
      setRunning(false)
    }
  }

  function handleGiveUp() {
    onResult(false)
  }

  const allPassed = output?.success && output?.testResults?.every((t) => t.passed)

  return (
    <div className="flex flex-col h-full p-4 gap-3">
      {/* Description */}
      <div className="text-center">
        <p className="text-purple-400 text-xs font-bold mb-1">Legendaeres Pokemon!</p>
        <p className="text-gray-400 text-sm mb-1">
          Loese die Challenge um {pokemon.name} zu fangen:
        </p>
        <p className="text-white text-sm sm:text-base font-medium">
          {challenge.description}
        </p>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-[150px] rounded-lg overflow-hidden border border-gray-700">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(v) => setCode(v || '')}
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
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={handleRun}
          disabled={running || allPassed}
          className="btn-primary flex-1 py-2 text-sm"
        >
          {running ? 'Pruefe...' : '▶ Ausfuehren'}
        </button>
        <button
          onClick={handleGiveUp}
          className="px-4 py-2 bg-gray-700 rounded-lg text-gray-400 text-sm hover:bg-gray-600"
        >
          Aufgeben
        </button>
      </div>

      {/* Test Results */}
      {output && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-3 max-h-[120px] overflow-y-auto">
          {output.error && (
            <div className="text-red-400 text-xs font-mono mb-2">{output.error.message}</div>
          )}
          {output.testResults?.map((test, i) => (
            <div
              key={i}
              className={`text-xs flex items-center gap-1 ${
                test.passed ? 'text-green-400' : 'text-red-400'
              }`}
            >
              <span>{test.passed ? '✓' : '✗'}</span>
              <span>{test.name}</span>
            </div>
          ))}
          {allPassed && (
            <div className="text-green-400 font-bold text-sm mt-2 text-center">
              Alle Tests bestanden!
            </div>
          )}
        </div>
      )}
    </div>
  )
}
