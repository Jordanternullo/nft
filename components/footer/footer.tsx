import { Button } from 'components/atomic/button/button'
import Image from 'next/image'
import Link from 'next/link'

export interface FooterProps {
  className?: string
}

export const Footer = (props: FooterProps) => {
  const { className = '' } = props

  return (
    <footer className='flex gap-24 px-20 py-9'>
      <div className='flex-0 w-80'>
        <h2 className='font-integralExtra text-2xl'>NFTERS</h2>
        <p className='font-averta text-sm mt-7 mb-8 text-grey-400'>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className='flex gap-4'>
          <Image
            src={'/assets/images/pictos/facebook.svg'}
            width={'36px'}
            height={'36px'}
          />
          <Image
            src={'/assets/images/pictos/twitter.svg'}
            width={'36px'}
            height={'36px'}
          />
          <Image
            src={'/assets/images/pictos/linkedin.svg'}
            width={'36px'}
            height={'36px'}
          />
        </div>
      </div>
      <div className='flex-0 w-28'>
        <h3 className='font-bold text-lg'>Market Place</h3>
        <ul className='mt-6 text-sm font-medium	text-grey-700'>
          <li className='mb-2.5'>
            <Link href={''}>All NFTs</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>New</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Art</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Sport</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Utility</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Music</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Domain Name</Link>
          </li>
        </ul>
      </div>
      <div className='flex-0 w-28'>
        <h3 className='font-bold text-lg'>My Account</h3>
        <ul className='mt-6 text-sm font-medium	text-grey-700'>
          <li className='mb-2.5'>
            <Link href={''}>Profile</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Favorite</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>My Collections</Link>
          </li>
          <li className='mb-2.5'>
            <Link href={''}>Settings</Link>
          </li>
        </ul>
      </div>
      <div className='flex-0 w-80'>
        <h3 className='font-bold text-lg'>Stay in the loop</h3>
        <p className='font-averta text-sm mt-7 mb-6 text-grey-400'>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className='border-2 border-light-100 p-2 font-sans placeholder:text-grey-300 rounded-full color-light flex justify-between w-full'>
          <input
            className='px-5 flex-1 outline-none text-xs'
            placeholder='Enter your email address..'
          />
          <Button className='py-3.5 px-5 text-xs'>Subscribe Now</Button>
        </div>
      </div>
    </footer>
  )
}
