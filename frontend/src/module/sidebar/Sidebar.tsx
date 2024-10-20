import { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ADMIN_USER } from './data/data';

type Props = {}

export default function SideBar({ }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
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

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <aside className='relative z-50'>
      <div className='w-full h-full flex'>
        <div ref={sidebarRef} className={`sm:h-[100dvh] fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[var(--sideBarColor)] shadow-lg z-20 border-r-[1px] border-[#e4e5e5] px-4 pt-6`}>
          <div className="flex justify-between items-center">
            <Link to={'/'} className='text-xl font-normal text-[var(--textColor)]' onClick={toggleSidebar}>manager.ai</Link>
            <button
              onClick={toggleSidebar}
              className={`rounded-full p-1 block`}
            >
              <ArrowBackIosIcon fontSize='medium' />
            </button>
          </div>
          <div className='mt-4'>
            <p className='text-[18px] font-medium text-center text-[var(--textBarColor)]'>Навигация по разделам</p>
          </div>
          <div className='mt-4'>
            {ADMIN_USER.map((item, index) => (
              <div key={index} className='mb-[12px]'>
                <div onClick={() => toggleAccordion(index)} className="flex items-center cursor-pointer p-2 hover:bg-gray-200 justify-between">
                  <div className="flex items-center">
                    <div>
                      <item.icon sx={{fill: 'var(--textBarColor)'}} />
                    </div>
                    <span className='ml-[16px] text-[16px] font-medium text-center text-[var(--textBarColor)]'>{item.text}</span>
                  </div>
                  <ExpandMoreIcon className={`transition-transform ${openAccordion === index ? 'rotate-180' : ''}`} />
                </div>
                <Collapse in={openAccordion === index}>
                  <div className="pl-6 pr-4">
                    <ul>
                      {item.links.map((link, linkIndex) => (
                        <li key={linkIndex} className='mt-[14px] mb-[14px]'>
                          <Link to={link.link} className='text-[16px] font-medium text-[#6b778c] duration-300  hover:text-[#172b4d]' onClick={toggleSidebar}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>

        </div>
        <div className='m-5 z-10 ml-1'>
          {token ? (
            <button
              className={`rounded-full hover:bg-[var(--iconHoverColor)] duration-500 p-1 ${isOpen ? 'hidden' : 'block'}`}
              onClick={toggleSidebar}
            >
              <MenuIcon sx={{ width: '30px', height: '30px' }} />
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </aside>
  );
}
