import { Card } from 'src/components/atomic/card/card'
import { contract } from 'src/contracts/contract'
import { useEffect, useState } from 'react'
import { Button, ButtonStyle } from '../atomic/button/button'
import { Dialog } from '../atomic/dialog/dialog'
import Image from 'next/image'

export interface DiscoverMoreNFTsProps {
  className?: string
}

export const DiscoverMoreNFTs = (props: DiscoverMoreNFTsProps) => {
  const { address, abi } = contract
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState(false)
  const [dataModal, setDataModal] = useState<any>()
  useEffect(() => {
    // const { ethereum } = window
    // if (ethereum) {
    //   const provider = new ethers.providers.Web3Provider(ethereum)
    //   // const signer = provider.getSigner()
    //   const nftContract = new ethers.Contract(
    //     address,
    //     abi,
    //     provider.getSigner()
    //   )
    //   nftContract.provider
    // }
    setLoading(true)
    fetch(
      `https://api.opensea.io/api/v1/assets?asset_contract_address=${address}&limit=200`
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const dataFormatting = data.assets.filter(
          (item: any) => item.image_url !== null
        )
        setNfts(dataFormatting)
        setPage(dataFormatting.length)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const handleClick = (item?: any) => {
    item && setDataModal(item)
    setOpen(!open)
  }

  return (
    <section className='bg-grey-500 px-20 py-32 text-left w-full'>
      <h2 className='font-integralExtra text-3xl mb-14'>Discover more NFTs</h2>
      {loading ? (
        <div className='flex justify-center'>
          <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-4 gap-10 mt-10'>
            {nfts.slice(0, 8 * currentPage).map((item: any, index: number) => (
              <Card
                key={index}
                card={{
                  title: `#${item.token_id}`,
                  image: item.image_url,
                }}
                className={`bg-white hover:cursor-pointer`}
                onClick={() => handleClick(item)}
              />
            ))}
          </div>
          {currentPage < page / 8 && (
            <Button
              className='block m-auto mt-16'
              buttonStyle={ButtonStyle.Secondary}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              More NFTS
            </Button>
          )}
          {open}
          {dataModal && (
            <Dialog
              open={open}
              onClick={handleClick}
              title={`#${dataModal?.token_id}`}
            >
              <div className='flex gap-6 justify-between items-center'>
                <div className='relative w-full'>
                  <Image
                    src={dataModal?.image_url}
                    layout={'responsive'}
                    width={400}
                    height={400}
                  />
                </div>
                <div className='flex justify-beetween flex-wrap gap-2'>
                  {dataModal?.traits?.map((trait: any, index: number) => (
                    <div className='border border-primary-default px-4 py-6 flex flex-col w-[calc(50%-0.5rem)] text-center'>
                      <span className='font-integralExtra text-primary-default'>
                        {trait.trait_type}
                      </span>
                      <span className='text-black'>{trait.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Dialog>
          )}
        </>
      )}
    </section>
  )
}
