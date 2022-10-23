import axios from 'axios'

export const API_ENDPOINT = 'http://localhost:5000/api'

export const createNft = async (nft: any) => {
  const { data } = await axios.post(`${API_ENDPOINT}/nft`, nft, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return data
}

export const listNft = async () => {
  const { data } = await axios.get(`${API_ENDPOINT}/nft`)
  return data
}
