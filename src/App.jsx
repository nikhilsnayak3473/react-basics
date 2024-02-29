import React from 'react';
import { Navbar } from './components/layout/navbar';
import { Home } from './pages/home';
import { About } from './pages/about';

export default function App() {
  const route = window.location.href.slice(21);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='bg-slate-100'>
        {route === '/' ? (
          <Home />
        ) : route === '/about' ? (
          <About />
        ) : (
          <h1>Page not Found</h1>
        )}
      </main>
      <footer>TODO: Footer</footer>
    </>
  );
}
