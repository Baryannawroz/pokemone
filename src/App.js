import { Routes, Route, Link } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Pokemone from "./pages/Pokemone";
import Avatarepokemone from "./pages/Avatarepokemone";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemones" element={<Pokemone />} />
        <Route path="/pokemones/:id" element={<Avatarepokemone />} />
      </Routes>
    </div>
  );
}

export default App;
