import {useState} from 'react' 
import { forwardRef } from 'react';
import { Box } from '@mui/material';
import { styleModal } from '../../../components/modal/modal';
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from '@mui/icons-material/Close';
type Props = {
  onClose: () => void;
};

type Inputs = {
  login: string;
  password: string;
};

const TaskModal = forwardRef<HTMLDivElement, Props>(({ onClose }, ref) => {

  const schema = yup.object().shape({
    login: yup.string().required("Login is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });


  return (
    <Box ref={ref} sx={{ ...styleModal }} tabIndex={0}>
        <div>
            <div className='w-full justify-end flex'>
                <button onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className='w-full'>
                <p className="text-center text-[20px] font-medium text-[var(--textBarColor)]">Новая пекарня</p>
            </div>
        </div>
    </Box>
  );
});

export default TaskModal;