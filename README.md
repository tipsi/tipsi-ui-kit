# tipsi-ui-kit
React Native Tipsi custom UI elements

## Components

### `<Carousel />`

Carousel component

#### Carousel Props

| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `spacer` | Space between last item and right side  | Number | `0`
| `...rest` | All other props for `ScrollView` component except `horizontal` | - | `-`


#### Carousel.Item Props

| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `active` | Show item as active  | Boolean | `false`
| `onPress` | Handle press action | Function | `undefined`
| `onRemove` | Handle remove action | Function | `undefined`
| `activeStyle` | Styles for active item | Object | `undefined`

#### Example

```js
import React from 'react'
import { Text } from 'react-native'
import { Carousel } from 'tipsi-ui-kit'

const Example = () => (
  <Carousel spacer={10}>
    <Carousel.Item active>
      <Text>Facebook</Text>
    </Carousel.Item>
    <Carousel.Item>
      <Text>Twitter</Text>
    </Carousel.Item>
    <Carousel.Item active>
      <Text>Instagram</Text>
    </Carousel.Item>
    <Carousel.Item>
      <Text>YouTube</Text>
    </Carousel.Item>
    <Carousel.Item active>
      <Text>Tumblr</Text>
    </Carousel.Item>
  </Carousel>
)

```

#### Preview

![carousel_ios](https://cloud.githubusercontent.com/assets/1177226/21901928/7a710d78-d92c-11e6-965c-762c2e598811.gif)
![carousel_android](https://cloud.githubusercontent.com/assets/1177226/21901929/7c64d948-d92c-11e6-8ce5-793f24ec2300.gif)

## UIExplorer

To open `UIExplorer` just start mobile app with the `react-native` command:

```bash
react-native run-ios
# OR
react-native run-android
```

## How to add new UI component

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
