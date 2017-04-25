import renderer from 'react-test-renderer'
import register from './register'
import '../../examples'

const { describe, it, expect } = global

// eslint-disable-next-line no-undef
jest.mock('react-native-svg', () => {
  const React = require('react')
  // eslint-disable-next-line no-undef
  const ReactNativeSvg = jest.genMockFromModule('react-native-svg')

  const svgElementMockGenerator = (name, propTypes) => {
    function SvgMock() {
      return (
        React.createElement(name, null, null)
      )
    }

    SvgMock.displayName = name
    SvgMock.propTypes = propTypes

    return SvgMock
  }

  const Svg = svgElementMockGenerator('Svg', ReactNativeSvg.Svg.propTypes)

  Svg.Rect = svgElementMockGenerator('Rect', ReactNativeSvg.Rect.propTypes)
  Svg.LinearGradient = svgElementMockGenerator(
    'LinearGradient',
    ReactNativeSvg.LinearGradient.propTypes
  )
  Svg.Path = svgElementMockGenerator('Path', ReactNativeSvg.Path.propTypes)
  Svg.Symbol = svgElementMockGenerator('Symbol', ReactNativeSvg.Symbol.propTypes)
  Svg.Use = svgElementMockGenerator('Use', ReactNativeSvg.Use.propTypes)
  Svg.Stop = svgElementMockGenerator('Stop', ReactNativeSvg.Stop.propTypes)
  Svg.Defs = svgElementMockGenerator('Defs', ReactNativeSvg.Defs.propTypes)

  return Svg
})

export default ({ suit = 'UIExplorer', storyRegex } = {}) => {
  if (typeof describe !== 'function') {
    throw new Error('\'testStorySnapshots\' is intended only to be used inside jest')
  }

  const { list } = register
  const stories = Object.keys(list)

  for (const group of stories) {
    describe(suit, () => {
      describe(group, () => {
        for (const story of list[group]) {
          if (storyRegex && !story.title.match(storyRegex)) {
            continue // eslint-disable-line no-continue
          }

          describe(story.title, () => {
            for (const example of story.examples) {
              it(`${example.title} - ${example.description}`, () => {
                const renderedStory = example.render({
                  state: example.state,
                  setState: () => {},
                  action: () => () => {},
                })
                const tree = renderer.create(renderedStory).toJSON()
                expect(tree).toMatchSnapshot()
              })
            }
          })
        }
      })
    })
  }
}
