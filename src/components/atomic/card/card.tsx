import { Nft } from 'src/model/models'
import Image from 'next/image'
import { Button } from '../button/button'
import { useState } from 'react'
import { Dialog } from '../dialog/dialog'
import { Input } from '../form/input/input'
import { useWeb3 } from '@3rdweb/hooks'
import { createBid } from 'src/services/bid.service'

export interface CardProps {
  className?: string
  card: Nft
  onClick?: (e: React.MouseEvent) => void
  updateNftsFilter: (nft: Nft) => void
}

export const Card = (props: CardProps) => {
  const { className = '', card, onClick, updateNftsFilter } = props
  const [timeLeft, setTimeLeft] = useState(new Date())
  const [error, setError] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState<string>('')
  const { address } = useWeb3()

  setInterval(() => {
    setTimeLeft(
      new Date(new Date(card.endTime).getTime() - new Date().getTime())
    )
  }, 1000)

  const handleClickModal = () => {
    setOpen(!open)
  }
  const submit = () => {
    setError('')
    if (!+amount) {
      setError('Please fill in all required fields')
      return
    }
    if (!address) {
      setError('Please connect your wallet')
      return
    }
    createBid(card._id, amount, address)
      .then((res) => {
        res.image = `http://localhost:5000/uploads/${res.image}`
        updateNftsFilter(res)
      })
      .catch((err) => {
        setError('Server error, retry later')
      })
      .finally(() => {
        handleClickModal()
      })
  }

  return (
    <div
      className={`flex flex-col h-96 p-2.5 rounded-[13px] ${className}`}
      onClick={onClick}
    >
      <div
        className={`w-full h-[222px] bg-no-repeat bg-cover rounded-xl`}
        style={{
          backgroundImage: `url(${card.image})`,
        }}
      ></div>
      <div className='mt-5'>
        <span className='font-sans text-lg font-bold'>{card.title}</span>
        <div className='text-green-500 text-xs font-bold mt-3'>
          {card.amount && (
            <>
              <Image
                src={'/assets/images/pictos/ethereum-green.svg'}
                width={'9px'}
                height={'15px'}
              />{' '}
              <span>{card.amount} ETH</span>
            </>
          )}
        </div>
        <hr className='border-gray-200 mt-5 mb-2.5' />
        <div className='flex justify-between'>
          {card.endTime && (
            <>
              <div className='flex bg-grey-200 rounded-full px-4 py-1 text-xs text-primary-default font-extralight items-center gap-0.5'>
                <div>
                  <span className='font-extrabold'>{timeLeft.getDate()}</span>d
                </div>
                <div>
                  <span className='font-extrabold'>{timeLeft.getHours()}</span>h
                </div>
                <div>
                  <span className='font-bold'>{timeLeft.getMinutes()}</span>m
                </div>
                <div>
                  <span className='font-bold'>{timeLeft.getSeconds()}</span>s
                  left
                </div>
              </div>
              <Button
                onClick={handleClickModal}
                className={`!bg-transparent !px-4 !py-1 !text-primary-default !font-medium`}
              >
                <span>Place a bid</span>
              </Button>
            </>
          )}
        </div>
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
                <label htmlFor='amount'>Amount</label>
                <Input
                  type='text'
                  name='amount'
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  className={`rounded-sm ${
                    error !== '' ? 'border-red-500' : ''
                  }`}
                />
              </div>
            </div>
          </div>
          {error && (
            <div className='text-center'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  )
}
