import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Attractions from './components/Attractions/Attractions';
import Animations from './components/Animations/Animations';
import News from './components/News/News';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import PlanYourVisit from './components/PlanYourVisit/PlanYourVisit';
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
  const OffersRef = useRef();
  const VisitRef = useRef();
  const refs = [
    HeroRef,
    AttractionsRef,
    AnimationsRef,
    NewsRef,
    OffersRef,
    VisitRef,
  ];
  return (
    <>
      <Navbar isMobile={isMobile} refs={refs} />
      <div className="content">
        <Hero HeroRef={HeroRef} />
        <Attractions isMobile={isMobile} AttractionsRef={AttractionsRef} />
        <Animations AnimationsRef={AnimationsRef} />
        <News NewsRef={NewsRef} />
        <SpecialOffers OffersRef={OffersRef} />
        <PlanYourVisit VisitRef={VisitRef} AttractionsRef={AttractionsRef} />
      </div>
    </>
  );
};

export default App;
