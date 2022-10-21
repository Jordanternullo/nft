import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonStyle } from './button'

export default {
  component: Button,
  title: 'Atomic/Button',
  argTypes: {
    color: {
      options: [ButtonStyle.Primary, ButtonStyle.Secondary],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Explore Now',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Explore Now',
  buttonStyle: ButtonStyle.Secondary,
}
