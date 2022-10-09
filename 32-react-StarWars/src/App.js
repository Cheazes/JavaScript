import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
import { defaultHero, navItems } from './utils/constants';
import {HeroContext} from './utils/context'

const App = props => {
  const getItemByRoute = () => {
    const route = window.location.hash.substring(2);
    const page = navItems.find(item => item.route === route);
    return page ?? navItems[0];
  }
  const [hero,setHero] = useState(defaultHero);
  const [currentPage, setCurrentPage] = useState(getItemByRoute());

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const page = getItemByRoute();
      setCurrentPage(page);
    })
  }, []);

  return (
    <div className="container-fluid">
      <Header hero={hero}  />
      <HeroContext.Provider value={{hero,changeHero: setHero}}>
      <Main currentPage={currentPage} />
      </HeroContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
