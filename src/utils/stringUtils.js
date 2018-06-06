// Funzione che effettua il capitalize di tutte le parole dentro a una stringa
export const toTitleCase = (title) => {
  return title
    .split(/ /g)
    .map((word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1).toLowerCase()}`)
    .join(' ')
}

export const isPhoneNumber = (number) => {
  return !number || number.match(/^([+]39)?([\d]{6,12})$/)
}

export const isEmail = (email) => {
  return !email || email.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)
}
