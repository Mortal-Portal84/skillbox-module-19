export const createSubtitleWithInfo = (subtitle: string, info: string) => {
  const wrapper = document.createElement('div')
  const subtitleElement = document.createElement('p')
  const infoElement = document.createElement('p')

  wrapper.className = 'info-wrapper'
  subtitleElement.className = 'subtitle'
  infoElement.className = 'info'

  subtitleElement.textContent = subtitle
  infoElement.textContent = info

  wrapper.append(subtitleElement, infoElement)

  return wrapper
}
