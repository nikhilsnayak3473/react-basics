import { useState } from 'react';

export function MovieForm({ onAddMovie }) {
  const [name, setName] = useState('');

  const [movieType, setMovieType] = useState('trending');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({
      name,
      movieType,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Enter Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='type'>Choose Movie Type:</label>
        <input
          type='radio'
          id='type'
          name='type'
          value='trending'
          onChange={(e) => setMovieType(e.target.value)}
          required
          checked={movieType === 'trending'}
        />{' '}
        trending
        <input
          type='radio'
          id='type'
          name='type'
          value='popular'
          onChange={(e) => setMovieType(e.target.value)}
          required
          checked={movieType === 'popular'}
        />
        popular
        <input
          type='radio'
          id='type'
          name='type'
          value='highRanking'
          onChange={(e) => setMovieType(e.target.value)}
          required
          checked={movieType === 'highRanking'}
        />
        High Ranking
      </div>
      <button type='submit'>Add</button>
    </form>
  );
}
