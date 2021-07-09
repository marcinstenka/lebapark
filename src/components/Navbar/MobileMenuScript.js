import { useEffect, useState } from 'react';

function MobileMenuScript() {
  const [lorem, setLorem] = useState('');
  useEffect(() => {
    const menu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.navbar-mobile');
    const hamburger = document.querySelector('.mobile__hamburger');
    const input = document.querySelector('input');
    const links = document.querySelectorAll('.mobile-menu-link');
    const handleToggle = () => {
      setLorem(''); // it's making that this component renders only one after resizing window and then click on hamburger
      // this component is rendering multiple times when resizing window
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    };
    links.forEach(link => {
      link.addEventListener('click', handleToggle);
    });
    input.addEventListener('click', handleToggle);
  }, [lorem]);
  return null;
}
export default MobileMenuScript;
