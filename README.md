# tipsi-ui-kit
React Native Tipsi custom UI elements

## Components

### `<Counter />`

Component to change the number by press "+" or "-".

#### Counter Props

| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `step` | Step of counting.  | Number | `1`
| `defaultValue` | Uncontrolled value of counter. | Number | `0`
| `minValue` | Max value of counter. | Number | `-Infinity`
| `maxValue` | Min value of counter. | Number | `Infinity`
| `value` | Controlled value of counter | Number | `undefined`
| `onValueChange` | Handle value changes. | Function | `() => {}`

#### Example

```js
import React, { PureComponent } from 'react'
import { Counter } from 'tipsi-ui-kit'

class Example extends PureComponent {
  handleValueChange = value => console.log(`Current value is ${value}`)

  render() {
    <Counter
      step={5}
      defaultValue={25}
      onValueChange={this.handleValueChange}
    />
  }
}
```

#### Counter Themes

Theme structure:

```js
{
  container: <View />,
  button: <TouchableOpacity />,
  leftButton: <TouchableOpacity />,
  rightButton: <TouchableOpacity />,
  buttonText: <Text />,
  valueWrapper: <View />,
  value: <Text />,
}
```

#### Preview

![counter_ios](https://cloud.githubusercontent.com/assets/4946753/22082704/7eacf3ee-ddd1-11e6-8040-394699796a44.png)
![counter_android](https://cloud.githubusercontent.com/assets/4946753/22082669/52ff3b8a-ddd1-11e6-8680-3ec0d94eba1a.png)

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

#### Carousel Themes

<Carousel /> theme structure:

```js
{
  container: <ScrollView />,
}
```

<Carousel.Item /> theme structure:

```js
{
  container: onPress ? <TouchableOpacity /> : <View />,
  active: <View />,
  remove: <TouchableOpacity />,
  removeIcon: <Icon />,
  removeCircle: <View />,
  gap: <View />,
}
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

#### Preview

![labelrating_ios](https://cloud.githubusercontent.com/assets/1177226/22017970/192f9fdc-dcdf-11e6-9ffa-d390480e286f.png)
![labelrating_android](https://cloud.githubusercontent.com/assets/1177226/22017972/1a7ddbce-dcdf-11e6-921b-8fce9b33d7a7.png)

### `<Label />`

#### Label Props

| Name | Desc | Type | Default |
| --- | --- | --- | --- |
| `title` | [isRequired] Title of label | String | `-` |

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

#### Label Themes

Theme structure:

```js
{
  container: <View />,
  title: <Text />,
}
```

Default themes: **primary**, **success**, **warning**, **alert**, **black**

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

#### RangeSlider Themes

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

![rangeslider_ios](https://cloud.githubusercontent.com/assets/1177226/22095658/437ef7d6-de49-11e6-8fdc-c83154033438.gif)
![rangeslider_android](https://cloud.githubusercontent.com/assets/1177226/22095661/459f58c6-de49-11e6-9f74-b013ac5a6315.gif)

### `<Expand />`
Expand component

#### Expand Props
| Name | Desc | Type | Default
| --- | --- | --- | --- |
| `title` | Always visible. | String | `-`
| `description` | In close state cropped to one line.  | String | `-`
| `defaultExpanded` | Default state of component. If it true component will be rendered in open state | Bool | `false`
| `children` | Child element will be shown only in open state | Node | `-`

#### Example
```js
import { Expand } from 'tipsi-ui-kit'

<Expand
  title="Winemakers Notes:"
  description="The 2012 vintage in Napa Valley was about as close to ‘normal’ as it gets! "
/>
```
#### Preview
<img src="https://cloud.githubusercontent.com/assets/370694/21985795/1cec6dc4-dc05-11e6-87b6-9a41d52324d5.png" width="45%"></img> <img src="https://cloud.githubusercontent.com/assets/370694/21985792/1ce9392e-dc05-11e6-89f1-e94da8975145.png" width="45%"></img> <img src="https://cloud.githubusercontent.com/assets/370694/21985794/1ce9e810-dc05-11e6-9c4d-94c9b1807793.png" width="45%"></img> <img src="https://cloud.githubusercontent.com/assets/370694/21985793/1ce9eeaa-dc05-11e6-8311-cebca16a5671.png" width="45%"></img>

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

4. Update `uiexplorer/examples` entry file (index.js) to export example for our new component:

    ```js
    // uiexplorer/examples/index.js
    import './StarRating'
    // ...
    import './Button' // Add this line
    ```

5. Now you can open `UIExplorer` and click on `<Button />` item to see a result.
