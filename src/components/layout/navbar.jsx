import { Clapperboard } from 'lucide-react';

export function Navbar() {
  return (
    <nav className='flex justify-between py-4 px-2 bg-slate-800 text-slate-200'>
      <Clapperboard />
      <ul className='flex gap-2'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
}
