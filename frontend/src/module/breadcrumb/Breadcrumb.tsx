import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation } from 'react-router-dom';

type Props = {}

const translations: { [key: string]: string } = {
  'settings': 'настройки',
  'music': 'музыка',
  'cakes': 'торты',
  'view': 'состав'
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function Breadcrumb({ }: Props) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" className='sm:mt-4'>
      {pathnames.map((pathname, index) => {
        const translatedPathname = translations[pathname] || pathname;
        const capitalizedPathname = capitalizeFirstLetter(translatedPathname);
        return (
          <p key={index} className='text-[#6b778c] text-[18px] font-medium'>
            {capitalizedPathname}
          </p>
        );
      })}
    </Breadcrumbs>
  )
}