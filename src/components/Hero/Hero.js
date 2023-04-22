import Logo from '../../assets/logo.png';
import Covid from '../../assets/hero.png';
import Lead from '../../assets/lead.png';
import { Scene } from 'react-scrollmagic';
const Hero = ({ HeroRef }) => {
  return (
    <div className="hero-container" ref={HeroRef}>
      <Scene duration={850} classToggle={['.nav-1', 'active']}>
        <div className="hero-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </Scene>
      <div className="hero-covid">
        <img
          src={Covid}
          alt="Informacje o pracy parku podczas pandemii oraz możliwość zakupienia biletu online"
        />

        <h2 className="covid-button">KUP BILET ONLINE</h2>
      </div>
      <div className="hero-lead">
        <p className='lead-info bold'>Uwaga!<br/>W związku z przebudową drogi i związane z tym utrudnienia od 24.04 - 27.04.2023 Park będzie nieczynny.</p>
        <p className="lead-info">
          Wizyta u nas to niezwykła, fantastyczna przygoda w przeszłość, aż do
          epoki kredy. Tylko w Łebie w Parku Dinozaurów spotkasz
          trójwymiarowe gady naturalnej wielkości.
        </p>
        <div className="lead-img">
          <img src={Lead} alt="Trasa pełna przygód!" />
        </div>
        <p className="lead-info">
          Pełna przygód i atrakcji trasa, niezapomniane widoki i przeżycia,
          które na zawsze pozostaną w pamięci małego człowieka. Fantastyczna
          przygoda edukacyjna dla małych i doskonała zabawa dla dużych
          miłośników największych gadów w historii.
        </p>
      </div>
    </div>
  );
};

export default Hero;
