import { validateTypedName, validateTypedNumber } from '../utils'

const renderModal = () => {
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
  buttonClose.addEventListener('click', () => dialog.close())

  const options = [
    {
      value: 'canceled',
      text: 'Отменён'
    },
    {
      value: 'onDelivery',
      text: 'Доставляется'
    },
    {
      value: 'delivered',
      text: 'Доставлен'
    },
  ]

  options.forEach(option => {
    const optionElement = document.createElement('option')
    optionElement.value = option.value
    optionElement.textContent = option.text
    select.append(optionElement)
  })

  form.append(title, buttonClose, inputName, inputAddress, inputDistance, select, buttonSubmit)
  dialog.appendChild(form)

  return dialog
}

export default renderModal
