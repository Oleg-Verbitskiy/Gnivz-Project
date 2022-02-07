import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import WordList from './components/WordList';
import WordForm from './components/WordForm';
import WordItem from './components/WordItem'; 
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const [words, setWords] = useState([
      {id: 1, usedword:'собака', result:'собака'},
      {id: 2, usedword:'кошка', result:'кошку'},
  ])

  const createWord = (newWord) => {
    setWords([...words, newWord])
  }

  const removeWord = (word) => {
    setWords(words.filter(w => w.id !== word.id))
  }

  return (
    <div className="App">
      <h1>Это твой персональный помощник по проверке падежей в русском языке!</h1>
      <WordForm create={createWord}/>
      {words.length !== 0
      ? <WordList remove={removeWord} words={words}/>
      : <h1 style={{textAlign: 'center'}}>Список проверенных слов пуст!</h1>
      }
    </div>
  );
};

export default App;
