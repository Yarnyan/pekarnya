import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    IconButton,
    Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

type TaskProps = {
    title: string;
    onOpen: () => void;
};

type Props = {
    onOpen: () => void;
    openCreate: () => void;
}

const NestedAccordion: React.FC<TaskProps> = ({ title, onOpen }) => {
    return (
        <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <Box sx={{ background: '#fafbfc', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: '0 10px' }}>
                <Typography>{title}</Typography>
                <Box>
                    <IconButton sx={{ marginLeft: 'auto' }} onClick={onOpen}>
                        <InfoIcon color='primary' />
                    </IconButton>
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <DeleteIcon color='error' />
                    </IconButton>
                </Box>
            </Box>
        </Accordion>
    );
};

export default function Task({ onOpen, openCreate }: Props) {
    const mainTasks = [
        {
            title: 'Project A',
            subTasks: [
                {
                    title: 'Phase 1',
                    tasks: ['Task 1', 'Task 2', 'Task 3'],
                },
                {
                    title: 'Phase 2',
                    tasks: ['Task 4', 'Task 5'],
                },
            ],
        },
        {
            title: 'Project B',
            subTasks: [
                {
                    title: 'Phase 1',
                    tasks: ['Task 6', 'Task 7'],
                },
            ],
        },
    ];

    return (
        <div className='mt-8'>
            <div>
                <div className="w-full flex justify-end">
                    <button onClick={openCreate} className="p-2 bg-[#6495ED] w-[100px] text-[#fff] text-[14px rounded hover:bg-[#728FCE] duration-300">Создать</button>
                </div>
            </div>
            <div className='mt-4'>
                {mainTasks.map((project, index) => (
                    <Accordion key={index} sx={{ boxShadow: 'none', border: 'none' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ background: '#fafbfc' }}>
                            <Typography>{project.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {project.subTasks.map((subTask, subIndex) => (
                                <NestedAccordion key={subIndex} title={subTask.title} onOpen={onOpen} />
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}