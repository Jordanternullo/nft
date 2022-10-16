import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardStack } from './cardStack'

export default {
  component: CardStack,
  title: 'Atomic/CardStack',
} as ComponentMeta<typeof CardStack>

const Template: ComponentStory<typeof CardStack> = (args) => (
  <CardStack {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  card: {
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMzcxOTN8MHwxfHNlYXJjaHw5fHxtYWNvc3xlbnwwfHx8fDE2MjEyMjc0NzA&ixlib=rb-1.2.1&fm=jpg&w=4096&h=3112&fit=max',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMzcxOTN8MHwxfHNlYXJjaHw5fHxtYWNvc3xlbnwwfHx8fDE2MjEyMjc0NzA&ixlib=rb-1.2.1&fm=jpg&w=4096&h=3112&fit=max',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixid=MnwxMzcxOTN8MHwxfHNlYXJjaHw5fHxtYWNvc3xlbnwwfHx8fDE2MjEyMjc0NzA&ixlib=rb-1.2.1&fm=jpg&w=4096&h=3112&fit=max',
    ],
    title: 'Abstr Gradient NFT',
    profil: {
      name: 'Arkhan17',
      avatar:
        'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
    },
  },
}
