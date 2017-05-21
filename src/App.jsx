import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './common/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <footer>&copy; 2017</footer>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
}

export default App
