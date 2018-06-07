import React from 'react'
import moment from 'moment'
import { ReactDatez } from 'react-datez'
import { toTitleCase, isPhoneNumber, isEmail } from '../utils/stringUtils'
import CurriculumFormInput from './CurriculumFormInput'
import 'react-datez/dist/css/react-datez.css'

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

  onStateChange = (e, key) => {
    const value = e.target.value
    this.setState(() => ({ [key]: value }))
    return value
  }

  onInputChange = (e, key) => {
    this.onStateChange(e, key)
  }

  onPhoneChange = (e, key) => {
    const phone = this.onStateChange(e, key)
    return phone && !isPhoneNumber(phone)
  }

  onEmailChange = (e, key) => {
    const email = this.onStateChange(e, key)
    return email && !isEmail(email)
  }

  onDateChange = (date, key) => {
    if (date) {
      this.setState(() => ({ [key]: date }))
    }
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

    if (!name || !surname) {
      this.setState(() => ({ error: 'Please provide the required filelds' }))
    } else if (!isPhoneNumber(cellphoneNumber) ||
      !isPhoneNumber(landlinePhone) ||
      !isEmail(firstEmail) ||
      !isEmail(secondEmail)
    ) {
      this.setState(() => ({ error: 'Some field is not valid' }))
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
              onInputChange={(e) => { return this.onInputChange(e, 'name') }}
              textError="The name is required"
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Surname',
                className: 'text-input',
                value: surname
              }}
              onInputChange={(e) => { return this.onInputChange(e, 'surname') }}
              textError="The surname is required"
            />
          </div>
          <div className="form__pairs" >
            <ReactDatez
              allowPast={true}
              value={moment(birthDate).format()}
              handleChange={(date) => { return this.onDateChange(date, 'birthDate') }}
              dateFormat="DD/MM/YYYY"
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
              onInputChange={(e) => { return this.onInputChange(e, 'city') }}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Province',
                className: 'text-input',
                value: province,
                maxLength: 2
              }}
              onInputChange={(e) => { return this.onInputChange(e, 'province') }}
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
              onInputChange={(e) => { return this.onInputChange(e, 'country') }}
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
              onInputChange={(e) => { return this.onInputChange(e, 'street') }}
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Street number',
                className: 'text-input',
                value: streetNumber
              }}
              onInputChange={(e) => { return this.onInputChange(e, 'streetNumber') }}
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
              onInputChange={(e) => { return this.onPhoneChange(e, 'cellphoneNumber') }}
              textError="The phone number is not valid"
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Landline phone',
                className: 'text-input',
                value: landlinePhone
              }}
              onInputChange={(e) => { return this.onPhoneChange(e, 'landlinePhone') }}
              textError="The phone number is not valid"
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
              onInputChange={(e) => { return this.onEmailChange(e, 'firstEmail') }}
              textError="The email is not valid"
            />
            <CurriculumFormInput
              inputAttr={{
                type: 'text',
                placeholder: 'Second email',
                className: 'text-input',
                value: secondEmail
              }}
              onInputChange={(e) => { return this.onEmailChange(e, 'secondEmail') }}
              textError="The email is not valid"
            />
          </div>
          <button className="button button--action">Add curriculum</button>
        </form>
      </div>
    )
  }
}

export default CurriculumForm