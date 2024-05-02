import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Thumbnail from './components/Thumbnail';
import Reel from './components/Reel';
import Book from './components/Book';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Education from './components/Education';
import Designs from './components/Designs';
import Channels from './components/Channels';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Reel/>
      <Thumbnail/>
      <Designs />
      <Book/>
      <Channels />
      {/* <Testimonial/> */}
      <Contact />
    </>
  );
}

export default App;
