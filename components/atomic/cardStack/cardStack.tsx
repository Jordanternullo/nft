import { CardModel } from 'model/card'
import Image from 'next/image'

export interface CardStackProps {
  className?: string
  card: CardModel
}

export const CardStack = (props: CardStackProps) => {
  const { className = '', card } = props
  return (
    <div className='relative w-[472px] text-left'>
      <div
        className={`relative flex z-20 flex-col text-white h-[440px] w-[400px] justify-between rounded-3xl bg-cover bg-no-repeat px-6 py-7 ${className}`}
        style={{
          backgroundImage: `url(${card.images[0]})`,
        }}
      >
        <div>
          <span className='font-sans text-2xl font-bold	'>{card.title}</span>
          <div className='flex items-center gap-2 mt-3'>
            <div
              className='w-8 h-8 rounded-full bg-cover bg-no-repeat bg-center'
              style={{
                backgroundImage: `url(${card.profil.avatar})`,
              }}
            ></div>
            <span className='font-sans text-xl font-medium'>
              {card.profil.name}
            </span>
          </div>
        </div>
        <div className='flex justify-between bg-white/20 backdrop-blur rounded-xl px-6 py-3.5'>
          <div className='flex flex-col font-sans'>
            <span className='font-medium text-xs'>Current Bid</span>
            <div>
              <Image
                src={'/assets/images/pictos/ethereum.svg'}
                width={'13px'}
                height={'21px'}
              />{' '}
              <span className='font-bold'>0.25 ETH</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='font-sans font-medium text-xs'>Ends in</span>
            <span className='font-medium'>
              <span className='font-bold'>12</span>h{' '}
              <span className='font-bold'>43</span>m{' '}
              <span className='font-bold'>42</span>s
            </span>
          </div>
        </div>
      </div>
      <div
        className={`absolute z-10 h-[391px] w-[400px] rounded-3xl bg-cover bg-no-repeat left-9 top-[calc(50%-391px/2)]`}
        style={{
          backgroundImage: `url(${card.images[1]})`,
        }}
      ></div>
      <div
        className={`absolute z-0 h-[341px] w-[400px] rounded-3xl bg-cover bg-no-repeat left-[72px] top-[calc(50%-341px/2)]`}
        style={{
          backgroundImage: `url(${card.images[2]})`,
        }}
      ></div>
    </div>
  )
}
