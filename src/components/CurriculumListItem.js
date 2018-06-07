import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function CurriculumListItem (curriculum) {
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
  } = curriculum

  return (
    <div>
      <h3>
        <Link to={'/edit/' + id} >
          {`${name} ${surname}`}
        </Link>
      </h3>
      <h3>{moment(birthDate).format('Do MMMM YYYY')}</h3>
    </div>
  )
}

export default CurriculumListItem
