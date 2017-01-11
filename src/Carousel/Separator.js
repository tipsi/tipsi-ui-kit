import React from 'react'
import { StyleSheet } from 'react-native'
import Dash from 'react-native-dash'

const Separator = () => (
  <Dash
    style={styles.view}
    dashGap={3.5}
    dashLength={3}
    dashThickness={1}
    dashColor="#c7d1dc"
  />
)

const styles = StyleSheet.create({
  view: {
    overflow: 'hidden',
    marginHorizontal: 2,
  },
})

export default Separator
