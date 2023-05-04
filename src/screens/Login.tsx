import { View, Text } from 'react-native'
import { RocketLaunch, GoogleLogo } from 'phosphor-react-native'

import { theme } from '../theme'
import { Button } from '../components/Button'

export function Login() {
  return (
    <View className="flex-1 flex justify-center p-4">
      <View className="flex items-center justify-center">
        <RocketLaunch size={240} color={theme.colors.rocketseat.mid} />
      </View>

      <Text className="mt-14 text-2xl text-gray-100 font-heading">
        Ja fez seu Login ?
      </Text>
      <Text className="mt-3 font-heading text-base text-gray-200">
        Faça parte da maior comunidade de Projeto de Tecnologia
      </Text>

      <Button.Root className="mt-16">
        <Button.Icon>
          <GoogleLogo size={32} color={theme.colors.danger.base} />
        </Button.Icon>
        <Button.Text>LOGIN COM GOOGLE</Button.Text>
      </Button.Root>

      <Button.Root className="mt-3">
        <Button.Icon>
          <GoogleLogo size={32} color={theme.colors.danger.base} />
        </Button.Icon>
        <Button.Text>LOGIN COM GITHUB</Button.Text>
      </Button.Root>

      <Button.Root className="mt-3">
        <Button.Icon>
          <GoogleLogo size={32} color={theme.colors.danger.base} />
        </Button.Icon>
        <Button.Text>LOGIN COM FACEBOOK</Button.Text>
      </Button.Root>
    </View>
  )
}
