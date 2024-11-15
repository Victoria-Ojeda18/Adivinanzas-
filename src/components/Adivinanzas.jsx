import React, { useState } from 'react';
import styles from '../Styles/Adivinanzas.module.css';

const Adivinanza = ({ number, question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <div className={styles.adivinanza}>
      <h3>{`Adivinanza #${number}`}</h3>
      <p>{question}</p>
      {showAnswer && <p className={styles.answer}>{answer}</p>}
      <button onClick={handleClick} className={styles.revealButton}>👁️ Revelar respuesta</button>
    </div>
  );
};

export default Adivinanza;
