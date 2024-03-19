import { useState } from 'react';
import { Button } from './button';

export function MovieForm() {
  const [movieName, setMovieName] = useState('');
  const [movieType, setMovieType] = useState('trending');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='bg-zinc-600 text-zinc-100 space-y-8 p-4 max-w-md mx-auto rounded-md shadow-md'>
      <h2 className='text-center font-bold text-2xl'>Add New Movie</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Enter Name:</label>
          <input
            type='text'
            id='name'
            required
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            className='text-zinc-800'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Choose Movie Type:</label>
          <div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='trending'
                name='type'
                value='trending'
                required
                checked={movieType === 'trending'}
                onChange={() => setMovieType('trending')}
              />
              <label htmlFor='trending'>Trending</label>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='popular'
                name='type'
                value='popular'
                required
                checked={movieType === 'popular'}
                onChange={() => setMovieType('popular')}
              />
              <label htmlFor='popular'>Popular</label>
            </div>
            <div className='flex gap-2 items-center'>
              <input
                type='radio'
                id='highRanking'
                name='type'
                value='highRanking'
                required
                checked={movieType === 'highRanking'}
                onChange={() => setMovieType('highRanking')}
              />
              <label htmlFor='highRanking'>High Ranking</label>
            </div>
          </div>
        </div>
        <Button>Add</Button>
      </form>
    </section>
  );
}
