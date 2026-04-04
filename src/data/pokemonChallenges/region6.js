// Region 6: State & Events
// Gym Leader: Sabrina (Psycho-Typ)

export const REGION_6_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Abra
  63: {
    type: 'quiz',
    question: 'Wie initialisiert man einen State mit dem Wert 0 in React?',
    answers: [
      'const [count, setCount] = useState(0)',
      'const count = useState(0)',
      'let count = 0',
      'this.state = { count: 0 }',
    ],
    correct: 0,
  },

  // Traumato
  96: {
    type: 'quiz',
    question: 'Welches Event wird ausgeloest, wenn man auf einen Button klickt?',
    answers: ['onPress', 'onClick', 'onTap', 'onActivate'],
    correct: 1,
  },

  // Flegmon
  79: {
    type: 'quiz',
    question: 'Was gibt useState zurueck?',
    answers: [
      'Nur den aktuellen Wert',
      'Ein Array mit [aktuellerWert, setterFunktion]',
      'Ein Objekt mit { value, setter }',
      'Eine Funktion zum Aendern des Werts',
    ],
    correct: 1,
  },

  // Taubsi
  16: {
    type: 'quiz',
    question: 'Wie uebergibt man eine Funktion als Event-Handler an einen Button?',
    answers: [
      '<button onClick={handleClick}>',
      '<button onClick="handleClick()">',
      '<button click={handleClick}>',
      '<button onClick={handleClick()}>',
    ],
    correct: 0,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Kadabra
  64: {
    type: 'quiz',
    question: 'Warum sollte man State nie direkt aendern (z.B. count = 5)?',
    answers: [
      'Es ist langsamer als setState',
      'React erkennt die Aenderung nicht und rendert nicht neu',
      'Die Variable ist als const geschuetzt',
      'JavaScript erlaubt keine Neuzuweisung',
    ],
    correct: 1,
  },

  // Hypno
  97: {
    type: 'quiz',
    question: 'Was ist ein "Controlled Input" in React?',
    answers: [
      'Ein Input, der disabled ist',
      'Ein Input, dessen Wert durch React-State gesteuert wird',
      'Ein Input mit einem Validator',
      'Ein Input in einem Formular mit onSubmit',
    ],
    correct: 1,
  },

  // Lahmus
  80: {
    type: 'quiz',
    question: 'Wie aktualisiert man den State basierend auf dem vorherigen Wert?',
    answers: [
      'setCount(count + 1)',
      'setCount(prev => prev + 1)',
      'count++; setCount(count)',
      'setState({ count: count + 1 })',
    ],
    correct: 1,
  },

  // Pantimos
  122: {
    type: 'quiz',
    question: 'Was bedeutet "Lifting State Up" in React?',
    answers: [
      'State wird in den Browser-Speicher verschoben',
      'State wird in eine globale Variable ausgelagert',
      'State wird in ein gemeinsames Eltern-Component verschoben',
      'State wird in eine Datenbank gespeichert',
    ],
    correct: 2,
  },

  // Rossana
  124: {
    type: 'quiz',
    question: 'Welches Event nutzt man, um auf Eingaben in einem Textfeld zu reagieren?',
    answers: ['onClick', 'onInput', 'onChange', 'onType'],
    correct: 2,
  },

  // Vulpix
  37: {
    type: 'quiz',
    question: 'Was passiert, wenn man setCount(count + 1) zweimal hintereinander aufruft?',
    answers: [
      'count wird um 2 erhoeht',
      'count wird nur um 1 erhoeht, da beide den gleichen Snapshot nutzen',
      'Es gibt einen Fehler',
      'Der zweite Aufruf wird ignoriert',
    ],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Simsala
  65: {
    type: 'quiz',
    question: 'Wie fuegt man ein Element korrekt zu einem Array im State hinzu?',
    answers: [
      'items.push(newItem); setItems(items)',
      'setItems([...items, newItem])',
      'setItems(items.concat(newItem).mutate())',
      'setItems(items + newItem)',
    ],
    correct: 1,
  },

  // Vulnona
  38: {
    type: 'quiz',
    question: 'Wie aendert man eine Eigenschaft in einem Objekt im State korrekt?',
    answers: [
      'user.name = "Neu"; setUser(user)',
      'setUser({ ...user, name: "Neu" })',
      'setUser(Object.assign(user, { name: "Neu" }))',
      'setUser(user.name = "Neu")',
    ],
    correct: 1,
  },

  // Relaxo
  143: {
    type: 'quiz',
    question: 'Wie implementiert man einen Toggle (an/aus) mit useState?',
    answers: [
      'setActive(!active)',
      'setActive(active === true)',
      'setActive(toggle)',
      'setActive(1 - active)',
    ],
    correct: 0,
  },

  // Porenta
  83: {
    type: 'quiz',
    question: 'Was ist der korrekte Weg, ein Formular-Submit in React zu behandeln?',
    answers: [
      'onSubmit auf dem form-Element mit e.preventDefault()',
      'onClick auf dem Submit-Button ohne weitere Massnahmen',
      'action-Attribut auf dem form-Element',
      'onSubmit ohne preventDefault, damit die Seite neu laedt',
    ],
    correct: 0,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Mewtu
  150: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createCounter`, die ein Objekt mit `count` (startet bei 0) und einer Methode `increment` zurueckgibt, die count um 1 erhoeht.',
    starterCode: '// Erstelle die createCounter-Funktion\n',
    tests: [
      { name: 'createCounter gibt ein Objekt zurueck', test: 'typeof createCounter() === "object"', failMessage: 'createCounter sollte ein Objekt zurueckgeben' },
      { name: 'count startet bei 0', test: 'createCounter().count === 0', failMessage: 'count sollte initial 0 sein' },
      { name: 'increment erhoeht count', test: '(() => { const c = createCounter(); c.increment(); return c.count === 1 })()', failMessage: 'Nach increment() sollte count 1 sein' },
    ],
  },

  // Flamara
  136: {
    type: 'code',
    description:
      'Erstelle eine Funktion `toggleValue`, die einen Boolean entgegennimmt und das Gegenteil zurueckgibt. true wird zu false, false wird zu true.',
    starterCode: '// Erstelle die toggleValue-Funktion\n',
    tests: [
      { name: 'toggleValue(true) gibt false', test: 'toggleValue(true) === false', failMessage: 'toggleValue(true) sollte false zurueckgeben' },
      { name: 'toggleValue(false) gibt true', test: 'toggleValue(false) === true', failMessage: 'toggleValue(false) sollte true zurueckgeben' },
    ],
  },

  // Ditto
  132: {
    type: 'code',
    description:
      'Erstelle eine Funktion `updateProperty`, die ein Objekt, einen Key (String) und einen neuen Wert entgegennimmt. Sie soll ein neues Objekt zurueckgeben (Spread), in dem nur der angegebene Key aktualisiert ist.',
    starterCode: '// Erstelle die updateProperty-Funktion\n',
    tests: [
      { name: 'Property wird aktualisiert', test: 'updateProperty({ name: "Ditto", level: 5 }, "level", 10).level === 10', failMessage: 'Der angegebene Key sollte aktualisiert werden' },
      { name: 'Andere Properties bleiben erhalten', test: 'updateProperty({ name: "Ditto", level: 5 }, "level", 10).name === "Ditto"', failMessage: 'Andere Properties sollten unveraendert bleiben' },
      { name: 'Original-Objekt unveraendert', test: '(() => { const o = { a: 1 }; const n = updateProperty(o, "a", 2); return o.a === 1 && n.a === 2 })()', failMessage: 'Das Original-Objekt sollte nicht veraendert werden' },
    ],
  },

  // Dodri
  85: {
    type: 'code',
    description:
      'Erstelle eine Funktion `addToList`, die ein Array und ein neues Element entgegennimmt. Sie soll ein neues Array zurueckgeben, das alle bisherigen Elemente plus das neue enthaelt (Spread).',
    starterCode: '// Erstelle die addToList-Funktion\n',
    tests: [
      { name: 'Neues Element wird hinzugefuegt', test: 'addToList(["a", "b"], "c").length === 3 && addToList(["a", "b"], "c")[2] === "c"', failMessage: 'Das neue Element sollte am Ende hinzugefuegt werden' },
      { name: 'Original-Array unveraendert', test: '(() => { const arr = [1, 2]; addToList(arr, 3); return arr.length === 2 })()', failMessage: 'Das Original-Array sollte nicht veraendert werden' },
    ],
  },

  // Tauros
  128: {
    type: 'code',
    description:
      'Erstelle eine Funktion `handleInput`, die ein Event-Objekt mit der Struktur { target: { value: "..." } } entgegennimmt und den Wert aus target.value zurueckgibt.',
    starterCode: '// Erstelle die handleInput-Funktion\n',
    tests: [
      { name: 'Gibt den Wert aus target.value zurueck', test: 'handleInput({ target: { value: "Hallo" } }) === "Hallo"', failMessage: 'handleInput sollte den Wert aus event.target.value zurueckgeben' },
      { name: 'Funktioniert mit leerem String', test: 'handleInput({ target: { value: "" } }) === ""', failMessage: 'handleInput sollte auch mit leerem String funktionieren' },
    ],
  },
};
