import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Collapse from 'material-ui/transitions/Collapse'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar,
})

class SideBar extends React.Component {
  state = {
    firstMenuOpen: false
  }

  toggleFirstMenu() {
    this.setState({ firstMenuOpen: !this.state.firstMenuOpen })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.drawerHeader}>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={this.toggleFirstMenu.bind(this)}>
            <ListItemText primary="1. 히라가나" />
            { this.state.firstMenuOpen ? <ExpandLess /> : <ExpandMore /> }
          </ListItem>
          <Collapse component="li" in={this.state.firstMenuOpen} transitionDuration="auto" unmountOnExit>
            <List disablePadding>
              <Link to='/hiragana/study'>
                <ListItem button onClick={this.props.hideSideBar}>
                  <ListItemText inset primary="공부하기" />
                </ListItem>
              </Link>
              <Link to='/hiragana/random'>
                <ListItem button onClick={this.props.hideSideBar}>
                  <ListItemText inset primary="랜덤문제" />
                </ListItem>
              </Link>
              <Link to='/hiragana/full'>
                <ListItem button onClick={this.props.hideSideBar}>
                  <ListItemText inset primary="전체문제" />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemText primary="준비중" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideBar);
