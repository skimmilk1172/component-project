import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  );
}

export default App;
