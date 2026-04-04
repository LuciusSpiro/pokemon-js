// Region 5: React Components
// Gym Leader: Koga (Gift-Typ)

export const REGION_5_CHALLENGES = {
  // ============================================
  // Common (einfaches Quiz)
  // ============================================

  // Sleima
  88: {
    type: 'quiz',
    question: 'Wie schreibt man in JSX eine CSS-Klasse auf ein Element?',
    answers: ['class="name"', 'className="name"', 'cssClass="name"', 'style="name"'],
    correct: 1,
  },

  // Smogon
  109: {
    type: 'quiz',
    question: 'Was ist ein gueltiger React Function Component?',
    answers: [
      'function App() { return <h1>Hi</h1> }',
      'const App = { return <h1>Hi</h1> }',
      'class App { render <h1>Hi</h1> }',
      'def App(): return <h1>Hi</h1>',
    ],
    correct: 0,
  },

  // Rettan
  23: {
    type: 'quiz',
    question: 'Was muss ein React-Component immer zurueckgeben?',
    answers: ['Einen String', 'JSX oder null', 'Ein Array', 'Ein Objekt'],
    correct: 1,
  },

  // Nidoran-F
  29: {
    type: 'quiz',
    question: 'Wie uebergibt man einem Component eine Eigenschaft name="Koga"?',
    answers: ['<Pokemon name="Koga" />', '<Pokemon {name: "Koga"} />', '<Pokemon name: "Koga">', '<Pokemon>"Koga"</Pokemon>'],
    correct: 0,
  },

  // ============================================
  // Uncommon (mittleres Quiz)
  // ============================================

  // Sleimok
  89: {
    type: 'quiz',
    question: 'Wie greift man innerhalb eines Components auf uebergebene Props zu?',
    answers: [
      'function Card(props) { return <p>{props.title}</p> }',
      'function Card() { return <p>{title}</p> }',
      'function Card(title) { return <p>{title}</p> }',
      'function Card() { return <p>{this.title}</p> }',
    ],
    correct: 0,
  },

  // Smogmog
  110: {
    type: 'quiz',
    question: 'Was ist der Zweck von React Fragments (<>...</>)?',
    answers: [
      'Sie fuegen automatisch CSS hinzu',
      'Sie erlauben mehrere Elemente ohne extra DOM-Knoten',
      'Sie machen den Code schneller',
      'Sie ersetzen div-Elemente komplett',
    ],
    correct: 1,
  },

  // Arbok
  24: {
    type: 'quiz',
    question: 'Wie importiert man einen Component, der als default exportiert wurde?',
    answers: [
      'import { Header } from "./Header"',
      'import Header from "./Header"',
      'require("./Header")',
      'include Header from "./Header"',
    ],
    correct: 1,
  },

  // Nidorina
  30: {
    type: 'quiz',
    question: 'Wie rendert man in JSX etwas nur, wenn eine Bedingung wahr ist?',
    answers: [
      '{if (loggedIn) <p>Hallo</p>}',
      '{loggedIn && <p>Hallo</p>}',
      '{loggedIn ? <p>Hallo</p>}',
      '<if loggedIn><p>Hallo</p></if>',
    ],
    correct: 1,
  },

  // Nidoran-M
  32: {
    type: 'quiz',
    question: 'Wie nutzt man children-Props in einem Wrapper-Component?',
    answers: [
      'function Box(props) { return <div>{props.children}</div> }',
      'function Box(children) { return <div>{children}</div> }',
      'function Box() { return <div>{this.children}</div> }',
      'function Box(props) { return <div>{props.inner}</div> }',
    ],
    correct: 0,
  },

  // Nidorino
  33: {
    type: 'quiz',
    question: 'Was ist Component Composition in React?',
    answers: [
      'Mehrere Components erben von einem Basis-Component',
      'Components werden ineinander verschachtelt, um UIs aufzubauen',
      'Ein Component rendert sich selbst rekursiv',
      'Components werden automatisch zusammengefuegt',
    ],
    correct: 1,
  },

  // ============================================
  // Rare (schwieriges Quiz)
  // ============================================

  // Nidoqueen
  31: {
    type: 'quiz',
    question: 'Was passiert, wenn ein Component ohne return-Wert definiert wird?',
    answers: [
      'React zeigt einen leeren Bereich an',
      'Es gibt einen Fehler: Component muss JSX oder null zurueckgeben',
      'React rendert undefined als Text',
      'Der Component wird uebersprungen',
    ],
    correct: 1,
  },

  // Nidoking
  34: {
    type: 'quiz',
    question: 'Welche Aussage ueber named vs default Exports ist korrekt?',
    answers: [
      'Ein Modul kann beliebig viele default Exports haben',
      'Named Exports muessen beim Import umbenannt werden',
      'Ein Modul kann nur einen default Export, aber viele named Exports haben',
      'Default und named Exports koennen nicht gemischt werden',
    ],
    correct: 2,
  },

  // Gengar
  94: {
    type: 'quiz',
    question: 'Was ist das Ergebnis von: <div className={`card ${isActive ? "active" : ""}`}> ?',
    answers: [
      'Ein Fehler, Template-Literals sind in JSX nicht erlaubt',
      'Die Klasse ist immer "card active"',
      'Die Klasse ist "card active" wenn isActive true ist, sonst "card "',
      'Die Klasse ist immer "card"',
    ],
    correct: 2,
  },

  // Alpollo
  93: {
    type: 'quiz',
    question: 'Warum sollte man Default Props definieren?',
    answers: [
      'Damit React schneller rendert',
      'Um Fehler zu vermeiden, wenn ein Prop nicht uebergeben wird',
      'Default Props sind in modernem React nicht mehr noetig',
      'Um die Props unveraenderbar zu machen',
    ],
    correct: 1,
  },

  // ============================================
  // Legendary (Code-Challenge)
  // ============================================

  // Mew
  151: {
    type: 'code',
    description:
      'Erstelle einen Function Component `Greeting`, der einen Prop `name` erwartet und <p>Hallo, {name}!</p> zurueckgibt.',
    starterCode: '// Erstelle den Greeting-Component\n',
    tests: [
      { name: 'Greeting ist eine Funktion', test: 'typeof Greeting === "function"', failMessage: 'Greeting sollte ein Function Component sein' },
      { name: 'Greeting gibt korrektes JSX zurueck', test: 'Greeting({ name: "Mew" }).props.children.join("") === "Hallo, Mew!"', failMessage: 'Greeting({ name: "Mew" }) sollte <p>Hallo, Mew!</p> zurueckgeben' },
    ],
  },

  // Nebulak
  92: {
    type: 'code',
    description:
      'Erstelle einen Function Component `Badge`, der die Props `label` und `color` erwartet. Er soll <span className={color}>{label}</span> zurueckgeben.',
    starterCode: '// Erstelle den Badge-Component\n',
    tests: [
      { name: 'Badge ist eine Funktion', test: 'typeof Badge === "function"', failMessage: 'Badge sollte ein Function Component sein' },
      { name: 'Badge setzt className korrekt', test: 'Badge({ label: "Gift", color: "lila" }).props.className === "lila"', failMessage: 'Badge sollte className auf den color-Prop setzen' },
      { name: 'Badge zeigt label an', test: 'Badge({ label: "Gift", color: "lila" }).props.children === "Gift"', failMessage: 'Badge sollte den label-Prop als Inhalt anzeigen' },
    ],
  },

  // Schlurp
  108: {
    type: 'code',
    description:
      'Erstelle einen Function Component `InfoCard`, der die Props `title` und `children` erwartet. Er soll ein <div> zurueckgeben, das ein <h2>{title}</h2> und darunter {children} enthaelt.',
    starterCode: '// Erstelle den InfoCard-Component\n',
    tests: [
      { name: 'InfoCard ist eine Funktion', test: 'typeof InfoCard === "function"', failMessage: 'InfoCard sollte ein Function Component sein' },
      { name: 'InfoCard gibt ein div zurueck', test: 'InfoCard({ title: "Test", children: "Inhalt" }).type === "div"', failMessage: 'InfoCard sollte ein <div> zurueckgeben' },
    ],
  },

  // Pantimos
  122: {
    type: 'code',
    description:
      'Erstelle einen Function Component `ConditionalText`, der einen Prop `show` (Boolean) und `text` (String) erwartet. Wenn show true ist, gib <p>{text}</p> zurueck, sonst null.',
    starterCode: '// Erstelle den ConditionalText-Component\n',
    tests: [
      { name: 'ConditionalText zeigt Text bei show=true', test: 'ConditionalText({ show: true, text: "Sichtbar" }).props.children === "Sichtbar"', failMessage: 'Bei show=true sollte der Text angezeigt werden' },
      { name: 'ConditionalText gibt null bei show=false', test: 'ConditionalText({ show: false, text: "Unsichtbar" }) === null', failMessage: 'Bei show=false sollte null zurueckgegeben werden' },
    ],
  },

  // Rossana
  124: {
    type: 'code',
    description:
      'Erstelle einen Function Component `PokemonTag`, der einen Prop `name` erwartet und optional einen Prop `level` mit Defaultwert 1. Gib <span>{name} (Lv. {level})</span> zurueck.',
    starterCode: '// Erstelle den PokemonTag-Component\n',
    tests: [
      { name: 'PokemonTag mit level', test: 'PokemonTag({ name: "Rossana", level: 37 }).props.children.join("") === "Rossana (Lv. 37)"', failMessage: 'PokemonTag({ name: "Rossana", level: 37 }) sollte "Rossana (Lv. 37)" anzeigen' },
      { name: 'PokemonTag ohne level nutzt Default', test: 'PokemonTag({ name: "Rossana" }).props.children.join("") === "Rossana (Lv. 1)"', failMessage: 'Ohne level-Prop sollte der Defaultwert 1 verwendet werden' },
    ],
  },
};
