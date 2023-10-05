import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Thumbnail from './components/Thumbnail';
import Reel from './components/Reel';
import UI from './components/UI';
import Book from './components/Book';
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Thumbnail/>
      <Reel/>
      <UI/>
      <Book/>
      <Experience/>
      {/* <Testimonial/> */}
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
