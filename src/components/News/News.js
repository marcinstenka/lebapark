import { useEffect, useState } from 'react';
import News1 from '../../assets/news1.png';
import News2 from '../../assets/news2.png';
import News3 from '../../assets/news3.png';
import News4 from '../../assets/news4.png';
import { Scene } from 'react-scrollmagic';
const News = ({ NewsRef }) => {
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const height = document.querySelector('.news-container').offsetHeight;
      setDuration(height);
    }, 100);
    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <div className="news-container" ref={NewsRef}>
      <Scene duration={duration} classToggle={['.nav-4', 'active']}>
        <div className="news-item">
          <img src={News1} alt="Aktualności" />
        </div>
      </Scene>
      <div className="news-item">
        <img src={News2} alt="Restauracje" />
      </div>
      <div className="news-item">
        <img src={News3} alt="Sklepy" />
      </div>
      <div className="news-item">
        <img src={News4} alt="Nocleg" />
        <a href="https://hotelnadmorskileba.com.pl/"></a>
        <a href="https://www.grandleba.pl/"></a>
      </div>
    </div>
  );
};

export default News;
