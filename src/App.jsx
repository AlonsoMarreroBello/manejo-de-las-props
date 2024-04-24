import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';

function App() {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: 'Earth (C-137)',
    location: 'Citadel of Ricks',
    created: '2017-11-04T18:48:46.250Z'
  };

  return (
    <>
      <Header title="Tema 5" subtitle="Practica 01"></Header>
      <Card
        key={character.id}
        charName={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        origin={character.origin}
        location={character.location}
        created={character.created}
      ></Card>
      <Footer year="2023"></Footer>
    </>
  );
}

export default App;
