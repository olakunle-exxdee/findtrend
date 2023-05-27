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
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('section');

      sections.forEach((section: any, index: any) => {
        const heading = section.querySelectorAll('h1');
        const h1 = gsap.utils.toArray(heading);
        const image = section.querySelectorAll('img');
        const img = gsap.utils.toArray(image);

        h1.forEach((h: any) => {
          gsap.set(h, {
            opacity: 0,
            y: -50,
            transformStyle: 'preserve-3d',
          });
        });
        img.forEach((i: any) =>
          gsap.set(i, {
            opacity: 0,
            rotateY: 15,
            y: -100,
            transformPerspective: 10000,
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
          })
        );

        const tl = gsap.timeline({
          defaults: {
            stagger: 0.2,
          },
          scrollTrigger: {
            trigger: section,
            start: () => 'top center',
            end: () => `+=${window.innerHeight}`,
            // toggleActions: 'play reverse play reverse',
          },
        });
        tl.to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.2,
        });
        tl.to(image, {
          opacity: 1,
          rotateY: -15,
          duration: 1,
          ease: 'elastic',
          y: 0,
        });
      });
    });

    return () => ctx.revert();
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
