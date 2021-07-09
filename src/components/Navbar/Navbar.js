import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

const Navbar = ({ isMobile, refs }) => {
  return <>{isMobile ? <NavbarMobile refs={refs} /> : <NavbarDesktop />}</>;
};

export default Navbar;
