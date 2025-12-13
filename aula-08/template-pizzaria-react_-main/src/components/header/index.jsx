import { Link } from 'react-router-dom'
import './style.css'

export const Header = () => {
    return (
        <header className="header">
            <h1>🍕 Pizzaria</h1>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/contato">Contato</Link>                                                
            </nav>
        </header>
    )
}