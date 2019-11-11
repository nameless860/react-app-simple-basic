import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setLanguage } from "redux-i18n";

class LanguageDropdown extends Component {

  handleChange(option) {
    console.log(">>>>>>>>>>>", option);
    this.props.setLanguage(option.value);
  }

  render() {
    const lang = this.props.lang;

    const options = [
      { label: 'English', value: 'en'},
      { label: '中文', value: 'zh'},
    ];

    const selectedOption = options.find(opt => opt.value === lang)

    return (
      <Select
        className="language-select"
        options={options}
        value={selectedOption}
        defaultValue={selectedOption}
        onChange={this.handleChange.bind(this)}
        isSearchable={false}
      />
    )
  }
}

const mapStateToProps = state => ({
  lang: state.i18nState.lang,
})

const mapDispatchToProps = {
  setLanguage: setLanguage,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )
(LanguageDropdown);