export const createSubtitleWithInfo = (subtitle: string, info: string, className: string) => {
  const wrapper = document.createElement('div')
  const subtitleElement = document.createElement('p')
  const infoElement = document.createElement('p')

  wrapper.className = 'info-wrapper'
  subtitleElement.className = 'subtitle'

  subtitleElement.textContent = subtitle


  if(className === 'card__distance') {
    const span = document.createElement('span')
    span.className = className
    span.textContent = info
    infoElement.textContent = ' км'
    infoElement.className = `${className}-unit`

    infoElement.prepend(span)
  } else {
    infoElement.className = className
    infoElement.textContent = info
  }

  wrapper.append(subtitleElement, infoElement)

  return wrapper
}
