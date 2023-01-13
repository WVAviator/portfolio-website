import { useState } from 'react';
import Button from '../ui/Button';
import MainNavigation from './MainNavigation';
import MenuIcon from '../ui/MenuIcon';

const HeaderNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex gap-12 justify-between items-center">
      <MenuIcon open={open} setOpen={setOpen} />
      <MainNavigation open={open} setOpen={setOpen} />
      <Button href="/" className="hidden lg:block">
        Get a Quote
      </Button>
    </nav>
  );
};
export default HeaderNavigation;
