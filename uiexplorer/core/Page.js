import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import testID from './utils/testID'

export default class Page extends Component {
  static propTypes = {
    noScroll: PropTypes.bool,
    noSpacer: PropTypes.bool,
    children: PropTypes.node,
  }

  render() {
    const { noScroll, noSpacer, children } = this.props

    return (
      <View style={styles.pageContainer} {...testID('UIExplorerExamplesList')}>
        {noScroll &&
          <View style={styles.wrapper}>
            {children}
            {!noSpacer &&
              <View style={styles.spacer} />
            }
          </View>
        }
        {!noScroll &&
          <ScrollView
            style={styles.wrapper}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps
            automaticallyAdjustContentInsets>
            {children}
            {!noSpacer &&
              <View style={styles.spacer} />
            }
          </ScrollView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#e9eaed',
  },
  spacer: {
    height: 270,
  },
  wrapper: {
    flex: 1,
    paddingTop: 10,
  },
})
