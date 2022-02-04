import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import WordItem from './components/WordItem'; 
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import WordList from './components/WordList';

function App() {

  const [words, setWords] = useState([
      {id: 1, usedword:'собака', body:'собака'},
      {id: 2, usedword:'кошка', body:'кошку'},
  ])

  const [usedword, setUsedWord] = useState('')
  const addNewWord = (e) => {
    e.preventDefault()
   };


  return (
    <div className="App">
      <h1>Это твой персональный помощник по проверке падежей в русском языке!</h1>
      <form>
        <MyInput 
          value={usedword}
          onChange={e => setUsedWord(e.target.value)}
          type="text" 
          placeholder="Введите слово"
        />
        <MyButton onClick={addNewWord}>Проверить</MyButton>
      </form>
      <WordList words={words}/>
    </div>
  );
};

export default App;
