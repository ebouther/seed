import { affiliation } from "./affiliation"
import { image } from "./image"
import { socials } from "./socials"

export type people = {
  firstname: string
  lastname: string
  affiliations: [affiliation]
  picture: image
  socials: socials
  biography: string
}
