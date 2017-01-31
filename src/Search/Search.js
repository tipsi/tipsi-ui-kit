import React, { Component, PropTypes } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import shortid from 'shortid'

export default class Search extends Component {

  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.array,
    beforeSuggestionsRenderer: PropTypes.object,
    onClear: PropTypes.func,
    onRowClick: PropTypes.func,
    endEditing: PropTypes.func,
    clearButtonMode: PropTypes.oneOf([
      'never',
      'while-editing',
      'unless-editing',
      'always',
    ]),
  }

  static defaultProps = {
    value: '',
    placeholder: 'Search...',
    suggestions: [],
    beforeSuggestionsRenderer: null,
    onClear: () => {},
    onRowClick: () => {},
    endEditing: () => {},
    clearButtonMode: 'while-editing',
  }

  state = { isEditing: false }

  onFocus = () => {
    this.setState({
      isEditing: true,
    })
  }

  onEndEditing = () => {
    this.setState({
      isEditing: false,
    })
    this.props.endEditing()
  }

  render() {
    const { beforeSuggestionsRenderer, clearButtonMode, ...rest } = this.props
    let clearButton = (
      <TouchableOpacity style={styles.clearButton} onPress={this.props.onClear} >
        <Icon name="times-circle" size={20} color="#BFCBD7" />
      </TouchableOpacity>
    )
    switch (clearButtonMode) {
    case 'never':
      clearButton = false
      break
    case 'while-editing':
      if (!this.state.isEditing || this.props.value.length === 0) {
        clearButton = false
      }
      break
    case 'unless-editing':
      if (this.state.isEditing) {
        clearButton = false
      }
      break
    default:
      break
    }

    const items = this.props.suggestions.map(renderItem =>
      <TouchableHighlight
        key={shortid.generate()}
        onPress={() => { this.props.onRowClick(renderItem) }}
        underlayColor="#ddd">
        <View style={styles.row}>
          <Text numberOfLines={1}> {renderItem} </Text>
        </View>
      </TouchableHighlight>)

    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onFocus={this.onFocus}
            onEndEditing={this.onEndEditing}
            {...rest}
          />
          { clearButton }
        </View>
        { beforeSuggestionsRenderer }
        {items.length > 0 &&
          <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <View style={styles.separator} />
            <ScrollView keyboardShouldPersistTaps>
              {items}
            </ScrollView>
          </KeyboardAvoidingView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  clearButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  separator: {
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'lightgray',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
})
