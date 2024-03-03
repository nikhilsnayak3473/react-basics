import avengersImage from '../assets/images/avengers.jpg';
import { Button } from './button';

export function MovieCard() {
  return (
    <div className='bg-slate-600 text-slate-100 rounded-sm'>
      <img
        src={avengersImage}
        alt='Avengers'
        className='rounded-l-sm rounded-r-sm'
      />
      <div className='px-1 py-2'>
        <h3>Avengers</h3>
        <Button>View Details</Button>
      </div>
    </div>
  );
}
