import React from 'react';
import { ColorSchemeContext } from '../../lib/context/ColorSchemeProvider';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

interface ColorSchemeToggleProps {
  className?: string;
}

const ColorSchemeToggle: React.FC<ColorSchemeToggleProps> = ({
  className = '',
}) => {
  const { colorScheme, setColorScheme } = React.useContext(ColorSchemeContext);

  const handleClick = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleClick}
      className={`text-2xl cursor-pointer dark:text-white hover:text-primary-400 hover:dark:text-primary-400 ${className}`}
    >
      {colorScheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ColorSchemeToggle;
