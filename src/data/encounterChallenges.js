// ============================================================
// Mini Code-Challenges fuer legendaere Pokemon-Begegnungen
// ============================================================

export const CODE_CHALLENGES = [
  // ---- EASY (5): Variablen, Mathe, Strings ----
  {
    id: 'encounter-c1',
    title: 'Fange das Pokemon!',
    description: 'Erstelle eine Variable `caught` mit dem Wert `true`.',
    starterCode: '// Dein Code hier\n',
    tests: [
      { name: 'caught existiert', test: 'typeof caught !== "undefined"', failMessage: 'Die Variable caught wurde nicht erstellt' },
      { name: 'caught ist true', test: 'caught === true', failMessage: 'caught sollte true sein' },
    ],
  },
  {
    id: 'encounter-c2',
    title: 'Pokeball-Berechnung',
    description: 'Du hast 25 Pokeballs und verwendest 8. Erstelle eine Variable `remaining` mit der Anzahl der uebrigen Pokeballs.',
    starterCode: '// Berechne die uebrigen Pokeballs\n',
    tests: [
      { name: 'remaining existiert', test: 'typeof remaining !== "undefined"', failMessage: 'Die Variable remaining wurde nicht erstellt' },
      { name: 'remaining ist 17', test: 'remaining === 17', failMessage: 'remaining sollte 17 sein (25 - 8)' },
    ],
  },
  {
    id: 'encounter-c3',
    title: 'Pokemon-Name',
    description: 'Erstelle eine Variable `pokemon` mit dem Wert "Pikachu" und eine Variable `ruf` die den Text "Pikachu, ich wähle dich!" enthaelt.',
    starterCode: '// Erstelle die Variablen\n',
    tests: [
      { name: 'pokemon ist "Pikachu"', test: 'pokemon === "Pikachu"', failMessage: 'pokemon sollte "Pikachu" sein' },
      { name: 'ruf enthaelt den Pokemon-Namen', test: 'ruf === "Pikachu, ich wähle dich!"', failMessage: 'ruf sollte "Pikachu, ich wähle dich!" sein' },
    ],
  },
  {
    id: 'encounter-c4',
    title: 'Typ-Effektivitaet',
    description: 'Feuer ist gegen Pflanze doppelt effektiv. Erstelle eine Variable `baseDamage` mit dem Wert 40 und eine Variable `totalDamage` mit dem doppelten Wert.',
    starterCode: '// Berechne den Schaden\n',
    tests: [
      { name: 'baseDamage ist 40', test: 'baseDamage === 40', failMessage: 'baseDamage sollte 40 sein' },
      { name: 'totalDamage ist 80', test: 'totalDamage === 80', failMessage: 'totalDamage sollte 80 sein (40 * 2)' },
    ],
  },
  {
    id: 'encounter-c5',
    title: 'Level-Check',
    description: 'Erstelle eine Variable `level` mit dem Wert 50 und eine Variable `isHighLevel` die `true` ist, wenn level groesser als 30 ist.',
    starterCode: '// Pruefe das Level\n',
    tests: [
      { name: 'level ist 50', test: 'level === 50', failMessage: 'level sollte 50 sein' },
      { name: 'isHighLevel ist true', test: 'isHighLevel === true', failMessage: 'isHighLevel sollte true sein, da 50 > 30' },
    ],
  },

  // ---- MEDIUM (5): Arrays, Objekte, einfache Funktionen ----
  {
    id: 'encounter-c6',
    title: 'Pokemon-Team',
    description: 'Erstelle ein Array `team` mit drei Pokemon-Namen: "Glumanda", "Schiggy", "Bisasam". Fuege dann "Pikachu" am Ende hinzu.',
    starterCode: '// Erstelle dein Team\n',
    tests: [
      { name: 'team hat 4 Elemente', test: 'Array.isArray(team) && team.length === 4', failMessage: 'team sollte ein Array mit 4 Elementen sein' },
      { name: 'Pikachu ist das letzte Element', test: 'team[3] === "Pikachu"', failMessage: 'Pikachu sollte das letzte Element sein' },
      { name: 'Glumanda ist dabei', test: 'team[0] === "Glumanda"', failMessage: 'Glumanda sollte das erste Element sein' },
    ],
  },
  {
    id: 'encounter-c7',
    title: 'Pokemon-Steckbrief',
    description: 'Erstelle ein Objekt `pokemon` mit den Eigenschaften: name ("Relaxo"), typ ("Normal"), level (42).',
    starterCode: '// Erstelle den Steckbrief\n',
    tests: [
      { name: 'name ist Relaxo', test: 'pokemon.name === "Relaxo"', failMessage: 'pokemon.name sollte "Relaxo" sein' },
      { name: 'typ ist Normal', test: 'pokemon.typ === "Normal"', failMessage: 'pokemon.typ sollte "Normal" sein' },
      { name: 'level ist 42', test: 'pokemon.level === 42', failMessage: 'pokemon.level sollte 42 sein' },
    ],
  },
  {
    id: 'encounter-c8',
    title: 'Schadensfunktion',
    description: 'Erstelle eine Funktion `calcDamage(attack, defense)` die `attack - defense` zurueckgibt. Wenn das Ergebnis negativ ist, soll 0 zurueckgegeben werden.',
    starterCode: '// Erstelle die Schadensfunktion\n',
    tests: [
      { name: 'calcDamage(50, 30) ergibt 20', test: 'calcDamage(50, 30) === 20', failMessage: 'calcDamage(50, 30) sollte 20 zurueckgeben' },
      { name: 'calcDamage(10, 40) ergibt 0', test: 'calcDamage(10, 40) === 0', failMessage: 'Negativer Schaden sollte 0 sein' },
    ],
  },
  {
    id: 'encounter-c9',
    title: 'Item-Inventar',
    description: 'Erstelle ein Array `items` mit ["Trank", "Supertrank", "Beleber"]. Entferne das letzte Element mit pop() und speichere es in `lastItem`.',
    starterCode: '// Verwalte dein Inventar\n',
    tests: [
      { name: 'items hat 2 Elemente', test: 'Array.isArray(items) && items.length === 2', failMessage: 'items sollte nach pop() 2 Elemente haben' },
      { name: 'lastItem ist Beleber', test: 'lastItem === "Beleber"', failMessage: 'lastItem sollte "Beleber" sein' },
    ],
  },
  {
    id: 'encounter-c10',
    title: 'Pokemon-Suche',
    description: 'Erstelle eine Funktion `findPokemon(team, name)` die `true` zurueckgibt wenn `name` im Array `team` enthalten ist, sonst `false`.',
    starterCode: '// Erstelle die Suchfunktion\n',
    tests: [
      { name: 'Findet vorhandenes Pokemon', test: 'findPokemon(["Pikachu", "Glumanda"], "Pikachu") === true', failMessage: 'Sollte true zurueckgeben wenn Pokemon im Team ist' },
      { name: 'Erkennt fehlendes Pokemon', test: 'findPokemon(["Pikachu", "Glumanda"], "Mewtu") === false', failMessage: 'Sollte false zurueckgeben wenn Pokemon nicht im Team ist' },
    ],
  },

  // ---- HARD (5): map, filter, Callbacks, Template Literals ----
  {
    id: 'encounter-c11',
    title: 'Level-Up fuer alle!',
    description: 'Gegeben ist ein Array `levels = [5, 12, 8, 23]`. Erstelle ein neues Array `newLevels` in dem jedes Level um 1 erhoeht ist. Benutze `.map()`.',
    starterCode: 'const levels = [5, 12, 8, 23];\n// Erstelle newLevels mit map()\n',
    tests: [
      { name: 'newLevels ist korrekt', test: 'JSON.stringify(newLevels) === "[6,13,9,24]"', failMessage: 'newLevels sollte [6, 13, 9, 24] sein' },
      { name: 'levels ist unveraendert', test: 'JSON.stringify(levels) === "[5,12,8,23]"', failMessage: 'Das Original-Array sollte unveraendert bleiben' },
    ],
  },
  {
    id: 'encounter-c12',
    title: 'Starke Pokemon filtern',
    description: 'Gegeben ist ein Array `levels = [5, 42, 12, 67, 8, 55]`. Erstelle ein Array `strongLevels` das nur Level ueber 30 enthaelt. Benutze `.filter()`.',
    starterCode: 'const levels = [5, 42, 12, 67, 8, 55];\n// Filtere die starken Level\n',
    tests: [
      { name: 'strongLevels ist korrekt', test: 'JSON.stringify(strongLevels) === "[42,67,55]"', failMessage: 'strongLevels sollte [42, 67, 55] sein' },
      { name: 'strongLevels hat 3 Elemente', test: 'strongLevels.length === 3', failMessage: 'Es sollten 3 starke Pokemon gefiltert werden' },
    ],
  },
  {
    id: 'encounter-c13',
    title: 'Kampfansage',
    description: 'Erstelle eine Funktion `battleCry(name, level)` die per Template Literal zurueckgibt: "Ein wildes [name] (Level [level]) erscheint!".',
    starterCode: '// Erstelle die Funktion mit Template Literal\n',
    tests: [
      { name: 'Pikachu Ansage', test: 'battleCry("Pikachu", 25) === "Ein wildes Pikachu (Level 25) erscheint!"', failMessage: 'Ausgabe fuer Pikachu Level 25 ist falsch' },
      { name: 'Mewtu Ansage', test: 'battleCry("Mewtu", 70) === "Ein wildes Mewtu (Level 70) erscheint!"', failMessage: 'Ausgabe fuer Mewtu Level 70 ist falsch' },
    ],
  },
  {
    id: 'encounter-c14',
    title: 'Attacken-Callback',
    description: 'Erstelle eine Funktion `executeAttack(attackFn, power)` die `attackFn` mit `power` aufruft und das Ergebnis zurueckgibt.',
    starterCode: '// Erstelle die Funktion mit Callback\n',
    tests: [
      { name: 'Fuehrt Callback aus', test: 'executeAttack(p => p * 2, 30) === 60', failMessage: 'executeAttack sollte den Callback mit power aufrufen' },
      { name: 'Anderer Callback', test: 'executeAttack(p => p + 10, 25) === 35', failMessage: 'Sollte mit verschiedenen Callbacks funktionieren' },
    ],
  },
  {
    id: 'encounter-c15',
    title: 'Pokemon-Namensliste',
    description: 'Gegeben ist ein Array von Objekten. Erstelle ein Array `names` das nur die Namen enthaelt. Benutze `.map()`.',
    starterCode: 'const pokemons = [\n  { name: "Pikachu", level: 25 },\n  { name: "Glumanda", level: 18 },\n  { name: "Schiggy", level: 22 },\n];\n// Extrahiere die Namen\n',
    tests: [
      { name: 'names ist korrekt', test: 'JSON.stringify(names) === \'["Pikachu","Glumanda","Schiggy"]\'', failMessage: 'names sollte ["Pikachu", "Glumanda", "Schiggy"] sein' },
      { name: 'names hat 3 Elemente', test: 'names.length === 3', failMessage: 'names sollte 3 Elemente haben' },
    ],
  },

  // ---- EXPERT (5): Async, React-Patterns, Higher-Order Functions ----
  {
    id: 'encounter-c16',
    title: 'Pokemon fangen (Async)',
    description: 'Erstelle eine async Funktion `catchPokemon(name)` die ein Promise zurueckgibt, das nach Aufloesung den String "[name] wurde gefangen!" ergibt.',
    starterCode: '// Erstelle die async Funktion\n',
    tests: [
      { name: 'Gibt ein Promise zurueck', test: 'catchPokemon("Pikachu") instanceof Promise', failMessage: 'catchPokemon sollte ein Promise zurueckgeben' },
      { name: 'Promise loest korrekt auf', test: '(async () => (await catchPokemon("Pikachu")) === "Pikachu wurde gefangen!")()', failMessage: 'Das Promise sollte "[name] wurde gefangen!" ergeben' },
    ],
  },
  {
    id: 'encounter-c17',
    title: 'Typ-Multiplikator',
    description: 'Erstelle eine Higher-Order Funktion `createMultiplier(factor)` die eine Funktion zurueckgibt. Die zurueckgegebene Funktion nimmt `damage` und gibt `damage * factor` zurueck.',
    starterCode: '// Erstelle den Multiplikator\n',
    tests: [
      { name: 'Doppelter Schaden', test: 'createMultiplier(2)(50) === 100', failMessage: 'createMultiplier(2)(50) sollte 100 ergeben' },
      { name: 'Halber Schaden', test: 'createMultiplier(0.5)(80) === 40', failMessage: 'createMultiplier(0.5)(80) sollte 40 ergeben' },
      { name: 'Gibt eine Funktion zurueck', test: 'typeof createMultiplier(2) === "function"', failMessage: 'createMultiplier sollte eine Funktion zurueckgeben' },
    ],
  },
  {
    id: 'encounter-c18',
    title: 'State-Verwaltung',
    description: 'Erstelle eine Funktion `createState(initialValue)` die ein Array [getValue, setValue] zurueckgibt. getValue() gibt den aktuellen Wert zurueck, setValue(newVal) setzt ihn.',
    starterCode: '// Erstelle die State-Verwaltung (aehnlich wie useState)\n',
    tests: [
      { name: 'Initialwert wird gelesen', test: '(()=>{const [g]=createState(42);return g()===42})()', failMessage: 'getValue() sollte den Initialwert zurueckgeben' },
      { name: 'Wert kann geaendert werden', test: '(()=>{const [g,s]=createState(0);s(99);return g()===99})()', failMessage: 'Nach setValue(99) sollte getValue() 99 zurueckgeben' },
      { name: 'Gibt Array zurueck', test: 'Array.isArray(createState(0))', failMessage: 'createState sollte ein Array zurueckgeben' },
    ],
  },
  {
    id: 'encounter-c19',
    title: 'Pokemon-Pipeline',
    description: 'Erstelle eine Funktion `pipe(...fns)` die Funktionen hintereinander ausfuehrt. pipe(f, g)(x) soll g(f(x)) ergeben.',
    starterCode: '// Erstelle die Pipe-Funktion\n',
    tests: [
      { name: 'Zwei Funktionen', test: 'pipe(x => x + 1, x => x * 2)(5) === 12', failMessage: 'pipe(x=>x+1, x=>x*2)(5) sollte 12 ergeben' },
      { name: 'Drei Funktionen', test: 'pipe(x => x * 2, x => x + 3, x => x * 10)(4) === 110', failMessage: 'Drei Funktionen hintereinander sollten korrekt verkettet werden' },
    ],
  },
  {
    id: 'encounter-c20',
    title: 'Event-Handler Fabrik',
    description: 'Erstelle eine Funktion `createHandler(eventName, callback)` die ein Objekt { event: eventName, handle: callback } zurueckgibt. handle soll bei Aufruf den callback ausfuehren.',
    starterCode: '// Erstelle die Handler-Fabrik (aehnlich React Event-Handling)\n',
    tests: [
      { name: 'Event-Name wird gesetzt', test: 'createHandler("click", ()=>{}).event === "click"', failMessage: 'event sollte den eventName enthalten' },
      { name: 'handle fuehrt Callback aus', test: 'createHandler("click", x => x * 2).handle(21) === 42', failMessage: 'handle sollte den Callback ausfuehren und das Ergebnis zurueckgeben' },
      { name: 'Verschiedene Events', test: 'createHandler("hover", x => x + "!").handle("Hallo") === "Hallo!"', failMessage: 'Sollte mit verschiedenen Callbacks funktionieren' },
    ],
  },
];
