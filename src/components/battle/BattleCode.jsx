import { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import { runCode } from '../../engine/SandboxRunner'
import { usePlayerStore } from '../../stores/usePlayerStore'

export default function BattleCode({ challenge, onSolved, onFailed }) {
  const [code, setCode] = useState(challenge.starterCode)
  const isMightyBob = usePlayerStore((s) => s.isMightyBob)

  // 🐐 Auto-win
  useEffect(() => {
    if (isMightyBob()) setTimeout(onSolved, 500)
  }, [])
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
        setTimeout(onSolved, 1000)
      }
    } catch (err) {
      setOutput({ success: false, error: { message: err.message }, testResults: [] })
    } finally {
      setRunning(false)
    }
  }

  const allPassed = output?.success && output?.testResults?.every((t) => t.passed)

  return (
    <div className="flex flex-col gap-3">
      <div className="text-center">
        <p className="text-purple-400 text-xs font-bold mb-1">BOSS-RUNDE!</p>
        <p className="text-white text-sm font-bold">{challenge.description}</p>
      </div>

      <div className="h-[180px] rounded-lg overflow-hidden border border-gray-700">
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

      <div className="flex gap-2">
        <button
          onClick={handleRun}
          disabled={running || allPassed}
          className="btn-primary flex-1 py-2 text-sm"
        >
          {running ? 'Pruefe...' : '▶ Ausfuehren'}
        </button>
        <button
          onClick={onFailed}
          className="px-4 py-2 bg-gray-700 rounded-lg text-gray-400 text-sm hover:bg-gray-600"
        >
          Aufgeben
        </button>
      </div>

      {output && (
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-2 max-h-[100px] overflow-y-auto">
          {output.error && (
            <div className="text-red-400 text-xs font-mono mb-1">{output.error.message}</div>
          )}
          {output.testResults?.map((test, i) => (
            <div key={i} className={`text-xs flex items-center gap-1 ${test.passed ? 'text-green-400' : 'text-red-400'}`}>
              <span>{test.passed ? '✓' : '✗'}</span>
              <span>{test.name}</span>
            </div>
          ))}
          {allPassed && (
            <div className="text-green-400 font-bold text-sm mt-1 text-center">Geloest!</div>
          )}
        </div>
      )}
    </div>
  )
}
