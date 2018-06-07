import React from 'react'
import { connect } from 'react-redux'
import { setNameFilter, setSurnameFilter, sortByName, sortBySurname, sortByBirthDate, setStartBirthDate, setEndBirthDate } from '../actions/filters'
import CurriculumFormInput from './CurriculumFormInput'
import { ReactDatez, ReduxReactDatez } from 'react-datez'
import 'react-datez/dist/css/react-datez.css'

class CurriculumListFilters extends React.Component {

  onInputChange = (e, key) => {
    const value = e.target.value
    if (!!value) {
      switch (key) {
        case 'name':
          this.props.dispatch(setNameFilter(value))
          break;
        case 'surname':
          this.props.dispatch(setSurameFilter(value))
          break;
      }
    }
  }

  onDateChange = (date, key) => {
    if (!!date) {
      switch (key) {
        case 'startBirthDate':
          this.props.dispatch(setStartBirthDate(date))
          break;
        case 'endBirthDate':
          this.props.dispatch(setEndBirthDate(date))
          break;
      }
    }
  }

  onSortChange = (e) => {
    const selectValue = e.target.value
    if (!!selectValue) {
      switch (selectValue) {
        case 'name':
          this.props.dispatch(sortByName())
          break;
        case 'surname':
          this.props.dispatch(sortBySurname())
          break;
        case 'birthDate':
          this.props.dispatch(sortByBirthDate())
          break;
      }
    }
  }

  render() {
    const { name, surname, startBirthDate, endBirthDate, sortBy } = this.props.filters

    return (
      <div className="content-container">
        <div className="input-group--filters">
          <div className="input-group__item">
            <CurriculumFormInput
              inputAttr={{
                placeholder: 'Name',
                className: 'text-input',
                type: 'text',
                value: name
              }}
              onInputChange={(e) => { this.onInputChange(e, 'name') }} />
          </div>
          <div className="input-group__item">
            <CurriculumFormInput
              inputAttr={{
                placeholder: 'Surname',
                className: 'text-input',
                type: 'text',
                value: surname
              }}
              onInputChange={(e) => { this.onInputChange(e, 'surname') }} />
            />
          </div>
        </div>
        <div className="input-group--filters">
          <div className="input-group__item">
            <ReactDatez
              allowPast={true}
              value={startBirthDate}
              handleChange={(date) => { this.onDateChange(date, 'startBirthDate') }}
              dateFormat="DD/MM/YYYY"
              placeholder="Birth date start"
            />
          </div>
          <div className="input-group__item">
            <ReactDatez
              allowPast={true}
              value={endBirthDate}
              handleChange={(date) => { this.onDateChange(date, 'endBirthDate') }}
              dateFormat="DD/MM/YYYY"
              placeholder="Birth date end"
            />
          </div>
        </div>
        <div className="input-group--filters">
          <div className="input-group__item">
            <label>Sort curricula by</label>
            <select
              className="select"
              value={sortBy}
              onChange={this.onSortChange}
            >
              <option value="name" >Name</option>
              <option value="surname" >Surname</option>
              <option value="birthDate" >Birthday</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(CurriculumListFilters)