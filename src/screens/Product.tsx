import React from 'react'

import {
  Image,
  StyleSheet,
  StatusBar,
  Text, 
  View 
} from 'react-native'

import { RouteProp } from '@react-navigation/native'

import { RoutesInterface } from './../interfaces/routes'

interface Props extends RoutesInterface {
  route: RouteProp<{
    params: {
      id: number,
      name: string,
      photo: string,
      description: string
    }
  }>
}

const Product = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#6200EE"
      />

      <Image
        style={styles.image}
        source={{
          uri: route.params.photo
        }}
      />

      <Text style={styles.name}>{route.params.name}</Text>

      <Text style={styles.descriptionLabel}>descrição</Text>

      <Text style={styles.description}>{route.params.description}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    paddingHorizontal: 10,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    backgroundColor: '#FFF'
  },
  image: {
    height: 250,
    width: 250,

    marginBottom: 10
  },
  name: {
    marginBottom: 25,

    fontSize: 16,
    color: '#000'
  },
  descriptionLabel: {
    marginBottom: 10,

    fontSize: 14,
    color: 'grey'
  },
  description: {
    fontSize: 16,
    color: '#000'
  }
})
