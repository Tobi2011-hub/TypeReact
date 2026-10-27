import Counter from './Counter'
import Greeting from './Greeting'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>TypeScript React Examples</h1>

      <section className="example" aria-labelledby="greeting-heading">
        <h2 id="greeting-heading">Greeting component</h2>
        <Greeting name="Tobi" />
      </section>

      <section className="example" aria-labelledby="counter-heading">
        <h2 id="counter-heading">Counter component</h2>
        <Counter />
      </section>
    </main>
  )
}

export default App
