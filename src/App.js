import logo from './logo.svg';
import './App.css';
import RgisterationForm from './components/registerationform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img height={100} width={100} className="rounded mx-auto d-block" alt="insect"  title='insect' src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' />
        <a
          // className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>How hello</p>
        <RgisterationForm/>
      </header>
    </div>
  );
}

export default App;
