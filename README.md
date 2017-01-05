# tipsi-ui-kit
React Native Tipsi custom UI elements

### Storybook

To start `Storybook` follow the steps below:

1. Run Storybook server:
  ```bash
  npm run storybook
  ```

2. Start mobile app with the `react-native` command:
  ```bash
  react-native run-ios
  # OR
  react-native run-android
  ```

3. Open `http://localhost:7007` url to view Storybook.

### How to add new ui component

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

3. Then write your story in the `storybook/stories` directory like this:
  ```js
  // storybook/stories/Button.js
  import React from 'react'
  import { storiesOf, action } from '@kadira/react-native-storybook'
  import CenteredView from './helpers/CenteredView'
  import Button from '../../src/Button'

  storiesOf('Button')
    .addDecorator(getStory => (
      <CenteredView>
        {getStory()}
      </CenteredView>
    ))
    .add('title', () => (
      <Button title="Example" />
    ))
    .add('onPress', () => (
      <Button title="Click me!" onPress={action('clicked-button')} />
    ))

  // storybook/stories/index.js
  import './StarRating'
  // ...
  import './Button' // Add this line
  ```

4. Now you can open `Storybook` and click on `Button` section to see a result.
