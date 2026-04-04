// Region 7: useEffect & API
// Gym Leader: Pyro (Feuer-Typ)

export const REGION_7_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Fukano
  58: {
    type: 'quiz',
    question: 'Wann wird der Callback in useEffect ausgefuehrt?',
    answers: ['Vor dem Rendern', 'Nach dem Rendern', 'Waehrend des Renderns', 'Nur beim Unmounten'],
    correct: 1,
  },

  // Ponita
  77: {
    type: 'quiz',
    question: 'Was passiert, wenn man useEffect ein leeres Array [] als zweites Argument uebergibt?',
    answers: [
      'Der Effekt laeuft bei jedem Render',
      'Der Effekt laeuft nur beim ersten Render',
      'Der Effekt laeuft nie',
      'Es gibt einen Fehler',
    ],
    correct: 1,
  },

  // Vulpix
  37: {
    type: 'quiz',
    question: 'Welche Funktion wird haeufig verwendet, um Daten von einer API zu laden?',
    answers: ['getData()', 'fetch()', 'load()', 'request()'],
    correct: 1,
  },

  // Taubsi
  16: {
    type: 'quiz',
    question: 'Wofuer steht das Dependency-Array in useEffect?',
    answers: [
      'Es listet alle Variablen auf, die importiert werden',
      'Es bestimmt, bei welchen Wertaenderungen der Effekt erneut laeuft',
      'Es definiert den Rueckgabewert von useEffect',
      'Es ist eine Liste aller State-Variablen der Komponente',
    ],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Arkani
  59: {
    type: 'quiz',
    question: 'Was gibt die Cleanup-Funktion in useEffect zurueck?',
    answers: [
      'Einen neuen State-Wert',
      'Nichts, sie wird automatisch beim Unmount oder vor dem naechsten Effekt ausgefuehrt',
      'Ein Promise',
      'Den vorherigen State',
    ],
    correct: 1,
  },

  // Gallopa
  78: {
    type: 'quiz',
    question: 'Warum sollte man den Callback von useEffect NICHT direkt als async markieren?',
    answers: [
      'Weil async-Funktionen zu langsam sind',
      'Weil useEffect eine Cleanup-Funktion erwartet, kein Promise',
      'Weil async in React verboten ist',
      'Weil der Browser das nicht unterstuetzt',
    ],
    correct: 1,
  },

  // Magmar
  126: {
    type: 'quiz',
    question: 'Wie implementiert man einen Loading-State beim Datenladen korrekt?',
    answers: [
      'Man setzt loading auf true vor dem fetch und auf false danach',
      'Man nutzt setTimeout um den Loading-State zu simulieren',
      'Man zeigt immer einen Spinner an',
      'Loading-States werden automatisch von React verwaltet',
    ],
    correct: 0,
  },

  // Glutexo
  5: {
    type: 'quiz',
    question: 'Was passiert, wenn man das Dependency-Array bei useEffect komplett weglässt?',
    answers: [
      'Der Effekt laeuft nur einmal',
      'Der Effekt laeuft bei jedem Render',
      'Es gibt einen Fehler',
      'Der Effekt laeuft nie',
    ],
    correct: 1,
  },

  // Flamara
  136: {
    type: 'quiz',
    question: 'Welcher HTTP-Statuscode bedeutet, dass eine Ressource nicht gefunden wurde?',
    answers: ['200', '301', '404', '500'],
    correct: 2,
  },

  // Dodu
  84: {
    type: 'quiz',
    question: 'Was macht useRef in React?',
    answers: [
      'Es erstellt einen neuen State',
      'Es erstellt eine mutable Referenz, die beim Re-Render erhalten bleibt',
      'Es referenziert ein anderes Component',
      'Es ersetzt useEffect',
    ],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Glurak
  6: {
    type: 'quiz',
    question: 'Was ist das Problem mit diesem Code: useEffect(() => { setCount(count + 1); }, [count])?',
    answers: [
      'Es gibt keinen Fehler',
      'count ist nicht definiert',
      'Es entsteht eine Endlosschleife, weil der Effekt count aendert und count im Dependency-Array steht',
      'useEffect kann setCount nicht aufrufen',
    ],
    correct: 2,
  },

  // Vulnona
  38: {
    type: 'quiz',
    question: 'Wie verhindert man ein Memory Leak bei einem fetch-Request in useEffect, wenn die Komponente unmountet?',
    answers: [
      'Man nutzt try/catch',
      'Man verwendet einen AbortController und ruft abort() in der Cleanup-Funktion auf',
      'Man setzt den State auf null',
      'Das ist in React kein Problem',
    ],
    correct: 1,
  },

  // Knogga
  105: {
    type: 'quiz',
    question: 'Was ist der Unterschied zwischen useRef und useState?',
    answers: [
      'useRef ist schneller',
      'useState kann nur Zahlen speichern',
      'Eine Aenderung von useRef.current loest KEINEN Re-Render aus, useState schon',
      'Es gibt keinen Unterschied',
    ],
    correct: 2,
  },

  // Rasaff
  57: {
    type: 'quiz',
    question: 'Was ist ein Custom Hook in React?',
    answers: [
      'Ein Hook, der nur in Klassenkomponenten funktioniert',
      'Eine Funktion, die mit "use" beginnt und andere Hooks verwenden darf',
      'Ein von React bereitgestellter spezieller Hook',
      'Ein Hook, der das DOM direkt manipuliert',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Lavados
  146: {
    type: 'code',
    description:
      'Erstelle eine Funktion `useFetch`, die eine URL als Parameter nimmt und ein Objekt { data, loading, error } zurueckgibt. Setze die Anfangswerte: data = null, loading = true, error = null.',
    starterCode: '// Erstelle den Custom Hook useFetch\nfunction useFetch(url) {\n  \n}',
    tests: [
      { name: 'useFetch gibt ein Objekt zurueck', test: 'typeof useFetch("test") === "object"', failMessage: 'useFetch sollte ein Objekt zurueckgeben' },
      { name: 'Anfangswert loading ist true', test: 'useFetch("test").loading === true', failMessage: 'loading sollte anfangs true sein' },
      { name: 'Anfangswert data ist null', test: 'useFetch("test").data === null', failMessage: 'data sollte anfangs null sein' },
    ],
  },

  // Dragonir
  148: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createEffectTracker`, die ein Objekt mit den Eigenschaften runCount (anfangs 0), cleanupCount (anfangs 0), run() und cleanup() zurueckgibt. run() erhoeht runCount um 1, cleanup() erhoeht cleanupCount um 1.',
    starterCode: '// Simuliere einen Effect-Tracker\nfunction createEffectTracker() {\n  \n}',
    tests: [
      { name: 'Anfangswerte sind 0', test: 'const t = createEffectTracker(); t.runCount === 0 && t.cleanupCount === 0', failMessage: 'runCount und cleanupCount sollten anfangs 0 sein' },
      { name: 'run() erhoeht runCount', test: 'const t = createEffectTracker(); t.run(); t.run(); t.runCount === 2', failMessage: 'Nach 2x run() sollte runCount 2 sein' },
      { name: 'cleanup() erhoeht cleanupCount', test: 'const t = createEffectTracker(); t.cleanup(); t.cleanupCount === 1', failMessage: 'Nach 1x cleanup() sollte cleanupCount 1 sein' },
    ],
  },

  // Dragoran
  149: {
    type: 'code',
    description:
      'Erstelle eine Funktion `buildApiUrl`, die einen basePath und ein params-Objekt nimmt und eine URL mit Query-String zurueckgibt. Beispiel: buildApiUrl("/pokemon", {limit: 10, offset: 0}) ergibt "/pokemon?limit=10&offset=0".',
    starterCode: '// Baue eine API-URL mit Query-Parametern\nfunction buildApiUrl(basePath, params) {\n  \n}',
    tests: [
      { name: 'Einfacher Parameter', test: 'buildApiUrl("/api", {id: 5}) === "/api?id=5"', failMessage: 'Sollte "/api?id=5" ergeben' },
      { name: 'Mehrere Parameter', test: 'buildApiUrl("/pokemon", {limit: 10, offset: 0}) === "/pokemon?limit=10&offset=0"', failMessage: 'Sollte "/pokemon?limit=10&offset=0" ergeben' },
    ],
  },

  // Amoroso
  139: {
    type: 'code',
    description:
      'Erstelle eine Funktion `handleApiResponse`, die einen Statuscode (Number) nimmt. Gib bei 200 "Erfolg", bei 404 "Nicht gefunden", bei 500 "Serverfehler" und sonst "Unbekannter Status" zurueck.',
    starterCode: '// Behandle API-Antworten\nfunction handleApiResponse(status) {\n  \n}',
    tests: [
      { name: '200 gibt Erfolg', test: 'handleApiResponse(200) === "Erfolg"', failMessage: '200 sollte "Erfolg" zurueckgeben' },
      { name: '404 gibt Nicht gefunden', test: 'handleApiResponse(404) === "Nicht gefunden"', failMessage: '404 sollte "Nicht gefunden" zurueckgeben' },
      { name: '999 gibt Unbekannter Status', test: 'handleApiResponse(999) === "Unbekannter Status"', failMessage: 'Unbekannte Codes sollten "Unbekannter Status" zurueckgeben' },
    ],
  },

  // Kabutops
  141: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createLoadingState`, die einen initialState nimmt und ein Objekt mit { state, isLoading, error, startLoading, setData, setError } zurueckgibt. startLoading() setzt isLoading=true, setData(d) setzt state=d und isLoading=false, setError(e) setzt error=e und isLoading=false.',
    starterCode: '// Erstelle ein Loading-State-Management\nfunction createLoadingState(initialState) {\n  \n}',
    tests: [
      { name: 'Anfangszustand korrekt', test: 'const ls = createLoadingState(null); ls.state === null && ls.isLoading === false && ls.error === null', failMessage: 'Anfangswerte sollten state=initialState, isLoading=false, error=null sein' },
      { name: 'startLoading setzt isLoading', test: 'const ls = createLoadingState(null); ls.startLoading(); ls.isLoading === true', failMessage: 'Nach startLoading() sollte isLoading true sein' },
      { name: 'setData aktualisiert state', test: 'const ls = createLoadingState(null); ls.startLoading(); ls.setData("Daten"); ls.state === "Daten" && ls.isLoading === false', failMessage: 'setData sollte state setzen und isLoading auf false' },
    ],
  },
};
