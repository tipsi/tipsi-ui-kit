import React, { Component } from 'react'
import { NavigationExperimental } from 'react-native'
import { push, pop, createNavigationReducer } from './utils/navigation'
import List from './List'
import Example from './Example'

const reducer = createNavigationReducer({
  index: 0,
  routes: [{ key: 'List', title: 'Tipsi UI Kit' }],
})

const { CardStack, Header } = NavigationExperimental

const scenes = { List, Example }

export default class Navigator extends Component {
  state = {
    navigation: reducer(undefined, {}),
  }

  handleNavigateBack = () => {
    if (this.state.navigation.index === 0) {
      return false
    }
    this.setState({
      navigation: reducer(
        this.state.navigation,
        pop()
      ),
    })
    return true
  }

  pushState = (key, params) => {
    this.setState({
      navigation: reducer(
        this.state.navigation,
        push(key, params)
      ),
    })
    return true
  }

  renderScene = (props) => {
    const { route } = props.scene // eslint-disable-line react/prop-types
    const Scene = scenes[route.key] || scenes.List

    return (
      <Scene
        {...props}
        routeProps={route}
        pushState={this.pushState}
      />
    )
  }

  renderTitleComponent = props => (
    <Header.Title>
      {props.scene.route.title}
    </Header.Title>
  )

  renderHeader = (props) => { // eslint-disable-line arrow-body-style
    return (
      <Header
        {...props}
        onNavigateBack={this.handleNavigateBack}
        renderTitleComponent={this.renderTitleComponent}
      />
    )
  }


  render() {
    return (
      <CardStack
        navigationState={this.state.navigation}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onNavigate={this.handleNavigate}
        onNavigateBack={this.handleNavigateBack}
      />
    )
  }
}
