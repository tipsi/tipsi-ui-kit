# tipsi-ui-kit
React Native Tipsi custom UI elements

## Components

### `<ColoredTabs />`

Customizable colored tabs.

#### ColoredTabs Props

| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `selected` | id of selected tab.  | String | `undefined`
| `onPress` | Handle press on tab action. Receive id of selected tab as argument. | Function | `undefined`


#### ColoredTabs.Item Props

| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `name` | Text of tab. | String | `undefined`
| `color` | Color of tab | String | `undefined`
| `id` | Tab id. This id will passed to `onPress` for identify action. | String | `undefined`
| `active` | Show item as active  | Boolean | `false`
| `onPress` | Handle press action | Function | `undefined`

#### Example


```js
import React from 'react'
import { ColoredTabs } from 'tipsi-ui-kit'

handlePress = (id) => (console.log(`Tab with id ${id} is clicked!`)

const Example = () => (
    <ColoredTabs onPress={this.handlePress}>
      <ColoredTabs.Item id="0" name="One" color="crimson" />
      <ColoredTabs.Item id="1" name="Two" color="orange" />
      <ColoredTabs.Item id="2" name="Three" color="chartreuse" />
      <ColoredTabs.Item id="3" name="Four" color="dodgerblue" />
    < /ColoredTabs>
)
```

#### Preview

![tabs_ios](https://cloud.githubusercontent.com/assets/4946753/22029399/1f3905c2-dce3-11e6-8c83-5142fdeb4351.png)
![tabs_android](https://cloud.githubusercontent.com/assets/4946753/22029396/1af713e6-dce3-11e6-8f1a-64e4706bf581.png)

### `<Dash />`

Component to draw customisable dashed lines

#### Dash Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `style` | Dash container style as for `View` component  | Object | `{flexDirection = 'row'}` |
| `dashGap` | Gap between two dashes | Number | `3.5` |
| `dashLength` | Length of each dash | Number | `3` |
| `dashThickness` | Thickness of each dash | Number | `1` |
| `dashColor` | Color of each dash | String | `#c7d1dc` |

#### Example

```js
import React from 'react'
import { Dash } from 'tipsi-ui-kit'

const Example = () => (
  <Dash
    dashGap={5}
    dashLength={10}
    dashThickness={2}
    dashColor="black"
  />
)
```

#### Preview

![dash_ios](https://cloud.githubusercontent.com/assets/1177226/21903147/5d0b07d4-d931-11e6-9ff4-3238f0646d0b.png)
![dash_android](https://cloud.githubusercontent.com/assets/1177226/21903095/2181a7cc-d931-11e6-9338-17e32c8817ea.png)

### `<Carousel />`

Carousel component

#### Carousel Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `spacer` | Space between last item and right side  | Number | `0` |
| `...rest` | All other props for `ScrollView` component except `horizontal` | - | `-` |

#### Carousel.Item Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `active` | Show item as active  | Boolean | `false` |
| `onPress` | Handle press action | Function | `undefined` |
| `onRemove` | Handle remove action | Function | `undefined` |

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

### `<LabelRating />`

#### LabelRating Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `title` | [isRequired] Title of rating, which is shown on the left side | String | `-` |
| `rating` | Rating, which is shown on the right side | Number | `0` |

#### LabelRating Themes

Theme structure:

```js
{
  container: <View />,
  titleWrapper: <View />,
  titleText: <Text />,
  ratingWrapper: <View />,
  ratingText: <Text />,
}
```

Default themes: **primary**, **success**, **warning**, **alert**

#### Example

```js
import React from 'react'
import { LabelRating } from 'tipsi-ui-kit'

const Example = () => (
  <LabelRating
    title="WS"
    rating="92"
  />
)
```

Theme structure:

```js
{
  container: <View />,
  fullTrack: <View />,
  track: <View />,
  selectedTrack: <View />,
  valueContainer: <View />,
  twoMarkersValueContainer: <View />,
  valueWrapper: <View />,
  valueText: <Text />,
  markerContainer: <View />,
  topMarkerContainer: <View />,
  marker: <View />,
  pressedMarker: <View />,
  touch: <View />,
}
```

Default themes: **primary**, **success**, **warning**, **alert**

#### Preview

![labelrating_ios](https://cloud.githubusercontent.com/assets/1177226/22017970/192f9fdc-dcdf-11e6-9ffa-d390480e286f.png)
![labelrating_android](https://cloud.githubusercontent.com/assets/1177226/22017972/1a7ddbce-dcdf-11e6-921b-8fce9b33d7a7.png)

### `<Label />`

#### Label Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `title` | [isRequired] Title of label | String | `-` |

#### Label Themes

Theme structure:

```js
{
  container: <View />,
  title: <Text />,
}
```

Default themes: **primary**, **success**, **warning**, **alert**, **black**

#### Example

```js
import React from 'react'
import { View } from 'react-native'
import { Label } from 'tipsi-ui-kit'

const Example = () => (
  <View style={{ flexDirection: 'row' }}>
    <Label title="On Sale" />
  </View>
)
```

#### Preview

![label_ios](https://cloud.githubusercontent.com/assets/1788245/22148163/9a4b7132-df1d-11e6-90bd-a920e83db5ad.png)
![label_android](https://cloud.githubusercontent.com/assets/1788245/22148162/9a31d772-df1d-11e6-9cac-5f335b10c41d.png)

### `<RangeSlider />`

Multi handle slider with text labels

#### RangeSlider Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `style` | RangeSlider container style as for `View` component  | Object | `{flexDirection = 'row'}` |
| `startValues` | Array of one or two numbers. Start values for slider handles positions. | Array of Numbers | `[2, 8]` |
| `sliderLength` | Length of slider | Number | `280` |
| `min` | The minimum acceptable value of slider | Number | `0` |
| `max` | The maximum acceptable value of slider | Number | `10` |
| `step` | Min step of dash scale | Number | `1` |
| `onValuesChangeStart` | Call when handle start motion | Function | `-` |
| `onValuesChange` | Calling while handle do motion | Function | `-` |
| `onValuesChangeEnd` | Call when handle end motion | Function | `-` |
| `customMarker` | Custom marker to slider handle | Function | `-` |
| `valueRenderer` | Function which change slider text if need. | Function | `-` |

#### Example

```js
import React from 'react'
import { RangeSlider } from 'tipsi-ui-kit'

const Example = () => (
  <RangeSlider
    min={10}
    max={100}
    step={5}
    values={[25, 75]}
    valueRenderer={value => `$${value}`}
  />
)
```

#### Preview

![rangeslider_ios](https://cloud.githubusercontent.com/assets/1177226/22095658/437ef7d6-de49-11e6-8fdc-c83154033438.gif)
![rangeslider_android](https://cloud.githubusercontent.com/assets/1177226/22095661/459f58c6-de49-11e6-9f74-b013ac5a6315.gif)

## Utils

### ThemeRegister

To customize components themes or add your own you can use `ThemeRegister` manager:

```js
import { ThemeRegister } from 'tipsi-ui-kit'

ThemeRegister.set({
  // Change base component styles
  'LabelRating': {
    titleText: {
      fontSize: 30,
      color: 'black',
    },
  },
  // Change success theme for component
  'LabelRating.success': {
    container: {
      backgroundColor: 'black',
    },
  },
  // Add your own theme for component
  'LabelRating.myOwnTheme': {
    container: {
      backgroundColor: 'black',
    },
  },
})
```

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
