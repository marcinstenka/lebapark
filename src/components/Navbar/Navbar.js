import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = ({ isMobile }) => {
  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};

export default Navbar;
