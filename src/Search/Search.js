import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import shortid from 'shortid'
import themeable from '../utils/themeable'
import ThemeConstants from '../utils/ThemeConstants'

class Search extends Component {

  static propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.array,
    beforeSuggestionsRenderer: PropTypes.node,
    afterSuggestionsRenderer: PropTypes.node,
    onClear: PropTypes.func,
    onRowClick: PropTypes.func,
    endEditing: PropTypes.func,
    clearButtonMode: PropTypes.oneOf([
      'never',
      'while-editing',
      'unless-editing',
      'always',
    ]),
    highlightColor: PropTypes.string,
    clearButtonStyle: PropTypes.object,
    styles: PropTypes.object,
  }

  static defaultProps = {
    value: '',
    placeholder: 'Search...',
    suggestions: [],
    beforeSuggestionsRenderer: null,
    afterSuggestionsRenderer: null,
    onClear: () => {},
    onRowClick: () => {},
    endEditing: () => {},
    highlightColor: ThemeConstants.LIGHT_GRAY,
    clearButtonMode: 'always',
    styles: {},
    clearButtonStyle: { size: 20, color: ThemeConstants.LIGHT_GRAY },
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
    const {
      beforeSuggestionsRenderer,
      afterSuggestionsRenderer,
      clearButtonMode,
      clearButtonStyle,
      styles,
      highlightColor,
      onClear,
      onRowClick,
      suggestions,
      ...rest
    } = this.props
    let clearButton = (
      <TouchableOpacity style={styles.clearButtonWrapper} onPress={onClear} >
        <Icon name="times-circle" {...clearButtonStyle} />
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

    const items = suggestions.map(renderItem =>
      <TouchableHighlight
        key={shortid.generate()}
        onPress={() => { onRowClick(renderItem) }}
        underlayColor={highlightColor}>
        <View style={styles.row}>
          <Text style={styles.suggestionText} numberOfLines={1}> {renderItem} </Text>
        </View>
      </TouchableHighlight>)

    return (
      <View tyle={styles.container}>
        <View style={styles.textIputWrapper}>
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
            <ScrollView style={styles.scrollView} keyboardShouldPersistTaps>
              {items}
            </ScrollView>
          </KeyboardAvoidingView>
        }
        { afterSuggestionsRenderer }
      </View>
    )
  }
}

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textIputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  clearButtonWrapper: {
    marginLeft: 5,
    marginRight: 5,
  },
  separator: {
    height: 1,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: ThemeConstants.LIGHT_GRAY,
  },
  scrollView: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  suggestionText: {
    fontSize: 14,
  },
})

export default themeable(
  'Search',
  baseStyles,
)(Search)
