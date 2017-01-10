# tipsi-ui-kit
React Native Tipsi custom UI elements

### UIExplorer

To open `UIExplorer` just start mobile app with the `react-native` command:

```bash
react-native run-ios
# OR
react-native run-android
```

### How to add new UI component

For example let's create `Button` component:

1. Create a new directory called `Button` in `src` directory and create an entry file (index.js) and component file (Button.js) as given below.

  ```js
  // src/Button/Button.js
  import React, { Component, PropTypes } from 'react'
  import { Button as RNButton } from 'react-native'

  export default class Button extends Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
      onPress: PropTypes.func,
    }

    render() {
      return (
        <RNButton
          title={this.props.title}
          onPress={this.props.onPress}
        />
      )
    }
  }

  // src/Button/index.js
  export { default } from './Button'
  ```

2. Update `src` entry file (index.js) to export our new component:

  ```js
  // src/index.js
  export { default as StarRating } from './StarRating'
  // ...
  export { default as Button } from './Button' // Add this line
  ```

3. Then write your example in `uiexplorer/examples` directory like this:
  ```js
  // uiexplorer/examples/Button.js
  import React, { Component } from 'react'
  import register from '../core/utils/register'
  import Button from '../../src/Button'

  register.addExample({
    type: 'components',
    title: '<Button />',
    description: 'Button component',
    examples: [{
      title: 'Title',
      description: 'Prop: title (String)',
      render: () => (
        <Button title="Example" />
      ),
    }, {
      title: 'Handle press',
      description: 'Prop: onPress (Function)',
      render: ({ action }) => (
        <Button title="Press me!" onPress={action('onPress')} />
      ),
    }],
  })
  ```

4. Now you can open `UIExplorer` and click on `<Button />` item to see a result.
