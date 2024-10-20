import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {CustomTable} from "../../customTable/CustomTable.tsx";

export interface Personal {
    name: string
    bakery: string
    role: string
    email?: string
    visible: boolean
    id: string
}

const data: Personal[] = [
    {
        name: 'Ivan Ivanov',
        bakery: 'пекарня 1',
        role: 'Пекарь',
        visible: true,
        id: '1'
    },
    {
        name: 'Ivan Ivanov2',
        bakery: 'пекарня 2',
        email: 'vanya@mail.com',
        role: 'Администратор',
        visible: true,
        id: '2'
    },
    {
        name: 'Ivan Ivanov3',
        bakery: 'пекарня 3',
        role: 'Пекарь',
        visible: true,
        id: '3'
    },
    {
        name: 'Ivan Ivanov4',
        bakery: 'пекарня 4',
        role: 'Пекарь',
        visible: false,
        id: '4'
    },
    {
        name: 'Ivan Ivanov5',
        bakery: 'пекарня 1',
        email: 'vanya228@mail.ru',
        role: 'Администратор',
        visible: true,
        id: '5'
    }
]

export const PersonalTable = () => {
    return (
        <CustomTable
            columnNames={['ФИО', 'Email', 'Роль', 'Пекарня', 'Скрыть',]}
            rows={data.map(row => {
                return <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email || "no Email"}</TableCell>
                    <TableCell align="left">{row.role}</TableCell>
                    <TableCell align="left">{row.bakery}</TableCell>
                    <TableCell align="left">{row.visible ? "true": "false"}</TableCell>
                </TableRow>
            })}
        />
    );
};