import SpecialOffersHeader from '../../assets/specialOffers-header.png';
import { Scene } from 'react-scrollmagic';
const SpecialOffers = ({ OffersRef }) => {
  return (
    <div className="specialOffers-container" ref={OffersRef}>
      <Scene duration={1100} classToggle={['.nav-5', 'active']}>
        <div className="specialOffers-img">
          <img
            src={SpecialOffersHeader}
            alt="Oferty specjalne jakie oferuje park."
          />
        </div>
      </Scene>
      <div className="specialOffer-item specialOffer-item-first">
        <h3>GRUPY</h3>
        <p>
          Zapraszamy nauczycieli do realizowania lekcji biologii, historii,
          fizyki w Łeba Park.
        </p>
      </div>
      <div className="specialOffer-item">
        <h3>URODZINY</h3>
        <p>
          Spełnij marzenia małego miłośnika dinozaurów. Zrób prezent urodzinowy,
          kup bilety do Parku Dinozaurów.
        </p>
      </div>
      <div className="specialOffer-item">
        <h3>W CENIE NOCLEGU W GRAND ŁEBA wstęp do Parku GRATIS!*</h3>
        <p>
          Spędzasz wakacje w Łebie i jesteś gościem{' '}
          <a href="https://www.grandleba.pl/" target="blank">
            Grand Łeba
          </a>
          ? Wejście do naszego parku otrzymujesz GRATIS*! Grand Łeba to obiekt
          oddany do użytku w 2018 roku. Położony w centrum miasta tuż przy
          kanale Chełst jest idealnym miejscem dla osób chcących odpocząć w
          atmosferze ciszy i spokoju. Aby dowiedzieć się więcej zadzwoń –
          +48723724722 lub wejdź na{' '}
          <a href="https://www.grandleba.pl/" target="blank">
            www.grandleba.pl
          </a>
          <br />
          <br />
          *minimalny czas pobytu to 3 doby z wyżywieniem
        </p>
      </div>
      <div className="specialOffer-item">
        <h3>WSZYSTKIE ATRAKCJE W CENIE BILETU</h3>
        <ul>
          <li>Ogromne zjeżdżalnie wodne (zjazd w ubraniu),</li>
          <li> bajlandia (zwiedzanie świata bajek w 3d),</li>
          <li>zamek strachu,</li>
          <li>
            kino 7dMax (około 10 filmów do wyboru dla dzieci i dorosłych),
          </li>
          <li>eurobangee,</li>
          <li>dmuchawce,</li>
          <li>
            największe w Polsce pole Minigolfa
          </li>
          <li>wstęp do galerii minerałów i skamielin,</li>
          <li>pojazdy Flinstonów,</li>
          <li>rowery wodne dla rodzin,</li>
          <li>strzelanie z łuku i wiatrówki</li>
          <li>kopalnia złota,</li>
          <li>pojazdy wodne dla dzieci,</li>
          <li>przejazd pojazdem bajkowym</li>
          <li>wstęp na Diabelski Młyn (koło młyńskie) wysoki na 27 metrów!,</li>
          <li>labirynt magicznych luster,</li>
          <li>bezpłatny dojazd do parku</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialOffers;
