import { Input } from 'src/components/atomic/form/input/input'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Select,
  Option,
} from '@material-tailwind/react'
import { useSwitchNetwork, useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'
import { supportedChainIds } from 'src/pages/_app'
import { Dialog } from '../atomic/dialog/dialog'
import { createNft } from 'src/services/nft.service'
import { Nft } from 'src/model/models'

export interface NavbarProps {
  className?: string
  updateNftsFilter: (nft: Nft) => void
}

export const Navbar = (props: NavbarProps) => {
  const { updateNftsFilter } = props
  const { address, connectWallet, connector, balance, disconnectWallet } =
    useWeb3()
  const { switchNetwork } = useSwitchNetwork()
  const [validNetwork, setValidNetwork] = useState(true)
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [endTime, setEndTime] = useState('')
  const [category, setCategory] = useState('')
  const [error, setError] = useState<string>('')
  const [image, setImage] = useState<any>(null)
  const options = [
    { value: 'art', label: 'Art' },
    { value: 'celebrities', label: 'Celebrities' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'sport', label: 'Sport' },
    { value: 'music', label: 'Music' },
    { value: 'crypto', label: 'Crypto' },
  ]
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

  const handleClickModal = () => {
    setOpen(!open)
  }

  const handleFile = (file: any) => {
    setImage(file)
  }

  const submit = () => {
    setError('')
    if (!(title && amount && endTime && category && image)) {
      setError('Please fill in all required fields')
      return
    }
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('amount', amount)
    formData.append('endTime', endTime)
    formData.append('category', category)
    createNft(formData)
      .then((res) => {
        res = res.map((item: Nft) => {
          return {
            ...item,
            image: `http://localhost:5000/uploads/${item.image}`,
          }
        })
        updateNftsFilter(res)
        handleClickModal()
      })
      .catch((err) => {})
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
        <Button
          className='rounded-full font-averta bg-primary-default text-white hover:bg-primary-hover px-7 py-4 text-sm min-w-[151px]'
          onClick={handleClickModal}
        >
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
      <Dialog
        open={open}
        onClick={handleClickModal}
        submit={submit}
        title={`Create NFT`}
      >
        <div className='w-full'>
          <div className='flex gap-6 justify-center'>
            <div>
              <div className='flex flex-col'>
                <label className='w-full' htmlFor='title'>
                  Title<span className='text-red-500'>*</span>
                </label>
                <Input
                  type='text'
                  name='title'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className={`rounded-sm ${
                    error !== '' && title === '' ? 'border-red-500' : ''
                  }`}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='amount'>Amount</label>
                <Input
                  type='text'
                  name='amount'
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  className={'rounded-sm'}
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='endTime'>
                  End Time<span className='text-red-500'>*</span>
                </label>
                <Input
                  type='datetime-local'
                  name='endTime'
                  value={endTime}
                  onChange={(event) => setEndTime(event.target.value)}
                  className={`rounded-sm ${
                    error !== '' && endTime === '' ? 'border-red-500' : ''
                  }`}
                />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='category'>
                  Category<span className='text-red-500'>*</span>
                </label>
                <Select
                  label='category'
                  value={category}
                  className={`border-2 ${
                    error !== '' && category === '' ? 'border-red-500' : ''
                  }`}
                  onChange={(event) => {
                    setCategory(event)
                  }}
                >
                  {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className='flex items-center flex-col justify-center'>
              <label htmlFor='file'>
                Image<span className='text-red-500'>*</span>
              </label>
              <input
                type='file'
                name='file'
                className={`${
                  error !== '' && !image ? 'border-2 border-red-500' : ''
                }`}
                onChange={(event) => handleFile(event.target.files[0])}
              />
            </div>
          </div>
          {error && !(title && category && endTime && image) && (
            <div className='text-center'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}
        </div>
      </Dialog>
    </header>
  )
}
