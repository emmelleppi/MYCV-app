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
      <Link to={'/edit/' + id} >
        <h3>{name} {surname}</h3>
      </Link>
      <p>{moment(birthDate).format('Do MMMM YYYY')}</p>
    </div>
  )
}

export default CurriculumListItem
