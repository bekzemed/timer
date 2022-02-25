import { useEffect, useState } from 'react';

const Timer = () => {
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '10px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: '20px',
  };
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      setTimeout(() => setTime(time => time + 1), 1000);
    }
    return () => {
      clearInterval(time);
    };
  }, [start, time]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleResume = () => {
    setStart(true);
  };

  const handleReset = () => {
    setStart(false);
    setTime(0);
  };

  return (
    <div>
      <h1 style={headerStyle}>{time}</h1>
      <div style={containerStyle}>
        <button onClick={handleStart} style={{ marginRight: '10px' }}>
          Start
        </button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div style={containerStyle}>
        <button onClick={handleResume} style={{ marginRight: '10px' }}>
          Resume
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
