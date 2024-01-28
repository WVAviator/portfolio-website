import Link from 'next/link';
import react from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
  variant?: 'filled' | 'outlined' | 'ghost';
  children?: React.ReactNode;
  className?: string;
  endIcon?: react.ReactElement<any, any> | null;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'filled',
  children = '',
  className = '',
  endIcon = null,
  ...rest
}) => {
  const variantClasses = {
    filled:
      'bg-primary-400 hover:bg-primary-600 active:bg-primary-700 text-black dark:text-white',
    outlined:
      'border border-primary-400 hover:bg-primary-400/10 active:bg-primary-500/10 text-primary-400 dark:text-white',
    ghost: 'text-primary-400 hover:bg-primary-400/10 active:bg-primary-500/10',
  };

  const button = (
    <div
      className={
        `${variantClasses[variant]} transition-all duration-200 cursor-pointer ease-in-out py-2 px-4 rounded active:scale-95 focus:ring-2 focus:ring-primary-300/50 whitespace-nowrap ` +
        className
      }
    >
      <button {...rest}>
        <span className="flex items-center dark:text-shadow-sm">
          {children}

          {endIcon &&
            react.cloneElement(endIcon, {
              className: 'w-5 h-5 ml-2',
            })}
        </span>
      </button>
    </div>
  );

  if (!href) {
    return button;
  }

  return <Link href={href}>{button}</Link>;
};
export default Button;
