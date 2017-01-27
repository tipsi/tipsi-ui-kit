import React, { Component, PropTypes } from 'react'
import register from '../core/utils/register'
import { Counter } from '../../src'

class Example extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
  }

  state = {
    value: 15,
  }

  handleValueChange = (value) => {
    this.setState({ value })
    this.props.action('onValueChange')(value)
  }

  render() {
    return (
      <Counter
        value={this.state.value}
        minValue={0}
        onValueChange={this.handleValueChange}
      />
    )
  }
}

register.addExample({
  type: 'components',
  title: '<Counter />',
  description: 'Counter component',
  examples: [{
    title: 'Default',
    description: 'Props: without props',
    render: () => (
      <Counter />
    ),
  }, {
    title: 'Start values',
    description: 'Props: step, defaultValue',
    render: () => (
      <Counter step={5} defaultValue={25} />
    ),
  }, {
    title: 'minValue: 0, maxValue: 10',
    description: 'Props: defaultValue, minValue, maxValue',
    render: () => (
      <Counter
        defaultValue={5}
        minValue={0}
        maxValue={10}
      />
    ),
  }, {
    title: 'Controlled component',
    description: 'Props: value: this.state.value, minValue: 0, onValueChange',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <Example action={action} />
    ),
  }],
})
