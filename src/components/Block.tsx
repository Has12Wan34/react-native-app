import React from 'react'
import { View, ViewProps } from 'react-native'

interface IBlock extends ViewProps {
  children?: React.ReactNode;
}

const Block = ({ children, ...props }: IBlock) => {
  return <View {...props}>{children}</View>
}

export default Block