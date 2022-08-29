import './style.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
               <Link className='logo' to='/'>Galeria de Filmes</Link> 
               <Link className='favoritos' to='/favorites'>Meus Filmes</Link> 
        </header>
    )
}

export default Header;