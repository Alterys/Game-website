import styles from '../style/TimerGame.module.css';

function getMinutes(seconds) {
    return +seconds < 60 ? '00' : `0${Math.floor(seconds / 60)}`;
}

function getSeconds(seconds) {
    return +seconds > 9 ? seconds : `0${seconds}`;
}

function getSecondsFromMinutes(seconds) {
    return getSeconds(+seconds - +(Math.floor(seconds / 60)) * 60);
}

const TimerGame = ({seconds}) => {
    return (
        <div className={styles.container}>
            <span>{getMinutes(seconds)}</span>
            <span>:</span>
            <span>{seconds > 59 ? getSecondsFromMinutes(seconds) : getSeconds(seconds)}</span>
        </div>
    );
}

export default TimerGame;