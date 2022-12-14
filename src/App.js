import emptyState from './assets/emptyState.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={emptyState} alt="logo" />
        <p>There is nothing here.</p>
        Create a new employee by clicking the New Employee butoon to get started
      </header>
    </div>
  );
}

export default App;
