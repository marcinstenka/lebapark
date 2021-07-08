import AtractionsMobile from './AtractionsMobile';
import AtractionsDesktop from './AtractionsDesktop';
const Atractions = ({ isMobile }) => {
  return <>{isMobile ? <AtractionsMobile /> : <AtractionsDesktop />}</>;
};

export default Atractions;
