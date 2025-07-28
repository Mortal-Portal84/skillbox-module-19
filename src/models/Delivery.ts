import { createSubtitleWithInfo, createModal } from '../utils'
import { Status } from '../constants'

export class Delivery {
  private readonly id: string
  private name: string
  private address: string
  private distance: number
  private status: Status

  constructor (name: string, address: string, distance: number, id: string = crypto.randomUUID(), status: Status = Status.delivery) {
    this.name = name
    this.address = address
    this.distance = distance
    this.id = id
    this.status = status
    this.render()
  }

  render (key?: keyof Delivery) {
    const cardList = document.getElementById('card-list')
    let card = cardList?.querySelector(`[data-id="${this.id}"]`) as HTMLElement | null

    if (card && key) {
      if(key === 'status' as keyof Delivery) {
        card.className = 'card'
        card.classList.add(`card--${this.status}`)
        return
      }

      const cardElement = card.querySelector(`.card__${key}`) as HTMLParagraphElement | null

      if (cardElement) {
        cardElement.innerText = this[key].toString()
      }
      return
    }

    card = document.createElement('div')
    card.dataset.id = this.id
    card.classList.add('card', `card--${this.status}`)

    const editButton = document.createElement('button')
    editButton.className = 'card__button'
    editButton.textContent = 'Изменить'

    editButton.addEventListener('click', () => {
      createModal(this)
    })

    const nameElement = createSubtitleWithInfo('Имя', this.name, 'card__name')
    const addressElement = createSubtitleWithInfo('Адрес', this.address, 'card__address')
    const distanceElement = createSubtitleWithInfo('Расстояние', `${this.distance}`, 'card__distance')

    card.append(editButton, nameElement, addressElement, distanceElement)
    cardList?.append(card)
  }

  getId () {
    return this.id
  }

  setName (value: string) {
    this.name = value
    this.render('name' as keyof Delivery)
  }

  getName () {
    return this.name
  }

  setAddress (value: string) {
    this.address = value
    this.render('address' as keyof Delivery)
  }

  getAddress () {
    return this.address
  }

  setDistance (value: number) {
    this.distance = value
    this.render('distance' as keyof Delivery)
  }

  getDistance () {
    return this.distance
  }

  setStatus (value: Status) {
    this.status = value
    this.render('status' as keyof Delivery)
  }

  getStatus () {
    return this.status
  }
}

