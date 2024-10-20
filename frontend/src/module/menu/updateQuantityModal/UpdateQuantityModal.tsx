import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import {ControlledTextField} from "../../../components/controlled-text-field/Controlled-text-field.tsx";
import styles from './UpdateQuantityModal.module.css'
import {Button} from "@mui/material";

interface Inputs {
    quantity: number
}

interface Props {
    positionName: string
    positionQuantity: number
}

export const UpdateQuantityModal = ({positionName, positionQuantity}: Props) => {
    const formMethods = useForm<Inputs>({mode: 'onChange', defaultValues: {
        quantity: positionQuantity
        }})

    const {
        handleSubmit,
    } = formMethods

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className={styles.title}>
                        Обновить количество позиций: {positionName}
                    </h3>
                    <ControlledTextField
                        sx={{
                            width: '100%',
                        }}
                        labelType='moving'
                        type='number'
                        name='quantity'
                        label='Количество'
                        InputProps={{
                            sx: {
                                borderRadius: '12px',
                            },
                        }}
                        rules={{
                            required: 'Поле не заполнено',
                        }}
                    />
                    <Button type={'submit'} variant={'contained'}>Принять</Button>
                </form>
            </FormProvider>
        </div>
    )
}