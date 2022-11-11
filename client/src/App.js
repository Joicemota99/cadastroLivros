import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";
import { Autor } from "./pages/cadastroAutor/index.jsx";
import { Livro } from "./pages/cadastroLivro/index.jsx";
import { Pesquisa } from "./pages/pesquisar/index.jsx";
import { Todos } from "./pages/todosLivros/index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastroAutor" element={<Autor />} />
        <Route path="/cadastroLivro" element={<Livro />} />
      </Routes>
    </Router>
  );
}
export default App;
