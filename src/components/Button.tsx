import { ReactNode } from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

interface ButtonRootProps extends TouchableOpacityProps {
  children: ReactNode
}

function ButtonRoot({ children, ...rest }: ButtonRootProps) {
  return (
    <TouchableOpacity
      className="w-full h-16 flex flex-row justify-center items-center bg-transparent border border-danger-base rounded-lg"
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

interface ButtonIconProps {
  children: ReactNode
}

function ButtonIcon({ children }: ButtonIconProps) {
  return <View className="mr-4">{children}</View>
}

interface ButtonTextProps {
  children: string
}

function ButtonText({ children }: ButtonTextProps) {
  return <Text className="font-heading text-base text-white">{children}</Text>
}

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
}
