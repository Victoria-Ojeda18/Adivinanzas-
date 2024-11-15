import React, { useEffect, useState } from 'react';
import Adivinanza from './Adivinanzas';
import styles from '../Styles/AdivinanzasContainer.module.css';

const AdivinanzaContainer = () => {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
    const fetchAdivinanzas = async () => {
      // Simulamos una llamada a una API
      const data = [
        { number: 1, question: 'Qué es, qué es, que tiene hojas pero no es un árbol, tiene letras pero no es una hoja?', answer: 'Un libro' },
        { number: 2, question: 'Qué es, qué es, que tiene cuatro patas y no puede caminar?', answer: 'Una mesa' },
        { number: 3, question: 'Qué le dice una iguana a otra?', answer: '¡Somos iguanitas' },
        { number: 4, question: 'Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.', answer: 'La pera' },
        { number: 5, question: 'Lleva sombrero y no es hombre, tiene patas y no es animal, tiene cabeza y no es persona.', answer: 'El tomate' },
        { number: 6, question: 'Qué es, qué es, que nunca se moja, pero siempre está en el agua?', answer: 'El reflefo' }
      ];
      setAdivinanzas(data);
    };

    fetchAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      {adivinanzas.map(adivinanza => (
        <Adivinanza 
          key={adivinanza.number} 
          number={adivinanza.number} 
          question={adivinanza.question} 
          answer={adivinanza.answer} 
        />
      ))}
    </div>
  );
};

export default AdivinanzaContainer;
