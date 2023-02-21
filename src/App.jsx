import "./App.css";
import { TheChild } from "./Components/TheChild";
import { TheParent } from "./Components/TheParent";

function App() {
  return (
    <div className="App">
      <TheParent>
        <TheChild autor="I'm the son" />
      </TheParent>
    </div>
  );
}

export default App;
