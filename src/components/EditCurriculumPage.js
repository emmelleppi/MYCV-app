import React from 'react'
import { connect } from 'react-redux'
import CurriculumForm from './CurriculumForm'
import { editCurriculum, removeCurriculum } from '../actions/curricula'

function EditCurriculumPage({ curriculum, dispatch, history }) {
  return (
    <div>
      <h1>{`Edit curriculum with id: ${curriculum.id}`}</h1>
      <CurriculumForm
        curriculum={curriculum}
        onSubmit={(curriculum) => {
          dispatch(editCurriculum(curriculum.id, curriculum))
          history.push('/')
        }}
      />
      <button className='button button--secondary' onClick={() => {
        dispatch(removeCurriculum({ id: curriculum.id }))
        history.push('/')
      }
      } >Remove</button>
    </div>
  )
}

function mapStateToProps(state, props) {
  return {
    curriculum: state.curricula.find((curriculum) => curriculum.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditCurriculumPage)
