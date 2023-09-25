import { affiliation } from "../molecules/affiliation"
import { image } from "../molecules/image"
import { socials } from "../socials"

export type people = {
  firstname: string
  lastname: string
  affiliations: [affiliation]
  picture: image
  socials: socials
  biography: string
}
