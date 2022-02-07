import React from 'react';
import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const WordForm = ({create}) => {

    const [word, setWord] = useState({usedword:'', result:''})

    const addNewWord = (e) => {
        e.preventDefault()
        const newWord = {
            ...word, id: Date.now()
        }
        create(newWord)
        setWord({usedword:'', result:''})
     }
    const [selectedCase, setSelectedCase] = useState('')
    const [selectedDecl, setSelectedDecl] = useState('')

    const caseWords = (usedCase) => {
      setSelectedCase(usedCase);
      console.log(usedCase)
    }
    const declWords = (usedDecl) => {
      setSelectedDecl(usedDecl);
      console.log(usedDecl)
    }

    return (
        <form>
        <MyInput 
          value={word.usedword}
          onChange={e => setWord({...word, usedword: e.target.value, result: e.target.value})}
          type="text" 
          placeholder="Введите слово"
        />
        <MySelect
          value={selectedCase}
          onChange={caseWords}
          defaultValue="Падеж"
          options={[
          {value: 'case1', name: 'Именительный'},
          {value: 'case2', name: 'Родительный'},
          {value: 'case3', name: 'Дательный'},
          {value: 'case4', name: 'Винительный'},
          {value: 'case5', name: 'Творительны'},
          {value: 'case6', name: 'Предложный'}
          ]}
        />
        <MySelect
          value={selectedDecl}
          onChange={declWords}
          defaultValue="Склонение"
          options={[
          {value: 'declination1', name: 'Склонение 1'},
          {value: 'declination2', name: 'Склонение 2'},
          {value: 'declination3', name: 'Склонение 3'}
          ]}
        />
        <MyButton onClick={addNewWord}>Проверить</MyButton>
      </form>
    );
};


export default WordForm;