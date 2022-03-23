import TimeCounter from "./components/TimeCounter/TimeCounter";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import { useState } from 'react';
import { useEffect } from 'react';

const App = props => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer)
      };
    };
  }, []);

  const startStopwatch = e => {
    e.preventDefault();
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  }

  const stopStopwatch = e => {
    e.preventDefault();
    if (timer) {
      clearInterval(timer)
    };
  }

  const resetStopwatch = e => {
    e.preventDefault();
    setTime(0);
  }

  return (
    <Container>
      <TimeCounter time={time} />
      <Button onClick={startStopwatch}>START</Button>
      <Button onClick={stopStopwatch}>STOP</Button>
      <Button onClick={resetStopwatch}>RESET</Button>
    </Container>
  );
}

export default App;
