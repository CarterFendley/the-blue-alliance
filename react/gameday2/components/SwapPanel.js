import React, { PropTypes } from 'react'
import { NUM_VIEWS_FOR_LAYOUT } from '../constants/LayoutConstants'

var classNames = require('classnames')

const SwapPanel = React.createClass({
  propTypes: {
    location: PropTypes.number.isRequired,
    layoutId: PropTypes.number.isRequired,
    enabled: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    swapToLocation: PropTypes.func.isRequired
  },
  swapLocationSelected: function(location) {
    this.props.swapToLocation(location)
  },
  render: function() {
    let videoViews = []
    let layoutId = this.props.layoutId
    for(let i = 0; i < NUM_VIEWS_FOR_LAYOUT[layoutId]; i++) {
      let className = classNames({
        ['video-' + i]: true,
        ['current-location']: i == this.props.location
      })
      videoViews.push(
        <div className={className} key={className} onClick={this.swapLocationSelected.bind(this, i)}/>
      )
    }
    let containerClasses = 'layout-preview layout-' + layoutId

    var classes = classNames({
      'hidden': !this.props.enabled,
      'swap-panel': true
    })

    return (
      <div className={classes}>
        <button type="button" className="button-close btn btn-sm btn-default" onClick={this.props.close}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        <div className="layout-preview-container">
          <div className={containerClasses}>
            {videoViews}
          </div>
        </div>
      </div>
    )
  }
})

export default SwapPanel
