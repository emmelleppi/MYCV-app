import emailValidator from 'validator/lib/isEmail';
import phoneValidator from 'validator/lib/isMobilePhone';

export function toTitleCase(title) {
  const startCase = require('lodash/startcase')
  return startCase(title)
}

export function isPhoneNumber(number) {
    return phoneValidator(number,'it-IT')
}

export function isEmail(email) {
  return emailValidator(email)
}