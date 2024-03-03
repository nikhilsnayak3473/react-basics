import React from 'react';
import { Navbar } from './components/layout/navbar';
import { Home } from './pages/home';
import { About } from './pages/about';
import { PageNotFound } from './pages/not-found';
export default function App() {
  const route = window.location.href.replace('http://localhost:5173', '');
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='mt-4'>
        {/* Conditional Rendering */}
        {route === '/' ? (
          <Home />
        ) : route === '/about' ? (
          <About />
        ) : (
          <PageNotFound />
        )}
      </main>
    </>
  );
}
