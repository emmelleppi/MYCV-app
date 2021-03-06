import React from 'react';
import { connect } from 'react-redux';
import { setNameFilter, setSurnameFilter, sortByName, sortBySurname, sortByBirthDate, setStartBirthDate, setEndBirthDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import { ReactDatez, ReduxReactDatez } from 'react-datez';
import 'react-datez/dist/css/react-datez.css';

class CurriculumListFilters extends React.Component{
    onStartBirthDateChange = (startDate) => {
        this.props.dispatch(setStartBirthDate(startDate));
    };
    onEndBirthDateChange = (endDate) => {
        this.props.dispatch(setEndBirthDate(endDate));
    };
    render(){
        return (
        <div className="content-container">
            <div className="input-group--filters">
                <div className="input-group__item">
                    <input 
                        placeholder="Name"
                        className="text-input" 
                        type="text" value={this.props.filters.name} 
                        onChange={(e) => {
                            this.props.dispatch(setNameFilter(e.target.value));
                        }}/>
                </div>
                <div className="input-group__item">
                    <input 
                        placeholder="Surname"
                        className="text-input" 
                        type="text" 
                        value={this.props.filters.surname} onChange={(e) => {
                            this.props.dispatch(setSurnameFilter(e.target.value));
                        }}/>
                </div>
            </div>
            <div className="input-group--filters">
                <div className="input-group__item">
                    <ReactDatez 
                        allowPast={true}
                        value={this.props.filters.startBirthDate}
                        handleChange={this.onStartBirthDateChange}
                        dateFormat='DD/MM/YYYY'
                        placeholder='Birth date start'
                    />
                </div>
                <div className="input-group__item">
                    <ReactDatez 
                        allowPast={true}
                        value={this.props.filters.endBirthDate}
                        handleChange={this.onEndBirthDateChange}
                        dateFormat='DD/MM/YYYY'
                        placeholder='Birth date end'
                    />
                </div>
            </div>
            <div className="input-group--filters">
                <div className="input-group__item">
                    Sort curricula by 
                    <select 
                        className="select" 
                        value={this.props.filters.sortBy} 
                        onChange={(e) => {
                            if(e.target.value === 'name'){
                                this.props.dispatch(sortByName());
                            }else if(e.target.value === 'surname'){
                                this.props.dispatch(sortBySurname());
                            }else if(e.target.value === 'birthDate'){
                                this.props.dispatch(sortByBirthDate());
                            }
                        }}
                    >
                        <option value="name" >Name</option>
                        <option value="surname" >Surname</option>
                        <option value="birthDate" >Birthday</option>
                    </select>
                </div>
            </div>
        </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(CurriculumListFilters);