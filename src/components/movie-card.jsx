import { Button } from './button';

export function MovieCard({ movie }) {
  const handleClick = () => {
    alert('Details of ' + movie.title);
  };
  return (
    <div className='bg-slate-600 text-slate-100 rounded-sm w-40'>
      <img
        src={movie.imgSrc}
        alt={movie.title}
        className='rounded-l-sm rounded-r-sm'
      />
      <div className='px-1 py-2'>
        <h3>{movie.title}</h3>
        <Button onClick={handleClick}>View Details</Button>
      </div>
    </div>
  );
}
