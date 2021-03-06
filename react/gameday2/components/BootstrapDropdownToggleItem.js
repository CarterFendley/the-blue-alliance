import React, { PropTypes } from 'react'
import NativeListener from 'react-native-listener'
let classNames = require('classnames')

const BootstrapNavDropdownListItem = React.createClass({
  propTypes: {
    checked: PropTypes.bool.isRequired,
    handleClick: PropTypes.func
  },
  handleClick: function(event) {
    if (this.props.handleClick) {
      // If a callback to handle the click is given, prevent the default behavior
      event.preventDefault()
      event.stopPropagation()
      this.props.handleClick()
    }
  },
  render: function() {
    let checkmarkClasses = classNames({
      'hidden': !this.props.checked,
      'glyphicon glyphicon-ok': true,
      'pull-right': true
    })
    return (
      <NativeListener onClick={this.handleClick}>
        <li><a href={'#'} onClick={this.handleClick}>{this.props.children} <span className={checkmarkClasses}></span></a></li>
      </NativeListener>
    )
  }
})

export default BootstrapNavDropdownListItem;
