import AttractionsMobile from './AttractionsMobile';
import AttractionsDesktop from './AttractionsDesktop';
const Attractions = ({ isMobile, AttractionsRef }) => {
  return (
    <>
      {isMobile ? (
        <AttractionsMobile AttractionsRef={AttractionsRef} />
      ) : (
        <AttractionsDesktop />
      )}
    </>
  );
};

export default Attractions;
