import './style.css'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/">Todos</Link>
      <Link to="/negros">Negros</Link>
      <Link to="/ninos">Para Niños</Link>
      <Link to="/borrachos">Borrachos</Link>
      <Link to="/tock">tock</Link>
      <Link to="/animales">animales</Link>

    </nav>
  )
}

export default Menu;