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
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const arr = gsap.utils.toArray('.animation');
    console.log(
      arr.forEach((e: any) =>
        console.log(e.getElementsByTagName('h1'), 'hello')
      )
    );
    const tl = gsap.timeline({
      defaults: { ease: 'power1', duration: 0.5, stagger: 0.1 },
    });
    arr.forEach((el: any) => {
      tl.fromTo(
        el.getElementsByTagName('h1'),
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
      tl.fromTo(
        el.getElementsByTagName('img'),
        { opacity: 0.8 },
        {
          opacity: 1,
          stagger: 0.2,

          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
      tl.fromTo(
        el,
        { opacity: 1 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    });
  }, []);
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
