// Battle-Fragen und Boss-Challenges für alle 8 Arenen
// Schwieriger als Encounter-Fragen, passend zum Arena-Thema

export const BATTLE_DATA = {
  // ===== ARENA 1: Variablen & Typen =====
  1: {
    questions: [
      {
        question: 'Was gibt typeof null zurück?',
        answers: ['"object"', '"null"', '"undefined"', '"boolean"'],
        correct: 0,
        damage: 25,
      },
      {
        question: 'Welche Aussage über const ist korrekt?',
        answers: [
          'const verhindert jede Änderung am Wert',
          'const verhindert die Neuzuweisung der Referenz',
          'const-Variablen müssen Großbuchstaben sein',
          'const kann nicht in Schleifen verwendet werden',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist das Ergebnis von 0.1 + 0.2 === 0.3?',
        answers: ['true', 'false', 'undefined', 'TypeError'],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ergibt typeof NaN?',
        answers: ['"NaN"', '"undefined"', '"number"', '"object"'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was passiert bei: let x; console.log(x);?',
        answers: ['ReferenceError', 'null', 'undefined', '""'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Welcher Ausdruck ergibt true?',
        answers: [
          '"5" === 5',
          '"5" == 5',
          'typeof "5" === typeof 5',
          'Number("abc") === NaN',
        ],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Typ-Meister!',
      description:
        'Schreibe eine Funktion getType(value), die den Typ eines Wertes als String zurückgibt. Nutze typeof. Für null soll "null" zurückgegeben werden (nicht "object").',
      starterCode:
        'function getType(value) {\n  // Dein Code hier\n}',
      tests: [
        {
          name: 'getType("hallo") gibt "string" zurück',
          test: 'getType("hallo") === "string"',
          failMessage: 'getType("hallo") sollte "string" zurückgeben.',
        },
        {
          name: 'getType(42) gibt "number" zurück',
          test: 'getType(42) === "number"',
          failMessage: 'getType(42) sollte "number" zurückgeben.',
        },
        {
          name: 'getType(null) gibt "null" zurück',
          test: 'getType(null) === "null"',
          failMessage: 'getType(null) sollte "null" zurückgeben, nicht "object".',
        },
      ],
    },
  },

  // ===== ARENA 2: Funktionen & Scope =====
  2: {
    questions: [
      {
        question: 'Was ist der Unterschied zwischen function foo() {} und const foo = () => {}?',
        answers: [
          'Kein Unterschied',
          'Arrow Functions haben kein eigenes this',
          'Arrow Functions können keine Parameter haben',
          'Nur function-Deklarationen können Werte zurückgeben',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was gibt diese Funktion zurück?\nfunction test() { return; 42; }',
        answers: ['42', 'undefined', 'null', 'SyntaxError'],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist eine Closure?',
        answers: [
          'Eine Funktion, die sich selbst aufruft',
          'Eine Funktion, die auf Variablen ihrer äußeren Funktion zugreift',
          'Eine Funktion ohne Parameter',
          'Eine Funktion, die ein Objekt zurückgibt',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was passiert bei: console.log(foo()); var foo = function() { return 1; };?',
        answers: ['1', 'undefined', 'TypeError', 'ReferenceError'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Welches Ergebnis liefert (x => x * 2)(5)?',
        answers: ['undefined', 'NaN', '10', 'SyntaxError'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was ist Hoisting bei Funktionsdeklarationen?',
        answers: [
          'Funktionen werden ans Ende verschoben',
          'Funktionen sind vor ihrer Deklaration nutzbar',
          'Funktionen werden automatisch aufgerufen',
          'Funktionen werden doppelt definiert',
        ],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Closure-Künstler!',
      description:
        'Schreibe eine Funktion createCounter(), die einen Zähler erstellt. Jeder Aufruf der zurückgegebenen Funktion soll den Zähler um 1 erhöhen und den neuen Wert zurückgeben.',
      starterCode:
        'function createCounter() {\n  // Dein Code hier\n}',
      tests: [
        {
          name: 'Erster Aufruf gibt 1 zurück',
          test: 'const counter = createCounter(); counter() === 1',
          failMessage: 'Der erste Aufruf von counter() sollte 1 zurückgeben.',
        },
        {
          name: 'Zweiter Aufruf gibt 2 zurück',
          test: 'const counter = createCounter(); counter(); counter() === 2',
          failMessage: 'Der zweite Aufruf von counter() sollte 2 zurückgeben.',
        },
        {
          name: 'Separate Counter sind unabhängig',
          test: 'const a = createCounter(); const b = createCounter(); a(); a(); b(); a() === 3 && b() === 2',
          failMessage: 'Zwei verschiedene Counter sollten unabhängig voneinander zählen.',
        },
      ],
    },
  },

  // ===== ARENA 3: Arrays & Objekte =====
  3: {
    questions: [
      {
        question: 'Was gibt [1,2,3].map(x => x * 2) zurück?',
        answers: ['[2,4,6]', '[1,2,3]', '6', 'undefined'],
        correct: 0,
        damage: 25,
      },
      {
        question: 'Wie greift man auf die Eigenschaft "name" eines Objekts zu, wenn der Schlüssel in einer Variable key steht?',
        answers: ['obj.key', 'obj[key]', 'obj{key}', 'obj->key'],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist das Ergebnis von: const { a, b } = { a: 1, b: 2, c: 3 };?',
        answers: [
          'a = 1, b = 2',
          'a = 1, b = 2, c = 3',
          'SyntaxError',
          'a = undefined, b = undefined',
        ],
        correct: 0,
        damage: 25,
      },
      {
        question: 'Welche Methode ändert das Original-Array NICHT?',
        answers: ['push()', 'splice()', 'filter()', 'sort()'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was gibt [1,2,3].reduce((acc, x) => acc + x, 0) zurück?',
        answers: ['[1,2,3]', '0', '6', 'NaN'],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was ergibt der Spread-Operator: [...[1,2], ...[3,4]]?',
        answers: ['[[1,2],[3,4]]', '[1,2,3,4]', 'Error', '[1,2,[3,4]]'],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Array-Bezwinger!',
      description:
        'Schreibe eine Funktion getAdultNames(people), die ein Array von Personen-Objekten bekommt (mit name und age) und ein Array der Namen aller Personen ab 18 zurückgibt.',
      starterCode:
        'function getAdultNames(people) {\n  // Dein Code hier\n}',
      tests: [
        {
          name: 'Filtert korrekt nach Alter >= 18',
          test: 'const p = [{name:"Anna",age:20},{name:"Ben",age:15},{name:"Clara",age:18}]; const r = getAdultNames(p); r.length === 2 && r.includes("Anna") && r.includes("Clara")',
          failMessage: 'Es sollten nur Personen ab 18 Jahren zurückgegeben werden.',
        },
        {
          name: 'Gibt nur die Namen zurück (Strings)',
          test: 'const p = [{name:"Max",age:25}]; const r = getAdultNames(p); r[0] === "Max" && typeof r[0] === "string"',
          failMessage: 'Es sollen nur die Namen als Strings zurückgegeben werden, nicht die ganzen Objekte.',
        },
        {
          name: 'Leeres Array bei keinen Erwachsenen',
          test: 'const r = getAdultNames([{name:"Kind",age:10}]); Array.isArray(r) && r.length === 0',
          failMessage: 'Bei keinen Erwachsenen soll ein leeres Array zurückgegeben werden.',
        },
      ],
    },
  },

  // ===== ARENA 4: Async & Promises =====
  4: {
    questions: [
      {
        question: 'Was gibt Promise.resolve(42).then(x => x + 1) zurück?',
        answers: ['43', 'Promise<43>', 'undefined', '42'],
        correct: 1,
        damage: 25,
      },
      {
        question: 'In welcher Reihenfolge werden diese ausgegeben?\nconsole.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");',
        answers: ['A, B, C', 'A, C, B', 'B, A, C', 'C, A, B'],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was passiert, wenn man await außerhalb einer async-Funktion verwendet?',
        answers: [
          'Es funktioniert normal',
          'SyntaxError',
          'Es gibt undefined zurück',
          'Es wird ignoriert',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was tut Promise.all()?',
        answers: [
          'Führt Promises nacheinander aus',
          'Wartet auf alle Promises und gibt ein Array der Ergebnisse zurück',
          'Gibt das Ergebnis der schnellsten Promise zurück',
          'Bricht bei der ersten fehlgeschlagenen Promise ab und ignoriert den Rest',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist der Zweck von .catch() bei einer Promise?',
        answers: [
          'Es beschleunigt die Promise',
          'Es behandelt Fehler, die in der Promise-Kette auftreten',
          'Es bricht die Promise ab',
          'Es wandelt die Promise in synchronen Code um',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was gibt async function f() { return 5; } zurück, wenn man f() aufruft?',
        answers: ['5', 'undefined', 'Promise<5>', 'Error'],
        correct: 2,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Promise-Bezähmer!',
      description:
        'Schreibe eine Funktion delay(ms, value), die eine Promise zurückgibt. Die Promise soll nach ms Millisekunden mit value aufgelöst werden.',
      starterCode:
        'function delay(ms, value) {\n  // Dein Code hier\n}',
      tests: [
        {
          name: 'Gibt eine Promise zurück',
          test: 'delay(10, "test") instanceof Promise',
          failMessage: 'delay() muss eine Promise zurückgeben.',
        },
        {
          name: 'Promise löst mit dem richtigen Wert auf',
          test: 'await delay(10, "hallo") === "hallo"',
          failMessage: 'Die Promise sollte mit dem übergebenen Wert aufgelöst werden.',
        },
        {
          name: 'Funktioniert mit Zahlen',
          test: 'await delay(10, 42) === 42',
          failMessage: 'Die Promise sollte auch mit Zahlen korrekt funktionieren.',
        },
      ],
    },
  },

  // ===== ARENA 5: React Components =====
  5: {
    questions: [
      {
        question: 'Wie übergibt man den Wert "Max" als Prop "name" an eine Komponente?',
        answers: [
          '<User name="Max" />',
          '<User name: "Max" />',
          '<User "Max" />',
          '<User props.name="Max" />',
        ],
        correct: 0,
        damage: 25,
      },
      {
        question: 'Was muss eine React-Komponente zurückgeben?',
        answers: [
          'Immer ein einzelnes HTML-Element',
          'JSX-Ausdruck oder null',
          'Immer einen String',
          'Immer ein div-Element',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist der Unterschied zwischen einem Default Export und einem Named Export?',
        answers: [
          'Kein Unterschied',
          'Default kann beim Import umbenannt werden, Named muss mit {} importiert werden',
          'Named Exports sind schneller',
          'Default Exports sind veraltet',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist ungültiges JSX?',
        answers: [
          '<div className="box">Inhalt</div>',
          '<img src="bild.png" alt="Bild" />',
          '<div class="box">Inhalt</div>',
          '{items.map(i => <li key={i.id}>{i.name}</li>)}',
        ],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Wie rendert man eine Liste von Elementen in JSX korrekt?',
        answers: [
          'for-Schleife im JSX',
          'array.map() mit key-Prop auf jedem Element',
          'array.forEach() im JSX',
          'while-Schleife im JSX',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was bewirkt React.Fragment (oder <>...</>)?',
        answers: [
          'Erstellt ein unsichtbares div',
          'Gruppiert Elemente ohne Extra-DOM-Knoten',
          'Verbessert die Performance',
          'Erstellt einen Shadow-DOM-Knoten',
        ],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Komponenten-Architekt!',
      description:
        'Schreibe eine React-Komponente Greeting, die eine Prop "name" erwartet. Wenn name vorhanden ist, soll sie <h1>Hallo, {name}!</h1> rendern. Ohne name soll sie <h1>Hallo, Gast!</h1> rendern.',
      starterCode:
        'function Greeting({ name }) {\n  // Dein Code hier\n}',
      tests: [
        {
          name: 'Zeigt den Namen an, wenn übergeben',
          test: 'Greeting({ name: "Max" }).props.children.join("") === "Hallo, Max!" || JSON.stringify(Greeting({ name: "Max" })).includes("Max")',
          failMessage: 'Greeting({ name: "Max" }) sollte "Hallo, Max!" im h1-Element enthalten.',
        },
        {
          name: 'Zeigt "Gast" an, wenn kein Name übergeben wird',
          test: 'JSON.stringify(Greeting({ name: undefined })).includes("Gast") || JSON.stringify(Greeting({})).includes("Gast")',
          failMessage: 'Greeting ohne name sollte "Hallo, Gast!" anzeigen.',
        },
        {
          name: 'Gibt ein h1-Element zurück',
          test: 'Greeting({ name: "Test" }).type === "h1"',
          failMessage: 'Die Komponente sollte ein h1-Element zurückgeben.',
        },
      ],
    },
  },

  // ===== ARENA 6: State & Events =====
  6: {
    questions: [
      {
        question: 'Was gibt useState("initial") zurück?',
        answers: [
          '"initial"',
          'Ein Array mit [wert, setterFunktion]',
          'Ein Objekt { state, setState }',
          'undefined',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Warum sollte man bei useState den funktionalen Updater nutzen: setCount(prev => prev + 1)?',
        answers: [
          'Es ist schneller',
          'Es ist die einzige Syntax',
          'Es garantiert den aktuellsten State-Wert',
          'Es verhindert Re-Renders',
        ],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was ist eine Controlled Component?',
        answers: [
          'Eine Komponente mit useEffect',
          'Ein Formular-Element, dessen Wert vom React-State kontrolliert wird',
          'Eine Komponente mit CSS-Animationen',
          'Eine Komponente, die nur Props empfängt',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Wie verhindert man das Standard-Verhalten eines Formulars bei Submit?',
        answers: [
          'return false',
          'event.preventDefault()',
          'event.stopSubmit()',
          'form.cancel()',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was passiert, wenn man State direkt ändert (z.B. state.count = 5)?',
        answers: [
          'React rendert die Komponente neu',
          'Es funktioniert, ist aber langsam',
          'React erkennt die Änderung nicht und rendert nicht neu',
          'Es wirft einen TypeError',
        ],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Wie übergibt man einen Event-Handler mit Parameter korrekt in JSX?',
        answers: [
          'onClick={handleClick(id)}',
          'onClick={() => handleClick(id)}',
          'onClick="handleClick(id)"',
          'onClick={handleClick, id}',
        ],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'State-Meister!',
      description:
        'Schreibe eine Funktion useToggle(initialValue), die einen Custom Hook simuliert. Sie soll ein Array zurückgeben mit: [aktuellerWert, toggleFunktion]. Die toggleFunktion soll den Wert zwischen true und false umschalten.',
      starterCode:
        'function useToggle(initialValue = false) {\n  let value = initialValue;\n  // Dein Code hier\n  // Rückgabe: [value, toggle]\n}',
      tests: [
        {
          name: 'Startet mit dem initialen Wert',
          test: 'const [val] = useToggle(false); val === false',
          failMessage: 'Der initiale Wert sollte false sein.',
        },
        {
          name: 'Toggle wechselt den Wert',
          test: 'const result = useToggle(false); result[1](); result[0] === true || useToggle(true)[0] === true',
          failMessage: 'Nach toggle() sollte sich der Wert umkehren.',
        },
        {
          name: 'Funktioniert auch mit true als Startwert',
          test: 'const [val] = useToggle(true); val === true',
          failMessage: 'useToggle(true) sollte mit true starten.',
        },
      ],
    },
  },

  // ===== ARENA 7: useEffect & API =====
  7: {
    questions: [
      {
        question: 'Wann wird useEffect(() => { ... }, []) ausgeführt?',
        answers: [
          'Bei jedem Render',
          'Nur beim ersten Render (Mount)',
          'Nie',
          'Nur beim Unmount',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was passiert, wenn man kein Dependency-Array bei useEffect angibt?',
        answers: [
          'Effect läuft nur einmal',
          'Effect läuft nie',
          'Effect läuft nach jedem Render',
          'SyntaxError',
        ],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Wofür ist die Cleanup-Funktion in useEffect?',
        answers: [
          'Um den State zurückzusetzen',
          'Um Subscriptions und Timer aufzuräumen (z.B. beim Unmount)',
          'Um die Komponente schneller zu machen',
          'Um Fehler zu fangen',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist ein häufiger Fehler bei Daten-Fetching in useEffect?',
        answers: [
          'async direkt als useEffect-Callback verwenden',
          'fetch() nutzen statt axios',
          'JSON.parse() verwenden',
          'try-catch verwenden',
        ],
        correct: 0,
        damage: 25,
      },
      {
        question: 'Was passiert bei useEffect(() => { ... }, [count]), wenn sich count ändert?',
        answers: [
          'Nichts',
          'Der Effect wird erneut ausgeführt',
          'Die Komponente wird unmounted',
          'Nur der Cleanup läuft',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Warum kann eine Endlos-Schleife entstehen, wenn man State in useEffect setzt ohne korrektes Dependency-Array?',
        answers: [
          'JavaScript hat einen Bug',
          'State-Änderung triggert Re-Render, Re-Render triggert Effect, Effect setzt State',
          'useEffect ist dafür nicht gemacht',
          'Das kann nicht passieren',
        ],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'Effect-Virtuose!',
      description:
        'Schreibe eine Funktion createDataFetcher(url), die ein Objekt mit den Methoden fetch() und cancel() zurückgibt. fetch() soll eine simulierte API-Anfrage starten (Promise), cancel() soll ein aborted-Flag auf true setzen.',
      starterCode:
        'function createDataFetcher(url) {\n  let aborted = false;\n  // Dein Code hier\n  // Rückgabe: { fetch, cancel, isAborted }\n}',
      tests: [
        {
          name: 'Hat die Methoden fetch, cancel und isAborted',
          test: 'const df = createDataFetcher("/api"); typeof df.fetch === "function" && typeof df.cancel === "function" && typeof df.isAborted === "function"',
          failMessage: 'Das Objekt muss fetch(), cancel() und isAborted() enthalten.',
        },
        {
          name: 'isAborted() gibt initial false zurück',
          test: 'const df = createDataFetcher("/api"); df.isAborted() === false',
          failMessage: 'isAborted() sollte anfangs false zurückgeben.',
        },
        {
          name: 'Nach cancel() gibt isAborted() true zurück',
          test: 'const df = createDataFetcher("/api"); df.cancel(); df.isAborted() === true',
          failMessage: 'Nach cancel() sollte isAborted() true zurückgeben.',
        },
      ],
    },
  },

  // ===== ARENA 8: Full App (Mix) =====
  8: {
    questions: [
      {
        question: 'Was ist der Vorteil von Lifting State Up in React?',
        answers: [
          'Bessere Performance',
          'Weniger Code',
          'Gemeinsamer State zwischen Geschwister-Komponenten',
          'Automatische Datenpersistierung',
        ],
        correct: 2,
        damage: 25,
      },
      {
        question: 'Was ist der Unterschied zwischen useMemo und useCallback?',
        answers: [
          'Kein Unterschied',
          'useMemo merkt sich einen Wert, useCallback merkt sich eine Funktion',
          'useCallback ist schneller',
          'useMemo ist veraltet',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was bewirkt React.memo()?',
        answers: [
          'Speichert den State dauerhaft',
          'Verhindert unnötige Re-Renders wenn Props gleich bleiben',
          'Erstellt einen Memo-Hook',
          'Speichert die Komponente im Cache',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Welches Pattern eignet sich, um globalen State ohne Prop-Drilling zu teilen?',
        answers: [
          'Nur localStorage',
          'Context API oder State-Management wie Zustand',
          'Globale Variablen',
          'window.state',
        ],
        correct: 1,
        damage: 25,
      },
      {
        question: 'Was ist ein Anti-Pattern beim Daten-Fetching in React?',
        answers: [
          'Loading-State verwenden',
          'Fehlerbehandlung einbauen',
          'Daten im Event-Handler statt in useEffect laden',
          'Daten in useEffect ohne Cleanup fetchen und State nach Unmount setzen',
        ],
        correct: 3,
        damage: 25,
      },
      {
        question: 'Was gibt Object.keys({ a: 1, b: 2 }).map(k => k.toUpperCase()) zurück?',
        answers: ['["a", "b"]', '["A", "B"]', '[1, 2]', '{ A: 1, B: 2 }'],
        correct: 1,
        damage: 25,
      },
    ],
    bossChallenge: {
      title: 'JavaScript-Großmeister!',
      description:
        'Schreibe eine Funktion createStore(initialState), die einen einfachen State-Manager erstellt. Er soll getState(), setState(newState) (merged mit dem alten State) und subscribe(callback) (wird bei setState aufgerufen) haben.',
      starterCode:
        'function createStore(initialState) {\n  // Dein Code hier\n  // Rückgabe: { getState, setState, subscribe }\n}',
      tests: [
        {
          name: 'getState() gibt den initialen State zurück',
          test: 'const store = createStore({ count: 0 }); store.getState().count === 0',
          failMessage: 'getState() sollte den initialen State zurückgeben.',
        },
        {
          name: 'setState() aktualisiert den State (Merge)',
          test: 'const store = createStore({ a: 1, b: 2 }); store.setState({ b: 3 }); store.getState().a === 1 && store.getState().b === 3',
          failMessage: 'setState() sollte den neuen State mit dem alten mergen (wie Object.assign / Spread).',
        },
        {
          name: 'subscribe() wird bei setState aufgerufen',
          test: 'const store = createStore({ x: 0 }); let called = false; store.subscribe(() => { called = true; }); store.setState({ x: 1 }); called === true',
          failMessage: 'Die subscribe-Callback-Funktion sollte bei jedem setState-Aufruf ausgeführt werden.',
        },
      ],
    },
  },
};
