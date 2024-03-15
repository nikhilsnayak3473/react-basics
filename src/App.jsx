import React from 'react';
import { Navbar } from './components/layout/navbar';
import { Home } from './pages/home';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='mt-4'>
        <Home />
      </main>
    </>
  );
}
