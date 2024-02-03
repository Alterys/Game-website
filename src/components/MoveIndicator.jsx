import styles from '../style/MoveIndicator.module.css';

const MoveIndicator = ({move}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.square} ${styles.cross} ${move == 'X' ? styles.active : null}`}></div>
            <div className={`${styles.square} ${styles.zero} ${move == 'O' ? styles.active : null}`}></div>
        </div>
    );
}

export default MoveIndicator;