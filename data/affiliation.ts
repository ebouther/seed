import { image } from "./image"
import { address } from "./address"

export type affiliation = {
  name: string
  url: string
  ror: string
  image: image
  address: address
  positions: [string]
}
