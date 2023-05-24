import Companies from './components/Companies';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Join from './components/Join';
import Open from './components/Open';
import Plan from './components/Plan';
import Platform from './components/Platform';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.animation');
  console.log(gsap.utils.toArray('.animation'));

  return (
    <div className='bg-dark'>
      <Container>
        <Header />
        <Hero />
        <Open />
        <Companies />
        <Platform />
        <Plan />
        <Join />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
