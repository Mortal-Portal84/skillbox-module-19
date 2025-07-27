import { createSubtitleWithInfo } from '../utils'

export class Delivery {
  name: string
  address: string
  distance: number

  constructor (name: string, address: string, distance: number) {
    this.name = name
    this.address = address
    this.distance = distance
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
