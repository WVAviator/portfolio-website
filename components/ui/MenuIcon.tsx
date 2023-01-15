interface MenuIconProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ open, setOpen }) => {
  const commonClasses = 'w-6 h-1 bg-primary-50 rounded-sm';

  return (
    <button
      id="menubutton"
      role="button"
      aria-haspopup="true"
      aria-label="Main Menu"
      aria-expanded={open}
      aria-controls="mobilemenu"
      className="lg:hidden h-7 w-7 flex flex-col justify-center items-center"
      onClick={() => setOpen(!open)}
    >
      <div className="relative">
        <div
          className={`${commonClasses} absolute ${
            open
              ? 'top-0 rotate-45 transition-top-then-rotate'
              : 'top-2 rotate-0 transition-rotate-then-top'
          }`}
        ></div>
        <div
          className={`${commonClasses} transition-opacity duration-0 delay-150 ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`${commonClasses} absolute ${
            open
              ? 'top-0 -rotate-45 transition-top-then-rotate'
              : '-top-2 rotate-0 transition-rotate-then-top'
          }`}
        ></div>
      </div>
    </button>
  );
};
export default MenuIcon;
