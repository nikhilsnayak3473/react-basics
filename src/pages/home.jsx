import { MoviesSection } from '../components/movies-section';

export function Home() {
  return (
    <section>
      <h1 className='text-2xl text-slate-600'>Welcome to movie OTT</h1>
      <MoviesSection title={'Trending Movies'} />
      <MoviesSection title={'Popular Movies'} />
      <MoviesSection title={'High Ranking Movies'} />
    </section>
  );
}
