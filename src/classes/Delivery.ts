import { createSubtitleWithInfo } from '../utils'

type DeliveryField = 'name' | 'address' | 'distance'

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

  render (key?: DeliveryField) {
    const cardList = document.getElementById('card-list')
    let card = cardList?.querySelector(`[data-id="${this.id}"]`) as HTMLElement | null

    if (card && key) {
      const cardElement = card.querySelector(`.card__${key}`) as HTMLParagraphElement | null
      if (cardElement) {
        cardElement.innerText = this[key].toString()
      }
      return
    }

    card = document.createElement('div')
    card.dataset.id = this.id
    card.className = 'card'

    const nameElement = createSubtitleWithInfo('Имя', this.name, 'card__name')
    const addressElement = createSubtitleWithInfo('Адрес', this.address, 'card__address')
    const distanceElement = createSubtitleWithInfo('Расстояние', `${this.distance}`, 'card__distance')

    card.append(nameElement, addressElement, distanceElement)
    cardList?.append(card)
  }

  setName (value: string) {
    this.name = value
    this.render('name')
  }

  getName () {
    return this.name
  }

  setAddress (value: string) {
    this.address = value
    this.render('address')
  }

  getAddress () {
    return this.address
  }

  setDistance (value: number) {
    this.distance = value
    this.render('distance')
  }

  getDistance () {
    return this.distance
  }
}

