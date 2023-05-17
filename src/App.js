import "./App.css";
import Todos from "./components/Todos";
import Counter from "./components/Counter";
function App() {
  return (
    <div className="App">
      <h2>React Redux</h2>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
