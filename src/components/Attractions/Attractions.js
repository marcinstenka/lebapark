import AtractionsMobile from './AttractionsMobile';
import AtractionsDesktop from './AttractionsDesktop';
const Atractions = ({ isMobile, AttractionsRef }) => {
  return (
    <>
      {isMobile ? (
        <AtractionsMobile AttractionsRef={AttractionsRef} />
      ) : (
        <AtractionsDesktop />
      )}
    </>
  );
};

export default Atractions;
