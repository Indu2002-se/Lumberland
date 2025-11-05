import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellers />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;