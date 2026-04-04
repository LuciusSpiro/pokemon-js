// Region 2: Funktionen & Scope
// Gym Leader: Misty (Wasser-Typ)

export const REGION_2_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Tentacool
  72: {
    type: 'quiz',
    question: 'Wie deklariert man eine Funktion namens "angriff" in JavaScript?',
    answers: ['function angriff() {}', 'def angriff() {}', 'func angriff() {}', 'create angriff() {}'],
    correct: 0,
  },

  // Goldini
  118: {
    type: 'quiz',
    question: 'Was macht das Schluesselwort return in einer Funktion?',
    answers: [
      'Es startet die Funktion neu',
      'Es gibt einen Wert zurueck und beendet die Funktion',
      'Es loescht die Funktion',
      'Es druckt den Wert in die Konsole',
    ],
    correct: 1,
  },

  // Quapsel
  60: {
    type: 'quiz',
    question: 'Wie sieht eine Arrow-Funktion aus, die eine Zahl verdoppelt?',
    answers: ['const doppelt = (x) => x * 2', 'const doppelt = function => x * 2', 'const doppelt = (x) -> x * 2', 'const doppelt = x ==> x * 2'],
    correct: 0,
  },

  // Karpador
  129: {
    type: 'quiz',
    question: 'Was ist ein Parameter einer Funktion?',
    answers: [
      'Der Rueckgabewert',
      'Ein Platzhalter fuer Werte, die der Funktion uebergeben werden',
      'Der Name der Funktion',
      'Eine globale Variable',
    ],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Enton
  54: {
    type: 'quiz',
    question: 'Was ist ein Default-Parameter in JavaScript?',
    answers: [
      'Ein Parameter, der immer 0 ist',
      'Ein Parameter, der einen Standardwert hat, falls kein Argument uebergeben wird',
      'Ein Parameter, der nicht veraendert werden kann',
      'Ein Parameter, der automatisch geloescht wird',
    ],
    correct: 1,
  },

  // Sterndu
  120: {
    type: 'quiz',
    question: 'Was passiert, wenn man eine Funktion ohne return aufruft?',
    answers: ['Ein Fehler', 'Sie gibt null zurueck', 'Sie gibt undefined zurueck', 'Sie gibt 0 zurueck'],
    correct: 2,
  },

  // Seeper
  116: {
    type: 'quiz',
    question: 'Was ist der Scope einer mit let deklarierten Variable innerhalb eines if-Blocks?',
    answers: [
      'Globaler Scope',
      'Funktions-Scope',
      'Block-Scope (nur innerhalb der geschweiften Klammern)',
      'Datei-Scope',
    ],
    correct: 2,
  },

  // Krabby
  98: {
    type: 'quiz',
    question: 'Was ist ein Callback in JavaScript?',
    answers: [
      'Ein Fehlertyp',
      'Eine Funktion, die einer anderen Funktion als Argument uebergeben wird',
      'Ein Rueckgabewert',
      'Eine Schleife, die zurueckspringt',
    ],
    correct: 1,
  },

  // Jurob
  86: {
    type: 'quiz',
    question: 'Welche Variable ist ausserhalb der Funktion sichtbar?\n\nfunction test() {\n  var a = 1;\n  let b = 2;\n}\nvar c = 3;',
    answers: ['a und b', 'Nur c', 'a und c', 'Alle drei'],
    correct: 1,
  },

  // Muschas
  90: {
    type: 'quiz',
    question: 'Was ist der Unterschied zwischen einer Funktionsdeklaration und einem Funktionsausdruck?',
    answers: [
      'Kein Unterschied',
      'Deklarationen werden gehoben (Hoisting), Ausdruecke nicht',
      'Ausdruecke sind schneller',
      'Deklarationen koennen keine Parameter haben',
    ],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Starmie
  121: {
    type: 'quiz',
    question: 'Was gibt folgender Code aus?\n\nfor (var i = 0; i < 3; i++) {}\nconsole.log(i);',
    answers: ['undefined', '0', '3', 'ReferenceError'],
    correct: 2,
  },

  // Lapras
  131: {
    type: 'quiz',
    question: 'Was ist eine Closure in JavaScript?',
    answers: [
      'Eine Funktion, die Zugriff auf Variablen ihres aeusseren Scopes behaelt, auch nachdem die aeussere Funktion beendet ist',
      'Eine Funktion, die sich selbst aufruft',
      'Eine Funktion ohne Parameter',
      'Ein Block, der Variablen einschliesst und loescht',
    ],
    correct: 0,
  },

  // Flegmon
  79: {
    type: 'quiz',
    question: 'Was gibt dieser Code zurueck?\n\nfunction aussen() {\n  let x = 10;\n  return function() { return x; };\n}\nconst fn = aussen();\nfn();',
    answers: ['undefined', 'null', '10', 'ReferenceError'],
    correct: 2,
  },

  // Dratini
  147: {
    type: 'quiz',
    question: 'Was passiert hier?\n\nconsole.log(meineFunc());\nfunction meineFunc() { return "Hallo"; }\n\nconsole.log(meineArrow());\nconst meineArrow = () => "Welt";',
    answers: [
      '"Hallo" und dann "Welt"',
      '"Hallo" und dann ein ReferenceError',
      'Beide geben undefined aus',
      'Beide erzeugen einen Fehler',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Schiggy
  7: {
    type: 'code',
    description:
      'Erstelle eine Funktion `wasserAttacke` die einen Parameter `staerke` erwartet und den Wert staerke * 1.5 zurueckgibt.',
    starterCode: '// Erstelle die Funktion wasserAttacke\n',
    tests: [
      { name: 'wasserAttacke ist eine Funktion', test: 'typeof wasserAttacke === "function"', failMessage: 'wasserAttacke sollte eine Funktion sein' },
      { name: 'wasserAttacke(40) gibt 60 zurueck', test: 'wasserAttacke(40) === 60', failMessage: 'wasserAttacke(40) sollte 60 zurueckgeben' },
      { name: 'wasserAttacke(100) gibt 150 zurueck', test: 'wasserAttacke(100) === 150', failMessage: 'wasserAttacke(100) sollte 150 zurueckgeben' },
    ],
  },

  // Garados
  130: {
    type: 'code',
    description:
      'Erstelle eine Arrow-Funktion `hyperStrahl` die zwei Parameter `angriff` und `level` erwartet. Sie soll angriff * level / 50 zurueckgeben. Setze fuer level einen Default-Wert von 50.',
    starterCode: '// Erstelle die Arrow-Funktion hyperStrahl\n',
    tests: [
      { name: 'hyperStrahl ist eine Funktion', test: 'typeof hyperStrahl === "function"', failMessage: 'hyperStrahl sollte eine Funktion sein' },
      { name: 'hyperStrahl(100, 50) gibt 100 zurueck', test: 'hyperStrahl(100, 50) === 100', failMessage: 'hyperStrahl(100, 50) sollte 100 zurueckgeben' },
      { name: 'hyperStrahl(100) nutzt Default-Level 50', test: 'hyperStrahl(100) === 100', failMessage: 'hyperStrahl(100) sollte mit Default-Level 50 den Wert 100 zurueckgeben' },
    ],
  },

  // Aquana
  134: {
    type: 'code',
    description:
      'Erstelle eine Funktion `kampfRunde` die einen Callback `attacke` und einen Wert `schaden` als Parameter erwartet. Sie soll den Callback mit dem Schaden aufrufen und das Ergebnis zurueckgeben.',
    starterCode: '// Erstelle die Funktion kampfRunde\n',
    tests: [
      { name: 'kampfRunde ist eine Funktion', test: 'typeof kampfRunde === "function"', failMessage: 'kampfRunde sollte eine Funktion sein' },
      { name: 'kampfRunde fuehrt den Callback aus', test: 'kampfRunde((s) => s * 2, 25) === 50', failMessage: 'kampfRunde sollte den Callback mit dem Schaden aufrufen und das Ergebnis zurueckgeben' },
      { name: 'kampfRunde mit anderem Callback', test: 'kampfRunde((s) => s + 10, 5) === 15', failMessage: 'kampfRunde sollte mit jedem Callback funktionieren' },
    ],
  },

  // Kabuto
  140: {
    type: 'code',
    description:
      'Erstelle eine Funktion `levelZaehler` die keinen Parameter erwartet. Sie soll eine Variable `level` mit 0 starten und eine innere Funktion zurueckgeben, die bei jedem Aufruf level um 1 erhoeht und den neuen Wert zurueckgibt (Closure).',
    starterCode: '// Erstelle die Closure-Funktion levelZaehler\n',
    tests: [
      { name: 'levelZaehler ist eine Funktion', test: 'typeof levelZaehler === "function"', failMessage: 'levelZaehler sollte eine Funktion sein' },
      { name: 'Erster Aufruf gibt 1 zurueck', test: '(function(){ const z = levelZaehler(); return z(); })()=== 1', failMessage: 'Der erste Aufruf der inneren Funktion sollte 1 zurueckgeben' },
      { name: 'Zweiter Aufruf gibt 2 zurueck', test: '(function(){ const z = levelZaehler(); z(); return z(); })() === 2', failMessage: 'Der zweite Aufruf sollte 2 zurueckgeben' },
    ],
  },

  // Arktos
  144: {
    type: 'code',
    description:
      'Erstelle eine Funktion `pokemonInfo` die drei Parameter erwartet: `name`, `typ` (Default: "Wasser") und `level` (Default: 1). Sie soll den String name + " - Typ: " + typ + " - Level: " + level zurueckgeben.',
    starterCode: '// Erstelle die Funktion pokemonInfo\n',
    tests: [
      { name: 'Alle Parameter angegeben', test: 'pokemonInfo("Arktos", "Eis", 50) === "Arktos - Typ: Eis - Level: 50"', failMessage: 'pokemonInfo("Arktos", "Eis", 50) sollte den korrekten String zurueckgeben' },
      { name: 'Default-Werte genutzt', test: 'pokemonInfo("Schiggy") === "Schiggy - Typ: Wasser - Level: 1"', failMessage: 'pokemonInfo("Schiggy") sollte die Default-Werte fuer typ und level nutzen' },
      { name: 'Nur ein Default genutzt', test: 'pokemonInfo("Lapras", "Wasser", 30) === "Lapras - Typ: Wasser - Level: 30"', failMessage: 'pokemonInfo sollte uebergebene Werte korrekt verwenden' },
    ],
  },
};
