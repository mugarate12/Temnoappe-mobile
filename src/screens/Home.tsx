import React from 'react'

import { 
  Button,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text, 
  View 
} from 'react-native'

import {
  Products
} from './../components'

import { RoutesInterface } from './../interfaces/routes'

type Props = RoutesInterface;

const Home = ({ navigation }: Props) => {
  function goToProduct(id: number, name: string, description: string, photo: string) {
    navigation.navigate('Product', { 
      id:  id,
      name:  name,
      description:  description,
      photo:  photo,
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#6200EE"
      />

      <Products goToProduct={goToProduct} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '#FFF'
  }
})
