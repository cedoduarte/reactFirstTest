import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a React test by Carlos Enrique Duarte Ortiz</p>

        <FirstComponent/>
        <hr/>
        <SecondComponent/>
      </header>
    </div>
  );
}

export default App;
