// Region 1: Variablen & Typen
// Gym Leader: Rocko (Gestein-Typ)

export const REGION_1_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Taubsi
  16: {
    type: 'quiz',
    question: 'Was gibt typeof 42 zurueck?',
    answers: ['"number"', '"string"', '"integer"', '"float"'],
    correct: 0,
  },

  // Rattfratz
  19: {
    type: 'quiz',
    question: 'Welches Schluesselwort erstellt eine Variable, die nicht neu zugewiesen werden kann?',
    answers: ['let', 'var', 'const', 'fixed'],
    correct: 2,
  },

  // Raupy
  10: {
    type: 'quiz',
    question: 'Was ist das Ergebnis von "Hallo" + " Welt"?',
    answers: ['"Hallo Welt"', '"HalloWelt"', 'NaN', 'Ein Fehler'],
    correct: 0,
  },

  // Hornliu
  13: {
    type: 'quiz',
    question: 'Was ist der Typ von true in JavaScript?',
    answers: ['"string"', '"boolean"', '"number"', '"bit"'],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Habitak
  21: {
    type: 'quiz',
    question: 'Was gibt typeof null zurueck?',
    answers: ['"null"', '"undefined"', '"object"', '"boolean"'],
    correct: 2,
  },

  // Kleinstein
  74: {
    type: 'quiz',
    question: 'Was ist das Ergebnis von 10 % 3?',
    answers: ['3', '1', '3.33', '0'],
    correct: 1,
  },

  // Menki
  56: {
    type: 'quiz',
    question: 'Was passiert, wenn man eine const-Variable neu zuweisen will?',
    answers: ['Der Wert wird ueberschrieben', 'Die Variable wird undefined', 'Es gibt einen TypeError', 'Nichts passiert'],
    correct: 2,
  },

  // Sandan
  27: {
    type: 'quiz',
    question: 'Was ergibt "5" + 3 in JavaScript?',
    answers: ['8', '"53"', '"8"', 'NaN'],
    correct: 1,
  },

  // Digda
  50: {
    type: 'quiz',
    question: 'Was ist der Unterschied zwischen === und ==?',
    answers: [
      '=== vergleicht auch den Typ, == nur den Wert',
      'Kein Unterschied',
      '== ist schneller',
      '=== funktioniert nur mit Strings',
    ],
    correct: 0,
  },

  // Machollo
  66: {
    type: 'quiz',
    question: 'Welchen Wert hat eine Variable, die mit let deklariert, aber nicht initialisiert wurde?',
    answers: ['null', '0', 'undefined', '""'],
    correct: 2,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Onix
  95: {
    type: 'quiz',
    question: 'Was ergibt typeof NaN?',
    answers: ['"NaN"', '"undefined"', '"number"', '"object"'],
    correct: 2,
  },

  // Piepi
  35: {
    type: 'quiz',
    question: 'Was ergibt 0.1 + 0.2 === 0.3?',
    answers: ['true', 'false', 'undefined', 'TypeError'],
    correct: 1,
  },

  // Tragosso
  104: {
    type: 'quiz',
    question: 'Was ergibt typeof typeof 42?',
    answers: ['"number"', '"string"', '"typeof"', '"undefined"'],
    correct: 1,
  },

  // Rihorn
  111: {
    type: 'quiz',
    question: 'Welche Aussage ueber var ist korrekt?',
    answers: [
      'var hat Block-Scope wie let',
      'var wird an den Anfang der Funktion gehoben (Hoisting)',
      'var kann nicht neu zugewiesen werden',
      'var existiert in modernem JavaScript nicht mehr',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Bisasam
  1: {
    type: 'code',
    description:
      'Erstelle eine Variable `starterName` mit dem Wert "Bisasam" und eine Konstante `starterLevel` mit dem Wert 5.',
    starterCode: '// Erstelle die Variablen\n',
    tests: [
      { name: 'starterName ist "Bisasam"', test: 'starterName === "Bisasam"', failMessage: 'starterName sollte "Bisasam" sein' },
      { name: 'starterLevel ist 5', test: 'starterLevel === 5', failMessage: 'starterLevel sollte 5 sein' },
    ],
  },

  // Glumanda
  4: {
    type: 'code',
    description:
      'Erstelle eine Konstante `feuerSchaden` mit dem Wert 40, eine Konstante `bonus` mit dem Wert 10 und berechne die Summe in einer Variablen `gesamtSchaden`.',
    starterCode: '// Berechne den Gesamtschaden\n',
    tests: [
      { name: 'feuerSchaden ist 40', test: 'feuerSchaden === 40', failMessage: 'feuerSchaden sollte 40 sein' },
      { name: 'bonus ist 10', test: 'bonus === 10', failMessage: 'bonus sollte 10 sein' },
      { name: 'gesamtSchaden ist 50', test: 'gesamtSchaden === 50', failMessage: 'gesamtSchaden sollte die Summe von feuerSchaden und bonus sein' },
    ],
  },

  // Pikachu
  25: {
    type: 'code',
    description:
      'Erstelle eine Konstante `pokemonName` vom Typ String mit dem Wert "Pikachu" und eine Konstante `pokemonTyp` mit typeof pokemonName.',
    starterCode: '// Erstelle die Konstanten\n',
    tests: [
      { name: 'pokemonName ist "Pikachu"', test: 'pokemonName === "Pikachu"', failMessage: 'pokemonName sollte "Pikachu" sein' },
      { name: 'pokemonTyp ist "string"', test: 'pokemonTyp === "string"', failMessage: 'pokemonTyp sollte typeof pokemonName sein' },
    ],
  },

  // Aerodactyl
  142: {
    type: 'code',
    description:
      'Erstelle eine Konstante `fossielAlter` mit dem Wert 100000000. Erstelle eine Konstante `inMillionen` die das Alter durch 1000000 teilt. Erstelle einen String `info` mit dem Inhalt: "Aerodactyl ist " + inMillionen + " Millionen Jahre alt".',
    starterCode: '// Berechne das Alter und erstelle den Info-String\n',
    tests: [
      { name: 'fossielAlter ist korrekt', test: 'fossielAlter === 100000000', failMessage: 'fossielAlter sollte 100000000 sein' },
      { name: 'inMillionen ist 100', test: 'inMillionen === 100', failMessage: 'inMillionen sollte 100 sein' },
      { name: 'info ist korrekt', test: 'info === "Aerodactyl ist 100 Millionen Jahre alt"', failMessage: 'info sollte den korrekten Satz enthalten' },
    ],
  },

  // Amonitas
  138: {
    type: 'code',
    description:
      'Erstelle drei Konstanten: `hp` mit Wert 35, `angriff` mit Wert 40 und `verteidigung` mit Wert 100. Erstelle eine Variable `istTank` die true ist, wenn verteidigung groesser als angriff ist.',
    starterCode: '// Erstelle die Pokemon-Werte\n',
    tests: [
      { name: 'hp ist 35', test: 'hp === 35', failMessage: 'hp sollte 35 sein' },
      { name: 'verteidigung ist 100', test: 'verteidigung === 100', failMessage: 'verteidigung sollte 100 sein' },
      { name: 'istTank ist true', test: 'istTank === true', failMessage: 'istTank sollte true sein, da verteidigung > angriff' },
    ],
  },
};
