import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import {ControlledTextField} from "../../../components/controlled-text-field/Controlled-text-field.tsx";
import {ControlledSelect} from "../../../components/controlled-select/Controlled-select.tsx";
import styles from './PersonalModal.module.css'
import {Button} from "@mui/material";
import {useForceUpdate} from "../../../hooks/useForceUpdate.tsx";

interface Inputs {
    name: string
    role: string
    bakery: string
    email?: string
}

export const PersonalModal = () => {
    const forceUpdate = useForceUpdate()

    const formMethods = useForm<Inputs>({mode: 'onChange'})

    const {
        handleSubmit,
        getValues
    } = formMethods

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
    }

    return (
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
            <FormProvider {...formMethods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>
                        Создать пользователя
                    </h3>
                    <ControlledTextField
                        sx={{
                            width: '90%',
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
                    <ControlledSelect
                        sx={{
                            width: '90%',
                        }}
                        labelType='moving'
                        type='email'
                        name='email'
                        label='Email'
                        InputProps={{
                            sx: {
                                borderRadius: '12px',
                            },
                        }}
                        handleChange={() => forceUpdate()}
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
                    {
                        getValues().role === "Управляющий" &&
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
                    }
                    <>
                        <ControlledTextField
                            sx={{
                                width: '90%',
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
                            label='Требуемый опыт'
                            name='experience'
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
                    <Button type={'submit'}>Принять</Button>
                </form>
            </FormProvider>
        </div>
    )
}