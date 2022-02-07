import React from 'react';
import WordItem from './WordItem';

const WordList = ({words, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Список проверенных слов
            </h1>
            {words.map((word, index) => 
                <WordItem remove={remove} number={index + 1} word={word} key={word.id}/>
            )}
        </div>
    );
};

export default WordList;