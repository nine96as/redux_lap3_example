import React from 'react';
import { useSelector } from 'react-redux';
import { DogCard } from '../../components';
import './style.css';

function Doggos() {
  const loading = useSelector((state) => state.loading);
  const theDogs = useSelector((state) => state.doggos);

  const renderDoggos = theDogs.map((dog) => (
    <DogCard key={dog.id} doggo={dog} />
  ));

  return (
    <>
      {loading ? (
        <h2>Loading . . .</h2>
      ) : (
        <section aria-label='doggos' id='doggos'>
          {renderDoggos}
        </section>
      )}
    </>
  );
}

export default Doggos;
