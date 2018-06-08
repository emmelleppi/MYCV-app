import React from 'react'
import moment from 'moment'
import { ReactDatez } from 'react-datez'
import { toTitleCase, isPhoneNumber, isEmail } from '../utils/stringUtils'
import CurriculumFormInput from './CurriculumFormInput'
import 'react-datez/dist/css/react-datez.css'

const ERROR_REQUIRED_FIELD = 'Please provide the required filelds'
const ERROR_NOT_VALID_FIELD = 'Some field is not valid'
const ERROR_NAME_REQUIRED = 'The name is required'
const ERROR_SURNAME_REQUIRED = 'The surname is required'
const ERROR_PHONE_NOT_VALID = 'The phone number is not valid'
const ERROR_EMAIL_NOT_VALID = 'The email is not valid'
const DATE_MONTH_YEAR = 'DD/MM/YYYY'

const defaultState = {
  name: '',
  surname: '',
  birthDate: moment(),
  city: '',
  province: '',
  country: '',
  street: '',
  streetNumber: '',
  cellphoneNumber: '',
  landlinePhone: '',
  firstEmail: '',
  secondEmail: '',
  error: ''
}

class CurriculumForm extends React.Component {

  state = this.props.curriculum ? { defaultState, ...this.props.curriculum } : defaultState

  onStateChange = (key, e) => {
    const value = e.target.value
    this.setState(() => ({ [key]: value }))
    return value
  }

  onInputChange = (key, e) => {
    const value = this.onStateChange(key, e)
    return !value.length > 0
  }

  onPhoneChange = (key, e) => {
    const phone = this.onStateChange(key, e)
    return phone && !isPhoneNumber(phone)
  }

  onEmailChange = (key, e) => {
    const email = this.onStateChange(key, e)
    return email && !isEmail(email)
  }

  onDateChange = (key, date) => {
    if (date) {
      this.setState(() => ({ [key]: date }))
    }
  }

  isStateValueValid(inputs, optFunct) {
    return inputs.reduce((a, b) => {
      return a || (optFunct ? !optFunct(b) : !b)
    }, false)
  }

  onSubmit = (e) => {
    e.preventDefault()

    const {
      name,
      surname,
      birthDate,
      city,
      province,
      country,
      street,
      streetNumber,
      cellphoneNumber,
      landlinePhone,
      firstEmail,
      secondEmail,
      error
    } = this.state

    if (this.isStateValueValid([name, surname])) {
      this.setState(() => ({ error: ERROR_REQUIRED_FIELD }))
    } else if (this.isStateValueValid([cellphoneNumber, landlinePhone], isPhoneNumber)
      || this.isStateValueValid([firstEmail, secondEmail], isEmail)
    ) {
      this.setState(() => ({ error: ERROR_NOT_VALID_FIELD }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        name: toTitleCase(name),
        surname: toTitleCase(surname),
        birthDate: moment(birthDate).format().valueOf(),
        city: toTitleCase(city),
        province: province.toUpperCase(),
        country: toTitleCase(country),
        street: toTitleCase(street),
        streetNumber: streetNumber,
        cellphoneNumber: cellphoneNumber,
        landlinePhone: landlinePhone,
        firstEmail: firstEmail,
        secondEmail: secondEmail
      })
    }
  }

  render() {
    const {
      name,
      surname,
      birthDate,
      city,
      province,
      country,
      street,
      streetNumber,
      cellphoneNumber,
      landlinePhone,
      firstEmail,
      secondEmail,
      error
    } = this.state

    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit} className="form">
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Name',
                className: 'text-input',
                value: name
              }}
              onInputChange={this.onInputChange.bind(this, 'name')}
              textError={ERROR_NAME_REQUIRED}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Surname',
                className: 'text-input',
                value: surname
              }}
              onInputChange={this.onInputChange.bind(this, 'surname')}
              textError={ERROR_SURNAME_REQUIRED}
            />
          </div>
          <div className="form__pairs" >
            <ReactDatez
              allowPast={true}
              value={moment(birthDate).format()}
              handleChange={this.onDateChange.bind(this, 'birthDate')}
              dateFormat={DATE_MONTH_YEAR}
              placeholder="Birth date"
            />
          </div>
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'City',
                className: 'text-input',
                value: city
              }}
              onInputChange={this.onInputChange.bind(this, 'city')}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Province',
                className: 'text-input',
                value: province,
                maxLength: 2
              }}
              onInputChange={this.onInputChange.bind(this, 'province')}
            />
          </div>
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Country',
                className: 'text-input',
                value: country
              }}
              onInputChange={this.onInputChange.bind(this, 'country')}
            />
          </div>
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Street',
                className: 'text-input',
                value: street
              }}
              onInputChange={this.onInputChange.bind(this, 'street')}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Street number',
                className: 'text-input',
                value: streetNumber
              }}
              onInputChange={this.onInputChange.bind(this, 'streetNumber')}
            />
          </div>
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Cellphone number',
                className: 'text-input',
                value: cellphoneNumber
              }}
              onInputChange={this.onPhoneChange.bind(this, 'cellphoneNumber')}
              textError={ERROR_PHONE_NOT_VALID}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Landline phone',
                className: 'text-input',
                value: landlinePhone
              }}
              onInputChange={this.onPhoneChange.bind(this, 'landlinePhone')}
              textError={ERROR_PHONE_NOT_VALID}
            />
          </div>
          <div className="form__pairs" >
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'First email',
                className: 'text-input',
                value: firstEmail
              }}
              onInputChange={this.onEmailChange.bind(this, 'firstEmail')}
              textError={ERROR_EMAIL_NOT_VALID}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Second email',
                className: 'text-input',
                value: secondEmail
              }}
              onInputChange={this.onEmailChange.bind(this, 'secondEmail')}
              textError={ERROR_EMAIL_NOT_VALID}
            />
          </div>
          <button className="button button--action">Add curriculum</button>
        </form>
      </div>
    )
  }
}

export default CurriculumForm