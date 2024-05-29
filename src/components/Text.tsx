import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

interface IText extends TextProps {
  children?: React.ReactNode;
}

const Text = ({ children, ...props }: IText) => {
  return <RNText {...props}>{children}</RNText>
}

export default Text