import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const characters = [
    {
      id: 1,
      charName: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:48:46.250Z',
      image: './src/images/1.jpeg'
    },
    {
      id: 2,
      charName: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:50:21.651Z',
      image: './src/images/2.jpeg'
    },
    {
      id: 3,
      charName: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:09:56.428Z',
      image: './src/images/3.jpeg'
    },
    {
      id: 4,
      charName: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:22:43.665Z',
      image: './src/images/4.jpeg'
    },
    {
      id: 6,
      charName: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Abadango',
      location: 'Abadango',
      created: '2017-11-04T19:50:28.250Z',
      image: './src/images/6.jpeg'
    },
    {
      id: 13,
      charName: 'Alien Googah',
      status: 'Dead',
      species: 'Alien',
      gender: 'Male',
      origin: 'unknown',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T20:33:30.779Z',
      image: './src/images/13.jpeg'
    }
  ];

  const getRandomCharacter = () => {
    const index = Math.floor(Math.random() * characters.length);
    return characters[index];
  };

  const character = getRandomCharacter();

  const getCurrentYear = () => {
    const date = new Date();
    let year = date.getFullYear();
    return year;
  };

  const currentYear = getCurrentYear();

  return (
    <>
      <Header title="Tema 5" subtitle="Practica 01"></Header>
      <Card character={character}></Card>
      <Footer year={currentYear}></Footer>
    </>
  );
}

export default App;
