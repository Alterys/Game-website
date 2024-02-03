import React from 'react';
import Square from './Square';
import styles from '../style/Board.module.css';

const Board = ({ squares, click, move }) => {
    return (
        <div className={styles.board}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} move={move} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

export default Board;
