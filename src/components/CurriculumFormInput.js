import React from 'react'

class CurriculumFormInput extends React.Component{
    state = {
        isVisibleError: false 
    }
    onInputChange = (e) => {
        const isVisibleError = !!this.props.onInputChange(e)
        this.setState(() => ({ isVisibleError }))
    }
    render(){
        const {inputAttr,textError} = this.props
        return (
            <div>
                <input 
                    {...inputAttr}
                    onChange={this.onInputChange}
                />
                {(this.state.isVisibleError && textError) && <p>{textError}</p>}
            </div>
        )
    }
}

export default CurriculumFormInput
