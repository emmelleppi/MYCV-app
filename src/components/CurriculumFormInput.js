import React from 'react'

class CurriculumFormInput extends React.Component {
  state = {
    isVisibleError: false
  }

  onInputChange = (e) => {
    const isVisibleError = !!this.props.onInputChange(e)
    this.setState(() => ({ isVisibleError }))
  }

  render() {
    const {
      props: { inputAttr, textError },
      state: { isVisibleError }
    } = this

    return (
      <div>
        <input
          {...inputAttr}
          onChange={this.onInputChange}
        />
        {(isVisibleError && textError) && <label>{textError}</label>}
      </div>
    )
  }
}

export default CurriculumFormInput
