import React, { Component, PropTypes } from 'react'
// import { View, Text, StyleSheet } from 'react-native'
import Page from './Page'
import Block from './Block'

export default class Example extends Component {
  static propTypes = {
    routeProps: PropTypes.object.isRequired,
  }

  renderExample = (example, key) => (
    <Block
      key={key}
      title={example.title}
      description={example.description}>
      {example.render()}
    </Block>
  )

  render() {
    const { routeProps } = this.props

    return (
      <Page {...routeProps}>
        {routeProps.examples.map(this.renderExample)}
      </Page>
    )
  }
}
