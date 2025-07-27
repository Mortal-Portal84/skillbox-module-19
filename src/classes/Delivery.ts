import { createSubtitleWithInfo } from '../utils'

export class Delivery {
  protected name: string
  protected address: string
  protected distance: number

  constructor (name: string, address: string, distance: number) {
    this.name = name
    this.address = address
    this.distance = distance
  }

  setName (value: string) {
    this.name = value
  }

  getName () {
    return this.name
  }

  setAddress (value: string) {
    this.address = value
  }

  getAddress () {
    return this.address
  }

  setDistance (value: number) {
    this.distance = value
  }

  getDistance () {
    return this.distance
  }

  renderDeliveryCard () {
    const deliveryCard = document.createElement('div')
    deliveryCard.className = 'delivery-card'

    const nameElement = createSubtitleWithInfo('Имя', this.name)
    const addressElement = createSubtitleWithInfo('Адрес', this.address)
    const distanceElement = createSubtitleWithInfo('Расстояние', `${this.distance} км`)

    deliveryCard.append(nameElement, addressElement, distanceElement)

    return deliveryCard
  }
}
