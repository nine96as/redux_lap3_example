import { faBone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Doggos } from './pages';
import './styles/app.css';

function App() {
  const loading = useSelector((state) => state.loading);
  const theDogs = useSelector((state) => state.doggos);

  const handleClick = () => {
    console.log('fetching doggos');
  };

  return (
    <>
      <h1>These Doggos endorse Redux</h1>
      <h3 onClick={() => handleClick()} aria-label='refresh' id='refresh'>
        fetch! <FontAwesomeIcon icon={faBone} />
      </h3>
      <Doggos />
    </>
  );
}

export default App;
