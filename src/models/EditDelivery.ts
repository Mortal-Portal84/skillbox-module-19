import { Delivery } from './Delivery'
import { openModal } from '../utils'
import { modifyDelivery } from '../main'
import { Status } from '../constants'

export class EditDelivery extends Delivery {
  constructor (name: string, address: string, distance: number, id: string, status: Status) {
    super(name, address, distance, id, status)
    this.render()
  }

  static getTotalDistance(deliveries: Delivery[]): number {
    return deliveries.reduce((acc, delivery) =>
      acc + (delivery.getStatus() === Status.canceled
        ? 0
        : delivery.getDistance()
      ), 0)
  }

  onSave (name: string, address: string, distance: number, status: Status) {
    if (this.getName() !== name) this.setName(name)
    if (this.getAddress() !== address) this.setAddress(address)
    if (this.getDistance() !== distance) this.setDistance(distance)
    if (this.getStatus() !== status) this.setStatus(status)

    modifyDelivery(this)
  }

  render() {
    openModal(this)
  }
}
