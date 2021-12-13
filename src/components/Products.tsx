import React from 'react'

import {
  FlatList,
  Image,
  StyleSheet, 
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  useProducts
} from './../hooks'

import { RoutesInterface } from './../interfaces/routes'

interface Props {
  goToProduct: Function
}

const Products = ({ goToProduct }: Props) => {
  const products = useProducts()

  return (
    <View>
      <FlatList
        data={products}
        renderItem={(item) => {
          return (
            <TouchableOpacity 
              style={styles.item}
              onPress={() => {
                goToProduct(item.item.id, item.item.name, item.item.description, item.item.photo)
              }}
            >
              <Image
                style={styles.itemImage}
                source={{
                  uri: item.item.photo
                }}
              />

              <Text style={styles.itemText}>{item.item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingBottom: 10,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1'
  },

  itemImage: {
    height: 80,
    width: 80,

    marginRight: 15
  },

  itemText: {
    fontSize: 14,
    color: '#000',

    overflow: 'hidden'
  }
})
