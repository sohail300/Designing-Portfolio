import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import LongVideo from './components/LongVideo/LongVideo';
import Reels from './components/Reels/Reels';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LongVideo />
      <Reels />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
