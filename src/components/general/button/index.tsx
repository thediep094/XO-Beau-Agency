import React from 'react';
import styles from './button.module.css';

const Button = ({ data }: any) => {
  return <button className={styles.button}>{data}</button>;
};

export default Button;
