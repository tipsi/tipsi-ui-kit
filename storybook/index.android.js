import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@kadira/react-native-storybook'
import './addons'

// import your stories
configure(() => {
  require('./stories')
}, module)

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
})

AppRegistry.registerComponent('TipsiUIKit', () => StorybookUI)
