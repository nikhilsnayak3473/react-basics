import { MoviesSection } from '../components/movies-section';
import AvengersImage from '../assets/images/avengers.jpg';
import { useState } from 'react';
import { MovieForm } from '../components/movie-form';
import { Modal } from '../components/modal';
import { Plus } from 'lucide-react';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [popularMovies, setPopularMovies] = useState([]);

  const [highRankingMovies, setHighRankingMovies] = useState([]);

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
          <MovieForm />
        </Modal>
      </div>
      <MoviesSection title={'Trending Movies'} movies={trendingMovies} />
      <MoviesSection title={'Popular Movies'} movies={popularMovies} />
      <MoviesSection title={'High Ranking Movies'} movies={highRankingMovies} />
    </section>
  );
}
