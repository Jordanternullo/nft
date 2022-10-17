import { Input } from 'components/atomic/form/input/input'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react'
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'
import { supportedChainIds } from 'pages/_app'

export interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { address, connectWallet, connector, balance, disconnectWallet } =
    useWeb3()
  const { switchNetwork } = useSwitchNetwork()
  const [validNetwork, setValidNetwork] = useState(true)

  useEffect(() => {
    connector?.getProvider().then((provider) => {
      if (provider) {
        setValidNetwork(supportedChainIds.includes(+provider.networkVersion))
        provider.on('networkChanged', (chainId: number) => {
          setValidNetwork(supportedChainIds.includes(+chainId))
        })
      }
    })
  }, [connector])

  const _handleClick = async () => {
    if (validNetwork) {
      disconnectWallet()
    } else {
      switchNetwork(1)
    }
  }
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
        <Button className='rounded-full font-averta bg-primary-default text-white hover:bg-primary-hover px-7 py-4 text-sm min-w-[151px]'>
          Upload
        </Button>
        <Popover placement='top'>
          <PopoverHandler>
            <Button className='rounded-full bg-transparent text-primary-default border border-primary-default font-sans hover:bg-primary-default hover:text-white px-7 py-4 text-sm min-w-[151px]'>
              {address
                ? `${address.slice(0, 3)}...${address.slice(
                    address.length - 3,
                    address.length
                  )}`
                : 'Connect Wallet'}
            </Button>
          </PopoverHandler>
          <PopoverContent className='z-50'>
            {address || !validNetwork ? (
              <div className='flex flex-col gap-5 text-center'>
                <h2>{address ? address : 'network error'}</h2>
                <span className='text-4xl font-integralExtra'>
                  {address && balance?.formatted}
                </span>
                <Button
                  className='rounded-full font-averta bg-primary-default text-white hover:bg-primary-hover px-7 py-4 text-sm min-w-[151px]'
                  onClick={() => _handleClick()}
                >
                  {validNetwork ? 'Disconnect' : 'Switch Network'}
                </Button>
              </div>
            ) : (
              <div className='flex flex-col gap-5 text-center'>
                <h2>Connect Wallet</h2>
                <Button
                  className='rounded-full font-averta bg-primary-default text-white hover:bg-primary-hover px-7 py-4 text-sm min-w-[151px]'
                  onClick={() => connectWallet('injected')}
                >
                  Metamask
                </Button>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}
