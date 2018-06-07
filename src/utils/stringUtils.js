export function toTitleCase (title) {
  return title
    .split(/ /g)
    .map((word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`)
    .join(' ')
}

export function isPhoneNumber (number) {
  return !number || number.match(/^([+]39)?([\d]{6,12})$/)
}

export function isEmail (email) {
  return !email || email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
}
