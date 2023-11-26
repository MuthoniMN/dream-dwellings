import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Search from './components/Search';
import Listings from './components/Listings';
import Tours from './components/Tours';
import ContactSection from './components/ContactSect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <Features />
      <Search />
      <Listings />
      <Tours />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
