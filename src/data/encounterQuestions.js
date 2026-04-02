// ============================================================
// JavaScript Quiz-Fragen fuer Pokemon-Begegnungen
// Organisiert nach Schwierigkeitsgrad
// ============================================================

export const EASY_QUESTIONS = [
  {
    question: 'Was gibt typeof 42 zurueck?',
    answers: ['"number"', '"string"', '"integer"', '"float"'],
    correct: 0,
  },
  {
    question: 'Welches Schluesselwort erstellt eine Variable, die nicht neu zugewiesen werden kann?',
    answers: ['let', 'var', 'const', 'fixed'],
    correct: 2,
  },
  {
    question: 'Was ist der Wert von 10 % 3?',
    answers: ['3', '1', '0', '3.33'],
    correct: 1,
  },
  {
    question: 'Was gibt typeof "Hallo" zurueck?',
    answers: ['"text"', '"string"', '"char"', '"word"'],
    correct: 1,
  },
  {
    question: 'Was ist das Ergebnis von "5" + 3 in JavaScript?',
    answers: ['8', '"53"', 'NaN', 'Error'],
    correct: 1,
  },
  {
    question: 'Welcher Operator prueft auf strikte Gleichheit (Wert UND Typ)?',
    answers: ['==', '===', '!=', '>='],
    correct: 1,
  },
  {
    question: 'Was ist der Wert von typeof true?',
    answers: ['"boolean"', '"bool"', '"true"', '"bit"'],
    correct: 0,
  },
  {
    question: 'Was gibt typeof undefined zurueck?',
    answers: ['"null"', '"undefined"', '"object"', '"empty"'],
    correct: 1,
  },
  {
    question: 'Was ergibt 7 > 5?',
    answers: ['true', 'false', '"true"', '1'],
    correct: 0,
  },
  {
    question: 'Welche Aussage ueber let ist korrekt?',
    answers: [
      'let kann nicht neu zugewiesen werden',
      'let hat Block-Scope',
      'let wird gehoisted wie var',
      'let existiert seit ES3',
    ],
    correct: 1,
  },
  {
    question: 'Was ist das Ergebnis von 2 ** 3?',
    answers: ['6', '8', '5', '9'],
    correct: 1,
  },
  {
    question: 'Was ergibt "Hallo" + " " + "Welt"?',
    answers: ['"Hallo Welt"', 'Error', 'NaN', '"HalloWelt"'],
    correct: 0,
  },
  {
    question: 'Was ist der Wert von !true?',
    answers: ['true', 'false', '0', 'null'],
    correct: 1,
  },
  {
    question: 'Welcher Datentyp ist null in JavaScript?',
    answers: ['"null"', '"undefined"', '"object"', '"number"'],
    correct: 2,
  },
  {
    question: 'Was ergibt 0 === false?',
    answers: ['true', 'false', 'Error', 'undefined'],
    correct: 1,
  },
  {
    question: 'Wie schreibt man einen einzeiligen Kommentar in JavaScript?',
    answers: ['# Kommentar', '// Kommentar', '/* Kommentar */', '-- Kommentar'],
    correct: 1,
  },
  {
    question: 'Was passiert, wenn man eine Variable mit var deklariert, aber keinen Wert zuweist?',
    answers: ['Error', 'null', 'undefined', '0'],
    correct: 2,
  },
  {
    question: 'Was ergibt 10 !== "10"?',
    answers: ['true', 'false', 'Error', 'undefined'],
    correct: 0,
  },
  {
    question: 'Welcher Operator wird fuer die Division verwendet?',
    answers: ['%', '/', '\\', 'div'],
    correct: 1,
  },
  {
    question: 'Was ist das Ergebnis von Boolean(0)?',
    answers: ['true', 'false', '0', 'null'],
    correct: 1,
  },
];

export const MEDIUM_QUESTIONS = [
  {
    question: 'Was gibt [1, 2, 3].length zurueck?',
    answers: ['2', '3', '4', 'undefined'],
    correct: 1,
  },
  {
    question: 'Was macht die Methode Array.push()?',
    answers: [
      'Entfernt das letzte Element',
      'Fuegt ein Element am Anfang hinzu',
      'Fuegt ein Element am Ende hinzu',
      'Sortiert das Array',
    ],
    correct: 2,
  },
  {
    question: 'Was gibt [1, 2, 3].pop() zurueck?',
    answers: ['1', '3', '[1, 2]', 'undefined'],
    correct: 1,
  },
  {
    question: 'Wie greift man auf die Eigenschaft "name" eines Objekts zu?',
    answers: ['obj->name', 'obj.name', 'obj[name]', 'obj::name'],
    correct: 1,
  },
  {
    question: 'Was ist der Unterschied zwischen let und var?',
    answers: [
      'Kein Unterschied',
      'let hat Block-Scope, var hat Funktions-Scope',
      'var hat Block-Scope, let hat Funktions-Scope',
      'let ist schneller als var',
    ],
    correct: 1,
  },
  {
    question: 'Was gibt [10, 20, 30].indexOf(20) zurueck?',
    answers: ['0', '1', '2', '20'],
    correct: 1,
  },
  {
    question: 'Wie sieht eine Arrow Function mit einem Parameter aus?',
    answers: ['x -> x * 2', 'x => x * 2', 'x >> x * 2', 'fn(x) = x * 2'],
    correct: 1,
  },
  {
    question: 'Was gibt typeof [] zurueck?',
    answers: ['"array"', '"object"', '"list"', '"collection"'],
    correct: 1,
  },
  {
    question: 'Was macht die for...of Schleife?',
    answers: [
      'Iteriert ueber Objekt-Schluessel',
      'Iteriert ueber Array-Werte',
      'Zaehlt von 0 bis n',
      'Iteriert ueber Prototyp-Kette',
    ],
    correct: 1,
  },
  {
    question: 'Was gibt Object.keys({a: 1, b: 2}) zurueck?',
    answers: ['[1, 2]', '["a", "b"]', '{a: 1, b: 2}', '["a:1", "b:2"]'],
    correct: 1,
  },
  {
    question: 'Was ergibt [1, 2, 3].slice(1)?',
    answers: ['[1]', '[2, 3]', '[1, 2]', '[3]'],
    correct: 1,
  },
  {
    question: 'Was ist der Rueckgabewert einer Funktion ohne return-Anweisung?',
    answers: ['null', '0', 'undefined', 'false'],
    correct: 2,
  },
  {
    question: 'Was macht die Methode forEach()?',
    answers: [
      'Erstellt ein neues Array',
      'Fuehrt eine Funktion fuer jedes Element aus',
      'Filtert Elemente',
      'Sortiert das Array',
    ],
    correct: 1,
  },
  {
    question: 'Was ergibt "Hallo".length?',
    answers: ['4', '5', '6', 'undefined'],
    correct: 1,
  },
  {
    question: 'Was gibt [1, 2, 3].indexOf(5) zurueck?',
    answers: ['0', 'false', '-1', 'undefined'],
    correct: 2,
  },
  {
    question: 'Wie erstellt man ein leeres Objekt?',
    answers: ['new Object[]', '{}', '[]', 'Object.create()'],
    correct: 1,
  },
  {
    question: 'Was ist der Scope von einer mit const deklarierten Variable?',
    answers: ['Global', 'Funktions-Scope', 'Block-Scope', 'Modul-Scope'],
    correct: 2,
  },
  {
    question: 'Was macht die Methode Array.includes()?',
    answers: [
      'Fuegt ein Element hinzu',
      'Prueft, ob ein Element im Array enthalten ist',
      'Zaehlt die Elemente',
      'Entfernt doppelte Elemente',
    ],
    correct: 1,
  },
  {
    question: 'Was gibt eine while(false) Schleife aus?',
    answers: ['Endlosschleife', 'Wird einmal ausgefuehrt', 'Wird nie ausgefuehrt', 'Error'],
    correct: 2,
  },
  {
    question: 'Was ist der Wert von obj["key"] wenn obj = {key: "Wert"}?',
    answers: ['"key"', '"Wert"', 'undefined', 'null'],
    correct: 1,
  },
];

export const HARD_QUESTIONS = [
  {
    question: 'Was gibt [1, 2, 3].map(x => x * 2) zurueck?',
    answers: ['[2, 4, 6]', '[1, 2, 3]', '6', 'undefined'],
    correct: 0,
  },
  {
    question: 'Was ist das Ergebnis von [1, 2, 3, 4].filter(x => x > 2)?',
    answers: ['[1, 2]', '[3, 4]', '[2, 3, 4]', '[true, true]'],
    correct: 1,
  },
  {
    question: 'Was gibt [1, 2, 3].reduce((acc, val) => acc + val, 0) zurueck?',
    answers: ['[1, 2, 3]', '0', '6', '3'],
    correct: 2,
  },
  {
    question: 'Was macht der Spread-Operator (...)?',
    answers: [
      'Multipliziert Werte',
      'Kopiert/verteilt Elemente eines Arrays oder Objekts',
      'Erstellt einen Range',
      'Loescht Elemente',
    ],
    correct: 1,
  },
  {
    question: 'Was ergibt `Hallo ${name}` wenn name = "Welt"?',
    answers: ['"Hallo ${name}"', '"Hallo Welt"', 'Error', '"Hallo name"'],
    correct: 1,
  },
  {
    question: 'Was gibt async function immer zurueck?',
    answers: ['undefined', 'Ein Promise', 'Den return-Wert direkt', 'Ein Callback'],
    correct: 1,
  },
  {
    question: 'Was macht await in einer async Funktion?',
    answers: [
      'Stoppt das gesamte Programm',
      'Wartet auf die Aufloesung eines Promise',
      'Erstellt einen neuen Thread',
      'Bricht die Funktion ab',
    ],
    correct: 1,
  },
  {
    question: 'Was ist das Ergebnis von const {a, b} = {a: 1, b: 2, c: 3}?',
    answers: ['a=1, b=2', 'a=1, b=2, c=3', 'Error', '{a: 1, b: 2}'],
    correct: 0,
  },
  {
    question: 'Was macht setTimeout(fn, 0)?',
    answers: [
      'Fuehrt fn sofort aus',
      'Fuehrt fn nie aus',
      'Fuehrt fn nach dem aktuellen Call Stack aus',
      'Wirft einen Error',
    ],
    correct: 2,
  },
  {
    question: 'Welchen Status kann ein Promise haben?',
    answers: [
      'open, closed, error',
      'pending, fulfilled, rejected',
      'waiting, done, failed',
      'start, end, error',
    ],
    correct: 1,
  },
  {
    question: 'Was gibt der Ternary-Operator true ? "ja" : "nein" zurueck?',
    answers: ['"nein"', 'true', '"ja"', 'undefined'],
    correct: 2,
  },
  {
    question: 'Was ergibt [...[1, 2], ...[3, 4]]?',
    answers: ['[[1, 2], [3, 4]]', '[1, 2, 3, 4]', 'Error', '[4]'],
    correct: 1,
  },
  {
    question: 'Was ist der Unterschied zwischen .then() und await?',
    answers: [
      'Kein Unterschied',
      'await blockiert den Thread, .then() nicht',
      'Beide warten auf Promises, aber await macht den Code lesbarer',
      '.then() ist veraltet',
    ],
    correct: 2,
  },
  {
    question: 'Was macht die Methode fetch()?',
    answers: [
      'Liest lokale Dateien',
      'Sendet HTTP-Anfragen und gibt ein Promise zurueck',
      'Importiert Module',
      'Laedt Bilder herunter',
    ],
    correct: 1,
  },
  {
    question: 'Was ergibt const [a, ...rest] = [1, 2, 3, 4]?',
    answers: ['a=1, rest=[2, 3, 4]', 'a=[1], rest=[2, 3, 4]', 'Error', 'a=1, rest=2'],
    correct: 0,
  },
  {
    question: 'Was ist ein Callback?',
    answers: [
      'Eine Rueckgabewert-Funktion',
      'Eine Funktion, die als Argument an eine andere Funktion uebergeben wird',
      'Ein HTTP-Aufruf',
      'Eine Schleife',
    ],
    correct: 1,
  },
  {
    question: 'Was ergibt Promise.all([p1, p2]) wenn beide Promises erfolgreich sind?',
    answers: [
      'Das Ergebnis des schnelleren Promise',
      'Ein Array mit beiden Ergebnissen',
      'Nur das letzte Ergebnis',
      'undefined',
    ],
    correct: 1,
  },
  {
    question: 'Was ist das Ergebnis von [1, 2, 3].find(x => x > 1)?',
    answers: ['[2, 3]', '2', 'true', '1'],
    correct: 1,
  },
  {
    question: 'Was macht try...catch in JavaScript?',
    answers: [
      'Erstellt eine Schleife',
      'Faengt Fehler ab und behandelt sie',
      'Prueft Typen',
      'Erstellt einen Promise',
    ],
    correct: 1,
  },
  {
    question: 'Was ergibt `${2 + 3} Aepfel`?',
    answers: ['"2 + 3 Aepfel"', '"5 Aepfel"', 'Error', '"${5} Aepfel"'],
    correct: 1,
  },
];

export const EXPERT_QUESTIONS = [
  {
    question: 'Was macht der React Hook useState()?',
    answers: [
      'Fuehrt Seiteneffekte aus',
      'Erstellt eine lokale State-Variable in einer Komponente',
      'Verbindet sich mit einer Datenbank',
      'Erstellt einen globalen State',
    ],
    correct: 1,
  },
  {
    question: 'Wann wird die Funktion in useEffect() ausgefuehrt?',
    answers: [
      'Vor dem Rendern',
      'Nach dem Rendern der Komponente',
      'Nur beim ersten Rendern',
      'Nur wenn ein Fehler auftritt',
    ],
    correct: 1,
  },
  {
    question: 'Was sind Props in React?',
    answers: [
      'Interne Zustandsvariablen',
      'CSS-Eigenschaften',
      'Daten, die von der Eltern- an die Kind-Komponente uebergeben werden',
      'Browser-Events',
    ],
    correct: 2,
  },
  {
    question: 'Was ist JSX?',
    answers: [
      'Eine eigene Programmiersprache',
      'Eine Syntax-Erweiterung, die HTML-aehnlichen Code in JavaScript erlaubt',
      'Ein CSS-Framework',
      'Ein Node.js-Modul',
    ],
    correct: 1,
  },
  {
    question: 'Was gibt useState(0) zurueck?',
    answers: [
      'Den Wert 0',
      'Ein Array mit [aktuellerWert, setterFunktion]',
      'Ein Objekt mit {state, setState}',
      'Ein Promise',
    ],
    correct: 1,
  },
  {
    question: 'Was bewirkt ein leeres Dependency-Array [] bei useEffect?',
    answers: [
      'Der Effekt wird nie ausgefuehrt',
      'Der Effekt wird bei jedem Rendern ausgefuehrt',
      'Der Effekt wird nur einmal nach dem ersten Rendern ausgefuehrt',
      'Es gibt einen Error',
    ],
    correct: 2,
  },
  {
    question: 'Wie behandelt man ein Click-Event in React?',
    answers: [
      'onclick="handleClick()"',
      'onClick={handleClick}',
      'on-click={handleClick}',
      'click={handleClick}',
    ],
    correct: 1,
  },
  {
    question: 'Was ist "Lifting State Up" in React?',
    answers: [
      'State in localStorage speichern',
      'State in die naechsthoehere gemeinsame Elternkomponente verschieben',
      'State in eine globale Variable verschieben',
      'State loeschen und neu erstellen',
    ],
    correct: 1,
  },
  {
    question: 'Warum braucht man key bei Listen in React?',
    answers: [
      'Fuer die CSS-Formatierung',
      'Damit React Elemente effizient aktualisieren und identifizieren kann',
      'Fuer die Sortierung',
      'Keys sind optional und nicht noetig',
    ],
    correct: 1,
  },
  {
    question: 'Wie rendert man eine Liste in React?',
    answers: [
      'Mit einer for-Schleife im JSX',
      'Mit array.map() und einem key-Attribut',
      'Mit document.createElement()',
      'Mit innerHTML',
    ],
    correct: 1,
  },
  {
    question: 'Was ist eine React-Komponente?',
    answers: [
      'Eine CSS-Klasse',
      'Eine wiederverwendbare Funktion, die UI zurueckgibt',
      'Ein HTML-Element',
      'Ein npm-Paket',
    ],
    correct: 1,
  },
  {
    question: 'Wie macht man bedingtes Rendern in React?',
    answers: [
      'Mit document.getElementById()',
      'Mit if/else oder dem Ternary-Operator im JSX',
      'Mit CSS display:none',
      'Mit einer for-Schleife',
    ],
    correct: 1,
  },
  {
    question: 'Was passiert, wenn man State direkt aendert (z.B. state = newValue)?',
    answers: [
      'Die Komponente rendert neu',
      'React erkennt die Aenderung nicht und rendert nicht neu',
      'Es gibt einen sofortigen Error',
      'Der State wird global geaendert',
    ],
    correct: 1,
  },
  {
    question: 'Was macht die Cleanup-Funktion in useEffect?',
    answers: [
      'Loescht die Komponente',
      'Raeumt Seiteneffekte auf (z.B. Event-Listener entfernen)',
      'Setzt den State zurueck',
      'Laedt die Seite neu',
    ],
    correct: 1,
  },
  {
    question: 'Kann man mehrere useState Hooks in einer Komponente verwenden?',
    answers: [
      'Nein, nur einen',
      'Ja, beliebig viele',
      'Maximal drei',
      'Nur mit useReducer',
    ],
    correct: 1,
  },
  {
    question: 'Was ist der Unterschied zwischen State und Props?',
    answers: [
      'Kein Unterschied',
      'State ist intern und aenderbar, Props kommen von aussen und sind read-only',
      'Props sind aenderbar, State ist read-only',
      'State ist global, Props sind lokal',
    ],
    correct: 1,
  },
  {
    question: 'Was passiert, wenn man einen Hook in einer Bedingung aufruft?',
    answers: [
      'Es funktioniert normal',
      'Es verletzt die Hook-Regeln und fuehrt zu Fehlern',
      'Der Hook wird ignoriert',
      'Es ist die empfohlene Vorgehensweise',
    ],
    correct: 1,
  },
  {
    question: 'Wie uebergibt man eine Funktion als Prop an eine Kind-Komponente?',
    answers: [
      '<Kind onClick="handleClick" />',
      '<Kind onClick={handleClick} />',
      '<Kind onClick={handleClick()} />',
      '<Kind>handleClick</Kind>',
    ],
    correct: 1,
  },
  {
    question: 'Was macht React.Fragment (oder <>...</>)?',
    answers: [
      'Erstellt ein unsichtbares div',
      'Gruppiert Elemente ohne zusaetzliches DOM-Element',
      'Cached die Komponente',
      'Erstellt einen Error Boundary',
    ],
    correct: 1,
  },
  {
    question: 'Wann sollte man useEffect mit Dependency-Array [count] verwenden?',
    answers: [
      'Wenn der Effekt nur einmal laufen soll',
      'Wenn der Effekt bei jeder Aenderung von count laufen soll',
      'Wenn count nie geaendert werden soll',
      'Wenn man count loeschen will',
    ],
    correct: 1,
  },
];
