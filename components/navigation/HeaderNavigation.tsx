import { useState } from 'react';
import Button from '../ui/Button';
import MainNavigation from './MainNavigation';
import MenuIcon from '../ui/MenuIcon';

const HeaderNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:gap-12">
      <MenuIcon open={open} setOpen={setOpen} />
      <MainNavigation open={open} setOpen={setOpen} />
      <Button href="#contactme" className="hidden lg:block">
        Hire Me
      </Button>
    </nav>
  );
};
export default HeaderNavigation;
