import { discoverMoreNFTs } from 'mocks/mocks'
import { CardModel } from 'model/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button, ButtonStyle } from '../button/button'

export interface CardProps {
  className?: string
  withDescription?: boolean
  card: discoverMoreNFTs
}

export const Card = (props: CardProps) => {
  const { className = '', withDescription = true, card } = props

  return (
    <div className={`flex flex-col h-96 p-2.5 rounded-[13px] ${className}`}>
      <div
        className={`w-full h-[222px] bg-no-repeat bg-cover rounded-xl`}
        style={{
          backgroundImage: `url(${card.image})`,
        }}
      ></div>
      {withDescription && (
        <div className='mt-5'>
          <span className='font-sans text-lg font-bold'>{card.title}</span>
          <div className='text-green-500 text-xs font-bold mt-3'>
            <Image
              src={'/assets/images/pictos/ethereum-green.svg'}
              width={'9px'}
              height={'15px'}
            />{' '}
            <span>{card.amount} ETH</span>
          </div>
          <hr className='border-gray-200 mt-5 mb-2.5' />
          <div className='flex justify-between'>
            <Button
              className='px-4 py-1 text-xs !text-primary-default !font-extralight'
              buttonStyle={ButtonStyle.Grey}
            >
              <span className='font-extrabold'>{card.timeLeft[0]}</span>h{' '}
              <span className='font-bold'>{card.timeLeft[1]}</span>m{' '}
              <span className='font-bold'>{card.timeLeft[2]}</span>s
            </Button>
            <Link href={''}>
              <span className={`text-primary-default font-medium`}>
                Place a bid
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
