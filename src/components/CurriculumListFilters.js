import React from 'react'
import { connect } from 'react-redux'
import { setNameFilter, setSurnameFilter, sortByName, sortBySurname, sortByBirthDate, setStartBirthDate, setEndBirthDate } from '../actions/filters'
import CurriculumFormInput from './CurriculumFormInput'
import { ReactDatez, ReduxReactDatez } from 'react-datez'
import 'react-datez/dist/css/react-datez.css'

class CurriculumListFilters extends React.Component {
  onStartBirthDateChange = (startDate) => {
    this.props.dispatch(setStartBirthDate(startDate))
  }

  onEndBirthDateChange = (endDate) => {
    this.props.dispatch(setEndBirthDate(endDate))
  }

  render() {
    const { filters, dispatch } = this.props

    return (
      <div className="content-container">
        <div className="input-group--filters">
          <div className="input-group__item">
            <CurriculumFormInput
              inputAttr={{
                placeholder: 'Name',
                className: 'text-input',
                type: 'text',
                value: filters.name
              }}
              onInputChange={(e) => {
                dispatch(setNameFilter(e.target.value))
              }} />
          </div>
          <div className="input-group__item">
            <CurriculumFormInput
              inputAttr={{
                placeholder: 'Surname',
                className: 'text-input',
                type: 'text',
                value: filters.surname
              }}
              onInputChange={(e) => {
                dispatch(setSurnameFilter(e.target.value))
              }}
            />
          </div>
        </div>
        <div className="input-group--filters">
          <div className="input-group__item">
            <ReactDatez
              allowPast={true}
              value={filters.startBirthDate}
              handleChange={this.onStartBirthDateChange}
              dateFormat="DD/MM/YYYY"
              placeholder="Birth date start"
            />
          </div>
          <div className="input-group__item">
            <ReactDatez
              allowPast={true}
              value={filters.endBirthDate}
              handleChange={this.onEndBirthDateChange}
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
              value={filters.sortBy}
              onChange={(e) => {
                if (e.target.value === 'name') {
                  dispatch(sortByName())
                } else if (e.target.value === 'surname') {
                  dispatch(sortBySurname())
                } else if (e.target.value === 'birthDate') {
                  dispatch(sortByBirthDate())
                }
              }}
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