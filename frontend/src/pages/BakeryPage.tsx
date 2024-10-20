import { useState } from 'react'
import Breadcrumb from "../module/breadcrumb/Breadcrumb"
import { BakeryTable } from "../module/bakery/BakeryTable"
import Modal from '@mui/material/Modal';
import BakeryModal from '../module/bakery/modal/BakeryModal';
type Props = {}
export default function BakeryPage({ }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Breadcrumb />
            <BakeryTable onOpen={() => setOpen(true)} />
            <Modal open={open} onClose={() => setOpen(false)}>
                <BakeryModal onClose={() => setOpen(false)} />
            </Modal>
        </div>
    )
}