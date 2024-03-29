interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className = '' }) => {
  return (
    <section
      aria-label="sidebar"
      className="hidden md:flex flex-col items-center min-w-[33%] flex-1 w-full min-h-screen p-6 pt-0"
    >
      <div
        className={`flex flex-col items-center justify-center w-full sticky top-36 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};
export default Sidebar;
