import styles from './TimeCounter.module.scss'

const TimeCounter = (props) => {
    
    const formatTime = () => {
        const milliseconds = parseInt((props.time % 1000) / 100);
        const seconds = parseInt((props.time / 1000) % 60);
        const minutes = parseInt((props.time / (1000 * 60)) % 60);
        const hours = parseInt((props.time / (1000 * 60 * 60)) % 24);

        const result = hours+":"+minutes+":"+seconds+"."+milliseconds;
        return result;
    }

    return (
        <div className={styles.stopwatch}>
            {formatTime()}
        </div>
    );
};

export default TimeCounter;