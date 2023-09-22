import { address } from "./address"
import { image } from "./image"
import { eventSlot } from "./eventSlot"

export type event = {
  name: string
  description: string
  date: string
  type: number
  totalSlots: number
  availableSlots: number
  slots: [eventSlot]
  delay: number
  place: address
  url: string
  image: image
  appId: string
  state: number
  bookingState: number
}
