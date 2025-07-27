import { createSubtitleWithInfo } from '../utils'

export class Delivery {
  private id: string = crypto.randomUUID()
  private name: string
  private address: string
  private distance: number

  constructor (name: string, address: string, distance: number) {
    this.name = name
    this.address = address
    this.distance = distance
    this.render()
  }

  render () {
    const cardList = document.getElementById('card-list')
    let card = cardList?.querySelector(`[data-id="${this.id}"]`) as HTMLElement | null

    if (card) {
      card.replaceChildren()
    } else {
      card = document.createElement('div')
      card.dataset.id = this.id
      card.className = 'delivery-card'
      cardList?.append(card)
    }

    const nameElement = createSubtitleWithInfo('Имя', this.name)
    const addressElement = createSubtitleWithInfo('Адрес', this.address)
    const distanceElement = createSubtitleWithInfo('Расстояние', `${this.distance} км`)

    card.append(nameElement, addressElement, distanceElement)
  }

  setName (value: string) {
    this.name = value
    this.render()
  }

  getName () {
    return this.name
  }

  setAddress (value: string) {
    this.address = value
    this.render()
  }

  getAddress () {
    return this.address
  }

  setDistance (value: number) {
    this.distance = value
    this.render()
  }

  getDistance () {
    return this.distance
  }
}
