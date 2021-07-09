import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Attractions from './components/Attractions/Attractions';
import Animations from './components/Animations/Animations';
import News from './components/News/News';
// function which limits resize event occurrence
function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(null);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 100);
    window.addEventListener('resize', debouncedHandleResize);
    if (width > 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
    return () => window.removeEventListener('resize', debouncedHandleResize);
  });
  const HeroRef = useRef();
  const AttractionsRef = useRef();
  const AnimationsRef = useRef();
  const NewsRef = useRef();
  const refs = [HeroRef, AttractionsRef, AnimationsRef, NewsRef];
  return (
    <>
      <Navbar isMobile={isMobile} refs={refs} />
      <Hero HeroRef={HeroRef} />
      <Attractions isMobile={isMobile} AttractionsRef={AttractionsRef} />
      <Animations AnimationsRef={AnimationsRef} />
      <News NewsRef={NewsRef} />
    </>
  );
};

export default App;
