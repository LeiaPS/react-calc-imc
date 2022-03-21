import styles from './GridItem.module.css';
import UpImage from '../../assets/img/up.png';
import downImage from '../../assets/img/down.png';
import { LevelType } from '../../ts';

type props = {
    level: LevelType
};
export const GridItem = ({ level }: props) => {
    return (
        <div className={styles.main} style={{backgroundColor: level.color}}>
        <div className={styles.gridIcon}>
        <img src={level.icon === 'up' ? UpImage : downImage} alt="" width="30" />
        </div>
            <div className={styles.gridTitle}>{level.title}</div>
            {level.yourImc &&
             <div className={styles.yourImc}>Seu IMC é de {level.yourImc} kg/m²</div>
            }
            <div className={styles.gridInfo}>{
                <>
                    O IMC está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}kg/m²</strong>
                </>
            }</div>
        </div>
    );
}