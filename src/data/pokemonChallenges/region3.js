// Region 3: Arrays & Objekte
// Gym Leader: Major Bob (Elektro-Typ)

export const REGION_3_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Voltobal
  100: {
    type: 'quiz',
    question: 'Wie erstellt man ein leeres Array in JavaScript?',
    answers: ['let arr = []', 'let arr = {}', 'let arr = ()', 'let arr = Array[]'],
    correct: 0,
  },

  // Magnetilo
  81: {
    type: 'quiz',
    question: 'Welche Methode fuegt ein Element am Ende eines Arrays hinzu?',
    answers: ['add()', 'push()', 'append()', 'insert()'],
    correct: 1,
  },

  // Pikachu
  25: {
    type: 'quiz',
    question: 'Was gibt [1, 2, 3].length zurueck?',
    answers: ['2', '3', '4', 'undefined'],
    correct: 1,
  },

  // Rattfratz
  19: {
    type: 'quiz',
    question: 'Wie greift man auf das erste Element eines Arrays zu?',
    answers: ['arr[1]', 'arr[0]', 'arr.first()', 'arr.get(0)'],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Lektrobal
  101: {
    type: 'quiz',
    question: 'Was macht die Methode pop() bei einem Array?',
    answers: [
      'Fuegt ein Element am Anfang hinzu',
      'Entfernt das erste Element und gibt es zurueck',
      'Entfernt das letzte Element und gibt es zurueck',
      'Leert das gesamte Array',
    ],
    correct: 2,
  },

  // Magneton
  82: {
    type: 'quiz',
    question: 'Was gibt ["Pikachu", "Glumanda", "Bisasam"].indexOf("Glumanda") zurueck?',
    answers: ['0', '1', '2', '-1'],
    correct: 1,
  },

  // Elektek
  125: {
    type: 'quiz',
    question: 'Was gibt [10, 20, 30].includes(20) zurueck?',
    answers: ['1', 'true', '"20"', 'false'],
    correct: 1,
  },

  // Digda
  50: {
    type: 'quiz',
    question: 'Wie erstellt man ein Objekt mit der Eigenschaft name: "Digda"?',
    answers: [
      'let pokemon = { name: "Digda" }',
      'let pokemon = [ name: "Digda" ]',
      'let pokemon = ( name: "Digda" )',
      'let pokemon = name: "Digda"',
    ],
    correct: 0,
  },

  // Digdri
  51: {
    type: 'quiz',
    question: 'Was macht die Methode shift() bei einem Array?',
    answers: [
      'Verschiebt alle Elemente nach rechts',
      'Entfernt das erste Element und gibt es zurueck',
      'Fuegt ein Element am Anfang hinzu',
      'Sortiert das Array',
    ],
    correct: 1,
  },

  // Mauzi
  52: {
    type: 'quiz',
    question: 'Wie liest man die Eigenschaft "level" eines Objekts pokemon mit Bracket-Notation?',
    answers: ['pokemon.level', 'pokemon["level"]', 'pokemon(level)', 'pokemon->level'],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Blitza
  135: {
    type: 'quiz',
    question: 'Was gibt Object.keys({ name: "Blitza", typ: "Elektro", level: 30 }) zurueck?',
    answers: [
      '["Blitza", "Elektro", 30]',
      '["name", "typ", "level"]',
      '[{ name: "Blitza" }, { typ: "Elektro" }, { level: 30 }]',
      '3',
    ],
    correct: 1,
  },

  // Raichu
  26: {
    type: 'quiz',
    question: 'Was ergibt const { name, level } = { name: "Raichu", level: 40, typ: "Elektro" }? Welchen Wert hat level?',
    answers: ['undefined', '"Elektro"', '40', '{ level: 40 }'],
    correct: 2,
  },

  // Porygon
  137: {
    type: 'quiz',
    question: 'Was gibt [1, 2, 3, 4, 5].slice(1, 3) zurueck?',
    answers: ['[1, 2, 3]', '[2, 3]', '[2, 3, 4]', '[1, 2]'],
    correct: 1,
  },

  // Snobilikat
  53: {
    type: 'quiz',
    question: 'Was bewirkt arr.splice(1, 2) auf das Array [10, 20, 30, 40]?',
    answers: [
      'Entfernt Element an Index 1 und 2, Array wird [10, 40]',
      'Fuegt 2 Elemente an Index 1 ein',
      'Gibt [10, 20] zurueck',
      'Entfernt die ersten 2 Elemente',
    ],
    correct: 0,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Zapdos
  145: {
    type: 'code',
    description:
      'Erstelle ein Array `team` mit den Strings "Pikachu", "Raichu" und "Zapdos". Fuege dann mit push() den String "Voltobal" hinzu.',
    starterCode: '// Erstelle das Team-Array und fuege ein Pokemon hinzu\n',
    tests: [
      { name: 'team ist ein Array mit 4 Elementen', test: 'Array.isArray(team) && team.length === 4', failMessage: 'team sollte ein Array mit 4 Elementen sein' },
      { name: 'team[0] ist "Pikachu"', test: 'team[0] === "Pikachu"', failMessage: 'Das erste Element sollte "Pikachu" sein' },
      { name: 'team[3] ist "Voltobal"', test: 'team[3] === "Voltobal"', failMessage: 'Das letzte Element sollte "Voltobal" sein (mit push hinzugefuegt)' },
    ],
  },

  // Evoli
  133: {
    type: 'code',
    description:
      'Erstelle ein Objekt `pokemon` mit den Eigenschaften name: "Evoli", level: 20, typ: "Normal". Greife dann per Dot-Notation auf den Namen zu und speichere ihn in `pokemonName`.',
    starterCode: '// Erstelle das Pokemon-Objekt\n',
    tests: [
      { name: 'pokemon.name ist "Evoli"', test: 'pokemon.name === "Evoli"', failMessage: 'pokemon.name sollte "Evoli" sein' },
      { name: 'pokemon.level ist 20', test: 'pokemon.level === 20', failMessage: 'pokemon.level sollte 20 sein' },
      { name: 'pokemonName ist "Evoli"', test: 'pokemonName === "Evoli"', failMessage: 'pokemonName sollte den Wert von pokemon.name enthalten' },
    ],
  },

  // Kicklee
  106: {
    type: 'code',
    description:
      'Gegeben ist das Array `zahlen` mit [10, 20, 30, 40, 50]. Benutze eine for-Schleife, um die Summe aller Elemente zu berechnen und speichere das Ergebnis in `summe`.',
    starterCode: 'const zahlen = [10, 20, 30, 40, 50]\nlet summe = 0\n// Benutze eine for-Schleife\n',
    tests: [
      { name: 'summe ist 150', test: 'summe === 150', failMessage: 'summe sollte 150 sein (10+20+30+40+50)' },
      { name: 'zahlen ist unveraendert', test: 'zahlen.length === 5 && zahlen[0] === 10', failMessage: 'Das urspruengliche Array sollte nicht veraendert werden' },
    ],
  },

  // Nockchan
  107: {
    type: 'code',
    description:
      'Erstelle ein Objekt `attacke` mit name: "Megahieb", staerke: 80 und typ: "Normal". Nutze Destructuring, um `name` und `staerke` als eigene Variablen zu extrahieren.',
    starterCode: '// Erstelle das Objekt und nutze Destructuring\n',
    tests: [
      { name: 'attacke.name ist "Megahieb"', test: 'attacke.name === "Megahieb"', failMessage: 'attacke.name sollte "Megahieb" sein' },
      { name: 'name ist "Megahieb"', test: 'name === "Megahieb"', failMessage: 'Die Variable name sollte per Destructuring "Megahieb" enthalten' },
      { name: 'staerke ist 80', test: 'staerke === 80', failMessage: 'Die Variable staerke sollte per Destructuring 80 enthalten' },
    ],
  },

  // Chaneira
  113: {
    type: 'code',
    description:
      'Erstelle ein Array `inventar` mit ["Trank", "Pokeball", "Beleber"]. Entferne das letzte Element mit pop() und speichere es in `entfernt`. Fuege dann "Superball" mit unshift() am Anfang hinzu.',
    starterCode: '// Verwalte das Inventar-Array\n',
    tests: [
      { name: 'entfernt ist "Beleber"', test: 'entfernt === "Beleber"', failMessage: 'entfernt sollte "Beleber" sein (letztes Element per pop)' },
      { name: 'inventar[0] ist "Superball"', test: 'inventar[0] === "Superball"', failMessage: 'Das erste Element sollte "Superball" sein (per unshift hinzugefuegt)' },
      { name: 'inventar hat 3 Elemente', test: 'inventar.length === 3', failMessage: 'inventar sollte 3 Elemente haben: ["Superball", "Trank", "Pokeball"]' },
    ],
  },
};
