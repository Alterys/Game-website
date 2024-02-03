import React, { useState } from 'react';
import Modal from './Modal';
import styles from './StoneGame.module.css';
import SidePanel from '../components/SidePanel';
import StoneIcon from '../components/StoneIcon';
import PaperIcon from '../components/PaperIcon';
import ScissorIcon from '../components/ScissorsIcon';

const choices = ['stone', 'scissor', 'paper'];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const getIcon = (choice) => {
  switch (choice) {
    case 'stone':
      return <StoneIcon />;
    case 'scissor':
      return <ScissorIcon />;
    case 'paper':
      return <PaperIcon />;
    default:
      return null;
  }
};

const StoneGame = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const playGame = (choice) => {
    const randomBotChoice = getRandomChoice();

    setUserChoice(getIcon(choice));
    setBotChoice(getIcon(randomBotChoice));

    let gameResult;

    if (choice === randomBotChoice) {
      gameResult = 'Ничья!';
    } else if (
      (choice === 'stone' && randomBotChoice === 'scissor') ||
      (choice === 'scissor' && randomBotChoice === 'paper') ||
      (choice === 'paper' && randomBotChoice === 'stone')
    ) {
      gameResult = 'Вы победили!';
    } else {
      gameResult = 'Вы проиграли!';
    }

    setResult(gameResult);

    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setUserChoice(null);
    setBotChoice(null);
    setResult(null);
  };

  const restartGame = () => {
    closeModal();
  };

  return (
    <div>
      <SidePanel />
      <div className={styles.vs}>
        <p>Выберите ход</p>
      </div>
      <div className={styles.stones}>
        <button onClick={() => playGame('stone')}>{getIcon('stone')}</button>
        <button onClick={() => playGame('paper')}>{getIcon('paper')}</button>
        <button onClick={() => playGame('scissor')}>{getIcon('scissor')}</button>
      </div>

      {modalVisible && (
        <Modal
          userChoice={userChoice}
          botChoice={botChoice}
          result={result}
          onClose={closeModal}
          onRestart={restartGame}
        />
      )}
    </div>
  );
};

export default StoneGame;