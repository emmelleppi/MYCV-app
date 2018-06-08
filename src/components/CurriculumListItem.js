import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const DATE_TH_MONTH_EXTENDED_YEAR_EXTENDED = 'Do MMMM YYYY'

function CurriculumListItem(props) {
  const {
    id,
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
    secondEmail
  } = props

  return (
    <div>
      <h3>
        <Link to={'/edit/' + id} >
          {`${name} ${surname}`}
        </Link>
      </h3>
      <h3>{moment(birthDate).format(DATE_TH_MONTH_EXTENDED_YEAR_EXTENDED)}</h3>
    </div>
  )
}

export default CurriculumListItem
