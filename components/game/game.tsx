import React, { FC } from 'react';
import styles from './game.module.css';

interface GameProps {}

const Game: FC<GameProps> = () => (
  <div className={styles.Game} data-testid="Game">
    Game Component
  </div>
);

export default Game;
