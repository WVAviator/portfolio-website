import { useState } from 'react';
import Button from '../ui/Button';
import MainNavigation from './MainNavigation';
import MenuIcon from '../ui/MenuIcon';
import ColorSchemeToggle from '../ui/ColorSchemeToggle';

const HeaderNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:gap-12">
      <ColorSchemeToggle className="mx-6 lg:hidden" />
      <MenuIcon open={open} setOpen={setOpen} />
      <MainNavigation open={open} setOpen={setOpen} />
      <ColorSchemeToggle className="hidden lg:block" />
      <Button href="#contactme" className="hidden lg:block">
        Hire Me
      </Button>
    </nav>
  );
};
export default HeaderNavigation;
