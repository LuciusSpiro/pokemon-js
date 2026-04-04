// Region 4: Async & Promises
// Gym Leader: Erika (Pflanzen-Typ)

export const REGION_4_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Myrapla
  43: {
    type: 'quiz',
    question: 'Was macht setTimeout() in JavaScript?',
    answers: [
      'Stoppt die Ausfuehrung fuer immer',
      'Fuehrt eine Funktion nach einer bestimmten Wartezeit aus',
      'Erstellt eine Endlosschleife',
      'Setzt eine Variable auf null nach einer Wartezeit',
    ],
    correct: 1,
  },

  // Knofensa
  69: {
    type: 'quiz',
    question: 'Was ist ein Callback in JavaScript?',
    answers: [
      'Eine Funktion, die als Argument an eine andere Funktion uebergeben wird',
      'Ein Rueckgabewert einer Funktion',
      'Eine spezielle Variable',
      'Ein HTML-Element',
    ],
    correct: 0,
  },

  // Paras
  46: {
    type: 'quiz',
    question: 'Welches Schluesselwort wird benutzt, um ein neues Promise zu erstellen?',
    answers: ['await', 'async', 'new Promise()', 'promise()'],
    correct: 2,
  },

  // Bluzuk
  48: {
    type: 'quiz',
    question: 'Was bedeutet "asynchron" in JavaScript?',
    answers: [
      'Code wird Zeile fuer Zeile ausgefuehrt',
      'Code kann weiterlaufen, ohne auf das Ergebnis einer Operation zu warten',
      'Code wird rueckwaerts ausgefuehrt',
      'Code wird nur einmal ausgefuehrt',
    ],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Duflor
  44: {
    type: 'quiz',
    question: 'Was gibt ein Promise zurueck, wenn die Operation erfolgreich war?',
    answers: [
      'rejected',
      'pending',
      'resolved (fulfilled)',
      'error',
    ],
    correct: 2,
  },

  // Ultrigaria
  70: {
    type: 'quiz',
    question: 'Welche Methode wird benutzt, um auf das Ergebnis eines Promise zu reagieren?',
    answers: ['.then()', '.get()', '.result()', '.wait()'],
    correct: 0,
  },

  // Parasek
  47: {
    type: 'quiz',
    question: 'Was passiert, wenn ein Promise fehlschlaegt und kein .catch() vorhanden ist?',
    answers: [
      'Nichts, der Fehler wird ignoriert',
      'Es gibt eine Unhandled Promise Rejection Warnung',
      'Das Programm startet neu',
      'Der Fehler wird automatisch behoben',
    ],
    correct: 1,
  },

  // Tangela
  114: {
    type: 'quiz',
    question: 'Was bewirkt das Schluesselwort async vor einer Funktion?',
    answers: [
      'Die Funktion wird schneller ausgefuehrt',
      'Die Funktion gibt automatisch ein Promise zurueck',
      'Die Funktion wird sofort ausgefuehrt',
      'Die Funktion wird zu einer Callback-Funktion',
    ],
    correct: 1,
  },

  // Owei
  102: {
    type: 'quiz',
    question: 'Was macht await in einer async-Funktion?',
    answers: [
      'Bricht die Funktion ab',
      'Wartet auf das Ergebnis eines Promise, bevor es weitergeht',
      'Erstellt ein neues Promise',
      'Macht die Funktion synchron fuer immer',
    ],
    correct: 1,
  },

  // Bisasam
  1: {
    type: 'quiz',
    question: 'Was gibt fetch() in JavaScript zurueck?',
    answers: [
      'Einen String mit der Antwort',
      'Ein JSON-Objekt',
      'Ein Promise',
      'Einen Error',
    ],
    correct: 2,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Giflor
  45: {
    type: 'quiz',
    question: 'In welcher Reihenfolge erscheint die Ausgabe?\nconsole.log("A")\nsetTimeout(() => console.log("B"), 0)\nconsole.log("C")',
    answers: ['A, B, C', 'A, C, B', 'B, A, C', 'C, A, B'],
    correct: 1,
  },

  // Sarzenia
  71: {
    type: 'quiz',
    question: 'Was macht Promise.all([p1, p2, p3])?',
    answers: [
      'Fuehrt nur das schnellste Promise aus',
      'Wartet bis alle Promises aufgeloest sind und gibt ein Array der Ergebnisse zurueck',
      'Fuehrt die Promises nacheinander aus',
      'Gibt das erste fehlgeschlagene Promise zurueck',
    ],
    correct: 1,
  },

  // Omot
  49: {
    type: 'quiz',
    question: 'Was passiert bei Promise.all(), wenn eines der Promises fehlschlaegt?',
    answers: [
      'Die anderen Promises laufen weiter und die Ergebnisse werden gesammelt',
      'Nur das fehlgeschlagene Promise wird ignoriert',
      'Das gesamte Promise.all() wird rejected',
      'Es wird automatisch erneut versucht',
    ],
    correct: 2,
  },

  // Kokowei
  103: {
    type: 'quiz',
    question: 'Was ist der Vorteil von async/await gegenueber .then()-Ketten?',
    answers: [
      'async/await ist schneller',
      'async/await macht den Code lesbarer und aehnlicher zu synchronem Code',
      'async/await braucht keine Promises',
      '.then()-Ketten funktionieren nicht in modernem JavaScript',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Bisaflor
  3: {
    type: 'code',
    description:
      'Erstelle eine async-Funktion `ladePokemon`, die ein Promise zurueckgibt, das nach 100ms den String "Bisaflor" resolved. Rufe die Funktion auf und speichere das Ergebnis mit await in `ergebnis`.',
    starterCode: '// Erstelle die async-Funktion und rufe sie auf\n',
    tests: [
      { name: 'ladePokemon ist eine Funktion', test: 'typeof ladePokemon === "function"', failMessage: 'ladePokemon sollte eine Funktion sein' },
      { name: 'ergebnis ist "Bisaflor"', test: 'ergebnis === "Bisaflor"', failMessage: 'ergebnis sollte "Bisaflor" sein' },
    ],
  },

  // Sichlor
  123: {
    type: 'code',
    description:
      'Erstelle ein Promise `schnitt`, das sofort mit dem Wert 120 resolved wird (benutze Promise.resolve()). Haenge mit .then() eine Funktion an, die den Wert verdoppelt und speichere das Ergebnis-Promise in `doppelSchnitt`.',
    starterCode: '// Erstelle das Promise und verdopple den Wert\n',
    tests: [
      { name: 'schnitt ist ein Promise', test: 'schnitt instanceof Promise', failMessage: 'schnitt sollte ein Promise sein' },
      { name: 'doppelSchnitt resolved zu 240', test: 'await doppelSchnitt === 240', failMessage: 'doppelSchnitt sollte zu 240 aufloesen (120 * 2)' },
    ],
  },

  // Pinsir
  127: {
    type: 'code',
    description:
      'Erstelle eine async-Funktion `sichererAbruf`, die in einem try/catch-Block await Promise.reject("Fehler!") ausfuehrt. Im catch-Block soll der Fehler in der Variablen `fehlerMeldung` gespeichert werden.',
    starterCode: 'let fehlerMeldung = null\n// Erstelle die Funktion mit try/catch\n',
    tests: [
      { name: 'sichererAbruf ist eine Funktion', test: 'typeof sichererAbruf === "function"', failMessage: 'sichererAbruf sollte eine Funktion sein' },
      { name: 'fehlerMeldung ist "Fehler!"', test: 'fehlerMeldung === "Fehler!"', failMessage: 'fehlerMeldung sollte "Fehler!" sein (aus dem catch-Block)' },
    ],
  },

  // Kangama
  115: {
    type: 'code',
    description:
      'Erstelle drei Promises mit Promise.resolve(): `p1` gibt 10 zurueck, `p2` gibt 20 zurueck, `p3` gibt 30 zurueck. Benutze Promise.all() und await, um alle Ergebnisse in `alleWerte` zu speichern.',
    starterCode: '// Erstelle die Promises und kombiniere sie\n',
    tests: [
      { name: 'alleWerte ist ein Array', test: 'Array.isArray(alleWerte)', failMessage: 'alleWerte sollte ein Array sein' },
      { name: 'alleWerte enthaelt [10, 20, 30]', test: 'alleWerte[0] === 10 && alleWerte[1] === 20 && alleWerte[2] === 30', failMessage: 'alleWerte sollte [10, 20, 30] enthalten' },
      { name: 'alleWerte hat 3 Elemente', test: 'alleWerte.length === 3', failMessage: 'alleWerte sollte genau 3 Elemente haben' },
    ],
  },

  // Tauros
  128: {
    type: 'code',
    description:
      'Erstelle eine Funktion `verzoegert(ms, wert)`, die ein neues Promise zurueckgibt. Das Promise soll nach `ms` Millisekunden mit `wert` aufgeloest werden (benutze setTimeout im Promise).',
    starterCode: '// Erstelle die verzoegert-Funktion\n',
    tests: [
      { name: 'verzoegert ist eine Funktion', test: 'typeof verzoegert === "function"', failMessage: 'verzoegert sollte eine Funktion sein' },
      { name: 'verzoegert gibt ein Promise zurueck', test: 'verzoegert(10, "test") instanceof Promise', failMessage: 'verzoegert sollte ein Promise zurueckgeben' },
      { name: 'Promise resolved mit dem richtigen Wert', test: 'await verzoegert(10, "Tauros") === "Tauros"', failMessage: 'Das Promise sollte mit dem uebergebenen Wert aufgeloest werden' },
    ],
  },
};
