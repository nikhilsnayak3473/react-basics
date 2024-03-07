import { MovieCard } from './movie-card';

export function MoviesSection({ title, movies }) {
  return (
    <div className='my-4 bg-slate-200 text-slate-700 p-2'>
      <h2 className='text-slate-800 text-xl'>{title}</h2>
      <div className='flex gap-4 mt-2'>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}
