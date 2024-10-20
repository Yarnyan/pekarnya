import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Controller, FieldValues, RegisterOptions } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import { SxProps, Theme } from '@mui/material'

interface ControlledSelectProps {
  name: string
  options: { value: any, content: string }[]
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  sx?: SxProps<Theme>
  label?: string
  disabled?: boolean
  handleBlur?: () => void
}

export const ControlledSelect = (
  {
    name, rules = { required: 'Поле не заполнено' }, options, label, sx, disabled, handleBlur
  }: ControlledSelectProps) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value = [options[0].value], onBlur, onChange } }) => (
        <div>
          <InputLabel style={{margin: '0 5px'}} id={label}>{label}</InputLabel>
          <Select
            style={{margin: '0 5px'}}
            disabled={disabled || false}
            sx={{...sx}}
            labelId={label}
            value={value}
            label={name}
            onBlur={() => {
              if (handleBlur) {
                handleBlur()
              }
              onBlur()
            }}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map(option => {
              return <MenuItem key={option.content} value={option.value}>{option.content}</MenuItem>
            })}
          </Select>
        </div>
      )}
    />
  )
}