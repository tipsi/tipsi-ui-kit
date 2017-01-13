import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { View, StyleSheet } from 'react-native'
// import StylePropType from '../utils/StylePropType'
import TabItem from './TabItem'

export default class ColoredTabs extends Component {
  static propTypes = {
    children: PropTypes.node,
    // theme: PropTypes.oneOf(['light', 'dark']),
    // style: StylePropType,
    selected: PropTypes.string,
  }

  // static defaultProps = {
  //   theme: 'light',
  // }

  static TabItem = TabItem

  constructor(props) {
    super(props)
    this.state = { selected: props.selected, children: props.children }
  }

  handleTabPress = (id) => {
    this.setState({
      selected: id,
    })
  }

  render() {
    // const { children } = this.props
    console.log('render')

    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {Children.map(this.props.children.filter(c => c), (child) => {
            console.log(child.props.name)
            console.log(child.props.id)
            if (child.props.id === this.state.selected) {
              console.log('if worked selected ' + child.props.id)
              // child.setState({ active: true })
            } else {
              // child.setState({ active: false })
            }
            // return child
              return child.props.id === this.state.selected ? cloneElement(child, { active: true, onPress: this.handleTabPress }) : cloneElement(child, { active: false, onPress: this.handleTabPress })
          })}
        </View>
      </View>
    )
  }
}

// <View
//   style={{
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     width: 150,
//     height: 150,
//   }}>
//   <View style={{width: 10, height: 10, backgroundColor: 'powderblue'}} />
//   <View style={{width: 10, height: 10, backgroundColor: 'skyblue'}} />
//   <View style={{width: 10, height: 10, backgroundColor: 'steelblue'}} />
// </View>

// <View style={{ margin: -5, borderTopLeftRadius: 5,
// flex: 1, height: 40, backgroundColor: 'crimson' }} />
// <View style={{ margin: -5, borderTopLeftRadius: 5,
// flex: 1, height: 40, backgroundColor: 'orange' }} />
// <View style={{ margin: -5, borderTopLeftRadius: 5,
// flex: 1, height: 40, backgroundColor: 'chartreuse' }} />
// <View style={{ margin: -5, borderTopLeftRadius: 5,
// flex: 1, height: 40, backgroundColor: 'dodgerblue' }} />

// {Children.map(children, child => cloneElement(child, { theme }))}
          // {Children.map(this.props.children, child => child)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: 3,
    marginBottom: 13,
    fontSize: 15,
    fontWeight: '600',
  },
  titleDark: {
    color: 'white',
  },
  tabContainer: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
})
