import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import "./style.css";





function Favorites(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@galeriaDeFilmes")
        setMovies(JSON.parse(myList) || [])
    }, [] )

    function deleteMovie(id){
        let filterMovies = movies.filter((movie)=> {
            return(movie.id !== id)
        })

        setMovies(filterMovies);
        localStorage.setItem("@galeriaDeFilmes" , JSON.stringify(filterMovies))
        toast.success("Filme removido com sucesso")
    }


    return(
        <div className='my-movies'>
            <h1>Meus filmes</h1>

            {movies.length === 0 && <span> Você não possui nenhum filme salvo</span>}


            
            <ul>
                {movies.map((movie)=>{
                    return(
                     <li key={movie.id}>
                            <span>{movie.title}</span>
                        
                        <div>
                            <Link to={`/movie/${movie.id}`}> Ver detalhes</Link>
                            <button onClick={()=> deleteMovie(movie.id) }>Excluir</button>
                        </div>
                     </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favorites;