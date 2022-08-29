import { Link } from "react-router-dom";
import './style.css'




function Error(){
    return(
        <div className="not-found">
        <h1>404</h1>
        <h2>Ops... Essa página não existe</h2>
        <Link to='/'> Veja todos os filmes </Link>
        </div>
    )
};

export default Error;