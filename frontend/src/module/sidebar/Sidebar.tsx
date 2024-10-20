import { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { MdKeyboardArrowLeft } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

type Props = {}

export default function SideBar({ }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [token, setToken] = useState<boolean | null>(null);

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(true);
    } else {
      setToken(false);
    }

  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside); 
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, [sidebarRef]);

  if (token === null) {
    return null;
  }

  return (
    <aside className='relative z-50'>
      <div className='w-full h-full flex'>
        <div ref={sidebarRef} className={`sm:h-[100dvh] fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[var(--sideBarColor)] shadow-lg z-20 border-r-[1px] border-[#e4e5e5] px-4 pt-6`}>
          <div className="flex justify-between items-center">
            <Link to={'/'} className='text-xl font-normal text-[var(--textColor)]' onClick={toggleSidebar}>manager.ai</Link>
            <button onClick={toggleSidebar} className={`rounded-full hover:bg-[var(--iconHoverColor)] duration-300 p-1 flex justify-center items-center`}>
              <ArrowBackIosIcon sx={{width: '20px', height: '20px'}} />
            </button>
          </div>  
        </div>
        <div className='m-5 z-10 ml-1'>
          {token ? (
            <button
              className={`rounded-full hover:bg-[var(--iconHoverColor)] duration-500 p-1 ${isOpen ? 'hidden' : 'block'}`}
              onClick={toggleSidebar}
            >
              <MenuIcon sx={{width: '30px', height: '30px'}} />
            </button>
          ) : (
            <h1 className='text-xl font-normal text-[var(--textColor)] mt-2 ml-4 sm:ml-0'>Manager.ai</h1>
          )}
        </div>
      </div>
    </aside>
  );
}