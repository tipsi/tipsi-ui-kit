import React, { Component, PropTypes } from 'react'
import { View, ListView, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import register from './utils/register'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (h1, h2) => h1 !== h2,
})

export default class List extends Component {
  static propTypes = {
    pushState: PropTypes.func.isRequired,
  }

  state = {
    search: '',
  }

  handleSeachChange = search => (
    this.setState({ search })
  )

  handleShowExample = example => (
    this.props.pushState('Example', example)
  )

  renderRow = example => (
    <View key={example.title}>
      <TouchableHighlight
        accessible
        accessibilityLabel={example.title}
        testID={example.title}
        onPress={() => this.handleShowExample(example)}>
        <View style={styles.row}>
          <Text style={styles.rowTitleText}>
            {example.title}
          </Text>
          <Text style={styles.rowDetailText}>
            {example.description}
          </Text>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />
    </View>
  )

  renderSectionHeader = (data, section) => (
    <Text style={styles.sectionHeader}>
      {section.toUpperCase()}
    </Text>
  )

  render() {
    const dataSource = ds.cloneWithRowsAndSections(
      register.filter(this.state.search)
    )

    return (
      <View style={styles.listContainer}>
        <View style={styles.searchRow}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={this.handleSeachChange}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            style={styles.searchTextInput}
            value={this.state.search}
          />
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
          enableEmptySections
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps
          automaticallyAdjustContentInsets={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  rowDetailText: {
    fontSize: 15,
    color: '#888888',
    lineHeight: 20,
  },
  sectionHeader: {
    padding: 5,
    fontWeight: '500',
    fontSize: 11,
  },
  searchRow: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  searchTextInput: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    paddingLeft: 8,
    paddingVertical: 0,
    height: 35,
  },
})
