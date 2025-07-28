import { Delivery, EditDelivery } from '../models'
import { Status, StatusValue } from '../constants'
import { validateTypedName, validateTypedNumber } from './validators.ts'

export const openModal = (delivery: EditDelivery) => {
  const existingModal = document.getElementById('modal')
  if (existingModal) return

  const app = document.getElementById('app')
  const dialog = document.createElement('dialog')
  const title = document.createElement('h2')
  const form = document.createElement('form')
  const inputName = document.createElement('input')
  const inputAddress = document.createElement('input')
  const inputDistance = document.createElement('input')
  const select = document.createElement('select')
  const buttonSubmit = document.createElement('button')
  const buttonClose = document.createElement('button')

  dialog.id = 'modal'
  form.className = 'form'
  inputName.className = 'form__input'
  inputAddress.className = 'form__input'
  inputDistance.className = 'form__input'
  select.className = 'form__select'
  buttonClose.className = 'form__button-close'
  buttonSubmit.className = 'form__button'

  form.method = 'Dialog'
  buttonClose.type = 'button'
  buttonClose.textContent = '×'
  title.textContent = 'Изменить'
  buttonSubmit.textContent = 'Сохранить'

  inputName.required = true
  inputAddress.required = true
  inputDistance.required = true
  inputName.type = 'text'
  inputAddress.type = 'text'
  inputDistance.type = 'number'
  inputDistance.min = '0'
  inputDistance.step = '1'

  inputName.addEventListener('input', validateTypedName)
  inputAddress.addEventListener('input', validateTypedName)
  inputDistance.addEventListener('input', validateTypedNumber)

  buttonClose.addEventListener('click', () => {
    dialog.remove()
  })

  buttonSubmit.addEventListener('click', () => {
    delivery.onSave(
      inputName.value,
      inputAddress.value,
      Number(inputDistance.value),
      select.value as Status
    )
    dialog.remove()
  })

  Object.entries(StatusValue).map(([key, value]) => {
    const optionElement = document.createElement('option')
    optionElement.value = key
    optionElement.textContent = value
    select.append(optionElement)
  })

  inputName.value = delivery.getName()
  inputAddress.value = delivery.getAddress()
  inputDistance.value = String(delivery.getDistance())
  select.value = delivery.getStatus()

  form.append(title, buttonClose, inputName, inputAddress, inputDistance, select, buttonSubmit)
  dialog.appendChild(form)
  app?.appendChild(dialog)

  dialog.showModal()
}

export const createModal = (delivery: Delivery) => {
  new EditDelivery(delivery.getName(), delivery.getAddress(), delivery.getDistance(), delivery.getId(), delivery.getStatus())
}
