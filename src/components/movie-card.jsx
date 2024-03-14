import { ThumbsUp } from 'lucide-react';
import { Button } from './button';
import { useState } from 'react';

export function MovieCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleViewDetailsClick = () => {
    alert('Details of ' + movie.title);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='bg-slate-600 text-slate-100 rounded-sm w-40'>
      <img
        src={movie.imgSrc}
        alt={movie.title}
        className='rounded-l-sm rounded-r-sm'
      />
      <div className='px-1 py-2 flex justify-around items-center'>
        <div>
          <h3>{movie.title}</h3>
          <Button onClick={handleViewDetailsClick}>View Details</Button>
        </div>
        <div>
          <ThumbsUp
            fill={isLiked ? 'white' : 'transparent'}
            className='cursor-pointer'
            onClick={handleLikeClick}
          />
        </div>
      </div>
    </div>
  );
}
