import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from './navbar'

export default {
  component: Navbar,
  title: 'Menu/Navbar',
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
