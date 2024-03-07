import { MoviesSection } from '../components/movies-section';
import AvengersImage from '../assets/images/avengers.jpg';
import AvengersAgeOfUltronImage from '../assets/images/avengers_age_of_ultron.jpg';
import { useState } from 'react';
import { MovieForm } from '../components/movie-form';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([
    {
      title: 'Avengers',
      imgSrc: AvengersImage,
    },
    {
      title: 'Avengers 2',
      imgSrc: AvengersImage,
    },
    {
      title: 'Avengers 3',
      imgSrc: AvengersImage,
    },
  ]);

  const [popularMovies, setPopularMovies] = useState([
    {
      title: 'Avengers 4',
      imgSrc: AvengersAgeOfUltronImage,
    },
    {
      title: 'Avengers 5',
      imgSrc: AvengersAgeOfUltronImage,
    },
    {
      title: 'Avengers 6',
      imgSrc: AvengersAgeOfUltronImage,
    },
  ]);

  const [highRankingMovies, setHighRankingMovies] = useState([
    {
      title: 'Avengers 7',
      imgSrc: AvengersImage,
    },
    {
      title: 'Avengers 8',
      imgSrc: AvengersImage,
    },
    {
      title: 'Avengers 9',
      imgSrc: AvengersImage,
    },
  ]);

  const [isAddMovie, setIsAddMovie] = useState(false);

  const onAddMovie = (movie) => {
    if (movie.movieType === 'trending') {
      setTrendingMovies((prev) => [
        ...prev,
        { title: movie.name, imgSrc: AvengersImage },
      ]);
    } else if (movie.movieType === 'popular') {
      setPopularMovies((prev) => [
        ...prev,
        { title: movie.name, imgSrc: AvengersImage },
      ]);
    } else if (movie.movieType === 'highRanking') {
      setHighRankingMovies((prev) => [
        ...prev,
        { title: movie.name, imgSrc: AvengersImage },
      ]);
    }

    setIsAddMovie(false);
  };

  return (
    <section>
      <div>
        <h1 className='text-2xl text-slate-600'>Welcome to movie OTT</h1>
        <button disabled={isAddMovie} onClick={() => setIsAddMovie(true)}>
          Add Movie
        </button>
      </div>
      <div>{isAddMovie && <MovieForm onAddMovie={onAddMovie} />}</div>
      <MoviesSection title={'Trending Movies'} movies={trendingMovies} />
      <MoviesSection title={'Popular Movies'} movies={popularMovies} />
      <MoviesSection title={'High Ranking Movies'} movies={highRankingMovies} />
    </section>
  );
}
