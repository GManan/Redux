// App.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counter';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispath = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <div>
          <h1>the count is: {count}</h1>
          <button onClick={() => dispath(increment())}>++</button>
          <button onClick={() => dispath(decrement())}>--</button>
          <button onClick={() => dispath(incrementByAmount(5))}>++5</button>
        </div>
      </header>

    </div>
  );
}

export default App;
