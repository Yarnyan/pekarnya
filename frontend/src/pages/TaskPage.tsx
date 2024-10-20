import { useState } from 'react'
import Breadcrumb from "../module/breadcrumb/Breadcrumb"
import Task from "../module/task/Task"
import Modal from '@mui/material/Modal';
import TaskModal from "../module/task/modal/TaskModal";
import CreateTaskModal from '../module/task/modal/CreateTaskModal';
type Props = {}
export default function TaskPage({ }: Props) {
    const [open, setOpen] = useState(false);
    const [openCreate, setOpenCreate] = useState(false)
    return (
        <div>
            <Breadcrumb />
            <Task onOpen={() => setOpen(true)} openCreate={() => setOpenCreate(true)}/>
            <Modal open={open} onClose={() => setOpen(false)}>
                <TaskModal onClose={() => setOpen(false)} />
            </Modal>
            <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
                <CreateTaskModal onClose={() => setOpenCreate(false)} />
            </Modal>
        </div>
    )
}