import React from 'react'

type InputFormProps = {
  name: string
} & HTMLInputElement

export const InputForm: React.FC<InputFormProps> = ({ name, ...props }) => {
  return (
    <div>
      <label>{name}</label>
    </div>
  )
}
