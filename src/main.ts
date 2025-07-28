import { Delivery, EditDelivery } from './models'
import { renderCalculator } from './utils'
import './style.css'

let deliveryList = [
  new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
  new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
  new Delivery('Оля', 'ул. Ткачей, д. 43', 11),
]

export const modifyDelivery = (delivery: EditDelivery) => {
  deliveryList = deliveryList.map((item) => {
    if (item.getId() === delivery.getId()) {
      if (item.getName() !== delivery.getName()) item.setName(delivery.getName())
      if (item.getAddress() !== delivery.getAddress()) item.setAddress(delivery.getAddress())
      if (item.getDistance() !== delivery.getDistance()) item.setDistance(delivery.getDistance())
      if (item.getStatus() !== delivery.getStatus()) item.setStatus(delivery.getStatus())
    }

    return item
  })
}

renderCalculator(deliveryList)
