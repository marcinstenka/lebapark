const NavbarDesktop = ({ refs }) => {
  const [
    HeroRef,
    AttractionsRef,
    AnimationsRef,
    NewsRef,
    OffersRef,
    VisitRef,
    ContactRef,
  ] = refs;
  const handleScroll = item => {
    window.scrollTo({
      top: item.current.offsetTop - 65,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(HeroRef)}
            >
              Łeba Park
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(AttractionsRef)}
            >
              Atrakcje
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link nav-1"
              onClick={() => handleScroll(AnimationsRef)}
            >
              Animacje
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(NewsRef)}
            >
              Aktualności
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(OffersRef)}
            >
              Oferty specjalne
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(VisitRef)}
            >
              Zaplanuj wizytę
            </button>
          </li>
          <li>
            <button className="mobile-menu-link">Kup bilet</button>
          </li>
          <li>
            <button
              className="mobile-menu-link"
              onClick={() => handleScroll(ContactRef)}
            >
              Kontakt
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarDesktop;
