import renderer from 'react-test-renderer'
import examples from '../../examples'
import register from './register'

const { describe, it, expect } = global

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
            continue
          }

          describe(story.title, () => {
            for (const example of story.examples) {
              it(`${example.title} - ${example.description}`, () => {
                const renderedStory = example.render()
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
