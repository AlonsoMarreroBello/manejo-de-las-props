import './App.css';
import { characters } from './charaters.js';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
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
      <Header title="Tema 05" subtitle="Practica 01"></Header>
      <main>
        <Card character={character}></Card>
      </main>
      <Footer year={currentYear}></Footer>
    </>
  );
}

export default App;
