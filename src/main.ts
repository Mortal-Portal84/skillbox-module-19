import { Delivery } from './classes'

import './style.css'

const deliveryList: Delivery[] = [
  new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
  new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
  new Delivery('Оля', 'ул. Ткачей, д. 43', 11)
]

const app = document.querySelector('#app')
const cardList = document.createElement('div')
cardList.className = 'card-list'

deliveryList.map((delivery) => cardList?.append(delivery.renderDeliveryCard()))

app?.append(cardList)
