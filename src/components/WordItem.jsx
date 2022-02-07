import React from 'react';
import MyButton from './UI/button/MyButton';

const WordItem = (props) => {
    
    return (
        <div className="word">
            <div className="word__content">
                <strong>{props.number}. {props.word.usedword} </strong>
                <div>
                    {props.word.result}
                </div>
            </div>
            <div className="word__btns">
                <MyButton onClick={() => props.remove(props.word)}>Стереть</MyButton>
            </div>
        </div>
    );
};

export default WordItem;