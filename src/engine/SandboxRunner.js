function createSandboxHTML(userCode, testCode) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
<script>
  const __logs = [];

  ['log', 'warn', 'error', 'info'].forEach(function(method) {
    console[method] = function() {
      var args = Array.prototype.slice.call(arguments);
      __logs.push({
        type: method,
        args: args.map(function(a) {
          try { return typeof a === 'object' ? JSON.stringify(a) : String(a); }
          catch(e) { return String(a); }
        })
      });
    };
  });

  try {
    // User code
    ${userCode}

    // Tests
    var __results = [];
    ${testCode}

    window.parent.postMessage({
      type: 'sandbox-result',
      success: true,
      logs: __logs,
      testResults: __results
    }, '*');
  } catch(err) {
    window.parent.postMessage({
      type: 'sandbox-result',
      success: false,
      error: { message: err.message, stack: err.stack },
      logs: __logs
    }, '*');
  }
</script>
</body>
</html>`
}

function buildTestCode(tests) {
  return tests
    .map(
      (t, i) => `
    try {
      __results.push({
        name: ${JSON.stringify(t.name)},
        passed: !!(${t.test}),
        failMessage: ${JSON.stringify(t.failMessage)}
      });
    } catch(e) {
      __results.push({
        name: ${JSON.stringify(t.name)},
        passed: false,
        failMessage: e.message
      });
    }`
    )
    .join('\n')
}

export function runCode(userCode, tests, timeout = 5000) {
  return new Promise((resolve) => {
    const testCode = buildTestCode(tests)
    const html = createSandboxHTML(userCode, testCode)

    const iframe = document.createElement('iframe')
    iframe.sandbox = 'allow-scripts'
    iframe.style.display = 'none'
    iframe.srcdoc = html

    let settled = false

    const timer = setTimeout(() => {
      if (settled) return
      settled = true
      cleanup()
      resolve({
        success: false,
        error: { message: 'Ausfuehrung abgelaufen (Endlos-Schleife?)' },
        logs: [],
        testResults: [],
      })
    }, timeout)

    function handler(event) {
      if (event.data?.type !== 'sandbox-result') return
      if (settled) return
      settled = true
      cleanup()
      resolve(event.data)
    }

    function cleanup() {
      clearTimeout(timer)
      window.removeEventListener('message', handler)
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe)
    }

    window.addEventListener('message', handler)
    document.body.appendChild(iframe)
  })
}
