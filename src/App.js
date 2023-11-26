import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <Features />
      <Search />
    </div>
  );
}

export default App;
