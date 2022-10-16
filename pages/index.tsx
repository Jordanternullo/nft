import { Button, ButtonStyle } from 'components/atomic/button/button'
import { Card } from 'components/atomic/card/card'
import { Input } from 'components/atomic/form/input/input'
import { Footer } from 'components/footer/footer'
import { HeroCover } from 'components/heroCover/heroCover'
import { Navbar } from 'components/navbar/navbar'
import {
  cardHeroCover,
  collectionFeaturedNft,
  collectionFeaturedNFTs,
  createAndSellYourNFTs,
  createAndSellYourNFTsModel,
  discoverMoreNFTs,
} from 'mocks/mocks'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  const cardWithSize = (item: createAndSellYourNFTsModel, index?: number) => (
    <div
      key={index}
      className={`bg-cover bg-center rounded-2xl relative`}
      style={{
        backgroundImage: `url(${item.image})`,
        width: item.width,
        height: item.height,
      }}
    >
      <div
        className=' absolute w-20 h-20 rounded-full bg-cover bg-no-repeat bg-center bottom-[-35px] right-[-35px] border-4 border-white'
        style={{
          backgroundImage: `url(${item.avatar})`,
        }}
      ></div>
    </div>
  )

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex w-full flex-1 flex-col items-center justify-center text-center'>
        <HeroCover card={cardHeroCover} className='px-20 pt-14 pb-32' />
        <section className='flex bg-grey-500 px-20 py-32 text-left gap-14'>
          <div className=''>
            <h2 className='font-integralExtra text-2xl'>
              The amazing NFT art of the world here
            </h2>
          </div>
          <div className='flex items-start gap-2'>
            <Image
              src={'/assets/images/pictos/card-tick-1.svg'}
              width={'36px'}
              height={'36px'}
            />
            <div>
              <h3 className='text-xl font-bold'>Fast Transaction</h3>
              <p className='text-sm	text-grey-600 font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-2'>
            <Image
              src={'/assets/images/pictos/chart-square.svg'}
              width={'36px'}
              height={'36px'}
            />
            <div>
              <h3 className='text-xl font-bold'>Fast Transaction</h3>
              <p className='text-sm	text-grey-600 font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </section>
        <section className='bg-grey-500 px-20 py-32 text-left w-full'>
          <h2 className='font-integralExtra text-2xl mb-14'>
            Collection Featured NFTs
          </h2>
          <div className='flex justify-between w-full'>
            {collectionFeaturedNft.map((item, index) => (
              <div className='w-fit' key={index}>
                <div className='flex gap-2'>
                  <div
                    className={` w-[266px] h-[272px] bg-cover bg-center rounded-2xl`}
                    style={{
                      backgroundImage: `url(${item.images[0]})`,
                    }}
                  ></div>
                  <div className='flex flex-col justify-between'>
                    {item.images.map((image, index) => {
                      if (index !== 0) {
                        return (
                          <div
                            key={index}
                            className={` w-[103px] h-[85px] bg-cover bg-center rounded-2xl`}
                            style={{
                              backgroundImage: `url(${image})`,
                            }}
                          ></div>
                        )
                      }
                    })}
                  </div>
                </div>
                <h3 className='text-xl font-bold mt-8'>Amazing Collection</h3>
                <div className='flex justify-between mt-2.5	'>
                  <div className='flex gap-4'>
                    <div
                      className='w-8 h-8 rounded-full bg-cover bg-no-repeat bg-center'
                      style={{
                        backgroundImage: `url(${item.profil.avatar})`,
                      }}
                    ></div>
                    <div className='flex flex-col justify-center'>
                      <span className={`font-title text-base`}>
                        {item.profil.name}
                      </span>
                    </div>
                  </div>
                  <Button
                    buttonStyle={ButtonStyle.Secondary}
                    className='text-xs !py-2 px-3'
                  >
                    Total 54 items
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='flex px-20 py-32 text-left w-full items-center gap-16'>
          <div className='flex gap-14 w-1/2 items-center'>
            <div className='flex flex-col gap-14 items-end'>
              {createAndSellYourNFTs.map(
                (item: createAndSellYourNFTsModel, index: number) => {
                  return <>{index < 2 && cardWithSize(item, index)}</>
                }
              )}
            </div>
            <div className='flex items-center'>
              {cardWithSize(createAndSellYourNFTs[2])}
            </div>
          </div>
          <div className='w-1/2'>
            <h2 className='font-integralExtra text-2xl mb-10'>
              Create and
              <br /> sell your NFTs
            </h2>
            <p className='text-lg	text-grey-600 mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
            <Button>Sign Up Now</Button>
          </div>
        </section>
        <section className='bg-grey-500 px-20 py-32 text-left w-full'>
          <h2 className='font-integralExtra text-3xl mb-14'>
            Collection Featured NFTs
          </h2>
          <div className='flex gap-3'>
            {collectionFeaturedNFTs.map((item, index) => (
              <Button
                key={index}
                className={`!py-2.5 !px-5`}
                buttonStyle={
                  index === 0 ? ButtonStyle.Primary : ButtonStyle.Grey
                }
              >
                {item.title}
              </Button>
            ))}
          </div>
          <div className='grid grid-cols-4 gap-10 mt-10'>
            {discoverMoreNFTs.map((item: discoverMoreNFTs, index: number) => (
              <Card key={index} card={item} className={`bg-white`} />
            ))}
          </div>
          <div className='text-center	mt-16'>
            <Button buttonStyle={ButtonStyle.Secondary}>More NFTs</Button>
          </div>
        </section>
        <section className='bg-grey-500 px-20 py-32 text-left w-full'>
          <h2 className='font-integralExtra text-3xl mb-14'>
            Discover more NFTs
          </h2>
          <div className='grid grid-cols-4 gap-10 mt-10'>
            {discoverMoreNFTs.map((item: discoverMoreNFTs, index: number) => (
              <Card
                key={index}
                card={item}
                className={`bg-white`}
                withDescription={false}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <div className='text-center w-full border-t border-grey-200 p-4'>
        <p className='text-grey-300 text-sm	'>Copyright © 2022 Avi Yansah</p>
      </div>
    </div>
  )
}

export default Home
