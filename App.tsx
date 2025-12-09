import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setPage={setActivePage} />;
      case 'shop':
        return <Shop />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-luxury-black antialiased">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;