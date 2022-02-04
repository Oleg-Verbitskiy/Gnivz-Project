import React from 'react';
import MyButton from './UI/button/MyButton';

const WordItem = (props) => {
    
    return (
        <div className="word">
            <div className="word__content">
                <strong>{props.word.id}. {props.word.usedword} </strong>
                <div>
                    {props.word.body}
                </div>
            </div>
            <div className="word__btns">
                <MyButton>Стереть</MyButton>
            </div>
        </div>
    );
};

export default WordItem;