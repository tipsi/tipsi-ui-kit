import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import register from '../core/utils/register'
import Carousel from '../../src/Carousel'
import Dash from '../../src/Dash'

/* eslint react/prop-types: 0 */
const Wrapper = ({ children }) => (
  <View style={{ borderRadius: 5, backgroundColor: '#f3f5f7' }}>
    {children}
  </View>
)

const Spacer = ({ icon, title }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
    }}>
    {icon && <Icon name={icon} size={35} />}
    {title && <Text>{title}</Text>}
  </View>
)

const Separator = () => (
  <Dash style={{ overflow: 'hidden', marginHorizontal: 2 }} />
)

register.addExample({
  type: 'components',
  title: '<Carousel />',
  description: 'Carousel component',
  examples: [{
    title: 'Default',
    description: 'Use Carousel as contaner for Carousel.Item`s. ' +
                 'You can pass your own content as children in Carousel.Item. ' +
                 'Also you can use Dash component to separate children with dashed line.',
    render: () => (
      <Wrapper>
        <Carousel>
          <Carousel.Item>
            <Spacer icon="facebook" />
            <Separator />
            <Spacer title="Facebook" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="twitter" />
            <Separator />
            <Spacer title="Twitter" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="instagram" />
            <Separator />
            <Spacer title="Instagram" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="youtube" />
            <Separator />
            <Spacer title="YouTube" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="tumblr" />
            <Separator />
            <Spacer title="Tumblr" />
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    ),
  }, {
    title: 'Active',
    description: 'Carousel.Item Prop: active (Boolean)',
    render: () => (
      <Wrapper>
        <Carousel>
          <Carousel.Item active>
            <Spacer icon="facebook" />
            <Separator />
            <Spacer title="Facebook" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="twitter" />
            <Separator />
            <Spacer title="Twitter" />
          </Carousel.Item>
          <Carousel.Item active>
            <Spacer icon="instagram" />
            <Separator />
            <Spacer title="Instagram" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="youtube" />
            <Separator />
            <Spacer title="YouTube" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="tumblr" />
            <Separator />
            <Spacer title="Tumblr" />
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    ),
  }, {
    title: 'Handle Remove',
    description: 'Carousel.Item Prop: onRemove (Function)',
    render: ({ action }) => (
      <Wrapper>
        <Carousel>
          <Carousel.Item onRemove={action('onRemove: facebook')}>
            <Spacer icon="facebook" />
            <Separator />
            <Spacer title="Facebook" />
          </Carousel.Item>
          <Carousel.Item onRemove={action('onRemove: twitter')}>
            <Spacer icon="twitter" />
            <Separator />
            <Spacer title="Twitter" />
          </Carousel.Item>
          <Carousel.Item onRemove={action('onRemove: instagram')}>
            <Spacer icon="instagram" />
            <Separator />
            <Spacer title="Instagram" />
          </Carousel.Item>
          <Carousel.Item onRemove={action('onRemove: youtube')}>
            <Spacer icon="youtube" />
            <Separator />
            <Spacer title="YouTube" />
          </Carousel.Item>
          <Carousel.Item onRemove={action('onRemove: tumblr')}>
            <Spacer icon="tumblr" />
            <Separator />
            <Spacer title="Tumblr" />
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    ),
  }, {
    title: 'Spacer',
    description: 'Carousel Prop: spacer (Number), space between last item and right side.',
    render: () => (
      <Wrapper>
        <Carousel spacer={200}>
          <Carousel.Item>
            <Spacer icon="facebook" />
            <Separator />
            <Spacer title="Facebook" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="twitter" />
            <Separator />
            <Spacer title="Twitter" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="instagram" />
            <Separator />
            <Spacer title="Instagram" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="youtube" />
            <Separator />
            <Spacer title="YouTube" />
          </Carousel.Item>
          <Carousel.Item>
            <Spacer icon="tumblr" />
            <Separator />
            <Spacer title="Tumblr" />
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    ),
  }, {
    title: 'Active and Remove',
    description: 'Press on item to set active or press on remove to remove item',
    state: {
      active: [],
      items: [{
        icon: 'facebook',
        name: 'Facebook',
      }, {
        icon: 'twitter',
        name: 'Twitter',
      }, {
        icon: 'instagram',
        name: 'Instagram',
      }, {
        icon: 'youtube',
        name: 'YouTube',
      }, {
        icon: 'tumblr',
        name: 'Tumblr',
      }],
    },
    render: ({ state, setState }) => {
      const { active, items } = state
      const isActive = name => active.includes(name)
      const onPress = name => () => {
        const nextActive = isActive(name) ?
          active.filter(item => item !== name) :
          [...active, name]
        setState({ active: nextActive })
      }
      const onRemove = name => () => {
        const nextItems = items.filter(item => item.name !== name)
        const nextActive = active.filter(item => item !== name)
        setState({ items: nextItems, active: nextActive })
      }
      return (
        <Wrapper>
          <Carousel spacer={200}>
            {items.map(item => (
              <Carousel.Item
                key={item.name}
                active={isActive(item.name)}
                onPress={onPress(item.name)}
                onRemove={onRemove(item.name)}>
                <Spacer icon={item.icon} />
                <Separator />
                <Spacer title={item.name} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Wrapper>
      )
    },
  }],
})
