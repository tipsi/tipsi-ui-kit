import React, { Component, PropTypes } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import JSONTree from 'react-native-json-tree'

function format(arg) {
  if (arg && typeof arg.preventDefault !== 'undefined') {
    if (!arg.nativeEvent) {
      return '[SyntheticEvent]'
    }
    return { nativeEvent: arg.nativeEvent }
  }
  return arg
}

function processArgs(args = []) {
  return Array.from(args).map(format)
}

export default class Block extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    state: PropTypes.object,
    render: PropTypes.func.isRequired,
    wrapperStyle: PropTypes.object,
  }

  state = {
    actions: [],
    exampleState: this.props.state || {},
  }

  setExampleState = (state, callback) => this.setState({
    exampleState: {
      ...this.state.exampleState,
      ...state,
    },
  }, callback)

  action = name => (...args) => this.setState({
    actions: [
      { name, args: processArgs(args) },
      ...this.state.actions.slice(0, 4),
    ],
  })

  handleClearPress = () => {
    this.setState({ actions: [] })
  }

  render() {
    const { title, description, wrapperStyle, render } = this.props
    const { actions, exampleState } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {title}
          </Text>
          {description &&
            <Text style={styles.descriptionText}>
              {description}
            </Text>
          }
        </View>
        <View style={[styles.children, wrapperStyle]}>
          {render({
            state: exampleState,
            action: this.action,
            setState: this.setExampleState,
          })}
        </View>
        {!!actions.length &&
          <View style={styles.titleContainer}>
            {actions.map((action, key) => (
              <View key={key}>
                <Text>
                  {'event: '}
                  <Text style={styles.actionName}>
                    {action.name}
                  </Text>
                  {', args:'}
                </Text>
                <JSONTree
                  data={action.args}
                  hideRoot
                  theme={{
                    tree: { backgroundColor: 'transparent' },
                  }}
                />
              </View>
            ))}
            <TouchableOpacity
              style={styles.clearButton}
              onPress={this.handleClearPress}>
              <Text>Clear</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 14,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  actionName: {
    fontWeight: '600',
  },
  children: {
    flex: 1,
    margin: 10,
  },
})
