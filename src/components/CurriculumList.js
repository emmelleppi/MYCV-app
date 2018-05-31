import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CurriculumListItem from './CurriculumListItem';
import selectCurricula from '../selectors/curricula'

const CurriculumList = (props) => (
    <div>
        <h1>Curriculum List</h1>
        {
            props.curricula.length>0 ? 
            props.curricula.map((curriculum) => {
                return <CurriculumListItem key={curriculum.id}  {...curriculum} />;
            }) 
            :
            <div>No curriculum available. <Link to="/create">Create one.</Link></div>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        curricula: selectCurricula(state.curricula, state.filters)
    };
};

export default connect(mapStateToProps)(CurriculumList);