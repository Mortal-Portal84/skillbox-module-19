import { Delivery } from './classes'
import renderModal from './components/modal.ts'

import './style.css'

const app = document.querySelector('#app')
const modal = renderModal() as HTMLDialogElement

const deliveryList = [
  new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
  new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
  new Delivery('Оля', 'ул. Ткачей, д. 43', 11),
]

deliveryList[2].setDistance(88)

app?.appendChild(modal)

modal.showModal()
