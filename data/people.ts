import { affiliation } from "./affiliation"
import { image } from "./image"
import { socials } from "./socials"
import {position } from "./position"

export type people = {
  firstname: string
  lastname: string
  affiliations: [affiliation: affiliation , positions: [position]]
  picture: image
  socials: socials
  biography: string
}
