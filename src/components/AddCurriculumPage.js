import React from 'react';
import { connect } from 'react-redux';
import CurriculumForm from './CurriculumForm';
import { addCurriculum } from '../actions/curricula'

const AddCurriculumPage = (props) => (
  <div>
    <h1>Add curriculum</h1>
    <CurriculumForm 
      onSubmit={(curriculum) => {
        props.dispatch(addCurriculum(curriculum));
        props.history.push('/');
      }}
    /> 
  </div>
);

export default connect()(AddCurriculumPage);
