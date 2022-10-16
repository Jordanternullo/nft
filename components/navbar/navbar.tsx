import { Button } from 'components/atomic/button/button'
import { Input } from 'components/atomic/form/input/input'

export interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className = '' } = props
  return (
    <header className='flex justify-between items-center border-b border-grey-200 py-7 w-full px-32	'>
      <h1 className='font-integralExtra text-primary-default text-2xl border-r border-grey-200 pr-8'>
        NFTERS
      </h1>
      <nav>
        <ul className='font-sans flex justify-between items-center gap-12'>
          <li>
            <a href='#'>Marketplace</a>
          </li>
          <li>
            <a href='#'>Resource</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </nav>
      <Input placeholder='Search' className='' />
      <div className='flex gap-5'>
        <Button className='px-7 py-4 text-sm min-w-[151px]'>Upload</Button>
        <Button
          className='px-7 py-4 text-sm min-w-[151px]'
          buttonStyle='secondary'
        >
          Connect Wallet
        </Button>
      </div>
    </header>
  )
}
