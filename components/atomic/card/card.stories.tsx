import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './card'

export default {
  component: Card,
  title: 'Atomic/Card',
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  withDescription: true,
  card: {
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMzcxOTN8MHwxfHNlYXJjaHw5fHxtYWNvc3xlbnwwfHx8fDE2MjEyMjc0NzA&ixlib=rb-1.2.1&fm=jpg&w=4096&h=3112&fit=max',
    title: 'Abstr Gradient NFT',
    amount: '0.25',
    timeLeft: ['3', '50', '2'],
  },
}
