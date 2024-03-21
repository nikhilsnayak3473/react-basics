import { useState } from 'react';
import { Button } from './button';

export function MovieForm({ onAddMovie }) {
  const [movieName, setMovieName] = useState('');
  const [movieType, setMovieType] = useState('trending');
  const [movieImage, setMovieImage] = useState('');
  const [movieImageType, setMovieImageType] = useState('file');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (movieImage) {
      URL.revokeObjectURL(movieImage);
    }
    const fileUrl = URL.createObjectURL(file);
    setMovieImage(fileUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieDetails = {
      movieName,
      movieType,
      movieImage,
    };
    onAddMovie(movieDetails);
    setMovieName('');
    setMovieType('trending');
    setMovieImage('');
    setMovieImageType('file');
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
            className='text-zinc-800 py-0.5 px-1 rounded-sm'
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
        <div className='flex flex-col gap-2'>
          <label htmlFor='movieImage'>Add Movie Image:</label>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <input
                type='radio'
                id='file'
                name='movieImageType'
                value='file'
                required
                checked={movieImageType === 'file'}
                onChange={() => {
                  if (movieImage) {
                    URL.revokeObjectURL(movieImage);
                  }
                  setMovieImageType('file');
                  setMovieImage('');
                }}
              />
              <label htmlFor='file'>File</label>
            </div>
            <div className='flex gap-1 items-center'>
              <input
                type='radio'
                id='url'
                name='movieImageType'
                value='url'
                required
                checked={movieImageType === 'url'}
                onChange={() => {
                  if (movieImage) {
                    URL.revokeObjectURL(movieImage);
                  }
                  setMovieImageType('url');
                  setMovieImage('');
                }}
              />
              <label htmlFor='url'>Url</label>
            </div>
          </div>
          {movieImageType === 'url' ? (
            <input
              type='text'
              id='movieImage'
              required
              value={movieImage}
              onChange={(e) => setMovieImage(e.target.value)}
              className='text-zinc-800 py-0.5 px-1 rounded-sm w-80'
              placeholder='Enter the url'
            />
          ) : (
            <input
              type='file'
              accept='image/*'
              id='movieImage'
              required
              onChange={handleImageUpload}
              className='text-zinc-800 rounded-sm w-80'
            />
          )}
        </div>
        <Button>Add</Button>
      </form>
    </section>
  );
}
