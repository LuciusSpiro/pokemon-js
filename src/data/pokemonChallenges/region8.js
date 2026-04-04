// Region 8: Komplette App / Fortgeschritten
// Gym Leader: Giovanni (Boden-Typ)

export const REGION_8_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Sandan
  27: {
    type: 'quiz',
    question: 'Was macht React.memo() bei einer Komponente?',
    answers: [
      'Es speichert die Komponente im LocalStorage',
      'Es verhindert unnoetige Re-Renders, wenn sich die Props nicht aendern',
      'Es macht die Komponente schneller durch Komprimierung',
      'Es merkt sich den letzten State',
    ],
    correct: 1,
  },

  // Digda
  50: {
    type: 'quiz',
    question: 'Was ist der Zweck von React Router?',
    answers: [
      'Daten zwischen Komponenten senden',
      'Navigation zwischen verschiedenen Seiten/Views einer Single-Page-App ermoeglichen',
      'API-Anfragen verwalten',
      'State global verwalten',
    ],
    correct: 1,
  },

  // Tragosso
  104: {
    type: 'quiz',
    question: 'Was macht useContext in React?',
    answers: [
      'Es erstellt einen neuen Context',
      'Es liest einen Wert aus dem naechsten passenden Context-Provider im Komponentenbaum',
      'Es ersetzt Redux',
      'Es speichert Daten im Browser',
    ],
    correct: 1,
  },

  // Kleinstein
  74: {
    type: 'quiz',
    question: 'Was bedeutet "Code Splitting" in einer React-App?',
    answers: [
      'Den Code in mehrere Dateien aufteilen',
      'Nur den Code laden, der gerade gebraucht wird, statt alles auf einmal',
      'Den Code zwischen Frontend und Backend teilen',
      'Den Code fuer verschiedene Browser aufteilen',
    ],
    correct: 1,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Sandamer
  28: {
    type: 'quiz',
    question: 'Was ist der Unterschied zwischen useMemo und useCallback?',
    answers: [
      'Es gibt keinen Unterschied',
      'useMemo merkt sich einen berechneten Wert, useCallback merkt sich eine Funktion',
      'useCallback ist schneller als useMemo',
      'useMemo funktioniert nur mit Zahlen',
    ],
    correct: 1,
  },

  // Digdri
  51: {
    type: 'quiz',
    question: 'Was ist eine Error Boundary in React?',
    answers: [
      'Ein try/catch-Block in einer Funktion',
      'Eine Klassenkomponente, die JavaScript-Fehler in ihrem Kindkomponentenbaum abfaengt',
      'Ein spezieller Hook fuer Fehlerbehandlung',
      'Ein CSS-Feature fuer Fehlermeldungen',
    ],
    correct: 1,
  },

  // Knogga
  105: {
    type: 'quiz',
    question: 'Warum kann man Error Boundaries nicht als Funktionskomponente schreiben?',
    answers: [
      'Funktionskomponenten sind zu langsam dafuer',
      'Es gibt keine Hook-Entsprechung fuer componentDidCatch und getDerivedStateFromError',
      'React verbietet das aus Sicherheitsgruenden',
      'Man kann das sehr wohl, mit useErrorBoundary',
    ],
    correct: 1,
  },

  // Rihorn
  111: {
    type: 'quiz',
    question: 'Was macht React.lazy() und wann verwendet man es?',
    answers: [
      'Es verlangsamt Komponenten fuer Animationen',
      'Es laedt Komponenten erst bei Bedarf (dynamischer Import) fuer bessere Performance',
      'Es macht Komponenten unsichtbar bis sie gebraucht werden',
      'Es ist ein Alias fuer React.memo()',
    ],
    correct: 1,
  },

  // Georok
  75: {
    type: 'quiz',
    question: 'Was testet man mit einer Unit-Test-Bibliothek wie Jest typischerweise?',
    answers: [
      'Ob der Server laeuft',
      'Ob einzelne Funktionen oder Komponenten isoliert korrekt arbeiten',
      'Ob die Website schoen aussieht',
      'Ob die Datenbank erreichbar ist',
    ],
    correct: 1,
  },

  // Geowaz
  76: {
    type: 'quiz',
    question: 'Was bedeutet "Prop Drilling" und wie loest man es?',
    answers: [
      'Props schnell an eine Komponente senden - man loest es mit useMemo',
      'Props durch viele Ebenen durchreichen - man loest es mit Context oder State Management',
      'Props in die Datenbank speichern - man loest es mit useRef',
      'Props validieren - man loest es mit PropTypes',
    ],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Rizeros
  112: {
    type: 'quiz',
    question: 'Wann fuehrt useMemo zu SCHLECHTERER Performance?',
    answers: [
      'Nie, useMemo verbessert immer die Performance',
      'Wenn die Berechnung trivial ist und der Overhead der Memoization groesser ist als die Ersparnis',
      'Wenn man es mit useEffect kombiniert',
      'Wenn das Dependency-Array leer ist',
    ],
    correct: 1,
  },

  // Onix
  95: {
    type: 'quiz',
    question: 'Was passiert bei folgendem Pattern: <Route path="/pokemon/:id" element={<Detail />} />?',
    answers: [
      'Es wird eine Route mit dem festen Pfad "/pokemon/:id" erstellt',
      ':id ist ein dynamischer URL-Parameter, der mit useParams() in der Detail-Komponente ausgelesen werden kann',
      'Es gibt einen Fehler, weil :id kein gueltiger Pfad ist',
      ':id wird automatisch als State gespeichert',
    ],
    correct: 1,
  },

  // Nidoking
  34: {
    type: 'quiz',
    question: 'Was ist der Unterschied zwischen Controlled und Uncontrolled Components bei Formularen?',
    answers: [
      'Controlled Components sind schneller',
      'Bei Controlled Components wird der Wert ueber React-State gesteuert, bei Uncontrolled ueber das DOM direkt (z.B. mit useRef)',
      'Uncontrolled Components funktionieren nur mit Klassenkomponenten',
      'Es gibt keinen praktischen Unterschied',
    ],
    correct: 1,
  },

  // Nidoqueen
  31: {
    type: 'quiz',
    question: 'Warum sollte man in useCallback/useMemo NICHT jede Funktion/jeden Wert wrappen?',
    answers: [
      'Weil React nur 10 Hooks pro Komponente erlaubt',
      'Weil die Memoization selbst Speicher und Rechenzeit kostet und bei einfachen Werten mehr schadet als nuetzt',
      'Weil es die Lesbarkeit verbessert, aber die App langsamer macht',
      'Weil React die Hooks dann ignoriert',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Mewtu
  150: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createStore`, die einen initialState nimmt. Sie gibt ein Objekt mit getState(), dispatch(action) und subscribe(listener) zurueck. dispatch nimmt ein Action-Objekt {type, payload}. Bei type "SET" wird der State auf payload gesetzt. subscribe speichert Listener und dispatch ruft alle Listener auf.',
    starterCode: '// Mini Redux-Store\nfunction createStore(initialState) {\n  \n}',
    tests: [
      { name: 'getState gibt Anfangswert', test: 'createStore(0).getState() === 0', failMessage: 'getState() sollte den initialState zurueckgeben' },
      { name: 'dispatch aendert State', test: 'const s = createStore(0); s.dispatch({type: "SET", payload: 42}); s.getState() === 42', failMessage: 'Nach dispatch({type:"SET", payload:42}) sollte getState() 42 sein' },
      { name: 'subscribe wird bei dispatch aufgerufen', test: 'const s = createStore(0); let called = false; s.subscribe(() => { called = true; }); s.dispatch({type: "SET", payload: 1}); called === true', failMessage: 'subscribe-Listener sollte bei dispatch aufgerufen werden' },
    ],
  },

  // Mew
  151: {
    type: 'code',
    description:
      'Erstelle eine Funktion `memoize`, die eine Funktion fn nimmt und eine neue Funktion zurueckgibt. Die neue Funktion cached Ergebnisse: Wenn sie mit dem gleichen Argument erneut aufgerufen wird, gibt sie das gespeicherte Ergebnis zurueck statt fn erneut aufzurufen.',
    starterCode: '// Implementiere Memoization\nfunction memoize(fn) {\n  \n}',
    tests: [
      { name: 'Gibt korrektes Ergebnis', test: 'const double = memoize(x => x * 2); double(5) === 10', failMessage: 'memoize(x => x * 2)(5) sollte 10 ergeben' },
      { name: 'Cached Ergebnis', test: 'let count = 0; const fn = memoize(x => { count++; return x; }); fn(1); fn(1); count === 1', failMessage: 'Bei gleichem Argument sollte fn nur einmal aufgerufen werden' },
      { name: 'Verschiedene Argumente', test: 'let count = 0; const fn = memoize(x => { count++; return x * 2; }); fn(1); fn(2); count === 2', failMessage: 'Bei verschiedenen Argumenten sollte fn erneut aufgerufen werden' },
    ],
  },

  // Relaxo
  143: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createRouter`, die ein routes-Objekt nimmt (z.B. {"/": "Home", "/about": "About"}). Sie gibt ein Objekt mit navigate(path) und getCurrentPage() zurueck. Anfangs ist der Pfad "/". navigate aendert den aktuellen Pfad. getCurrentPage gibt den passenden Wert aus routes zurueck oder "404" wenn der Pfad nicht existiert.',
    starterCode: '// Mini Router\nfunction createRouter(routes) {\n  \n}',
    tests: [
      { name: 'Startseite ist /', test: 'const r = createRouter({"/": "Home"}); r.getCurrentPage() === "Home"', failMessage: 'Anfangs sollte getCurrentPage() den Wert fuer "/" zurueckgeben' },
      { name: 'navigate wechselt Seite', test: 'const r = createRouter({"/": "Home", "/about": "Ueber"}); r.navigate("/about"); r.getCurrentPage() === "Ueber"', failMessage: 'Nach navigate("/about") sollte getCurrentPage() "Ueber" sein' },
      { name: '404 bei unbekanntem Pfad', test: 'const r = createRouter({"/": "Home"}); r.navigate("/xyz"); r.getCurrentPage() === "404"', failMessage: 'Bei unbekanntem Pfad sollte getCurrentPage() "404" zurueckgeben' },
    ],
  },

  // Lapras
  131: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createContext`, die einen defaultValue nimmt. Sie gibt ein Objekt mit getProvider() und useContext() zurueck. getProvider() gibt ein Objekt mit setValue(v) zurueck. useContext() gibt den aktuellen Wert zurueck (defaultValue wenn kein setValue aufgerufen wurde).',
    starterCode: '// Mini Context-System\nfunction createContext(defaultValue) {\n  \n}',
    tests: [
      { name: 'Default-Wert wird gelesen', test: 'const ctx = createContext("hell"); ctx.useContext() === "hell"', failMessage: 'useContext() sollte den defaultValue zurueckgeben' },
      { name: 'setValue aendert den Wert', test: 'const ctx = createContext("hell"); ctx.getProvider().setValue("dunkel"); ctx.useContext() === "dunkel"', failMessage: 'Nach setValue("dunkel") sollte useContext() "dunkel" sein' },
    ],
  },

  // Dragoran
  149: {
    type: 'code',
    description:
      'Erstelle eine Funktion `createTestRunner`, die ein Objekt mit test(name, fn) und getResults() zurueckgibt. test() fuehrt fn aus - wenn fn keinen Fehler wirft, gilt der Test als bestanden ("pass"), sonst als fehlgeschlagen ("fail"). getResults() gibt ein Array von {name, status} zurueck.',
    starterCode: '// Mini Test-Runner\nfunction createTestRunner() {\n  \n}',
    tests: [
      { name: 'Bestandener Test', test: 'const r = createTestRunner(); r.test("ok", () => {}); r.getResults()[0].status === "pass"', failMessage: 'Ein Test ohne Fehler sollte status "pass" haben' },
      { name: 'Fehlgeschlagener Test', test: 'const r = createTestRunner(); r.test("fail", () => { throw new Error("x"); }); r.getResults()[0].status === "fail"', failMessage: 'Ein Test mit Fehler sollte status "fail" haben' },
      { name: 'Mehrere Tests', test: 'const r = createTestRunner(); r.test("a", () => {}); r.test("b", () => { throw new Error(); }); r.getResults().length === 2 && r.getResults()[0].name === "a"', failMessage: 'getResults() sollte alle Tests mit Name enthalten' },
    ],
  },
};
