import React from 'react'
import { connect } from 'react-redux'
import CurriculumForm from './CurriculumForm'
import { addCurriculum } from '../actions/curricula'

function AddCurriculumPage({ dispatch, history }) {
  return (
    <div>
      <div className='header-container'>
        <div className='container'>
          <h1 className='header__title'>New curriculum</h1>
        </div>
      </div>
      <div className='container'>
        <CurriculumForm
          onSubmit={(curriculum) => {
            dispatch(addCurriculum(curriculum))
            history.push('/')
          }}
        />
      </div>
    </div>
  )
}

export default connect()(AddCurriculumPage)
