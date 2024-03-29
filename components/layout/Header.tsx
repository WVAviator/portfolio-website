import Logo from '../brand/Logo';
import HeaderNavigation from '../navigation/HeaderNavigation';

const Header: React.FC = () => {
  return (
    <>
      <header className="fixed z-10 w-full bg-black">
        <div className="page-container flex justify-between items-center bg-black text-primary-50 h-20">
          <Logo />
          <HeaderNavigation />
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
};
export default Header;
