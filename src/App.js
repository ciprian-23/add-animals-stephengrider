import './App.css';
import { useState } from 'react';
import ShowAnimal from './ShowAnimal';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <ShowAnimal type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick} className="button">
        Add animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
