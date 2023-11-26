import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Search from './components/Search';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <Features />
      <Search />
      <section className='p-8'>
        <h2 className='text-center text-3xl '>Available Properties</h2>
        <section className='flex flex-wrap gap-10 justify-center p-5 '>
          <Listing img={"img/photo-1564013799919-ab600027ffc6.avif"} title={"A 3 Bedroom Mansion"} location={"Karen, Nairobi"} price={"Ksh 300,000/month"} />
          <Listing img={"img/photo-1599427303058-f04cbcf4756f.avif"} title={"A 2 Bedroom Bungalow"} location={"Runda, Kiambu"} price={"Ksh 200,000/month"} />
          <Listing img={"img/photo-1613643043796-a370ee99ecbe.avif"} title={"A 3 Bedroom Penthouse"} location={"Kilimani, Nairobi"} price={"Ksh 150,000/month"} />
          <Listing img={"img/photo-1583608205776-bfd35f0d9f83.avif"} title={"A 4 Bedroom Mansion"} location={"Kitengela, Nairobi"} price={"Ksh 250,000/month"} />
          <Listing img={"img/photo-1576941089067-2de3c901e126.avif"} title={"A 5 Bedroom Mansion"} location={"Syokimau, Nairobi"} price={"Ksh 120,000/month"} />
          <Listing img={"img/photo-1625602812206-5ec545ca1231.avif"} title={"A 3 Bedroom Bungalow"} location={"Runda, Kiambu"} price={"Ksh 100,000/month"} />
        </section>
      </section>
    </div>
  );
}

export default App;
