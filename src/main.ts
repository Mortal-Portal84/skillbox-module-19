import { Delivery } from './models'
import './style.css'

const deliveryList = [
  new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
  new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
  new Delivery('Оля', 'ул. Ткачей, д. 43', 11),
]

deliveryList[2].setDistance(88)
