import { Delivery, EditDelivery } from '../models'

export const renderCalculator = (deliveryList: Delivery[]) => {
  const app = document.getElementById('app')
  const wrapper = document.createElement('div')
  const calculateButton = document.createElement('button')
  const output = document.createElement('p')

  calculateButton.className = 'form__button'
  output.className = 'calculator__output'
  wrapper.className = 'calculator'
  calculateButton.textContent = 'Общее расстояние'

  calculateButton.addEventListener('click', () => {
    output.textContent = `Общее расстояние: ${EditDelivery.getTotalDistance(deliveryList).toString()} км`
  })

  wrapper.append(calculateButton, output)
  app?.append(wrapper)
}
