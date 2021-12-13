import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RoutesDefinition = {
  Home: undefined,
  Product: {
    id: number,
    name: string,
    photo: string,
    description: string
  }
}

export interface RoutesInterface extends NativeStackScreenProps<RoutesDefinition> {}