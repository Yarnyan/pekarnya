import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CakeIcon from '@mui/icons-material/Cake';
import { SvgIconComponent } from '@mui/icons-material';
import PieChartIcon from '@mui/icons-material/PieChart';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';

interface ILink {
    text: string;
    link: string;
}

export interface IAccordionItem {
    text: string;
    icon: SvgIconComponent;
    content: string;
    links: ILink[];
}

export const ADMIN_USER: IAccordionItem[] = [
    {
        text: 'Настройки',
        icon: SettingsIcon,
        content: 'Содержимое для Настройки',
        links: [
            { text: 'Музыка', link: '/settings/music' },
            { text: "Задачи", link: 'settings/task'}
        ]
    },
    {
        text: 'Персонал',
        icon: PeopleIcon,
        content: 'Содержимое для Персонала',
        links: [
            { text: 'Информация', link: '/personnel/employees' },
        ]
    },
    {
        text: 'Журнал',
        icon: ArticleIcon,
        content: 'Содержимое для Журнала',
        links: [
            { text: 'Просмотр журналов', link: '/journal/view' },
            { text: 'Создать запись', link: '/journal/create' },
            { text: 'История журналов', link: '/journal/history' }
        ]
    },
    {
        text: 'Меню',
        icon: MenuBookIcon,
        content: 'Содержимое для Меню',
        links: [
            { text: 'Информация', link: '/menu/information' },
        ]
    },
    {
        text: 'Торты', 
        icon: CakeIcon,
        content: 'Содержимое для Тортов',
        links: [
            { text: 'Вкусы и составы', link: '/cakes/view' },
            { text: 'Оформления', link: '/cakes/design' },
        ]
    },
    {
        text: 'Пироги', 
        icon: PieChartIcon,
        content: 'Содержимое для Тортов',
        links: [
            { text: 'Создание', link: '/pie/create' },
            { text: 'Комментарий', link: '/pie/add' },
        ]
    },
    {
        text: 'Пекарня',
        icon: BreakfastDiningIcon,
        content: 'Содержимое для Пекарни',
        links: [
            { text: 'Создание пекарни', link: '/bakery/create' },
        ]
    }
];