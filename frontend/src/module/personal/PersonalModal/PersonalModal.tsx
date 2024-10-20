import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import {ControlledTextField} from "../../../components/controlled-text-field/Controlled-text-field.tsx";
import {ControlledSelect} from "../../../components/controlled-select/Controlled-select.tsx";
import styles from './PersonalModal.module.css'
import {Button} from "@mui/material";

interface Inputs {
    name: string
    role: string
    bakery: string
    email?: string
}

export const PersonalModal = () => {
    const formMethods = useForm<Inputs>({mode: 'onChange'})

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
                        Создать пользователя
                    </h3>
                    <ControlledTextField
                        sx={{
                            width: '100%',
                        }}
                        labelType='moving'
                        type='text'
                        name='name'
                        label='ФИО'
                        InputProps={{
                            sx: {
                                borderRadius: '12px',
                            },
                        }}
                        rules={{
                            required: 'Поле не заполнено',
                        }}
                    />
                    <ControlledTextField
                        sx={{
                            width: '100%',
                        }}
                        labelType='moving'
                        type='email'
                        name='email'
                        label='email'
                        InputProps={{
                            sx: {
                                borderRadius: '12px',
                            },
                        }}
                        rules={{
                            required: 'Поле не заполнено',
                        }}
                    />
                    <>
                        <ControlledTextField
                            sx={{
                                width: '100%',
                            }}
                            labelType='moving'
                            type='text'
                            name='bakery'
                            label='Пекарня'
                            InputProps={{
                                sx: {
                                    borderRadius: '12px',
                                },
                            }}
                            rules={{
                                required: 'Поле не заполнено',
                            }}
                        />
                        <ControlledSelect
                            sx={{
                                width: '320px',
                            }}
                            label='Роль'
                            name='role'
                            options={
                                [
                                    {value: 'Пекарь', content: 'Пекарь'},
                                    {value: 'Управляющий', content: 'Управляющий'},
                                    {value: 'Кассир', content: 'Кассир'},
                                    {value: 'Кондитер', content: 'Кондитер'},
                                ]
                            }
                            rules={{
                                required: 'Поле не заполнено',
                            }}
                        />
                    </>
                    <Button type={'submit'} variant={'contained'}>Принять</Button>
                </form>
            </FormProvider>
        </div>
    )
}