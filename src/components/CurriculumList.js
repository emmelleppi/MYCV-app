import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CurriculumListItem from './CurriculumListItem'
import selectCurricula from '../selectors/curricula'

function CurriculumList(props) {
  const { curricula } = props

  return (
    <div className='content'>
      <div className='list-header'>
        <h1>Curriculum List</h1>
      </div>
      {
        curricula.length > 0 ?
          curricula.map((curriculum) => {
            return <CurriculumListItem key={curriculum.id} {...curriculum} />
          })
          :
          <div className='list-item list-item--message'>
            <b>No curriculum available,<Link className='list-item--create' to='/create'>create one.</Link></b>
          </div>
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    curricula: selectCurricula(state.curricula, state.filters)
  }
}

export default connect(mapStateToProps)(CurriculumList)
