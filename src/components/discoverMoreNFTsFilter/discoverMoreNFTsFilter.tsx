import { Card } from 'src/components/atomic/card/card'
import { useEffect, useState } from 'react'
import { Button, ButtonStyle } from '../atomic/button/button'
import { collectionFeaturedNFTs } from 'mocks/mocks'
import { Nft } from 'src/model/models'

export interface DiscoverMoreNFTsFilterProps {
  className?: string
  nfts: Nft[]
  loading: boolean
  updateNftsFilter: (nft: Nft) => void
}

export const DiscoverMoreNFTsFilter = (props: DiscoverMoreNFTsFilterProps) => {
  const { nfts, loading, updateNftsFilter } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [category, setCategory] = useState<string>('all')

  return (
    <section className='bg-grey-500 px-20 py-32 text-left w-full'>
      <h2 className='font-integralExtra text-3xl mb-14'>Discover more NFTs</h2>
      <div className='flex gap-3'>
        {collectionFeaturedNFTs.map((item, index) => (
          <Button
            key={index}
            className={`!py-2.5 !px-5`}
            buttonStyle={
              item.value === category ? ButtonStyle.Primary : ButtonStyle.Grey
            }
            onClick={() => setCategory(item.value)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      {loading ? (
        <div className='flex justify-center'>
          <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32'></div>
        </div>
      ) : (
        <>
          {nfts.length === 0 && (
            <p className='text-center mt-14 font-integralExtra text-sm'>
              Not NFTs yet
            </p>
          )}

          <div className='grid grid-cols-4 gap-10 mt-10'>
            {nfts
              ?.slice(0, 8 * currentPage)
              .filter(
                (item) => category === 'all' || item.category === category
              )
              .map((item: Nft, index: number) => (
                <Card
                  key={index}
                  card={item}
                  className={`bg-white`}
                  updateNftsFilter={(nft: Nft) => updateNftsFilter(nft)}
                />
              ))}
          </div>
        </>
      )}
      {currentPage < nfts.length / 8 && (
        <div className='text-center	mt-16'>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            buttonStyle={ButtonStyle.Secondary}
          >
            More NFTs
          </Button>
        </div>
      )}
    </section>
  )
}
