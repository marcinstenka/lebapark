import { useEffect, useState } from 'react';
import AnimationsHeader from '../../assets/animations_header.png';
import Animation1 from '../../assets/animation1.png';
import Animation2 from '../../assets/animation2.png';
import { Scene } from 'react-scrollmagic';

const Animations = ({ AnimationsRef }) => {
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const height = document.querySelector(
        '.animations-container'
      ).offsetHeight;
      setDuration(height);
    }, 250);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div ref={AnimationsRef} className="animations-container">
      <Scene duration={duration} classToggle={['.nav-3', 'active']}>
        <div className="animations-header">
          <img src={AnimationsHeader} alt="" />
        </div>
      </Scene>
      <div className="animation animation-first">
        <h3 className="animation-header">
          Dookoła świata ze Spryciulą Zwinniulą
        </h3>
        <div className="animation-img">
          <img
            src={Animation1}
            alt="Grafika przedstawiająca przyjaznego dinozaura"
          />
        </div>
        <p className="animation-text">
          Bajkowa podróż z wesołymi klaunami na krańce świata. W ciągu dnia
          podróże realizowane są minimum 4 razy dziennie (lipiec-sierpień: od
          godz. 11.30 codziennie, maj-czerwiec: od poniedziałku do piątku od
          godz. 11.00, w weekendy początek od godz. 11.30), możesz dołączyć w
          każdej chwili.
          <br />
          <br />
          Po zakończeniu podróży każdy uczeń otrzyma Certyfikat Podróżnika.
        </p>
      </div>
      <div className="animation">
        <h3 className="animation-header">Animacje pirackie</h3>
        <div className="animation-img">
          <img
            src={Animation2}
            alt="Grafika przedstawijąca proces przesiewania złota"
          />
        </div>
        <p className="animation-text">
          Gdy na jednej pirackiej łajbie spotka się dwoje znanych na wszelkich
          morzach i oceanach piratów, zawsze jest ciekawie! Królowa piratek Zuza
          Czarna Meduza oraz Kapitan Hak zabiorą Was w daleką podróż w
          poszukiwaniu cennego skarbu. Czeka Was wiele pirackich zadań i
          przygód, a jeżeli uda nam się odnaleźć skrzynię pełną złota,
          podzielimy się dukatami z Wami! Ahoj!
        </p>
      </div>
    </div>
  );
};

export default Animations;
