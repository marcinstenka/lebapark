import News1 from '../../assets/news-1.png';
import News2 from '../../assets/news-2.png';
import News3 from '../../assets/news-3.png';
import News4 from '../../assets/news-4.png';
import { Scene } from 'react-scrollmagic';
const News = ({ NewsRef }) => {
  return (
    <div className="news-container" ref={NewsRef}>
      <Scene duration={660} classToggle={['.nav-4', 'active']}>
        <div className="news-item">
          <img src={News1} alt="Aktualności" />
          <h5>Wszystkie atrakcje w cenie biletu!</h5>
          <p>
            + bezpłatny przejazd z Łeby DINOBUSEM! Busy odjeżdżają z ul.Wojska
            Polskiego w Łebie każdego dnia wakacji od godz. 9:00
            <br />+ niestrzeżony parking dla zwiedzających, otwarty w godzinach
            pracy parku GRATIS!
          </p>
        </div>
      </Scene>
      <div className="news-item">
        <img src={News2} alt="Restauracje" />
        <p>
          Chcesz zrobić sobie przerwę w zabawie lub nabrać sił na kolejną dawkę
          emocji? Zatrzymaj się w jednym z barów usytuowanych na terenie całego
          Łeba Parku. Najmłodsi i ich rodzice mają do wyboru kilka restauracji.
          W menu Dino frytki, Dino pizza, Dino kiełbaski, Dino Hamburgery i
          zestawy obiadowe, które przekonają nawet największego niejadka.
        </p>
        <p>
          Fast Food – położony w pobliżu wejścia, jest doskonałym miejscem, aby
          rozpocząć lub zakończyć dzień w Łeba Park.
          <br />
          Bar Hobbitów, Gospoda, Lodziarnia, Naleśnikarnia
        </p>
      </div>
      <div className="news-item">
        <img src={News3} alt="Sklepy" />
        <p>
          Koszulka, puzzle czy kubek z dinozaurem ?<br />A może bursztynowa
          biżuteria?
        </p>
        <p>
          Nasz sklep z pamiątkami pozwoli na dłużej zachować wspomnienia z
          wizyty w Dino świecie. Poświęć chwilę i odwiedź nasz sklep z
          pamiątkami inspirowanymi Łeba Park – możesz być zaskoczony tym, co
          znajdziesz! Weź kawałek Łeba Park do domu.
        </p>
      </div>
      <div className="news-item">
        <img src={News4} alt="Nocleg" />
        <p>
          Chcesz zostać na dłużej? Naszym gościom oferujemy rodzinny pobyt w
          kameralnym{' '}
          <a href="https://hotelnadmorskileba.com.pl/">Hotelu Nadmorskim</a> lub{' '}
          <a href="https://www.grandleba.pl/">Grand Łeba</a>!
        </p>
        <p>
          <a href="https://hotelnadmorskileba.com.pl/">Hotel Nadmorski</a> w
          Łebie proponuje przyjemne rodzinne pokoje, domową kuchnię oraz usługi
          dodatkowe (bilard, plac zabaw, bibliotekę). Obiekt przystosowany jest
          dla najmłodszych.
        </p>
        <p>
          <a href="https://www.grandleba.pl/">Grand Łeba</a> oddany do użytku w
          2018 roku, położony jest w centrum miasta, tuż przy kanale Chełst. Ten
          obiekt to idealne miejsce dla osób chcących odpocząć w atmosferze
          ciszy i spokoju.
        </p>
      </div>
    </div>
  );
};

export default News;
