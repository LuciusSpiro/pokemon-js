export const gym1Challenges = [
  {
    id: 'gym1-c1',
    gymId: 1,
    order: 1,
    type: 'code',
    title: 'Deine erste Variable',
    difficulty: 'easy',
    xpReward: 50,
    pokemonReward: null,
    description: `# Deine erste Variable

In JavaScript erstellst du Variablen mit \`let\` und \`const\`.

- \`let\` fuer Werte, die sich aendern koennen
- \`const\` fuer Werte, die konstant bleiben

## Aufgabe

1. Erstelle eine Variable \`trainerName\` mit deinem Namen (als String)
2. Erstelle eine Konstante \`STARTER_LEVEL\` mit dem Wert \`5\`
3. Erstelle eine Variable \`hasPokedex\` mit dem Wert \`true\`
`,
    starterCode: `// Erstelle deine Variablen hier\n\n`,
    solution: `const trainerName = "Ash";\nconst STARTER_LEVEL = 5;\nconst hasPokedex = true;`,
    hints: [
      'Benutze `let` oder `const` um eine Variable zu erstellen',
      'Strings brauchen Anfuehrungszeichen: `"Ash"` oder `\'Ash\'`',
      'Booleans sind `true` oder `false` (ohne Anfuehrungszeichen)',
    ],
    tests: [
      {
        name: 'trainerName existiert',
        test: `typeof trainerName !== 'undefined'`,
        failMessage: 'Erstelle eine Variable namens trainerName',
      },
      {
        name: 'trainerName ist ein String',
        test: `typeof trainerName === 'string' && trainerName.length > 0`,
        failMessage: 'trainerName sollte ein nicht-leerer String sein',
      },
      {
        name: 'STARTER_LEVEL ist 5',
        test: `STARTER_LEVEL === 5`,
        failMessage: 'STARTER_LEVEL sollte die Zahl 5 sein',
      },
      {
        name: 'hasPokedex ist true',
        test: `hasPokedex === true`,
        failMessage: 'hasPokedex sollte true sein',
      },
    ],
  },
  {
    id: 'gym1-c2',
    gymId: 1,
    order: 2,
    type: 'code',
    title: 'Datentypen erkennen',
    difficulty: 'easy',
    xpReward: 75,
    pokemonReward: null,
    description: `# Datentypen in JavaScript

JavaScript hat verschiedene Datentypen. Die wichtigsten sind:

- **String**: Text in Anfuehrungszeichen \`"Hallo"\`
- **Number**: Zahlen \`42\`, \`3.14\`
- **Boolean**: Wahrheitswerte \`true\` / \`false\`
- **Array**: Listen \`[1, 2, 3]\`
- **Object**: Objekte \`{ name: "Pikachu" }\`

Mit \`typeof\` kannst du den Typ pruefen: \`typeof 42\` ergibt \`"number"\`

## Aufgabe

Erstelle folgende Variablen mit dem richtigen Datentyp:

1. \`pokemonName\` - ein String mit dem Wert \`"Pikachu"\`
2. \`pokemonLevel\` - eine Number mit dem Wert \`25\`
3. \`isElectric\` - ein Boolean mit dem Wert \`true\`
4. \`moves\` - ein Array mit den Strings \`"Donnerblitz"\`, \`"Ruckzuckhieb"\`, \`"Eisenschweif"\`
`,
    starterCode: `// Erstelle die Variablen mit den richtigen Datentypen\n\n`,
    solution: `const pokemonName = "Pikachu";\nconst pokemonLevel = 25;\nconst isElectric = true;\nconst moves = ["Donnerblitz", "Ruckzuckhieb", "Eisenschweif"];`,
    hints: [
      'Strings brauchen Anfuehrungszeichen, Numbers nicht',
      'Arrays werden mit eckigen Klammern erstellt: `[element1, element2]`',
      'Booleans sind einfach `true` oder `false`',
    ],
    tests: [
      {
        name: 'pokemonName ist "Pikachu"',
        test: `pokemonName === "Pikachu"`,
        failMessage: 'pokemonName sollte der String "Pikachu" sein',
      },
      {
        name: 'pokemonLevel ist 25',
        test: `pokemonLevel === 25 && typeof pokemonLevel === 'number'`,
        failMessage: 'pokemonLevel sollte die Zahl 25 sein (kein String!)',
      },
      {
        name: 'isElectric ist true',
        test: `isElectric === true`,
        failMessage: 'isElectric sollte true sein',
      },
      {
        name: 'moves ist ein Array mit 3 Elementen',
        test: `Array.isArray(moves) && moves.length === 3`,
        failMessage: 'moves sollte ein Array mit 3 Strings sein',
      },
      {
        name: 'moves enthaelt die richtigen Attacken',
        test: `moves[0] === "Donnerblitz" && moves[1] === "Ruckzuckhieb" && moves[2] === "Eisenschweif"`,
        failMessage: 'moves sollte ["Donnerblitz", "Ruckzuckhieb", "Eisenschweif"] enthalten',
      },
    ],
  },
  {
    id: 'gym1-c3',
    gymId: 1,
    order: 3,
    type: 'code',
    title: 'Rechnen mit Pokemon-Werten',
    difficulty: 'medium',
    xpReward: 100,
    pokemonReward: 74, // Geodude
    description: `# Operatoren und Berechnungen

JavaScript kann rechnen! Wichtige Operatoren:

- \`+\` Addition, \`-\` Subtraktion
- \`*\` Multiplikation, \`/\` Division
- \`%\` Modulo (Rest einer Division)
- \`**\` Potenz

Ausserdem gibt es String-Verkettung mit \`+\`:
\`\`\`js
"Hallo" + " " + "Welt" // "Hallo Welt"
\`\`\`

## Aufgabe

1. \`totalHP\` = Berechne die Summe der HP von drei Pokemon: \`45\`, \`39\` und \`44\`
2. \`averageHP\` = Berechne den Durchschnitt der drei HP-Werte
3. \`damage\` = Ein Angriff mit Staerke \`40\` gegen Verteidigung \`30\`. Berechne: \`Staerke - Verteidigung\`
4. \`pokemonInfo\` = Erstelle den String \`"Glumanda hat 39 HP"\` durch Verkettung der Variablen \`"Glumanda"\`, \`" hat "\`, \`39\` und \`" HP"\`
`,
    starterCode: `// HP-Werte der drei Pokemon\nconst hp1 = 45;\nconst hp2 = 39;\nconst hp3 = 44;\n\n// Berechne die Werte\n`,
    solution: `const hp1 = 45;\nconst hp2 = 39;\nconst hp3 = 44;\n\nconst totalHP = hp1 + hp2 + hp3;\nconst averageHP = totalHP / 3;\nconst damage = 40 - 30;\nconst pokemonInfo = "Glumanda" + " hat " + 39 + " HP";`,
    hints: [
      'Fuer den Durchschnitt: Summe geteilt durch Anzahl',
      'String-Verkettung mit + verbindet Texte: `"A" + "B"` ergibt `"AB"`',
      'Zahlen werden automatisch in Strings umgewandelt wenn du sie mit + an Strings haengst',
    ],
    tests: [
      {
        name: 'totalHP ist 128',
        test: `totalHP === 128`,
        failMessage: 'totalHP sollte 45 + 39 + 44 = 128 sein',
      },
      {
        name: 'averageHP ist korrekt',
        test: `Math.abs(averageHP - 128/3) < 0.01`,
        failMessage: 'averageHP sollte 128 / 3 sein',
      },
      {
        name: 'damage ist 10',
        test: `damage === 10`,
        failMessage: 'damage sollte 40 - 30 = 10 sein',
      },
      {
        name: 'pokemonInfo ist korrekt',
        test: `pokemonInfo === "Glumanda hat 39 HP"`,
        failMessage: 'pokemonInfo sollte "Glumanda hat 39 HP" sein',
      },
    ],
  },
  {
    id: 'gym1-c4',
    gymId: 1,
    order: 4,
    type: 'code',
    title: 'Bedingungen: Ist das Pokemon stark genug?',
    difficulty: 'medium',
    xpReward: 100,
    pokemonReward: 95, // Onix
    description: `# If/Else Bedingungen

Mit \`if\` und \`else\` kannst du Entscheidungen treffen:

\`\`\`js
if (level >= 16) {
  console.log("Evolution moeglich!");
} else {
  console.log("Noch nicht bereit...");
}
\`\`\`

Vergleichsoperatoren:
- \`===\` gleich, \`!==\` ungleich
- \`>\` groesser, \`<\` kleiner
- \`>=\` groesser-gleich, \`<=\` kleiner-gleich

## Aufgabe

Gegeben sind \`pokemonLevel\` und \`pokemonHP\`. Erstelle:

1. \`canEvolve\` - \`true\` wenn Level >= 16, sonst \`false\`
2. \`battleResult\` - \`"Sieg"\` wenn HP > 50, \`"Niederlage"\` wenn HP <= 50
3. \`pokemonTier\` - \`"S"\` wenn Level >= 80, \`"A"\` wenn Level >= 50, \`"B"\` wenn Level >= 20, sonst \`"C"\`
`,
    starterCode: `const pokemonLevel = 36;\nconst pokemonHP = 72;\n\n// Erstelle die Variablen mit den richtigen Bedingungen\n`,
    solution: `const pokemonLevel = 36;\nconst pokemonHP = 72;\n\nconst canEvolve = pokemonLevel >= 16;\nconst battleResult = pokemonHP > 50 ? "Sieg" : "Niederlage";\nlet pokemonTier;\nif (pokemonLevel >= 80) pokemonTier = "S";\nelse if (pokemonLevel >= 50) pokemonTier = "A";\nelse if (pokemonLevel >= 20) pokemonTier = "B";\nelse pokemonTier = "C";`,
    hints: [
      'canEvolve kann direkt das Ergebnis des Vergleichs sein: `pokemonLevel >= 16` ergibt schon true/false',
      'Fuer battleResult kannst du if/else oder den Ternary-Operator `? :` benutzen',
      'Fuer pokemonTier brauchst du if/else if/else mit mehreren Bedingungen',
    ],
    tests: [
      {
        name: 'canEvolve ist true (Level 36 >= 16)',
        test: `canEvolve === true`,
        failMessage: 'canEvolve sollte true sein, da Level 36 >= 16',
      },
      {
        name: 'battleResult ist "Sieg" (HP 72 > 50)',
        test: `battleResult === "Sieg"`,
        failMessage: 'battleResult sollte "Sieg" sein, da HP 72 > 50',
      },
      {
        name: 'pokemonTier ist "B" (Level 36)',
        test: `pokemonTier === "B"`,
        failMessage: 'pokemonTier sollte "B" sein, da Level 36 >= 20 aber < 50',
      },
    ],
  },
]

export const gym1Quiz = {
  gymId: 1,
  leaderName: 'Rocko',
  leaderPokemon: [74, 95],
  questions: [
    {
      id: 'gym1-q1',
      question: 'Welches Schluesselwort erstellt eine Variable, die NICHT neu zugewiesen werden kann?',
      answers: ['var', 'let', 'const', 'function'],
      correct: 2,
      damage: 25,
      explanation: '`const` erstellt eine Bindung, die nicht neu zugewiesen werden kann.',
    },
    {
      id: 'gym1-q2',
      question: 'Was gibt `typeof "42"` zurueck?',
      answers: ['"number"', '"string"', '"boolean"', '"undefined"'],
      correct: 1,
      damage: 25,
      explanation: '"42" ist ein String (in Anfuehrungszeichen), kein Number.',
    },
    {
      id: 'gym1-q3',
      question: 'Was ist der Wert von `10 % 3`?',
      answers: ['3', '3.33', '1', '0'],
      correct: 2,
      damage: 25,
      explanation: 'Der Modulo-Operator `%` gibt den Rest der Division zurueck. 10 / 3 = 3 Rest 1.',
    },
    {
      id: 'gym1-q4',
      question: 'Welcher Vergleichsoperator prueft auf Gleichheit MIT Typ-Pruefung?',
      answers: ['=', '==', '===', '!='],
      correct: 2,
      damage: 25,
      explanation: '`===` (strikter Vergleich) prueft Wert UND Typ. `==` konvertiert Typen automatisch.',
    },
    {
      id: 'gym1-q5',
      question: 'Was gibt `"Pika" + "chu"` zurueck?',
      answers: ['"Pika chu"', '"Pikachu"', 'NaN', 'Error'],
      correct: 1,
      damage: 25,
      explanation: 'Der `+` Operator verkettet Strings direkt hintereinander.',
    },
  ],
}
