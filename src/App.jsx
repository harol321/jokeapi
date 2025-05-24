import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Listar from './componentes/listar';
import Categoria from './componentes/categoria';
import Menu from './componentes/menu';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/:tipo" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App;