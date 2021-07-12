import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Attractions from './components/Attractions/Attractions';
import Animations from './components/Animations/Animations';
import News from './components/News/News';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import PlanYourVisit from './components/PlanYourVisit/PlanYourVisit';
import Contact from './components/Contact/Contact';
import { Controller } from 'react-scrollmagic';
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
    if (width > 1000) {
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
  const ContactRef = useRef();
  const refs = [
    HeroRef,
    AttractionsRef,
    AnimationsRef,
    NewsRef,
    OffersRef,
    VisitRef,
    ContactRef,
  ];
  return (
    <Controller>
      <Navbar isMobile={isMobile} refs={refs} />
      <div className="content">
        <Hero HeroRef={HeroRef} />
        <Attractions isMobile={isMobile} AttractionsRef={AttractionsRef} />
        <Animations AnimationsRef={AnimationsRef} />
        <News NewsRef={NewsRef} />
        <SpecialOffers OffersRef={OffersRef} />
        <PlanYourVisit VisitRef={VisitRef} AttractionsRef={AttractionsRef} />
        <Contact ContactRef={ContactRef} />
      </div>
      <footer>
        <p>Wszystkie prawa zastrzeżone. Copyright by Łeba Park © 2008-2021.</p>
      </footer>
    </Controller>
  );
};

export default App;
