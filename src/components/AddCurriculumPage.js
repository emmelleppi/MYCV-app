import React from 'react';
import { connect } from 'react-redux';
import CurriculumForm from './CurriculumForm';
import { addCurriculum } from '../actions/curricula'

const AddCurriculumPage = (props) => (
  <div>
    <div className="header-container">
      <div className="container">
        <h1 className="header__title">New curriculum</h1>
      </div>
    </div>
    <div className="container">
      <CurriculumForm 
        onSubmit={(curriculum) => {
          props.dispatch(addCurriculum(curriculum));
          props.history.push('/');
        }}
      /> 
    </div>
  </div>
);

export default connect()(AddCurriculumPage);
