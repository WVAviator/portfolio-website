import Link from 'next/link';
import Initials from './Initials';

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <div className="flex gap-5 items-center text-xl">
        <Initials />
        <span className="text-primary-400 hidden xsm:block">
          Alexander Durham
        </span>
      </div>
    </Link>
  );
};
export default Logo;
