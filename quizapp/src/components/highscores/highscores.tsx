import React, { FC } from 'react';
import styles from './highscores.module.css';
 

interface HighscoresProps {}

class Highscores extends React.Component {
  
  constructor(props) {  
    super(props);  
    this.state = {  
      count: 0  
    };  
  } 
}

export default Highscores;
