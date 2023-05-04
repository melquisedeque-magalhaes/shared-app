import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Login } from './src/screens/Login'

export default function App() {
  const [isFontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <View className="bg-gray-950 flex-1">
      <StatusBar style="light" translucent backgroundColor="transparent" />
      {isFontLoaded ? <Login /> : <Text>Carregando</Text>}
    </View>
  )
}
