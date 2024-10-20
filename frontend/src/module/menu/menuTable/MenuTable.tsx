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
import {CreatePositionModal} from "../CreatePositionModal/CreatePositionModal.tsx";
import {UpdateQuantityModal} from "../updateQuantityModal/UpdateQuantityModal.tsx";

export interface Product {
    name: string
    bakery: string
    role: string
    quantity: number
    id: string
}

const personal: Product[] = [
    {
        name: 'бургер',
        bakery: 'пекарня 1',
        role: 'Пекарь',
        quantity: 3,
        id: '1'
    },
    {
        name: 'торт',
        bakery: 'пекарня 2',
        role: 'Кондитер',
        quantity: 12,
        id: '2'
    },
    {
        name: 'пицца',
        bakery: 'пекарня 3',
        role: 'Пекарь',
        quantity: 7,
        id: '3'
    },
    {
        name: 'хлеб белый',
        bakery: 'пекарня 4',
        role: 'Пекарь',
        quantity: 77,
        id: '4'
    },
    {
        name: 'ПИРОЖНОЕ КАРТОШКА!',
        bakery: 'пекарня 1',
        role: 'Кондитер',
        quantity: 41,
        id: '5'
    }
]

const bakeries: string[] = ['пекарня 1', 'пекарня 2', 'пекарня 3', 'пекарня 4',]

export const MenuTable = () => {
    const [bakery, setBakery] = useState<string | undefined>(undefined)
    const [role, setRole] = useState<string | undefined>(undefined)
    const [isOpen, setIsOpen] = useState(false)
    const [changeQuantity, setChangeQuantity] = useState<null | {name: string, quantity: number}>(null)

    const data = personal.filter(p => {
        return (role ? p.role === role : true) && (bakery ? p.bakery === bakery : true)
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
                <Button onClick={() => setIsOpen(true)} variant={"outlined"}>Создать позицию в меню</Button>
            </Box>
            <CustomTable
                columnNames={['Позиция', 'Количество', 'Роль', 'Пекарня', '']}
                rows={data.map(row => {
                    return <TableRow
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell
                            sx={{cursor: 'pointer'}}
                            align="left"
                            onClick={() => setChangeQuantity({name: row.name, quantity: row.quantity})}
                        >
                            {row.quantity}
                        </TableCell>
                        <TableCell align="left">{row.role}</TableCell>
                        <TableCell align="left">{row.bakery}</TableCell>
                        <TableCell align="left"><Button>Удалить</Button></TableCell>
                    </TableRow>
                })}
            />
            <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <CreatePositionModal/>
                </div>
            </Modal>
            {changeQuantity &&
                <Modal open={!!changeQuantity} onClose={() => setChangeQuantity(null)} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div>
                        <UpdateQuantityModal positionName={changeQuantity!.name} positionQuantity={changeQuantity!.quantity}/>
                    </div>
                </Modal>
            }
        </Box>
    );
};