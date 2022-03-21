import { useEffect, useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/img/powered.png';
import { calcularteImc, levels } from './helpers/imc';
import { GridItem } from './components/GridItem'
import { LevelType } from './ts';
import leftArrowImage from './assets/img/leftarrow.png';


const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<LevelType | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calcularteImc(heightField, weightField));
    } else {
      alert('Digite todos os campos.');
    }
  }
  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para indice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1,5 (em métros)"
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow !== null}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 58.5 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow !== null}
          />
          <button onClick={handleCalculateButton}
            disabled={toShow !== null}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((level, key) => (
                <GridItem key={key} level={level} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem level={toShow} />
            </div>
          }
        </div>

      </div>

    </div>
  );
}

export default App;
