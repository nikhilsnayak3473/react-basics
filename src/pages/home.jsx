import { MoviesSection } from '../components/movies-section';
import AvengersImage from '../assets/images/avengers.jpg';
import AvengersAgeOfUltronImage from '../assets/images/avengers_age_of_ultron.jpg';

export function Home() {
  const trendingMovies = [
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
  ];

  const popularMovies = [
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
  ];

  const highRankingMovies = [
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
  ];

  return (
    <section>
      <h1 className='text-2xl text-slate-600'>Welcome to movie OTT</h1>
      <MoviesSection title={'Trending Movies'} movies={trendingMovies} />
      <MoviesSection title={'Popular Movies'} movies={popularMovies} />
      <MoviesSection title={'High Ranking Movies'} movies={highRankingMovies} />
    </section>
  );
}
