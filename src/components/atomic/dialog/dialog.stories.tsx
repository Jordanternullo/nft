import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dialog } from './dialog'

export default {
  component: Dialog,
  title: 'Atomic/Dialog',
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Dialog content',
  title: 'Dialog title',
  open: true,
}
