import React from 'react'
import GrowlerContent from './common/Growler'

class Growler extends React.Component {

  getMessage () {
    const lang = this.props.currentLocale || 'enUS'
    let message = this.props.growler.text
    if (this.props.messages && this.props.messages[lang]) {
      return this.props.messages[lang][message] || message
    }
    return message
  }

  render () {
    const message = this.getMessage()
    this.props.hideTimeOutGrowler(this.props.growler, this.props.showFor)
    return <GrowlerContent {...this.props} message={message} />
  }
}

export default Growler
