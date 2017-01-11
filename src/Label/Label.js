import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { StylePropType } from '../utils/CustomPropTypes'

export default class Label extends Component {
  static propTypes = {
    text: PropTypes.string,
    style: StylePropType,
    textStyle: StylePropType,
  }

  static defaultProps = {
    textStyle: {},
    style: {},
  }

  render() {
    return (
      <View style={[styles.WineLabel, this.props.style]}>
        <Text style={[styles.WineLabelText, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  WineLabel: {
    marginRight: 5,
    marginTop: 4,
    ...Platform.select({
      ios: {
        paddingTop: 2,
      },
      android: {
        paddingTop: 1,
      },
    }),
    paddingRight: 5,
    paddingBottom: 2,
    paddingLeft: 5,
    borderRadius: 3,
    alignSelf: 'flex-start',
    height: 20,
    overflow: 'hidden',
  },
  WineLabelText: {
    color: '#fff',
    fontSize: 12,
  },
})
