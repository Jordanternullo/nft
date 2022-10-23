import axios from 'axios'

export const API_ENDPOINT = 'http://localhost:5000/api'

export const createBid = async (
  nft: string,
  bid: string,
  adressWallet: string
) => {
  const { data } = await axios.post(`${API_ENDPOINT}/bid`, {
    nft,
    bid,
    adressWallet,
  })
  return data
}
