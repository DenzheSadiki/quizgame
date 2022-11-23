import React, { FC } from 'react';
import styles from './end.module.css';

interface EndProps {}

const End: FC<EndProps> = () => (
  <div className={styles.End} data-testid="End">
    End Component
  </div>
);

export default End;
