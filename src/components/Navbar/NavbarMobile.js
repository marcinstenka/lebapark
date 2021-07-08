import MobileMenuScript from './MobileMenuScript';
import Logo from '../../assets/logo.png';
const NavbarMobile = () => {
  return (
    <>
      <nav className="navbar-mobile">
        <div className="mobile__hamburger">
          <div className="hamburger__line hamburger__line-top"></div>
          <div className="hamburger__line hamburger__line-mid"></div>
          <div className="hamburger__line hamburger__line-bottom"></div>
        </div>
        <input type="checkbox" className="navbar__checkbox" />
      </nav>
      <div className="mobile-menu">
        <ul>
          <li>
            <a href="">Łeba Park</a>
          </li>
          <li>
            <a href="">Atrakcje</a>
          </li>
          <li>
            <a href="">Animacje</a>
          </li>
          <li>
            <a href="">Aktualności</a>
          </li>
          <li>
            <a href="">Oferty specjalne</a>
          </li>
          <li>
            <a href="">Zaplanuj wizytę</a>
          </li>
          <li>
            <a href="">Kup bilet</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
        </ul>
        <div className="menu-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </div>
      <MobileMenuScript />
    </>
  );
};

export default NavbarMobile;
