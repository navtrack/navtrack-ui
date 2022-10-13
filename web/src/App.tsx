import { getSomething, parsingAtom } from '@shared/something';
import { somethingElse } from '@shared/somethingElse';
import { useRecoilState } from 'recoil';
import './App.css';
import logo from './logo.svg';

function App() {
  const [x, setX] = useRecoilState(parsingAtom);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setX(!x)}>
          Edit <code>src/App.tsx</code> and save to reload {getSomething(15)}{' '}
          {somethingElse('xx')} {x ? 'true' : 'false'}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
