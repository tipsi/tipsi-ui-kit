import React, { PropTypes } from 'react'
import { View } from 'react-native'

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
}

const CenteredView = ({ children }) => (
  <View style={style}>
    {children}
  </View>
)

CenteredView.propTypes = {
  children: PropTypes.node,
}

export default CenteredView
