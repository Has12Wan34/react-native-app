import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

interface IInput extends TextInputProps {}

const Input = ({ ...props }: IInput) => {
  return <TextInput {...props} />
}

export default Input