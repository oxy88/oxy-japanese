/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import 'normalize.css/normalize.css'
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom'
import withRoot from '../components/withRoot'
import { withStyles } from 'material-ui/styles';

import Layout from './Layout'

const styles = theme => ({

})

class Index extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles, { withTheme: true })(Index));
