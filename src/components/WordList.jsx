import React from 'react';
import WordItem from './WordItem';

const WordList = ({words}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Список используемых слов
            </h1>
            {words.map((word) => 
                <WordItem word={word} key={word.id}/>
            )}
        </div>
    );
};

export default WordList;