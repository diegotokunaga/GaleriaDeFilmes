import './style.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';



function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{

      async function loadMovies(){
        const response = await api.get('movie/now_playing', {
          params:{
            api_key: '8f49cc1ac79e8bd9bbdfdab8585c0f4f',
            language: 'pt-BR',
            page: 1,

          }
        })

        //console.log(response.data.results.slice(0,10))
        setMovies(response.data.results.slice(0,10));
        setLoading(false);

      }

      loadMovies();

    }, [])

    if(loading){
      return(
        <div className='loading'>
          <h2>Carregando filmes...</h2>
        </div>
      )
    }

    return(
      <div className='container'>
        <div className='movie-list'>
          {movies.map((movie)=> {
            return(
              <article key={movie.id}>
                <strong>{movie.title}</strong>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                <Link to={`/movie/${movie.id}`}>Acessar</Link>              
              </article>
            )
          })}
        </div>
      </div>
    )
  };
  
  export default Home;
  