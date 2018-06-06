import React from 'react'
import { connect } from 'react-redux'
import CurriculumForm from './CurriculumForm'
import { editCurriculum, removeCurriculum } from '../actions/curricula'

const EditCurriculumPage = (props) => {
  return (
    <div>
      <h1>Edit curriculum with id: {props.curriculum.id}</h1>
      <CurriculumForm
        curriculum={props.curriculum}
        onSubmit={(curriculum) => {
          props.dispatch(editCurriculum(props.curriculum.id, curriculum))
          props.history.push('/')
        }}
      />
      <button className='button button--secondary' onClick={() => {
        props.dispatch(removeCurriculum({ id: props.curriculum.id }))
        props.history.push('/')
      }
      } >Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    curriculum: state.curricula.find((curriculum) => curriculum.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditCurriculumPage)
