import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <Features />
    </div>
  );
}

export default App;
