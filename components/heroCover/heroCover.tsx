import { Button } from 'components/atomic/button/button'
import { CardStack } from 'components/atomic/cardStack/cardStack'
import { CardModel } from 'model/card'

export interface HeroCoverProps {
  className?: string
  card: CardModel
}

export const HeroCover = (props: HeroCoverProps) => {
  const { className = '', card } = props

  return (
    <section className={`flex gap-[5.5rem] ${className}`}>
      <div className='text-left'>
        <h1 className='font-integralExtra text-4xl'>
          Discover, and collect digital art NFTS
        </h1>
        <p className='font-normal	text-xl	text-grey-400 mt-6 mb-10 leading-[160%]'>
          Digital marketplace for crypto collectibles and
          <br /> non-fungible tokens (NFTs). Buy, Sell, and discover
          <br /> exclusive digital assets.
        </p>
        <div className='relative'>
          <Button>Explore Now</Button>
          <div className='flex gap-6 mt-7'>
            <div className='flex flex-col font-integral text-4xl'>
              <span>98K+</span>
              <span className='font-sans text-xl text-grey-400'>Artwork</span>
            </div>
            <div className='flex flex-col font-integralExtra text-4xl'>
              <span>12K+</span>
              <span className='font-sans text-xl text-grey-400'>Auction</span>
            </div>
            <div className='flex flex-col font-integralExtra text-4xl'>
              <span>15K+</span>
              <span className='font-sans text-xl text-grey-400'>Artist</span>
            </div>
          </div>
          <div className='absolute z-[-1] bg-[url("/assets/images/hero/Dot.svg")] bg-no-repeat w-[196px] h-[154px] left-[-2rem] top-0'></div>
        </div>
      </div>
      <div className=''>
        <CardStack card={card} />
      </div>
    </section>
  )
}
