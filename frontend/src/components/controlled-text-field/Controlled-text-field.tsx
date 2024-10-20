import { Controller } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { ControlledTextFieldProps } from './Controlled-text-field-props.ts'

export const ControlledTextField = (
  {
    name,
    rules,
    label,
    sx,
    type,
    InputProps,
    labelType,
    labelSx,
    placeholder,
    disabled,
    multiline,
    id,
    changeHandler,
    handleSearchChange,
    inputProps
  }: ControlledTextFieldProps) => {
  return (
    <Controller
      name={name}
      rules={rules}
      render={({ field: { value = '', onChange, onBlur }, fieldState: { error } }) => (
        <>
          <TextField
            id={id}
            onInput={changeHandler}
            multiline={multiline || false}
            disabled={disabled || false}
            sx={{ ...sx, cursor: 'pointer' }}
            InputProps={InputProps}
            color='secondary'
            placeholder={placeholder}
            type={type || 'text'}
            helperText={error ? error.message : null}
            error={!!error}
            value={value}
            onChange={handleSearchChange || onChange}
            onBlur={onBlur}
            InputLabelProps={labelType === 'static' ? {
              shrink: false, sx: {
                top: '-46px',
                left: '-14px',
                fontWeight: '500',
                fontSize: '16px',
                color: '#888888',
                ...labelSx,
              },
            } : {}}
            label={label}
            variant='outlined'
            inputProps={{
              maxLength: multiline ? 600 : 50,
              autoComplete: 'new-password',
              ...inputProps
            }}
          />
        </>
      )}
    />
  )
}
