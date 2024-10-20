import {
    Box, Button, FormControl,
    InputLabel,
    MenuItem,
    Paper, Select, Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
import {CustomTable} from "../../customTable/CustomTable.tsx";
import {useState} from "react";
import Modal from "@mui/material/Modal";
import {PersonalModal} from "../PersonalModal/PersonalModal.tsx";

export interface Personal {
    name: string
    bakery: string
    role: string
    email?: string
    visible: boolean
    id: string
}

const personal: Personal[] = [
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
        role: 'Управляющий',
        visible: true,
        id: '2'
    },
    {
        name: 'Ivan Ivanov3',
        bakery: 'пекарня 3',
        role: 'Кассир',
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
        role: 'Управляющий',
        visible: true,
        id: '5'
    }
]

const bakeries: string[] = ['пекарня 1', 'пекарня 2', 'пекарня 3', 'пекарня 4',]

export const PersonalTable = () => {
    const [bakery, setBakery] = useState<string | undefined>(undefined)
    const [role, setRole] = useState<string | undefined>(undefined)
    const [visible, setVisible] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState(false)

    const data = personal.filter(p => {
        return (role ? p.role === role : true) && (bakery ? p.bakery === bakery : true) && (visible ? p.visible : true)
    })

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', mt: '16px'}}>
            <Box sx={{display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center'}}>
                <FormControl>
                    <InputLabel id="Bakery-select-label">Пекарня</InputLabel>
                    <Select
                        sx={{minWidth: 200}}
                        labelId="Bakery-select-label"
                        id="Bakery-select"
                        value={bakery}
                        label="Bakery"
                        onChange={(event) => setBakery(event.target.value as string)}
                    >
                        {bakeries.map(b => {
                            return <MenuItem value={b} key={b}>{b}</MenuItem>
                        })}
                        <MenuItem value={undefined}>none</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="Role-select-label">Роль</InputLabel>
                    <Select
                        sx={{minWidth: 200}}
                        labelId="Role-select-label"
                        id="Role-select"
                        value={role}
                        label="Role"
                        onChange={(event) => setRole(event.target.value as string)}
                    >
                        <MenuItem value={undefined}>none</MenuItem>
                        <MenuItem value={'Управляющий'}>Управляющий</MenuItem>
                        <MenuItem value={'Кассир'}>Кассир</MenuItem>
                        <MenuItem value={'Пекарь'}>Пекарь</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <Typography>{visible ? 'Показать скрытых' : "Убрать скрытых" }</Typography>
                    <Switch checked={!visible} onClick={() => setVisible(!visible)}/>
                </Box>
                <Button onClick={() => setIsOpen(true)} variant={"outlined"}>Создать пользователя</Button>
            </Box>
            <CustomTable
                columnNames={['ФИО', 'Email', 'Роль', 'Пекарня', '',]}
                rows={data.map(row => {
                    return <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.email || "no Email"}</TableCell>
                        <TableCell align="left">{row.role}</TableCell>
                        <TableCell align="left">{row.bakery}</TableCell>
                        <TableCell align="left">
                            {row.visible ?
                                <Button>Скрыть</Button>
                                :
                                <Button>Раскрыть</Button>
                            }
                        </TableCell>
                    </TableRow>
                })}
            />
            <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{display: "flex", alignItems: "center"}}>
                <PersonalModal/>
            </Modal>
        </Box>
    );
};