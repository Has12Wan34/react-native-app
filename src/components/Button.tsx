import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface IButton extends TouchableOpacityProps {
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: IButton) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>
}

export default Button