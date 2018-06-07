import React from 'react'
import moment from 'moment'
import { ReactDatez, ReduxReactDatez } from 'react-datez'
import { toTitleCase, isPhoneNumber, isEmail } from '../utils/stringUtils'
import CurriculumFormInput from './CurriculumFormInput'
import 'react-dates/lib/css/_datepicker.css'
import 'react-datez/dist/css/react-datez.css'


class CurriculumForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.curriculum ? props.curriculum.name : '',
            surname: props.curriculum ? props.curriculum.surname : '',
            birthDate: props.curriculum ? moment(props.curriculum.birthDate).format() : moment().format(),
            city: props.curriculum ? props.curriculum.city : '',
            province: props.curriculum ? props.curriculum.province : '',
            country: props.curriculum ? props.curriculum.country : '',
            street: props.curriculum ? props.curriculum.street : '',
            streetNumber: props.curriculum ? props.curriculum.streetNumber : '',
            cellphoneNumber: props.curriculum ? props.curriculum.cellphoneNumber : '',
            landlinePhone: props.curriculum ? props.curriculum.landlinePhone : '',
            firstEmail: props.curriculum ? props.curriculum.firstEmail : '',
            secondEmail: props.curriculum ? props.curriculum.secondEmail : '',
            error: ''
        }
    }
    
    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({ name }))
        return name.length>0 ? false : true
    }

    onSurnameChange = (e) => {
        const surname =  e.target.value
        this.setState(() => ({ surname }))
        return surname.length>0 ? false : true
    }

    onBirthDateChange = (birthDate) => {
        if(birthDate){
            this.setState(() => ({ birthDate }))
        }
    }

    onCityChange = (e) => {
        const city = e.target.value
        this.setState(() => ({ city }))
    }

    onProvinceChange = (e) => {
        const province = e.target.value
        this.setState(() => ({ province }))
    }

    onCountryChange = (e) => {
        const country = e.target.value
        this.setState(() => ({ country }))        
    }

    onStreetChange = (e) => {
        const street = e.target.value
        this.setState(() => ({ street }))
    }

    onStreetNumberChange = (e) => {
        const streetNumber = e.target.value
        this.setState(() => ({ streetNumber }))
    }

    onCellphoneNumberChange = (e) => {
        const cellphoneNumber = e.target.value
        this.setState(() => ({ cellphoneNumber }))
        return cellphoneNumber && !isPhoneNumber(cellphoneNumber)
    }

    onLandlinePhoneChange = (e) => {
        const landlinePhone = e.target.value
        this.setState(() => ({ landlinePhone }))
        return landlinePhone && !isPhoneNumber(landlinePhone)
    }

    onFirstEmailChange = (e) => {
        const firstEmail = e.target.value
        this.setState(() => ({ firstEmail }))
        return firstEmail && !isEmail(firstEmail)
    }

    onSecondEmailChange = (e) => {
        const secondEmail = e.target.value
        this.setState(() => ({ secondEmail }))
        return secondEmail && !isEmail(secondEmail)    
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.surname){
            this.setState(() => ({ error: 'Please provide the required filelds' }))
        }else if(!isPhoneNumber(this.state.cellphoneNumber) ||
            !isPhoneNumber(this.state.landlinePhone)||
            !isEmail(this.state.firstEmail)||
            !isEmail(this.state.secondEmail)
        ){
            this.setState(() => ({ error: 'Some field is not valid' }))
        }else{
            this.setState(() => ({ error:'' }))
            this.props.onSubmit({
                name: toTitleCase(this.state.name),
                surname: toTitleCase(this.state.surname),
                birthDate: this.state.birthDate.valueOf(),
                city: toTitleCase(this.state.city),
                province: this.state.province.toUpperCase(),
                country: toTitleCase(this.state.country),
                street: toTitleCase(this.state.street),
                streetNumber: this.state.streetNumber,
                cellphoneNumber: this.state.cellphoneNumber,
                landlinePhone: this.state.landlinePhone,
                firstEmail: this.state.firstEmail,
                secondEmail: this.state.secondEmail
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Name',
                                className:'text-input',
                                value:this.state.name
                            }}
                            onInputChange={this.onNameChange}
                            textError='The name is required'
                        />
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Surname',
                                className:'text-input',
                                value:this.state.surname
                            }}
                            onInputChange={this.onSurnameChange}
                            textError='The surname is required'
                        />
                    </div>
                    <div className="form__pairs" >
                        <ReactDatez 
                            allowPast={true}
                            value={this.state.birthDate}
                            handleChange={this.onBirthDateChange}
                            dateFormat='DD/MM/YYYY'
                            placeholder='Birth date'
                        />
                    </div>
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'City',
                                className:'text-input',
                                value:this.state.city
                            }}
                            onInputChange={this.onCityChange}
                        />
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Province',
                                className:'text-input',
                                value:this.state.province,
                                maxLength:2
                            }}
                            onInputChange={this.onProvinceChange}
                        />
                    </div>
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Country',
                                className:'text-input',
                                value:this.state.country
                            }}
                            onInputChange={this.onCountryChange}
                        />
                    </div>
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Street',
                                className:'text-input',
                                value:this.state.street
                            }}
                            onInputChange={this.onStreetChange}
                        />
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Street number',
                                className:'text-input',
                                value:this.state.streetNumber
                            }}
                            onInputChange={this.onStreetNumberChange}
                        />
                    </div>
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{
                                type:'text',
                                placeholder:'Cellphone number',
                                className:'text-input',
                                value:this.state.cellphoneNumber
                            }}
                            onInputChange={this.onCellphoneNumberChange}
                            textError='The phone number is not valid'
                        />
                        <CurriculumFormInput 
                            inputAttr={{                        
                                type:'text',
                                placeholder:'Landline phone',
                                className:'text-input',
                                value:this.state.landlinePhone
                            }}
                            onInputChange={this.onLandlinePhoneChange}
                            textError='The phone number is not valid'
                        />
                    </div>
                    <div className="form__pairs" >
                        <CurriculumFormInput 
                            inputAttr={{                        
                                type:'text',
                                placeholder:'First email',
                                className:'text-input',
                                value:this.state.firstEmail
                            }}
                            onInputChange={this.onFirstEmailChange}
                            textError='The email is not valid'
                        />
                        <CurriculumFormInput 
                            inputAttr={{                        
                                type:'text',
                                placeholder:'Second email',
                                className:'text-input',
                                value:this.state.secondEmail
                            }}
                            onInputChange={this.onSecondEmailChange}
                            textError='The email is not valid'
                        />
                    </div>
                    <button className="button button--action">Add curriculum</button>
                </form>
            </div>
        )
    }
}

export default CurriculumForm