import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import StylePropType from '../utils/StylePropType'
import ColorPallete from '../utils/ColorPallete'

const predefinedOptions = {
  sale: {
    text: 'On Sale',
    style: 'WineLabelSale',
  },
  pick: {
    text: 'Value Pick',
    style: 'WineLabelPick',
  },
  staff: {
    text: 'Staff Pick',
    style: 'WineLabelStaff',
  },
  noted: {
    text: 'Vintage',
    style: 'WineLabelNoted',
  },
}

export default class Label extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['sale', 'pick', 'staff', 'noted']),
    text: PropTypes.string,
    vintageType: PropTypes.string,
    style: StylePropType,
    textStyle: StylePropType,
  }

  render() {
    const predefinedStyle = this.props.type && predefinedOptions[this.props.type].style
    const wrapperStyle = [styles.WineLabel, this.props.style || styles[predefinedStyle]]
    let text = this.props.type && predefinedOptions[this.props.type].text
    text = this.props.type === 'noted' ? `${this.props.vintageType} ${text}` : text
    return (
      <View style={wrapperStyle}>
        <Text style={this.props.textStyle || styles.WineLabelText}>
          {this.props.text || text}
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
  WineLabelPick: {
    backgroundColor: ColorPallete.GREEN,
  },
  WineLabelNoted: {
    backgroundColor: ColorPallete.BROWN,
  },
  WineLabelSale: {
    backgroundColor: ColorPallete.RED,
  },
  WineLabelStaff: {
    backgroundColor: ColorPallete.YELLOW,
  },
})
