import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
