import React from 'react';

class CurriculumFormInput extends React.Component{
    state = {
        visibleError: false 
    };
    onInputChange = (e) => {
        const visibleError = !!this.props.onInputChange(e);
        this.setState(() => ({ visibleError }));
    };
    render(){
       return (
            <div>
                <input 
                    {...this.props.inputAttr}
                    onChange={this.onInputChange}
                />
                {(this.state.visibleError && this.props.textError) && <p>{this.props.textError}</p>}
            </div>
        );
    };
};

export default CurriculumFormInput;
