import { MoviesSection } from '../components/movies-section';
import { useState } from 'react';
import { MovieForm } from '../components/movie-form';
import { Modal } from '../components/modal';
import { Plus } from 'lucide-react';

export function Home() {
  // const [trendingMovies, setTrendingMovies] = useState([]);

  // const [popularMovies, setPopularMovies] = useState([]);

  // const [highRankingMovies, setHighRankingMovies] = useState([]);

  const [movies, setMovies] = useState([]);

  const trendingMovies = movies
    .filter((movie) => movie.movieType === 'trending')
    .map((movie) => {
      return {
        title: movie.movieName,
        imgSrc: movie.movieImage,
      };
    });

  const popularMovies = movies
    .filter((movie) => movie.movieType === 'popular')
    .map((movie) => {
      return {
        title: movie.movieName,
        imgSrc: movie.movieImage,
      };
    });

  const highRankingMovies = movies
    .filter((movie) => movie.movieType === 'highRanking')
    .map((movie) => {
      return {
        title: movie.movieName,
        imgSrc: movie.movieImage,
      };
    });

  const addMovie = (movieDetails) => {
    // if (movieDetails.movieType === 'trending') {
    //   const updatedTrendingMovies = [
    //     ...trendingMovies,
    //     { title: movieDetails.movieName, imgSrc: movieDetails.movieImage },
    //   ];
    //   setTrendingMovies(updatedTrendingMovies);
    // } else if (movieDetails.movieType === 'popular') {
    //   const updatedPopularMovies = [
    //     ...popularMovies,
    //     {
    //       title: movieDetails.movieName,
    //       imgSrc: movieDetails.movieImage,
    //     },
    //   ];
    //   setPopularMovies(updatedPopularMovies);
    // } else {
    //   const updatedhighRankingMovies = [
    //     ...highRankingMovies,
    //     {
    //       title: movieDetails.movieName,
    //       imgSrc: movieDetails.movieImage,
    //     },
    //   ];
    //   setHighRankingMovies(updatedhighRankingMovies);
    // }
    const updatedMovies = [...movies, movieDetails];
    setMovies(updatedMovies);
  };

  return (
    <section>
      <div className='flex justify-between px-4'>
        <h1 className='text-2xl text-slate-600'>Welcome to movie OTT</h1>
        <Modal
          modalTrigger={
            <span className='flex gap-2'>
              Add Movie <Plus />
            </span>
          }
        >
          <MovieForm onAddMovie={addMovie} />
        </Modal>
      </div>
      <MoviesSection title={'Trending Movies'} movies={trendingMovies} />
      <MoviesSection title={'Popular Movies'} movies={popularMovies} />
      <MoviesSection title={'High Ranking Movies'} movies={highRankingMovies} />
    </section>
  );
}
