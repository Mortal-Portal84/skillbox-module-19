export const validateTypedName = (e: Event) => {
  const input = e.target as HTMLInputElement
  input.value = input.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9\s.,+'!?-]/g, '')
}

export const validateTypedNumber = (e: Event) => {
  const input = e.target as HTMLInputElement
  input.value = input.value.replace(/[^0-9]/g, '')
}
